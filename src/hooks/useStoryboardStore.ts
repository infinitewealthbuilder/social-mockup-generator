'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Q1031_JUNE_FACEBOOK, type StoryboardPost } from '@/data/q1031-june-facebook'
import type { PostAuthor, PostMetrics, Theme } from '@/lib/types'

interface StoryboardState {
  posts: StoryboardPost[]
  selectedId: string | null
  lastSavedAt: number | null

  select: (id: string | null) => void
  update: (id: string, patch: Partial<StoryboardPost>) => void
  patchAuthor: (id: string, patch: Partial<PostAuthor>) => void
  patchMetrics: (id: string, patch: Partial<PostMetrics>) => void
  applyAuthorToAll: (patch: Partial<PostAuthor>) => void
  applyThemeToAll: (theme: Theme) => void
  resetToSeed: () => void
}

// Deep clone the seed so persisted edits never mutate the source array.
const seed = (): StoryboardPost[] =>
  JSON.parse(JSON.stringify(Q1031_JUNE_FACEBOOK)) as StoryboardPost[]

const stamp = () => Date.now()

export const useStoryboardStore = create<StoryboardState>()(
  persist(
    (set) => ({
      posts: seed(),
      selectedId: Q1031_JUNE_FACEBOOK[0]?.id ?? null,
      lastSavedAt: null,

      select: (id) => set({ selectedId: id }),

      update: (id, patch) =>
        set((s) => ({
          posts: s.posts.map((p) => (p.id === id ? { ...p, ...patch } : p)),
          lastSavedAt: stamp(),
        })),

      patchAuthor: (id, patch) =>
        set((s) => ({
          posts: s.posts.map((p) =>
            p.id === id ? { ...p, author: { ...p.author, ...patch } } : p
          ),
          lastSavedAt: stamp(),
        })),

      patchMetrics: (id, patch) =>
        set((s) => ({
          posts: s.posts.map((p) =>
            p.id === id ? { ...p, metrics: { ...p.metrics, ...patch } } : p
          ),
          lastSavedAt: stamp(),
        })),

      applyAuthorToAll: (patch) =>
        set((s) => ({
          posts: s.posts.map((p) => ({ ...p, author: { ...p.author, ...patch } })),
          lastSavedAt: stamp(),
        })),

      applyThemeToAll: (theme) =>
        set((s) => ({
          posts: s.posts.map((p) => ({ ...p, theme })),
          lastSavedAt: stamp(),
        })),

      resetToSeed: () =>
        set({ posts: seed(), selectedId: Q1031_JUNE_FACEBOOK[0]?.id ?? null, lastSavedAt: stamp() }),
    }),
    {
      // v2: specialist-recrafted copy (paragraph breaks). Key bump = returning users load the new seed fresh.
      name: 'q1031-june-fb-storyboard-v2',
      version: 2,
      // Only persist the editable data, not transient selection.
      partialize: (s) => ({ posts: s.posts, lastSavedAt: s.lastSavedAt }),
      // Reconcile persisted edits against the current seed BY ID so that:
      //  - new/changed seed posts always appear,
      //  - removed seed posts drop,
      //  - the user's edits to surviving posts are preserved,
      //  - any newly-added field is backfilled from the seed (no undefined "required" fields).
      merge: (persisted, current) => {
        const saved = persisted as
          | { posts?: StoryboardPost[]; lastSavedAt?: number | null }
          | undefined
        const byId = new Map((saved?.posts ?? []).map((p) => [p.id, p]))
        const posts = current.posts.map((seedPost) => {
          const s = byId.get(seedPost.id)
          if (!s) return seedPost
          return {
            ...seedPost,
            ...s,
            author: { ...seedPost.author, ...s.author },
            metrics: { ...seedPost.metrics, ...s.metrics },
            images: s.images ?? seedPost.images,
          }
        })
        return { ...current, posts, lastSavedAt: saved?.lastSavedAt ?? current.lastSavedAt }
      },
    }
  )
)
