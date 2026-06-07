'use client'

import dynamicImport from 'next/dynamic'
import { Loader2 } from 'lucide-react'

// Force dynamic rendering — the storyboard is fully client-side (Zustand + localStorage).
export const dynamic = 'force-dynamic'

const StoryboardApp = dynamicImport(
  () => import('@/components/storyboard/StoryboardApp').then((mod) => mod.StoryboardApp),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <Loader2 className="h-8 w-8 animate-spin text-gray-400" aria-label="Loading storyboard" />
      </div>
    ),
  }
)

export default function Q1031JuneStoryboardPage() {
  return <StoryboardApp />
}
