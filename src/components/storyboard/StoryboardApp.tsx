'use client'

import * as React from 'react'
import { Download, RotateCcw, Check } from 'lucide-react'
import { EditorLayout } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { useStoryboardStore, type PlatformFilter } from '@/hooks/useStoryboardStore'
import { MiniMockup } from './MiniMockup'
import { StoryboardModal } from './StoryboardModal'
import { fmtDay } from './helpers'
import { PLATFORM_LABELS, type StoryPlatform } from '@/data/q1031-june-facebook'

const GOLD = '#D9B01C'
const FILTERS: PlatformFilter[] = ['all', 'linkedin', 'facebook', 'instagram', 'x']

export function StoryboardApp() {
  const { posts, platformFilter, setPlatformFilter, resetToSeed, lastSavedAt } = useStoryboardStore()
  const [openId, setOpenId] = React.useState<string | null>(null)

  const counts = React.useMemo(() => {
    const c: Record<string, number> = { all: posts.length }
    for (const p of posts) c[p.platform] = (c[p.platform] || 0) + 1
    return c
  }, [posts])

  const ordered = React.useMemo(() => {
    const filtered = platformFilter === 'all' ? posts : posts.filter((p) => p.platform === platformFilter)
    return [...filtered].sort((a, b) => a.scheduledISO.localeCompare(b.scheduledISO))
  }, [posts, platformFilter])

  const downloadJson = () => {
    const blob = new Blob([JSON.stringify({ campaign: 'q1031-june-organic', posts }, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'q1031-june-edited.json'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const actions = (
    <>
      <span className="hidden items-center gap-1 text-xs text-gray-500 sm:inline-flex">
        {lastSavedAt ? (<><Check className="h-3.5 w-3.5 text-green-600" /> Saved to this browser</>) : <>Auto-saves to this browser</>}
      </span>
      <Button variant="outline" size="sm" onClick={downloadJson}><Download className="mr-1.5 h-4 w-4" /> JSON</Button>
      <Button variant="outline" size="sm" onClick={() => { if (confirm('Reset all posts to the original generated copy? This discards your edits in this browser.')) resetToSeed() }}>
        <RotateCcw className="mr-1.5 h-4 w-4" /> Reset
      </Button>
    </>
  )

  return (
    <EditorLayout title="Q-1031 — June 2026 Organic" description="Multi-platform storyboard · 51 posts · Jun 8–30" actions={actions}>
      <div className="flex flex-1 flex-col">
        {/* Sticky platform filter */}
        <section className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-[100rem] flex-wrap items-center justify-between gap-2 px-4 py-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {FILTERS.map((f) => {
                const active = platformFilter === f
                const label = f === 'all' ? 'All' : PLATFORM_LABELS[f as StoryPlatform]
                return (
                  <button
                    key={f}
                    onClick={() => setPlatformFilter(f)}
                    className={`rounded-full border px-3 py-1 text-sm font-medium transition-all ${
                      active ? 'border-[#D9B01C] bg-[#D9B01C]/10 text-gray-900' : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {label} <span className="text-gray-400">{counts[f] ?? 0}</span>
                  </button>
                )
              })}
            </div>
            <span className="text-xs uppercase tracking-wide text-gray-400">Click a post to preview &amp; edit</span>
          </div>
        </section>

        {/* Card grid */}
        <section className="mx-auto w-full max-w-[100rem] flex-1 px-4 py-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {ordered.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setOpenId(p.id)}
                className="group relative flex flex-col rounded-xl border border-gray-200 bg-white p-3 text-left transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B01C] focus-visible:ring-offset-2"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-gray-700">{fmtDay(p.scheduledISO)}</span>
                  <div className="flex items-center gap-1">
                    <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-semibold text-gray-600">{PLATFORM_LABELS[p.platform]}</span>
                    <span className="rounded px-1.5 py-0.5 text-[10px] font-semibold" style={{ backgroundColor: `${GOLD}1f`, color: '#8a6f12' }}>{p.pillar}</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <MiniMockup post={p} targetWidth={240} heightPx={300} />
                </div>
                <p className="mt-2 line-clamp-2 text-xs leading-snug text-gray-600">{p.title}</p>
                <span className="mt-1 text-[10px] font-medium text-gray-400">#{i + 1}</span>
                <span className="pointer-events-none absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#8a6f12] opacity-0 shadow-sm ring-1 ring-[#D9B01C]/40 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  Open preview
                </span>
              </button>
            ))}
          </div>
        </section>
      </div>

      <StoryboardModal openId={openId} ordered={ordered} onClose={() => setOpenId(null)} onNavigate={setOpenId} />
    </EditorLayout>
  )
}
