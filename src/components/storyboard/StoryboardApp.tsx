'use client'

import * as React from 'react'
import { Download, RotateCcw, ChevronLeft, ChevronRight, ImageDown, Check } from 'lucide-react'
import { EditorLayout } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { ScalableMockupWrapper } from '@/components/mockups/ScalableMockupWrapper'
import { useStoryboardStore, type PlatformFilter } from '@/hooks/useStoryboardStore'
import { exportToImage, downloadImage } from '@/lib/export'
import { Mockup, MOCKUP_WIDTH } from './Mockup'
import { MiniMockup } from './MiniMockup'
import { StoryboardEditor } from './StoryboardEditor'
import { fmtDay, fmtDayTime } from './helpers'
import { PLATFORM_LABELS, type StoryPlatform } from '@/data/q1031-june-facebook'

const GOLD = '#D9B01C'
const FILTERS: PlatformFilter[] = ['all', 'linkedin', 'facebook', 'instagram', 'x']

export function StoryboardApp() {
  const { posts, selectedId, select, platformFilter, setPlatformFilter, resetToSeed, lastSavedAt } = useStoryboardStore()
  const previewRef = React.useRef<HTMLDivElement>(null)
  const [exporting, setExporting] = React.useState(false)

  const counts = React.useMemo(() => {
    const c: Record<string, number> = { all: posts.length }
    for (const p of posts) c[p.platform] = (c[p.platform] || 0) + 1
    return c
  }, [posts])

  const ordered = React.useMemo(() => {
    const filtered = platformFilter === 'all' ? posts : posts.filter((p) => p.platform === platformFilter)
    return [...filtered].sort((a, b) => a.scheduledISO.localeCompare(b.scheduledISO))
  }, [posts, platformFilter])

  // Keep a valid selection within the current filter.
  React.useEffect(() => {
    if (ordered.length && !ordered.some((p) => p.id === selectedId)) select(ordered[0].id)
  }, [ordered, selectedId, select])

  const index = Math.max(0, ordered.findIndex((p) => p.id === selectedId))
  const selected = ordered[index] ?? ordered[0]

  const go = (delta: number) => {
    const next = ordered[(index + delta + ordered.length) % ordered.length]
    if (next) select(next.id)
  }

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

  const downloadPng = async () => {
    if (!previewRef.current || !selected) return
    setExporting(true)
    try {
      const blob = await exportToImage(previewRef.current, { scale: 2 })
      if (blob) downloadImage(blob, `${selected.id}-${selected.scheduledISO.slice(0, 10)}.png`)
    } finally {
      setExporting(false)
    }
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
        {/* ---- Platform filter + filmstrip ---- */}
        <section className="border-b bg-white">
          <div className="mx-auto max-w-[100rem] px-4 py-4">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
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
              <span className="text-xs uppercase tracking-wide text-gray-400">Click a post to edit</span>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2">
              {ordered.map((p, i) => {
                const active = p.id === selected?.id
                return (
                  <button
                    key={p.id}
                    onClick={() => select(p.id)}
                    className={`group relative flex w-[180px] flex-shrink-0 flex-col rounded-xl border bg-white p-2 text-left transition-all ${
                      active ? 'border-[#D9B01C] ring-2 ring-[#D9B01C]/40 shadow-md' : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-gray-700">{fmtDay(p.scheduledISO)}</span>
                      <div className="flex items-center gap-1">
                        <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-semibold text-gray-600">{PLATFORM_LABELS[p.platform]}</span>
                        <span className="rounded px-1.5 py-0.5 text-[10px] font-semibold" style={{ backgroundColor: `${GOLD}1f`, color: '#8a6f12' }}>{p.pillar}</span>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <MiniMockup post={p} targetWidth={152} heightPx={196} />
                    </div>
                    <p className="mt-1.5 line-clamp-2 text-[11px] leading-snug text-gray-600">{p.title}</p>
                    <span className="mt-1 text-[10px] font-medium text-gray-400">#{i + 1}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* ---- Drill-in detail ---- */}
        {selected && (
          <section className="mx-auto w-full max-w-[100rem] flex-1 px-4 py-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => go(-1)} aria-label="Previous post"><ChevronLeft className="h-4 w-4" /></Button>
                <Button variant="outline" size="sm" onClick={() => go(1)} aria-label="Next post"><ChevronRight className="h-4 w-4" /></Button>
                <div className="ml-2">
                  <p className="text-sm font-semibold text-gray-900">
                    {PLATFORM_LABELS[selected.platform]} · {index + 1} of {ordered.length}
                    <span className="ml-2 font-normal text-gray-500">{fmtDayTime(selected.scheduledISO)}</span>
                  </p>
                  <p className="text-xs text-gray-400">{selected.title}</p>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={downloadPng} disabled={exporting}>
                <ImageDown className="mr-1.5 h-4 w-4" /> {exporting ? 'Rendering…' : 'Download PNG'}
              </Button>
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
              <div className="flex items-start justify-center rounded-2xl bg-gray-100 p-4 lg:p-8">
                <ScalableMockupWrapper mockupWidth={MOCKUP_WIDTH[selected.platform]}>
                  <div ref={previewRef} className="rounded-xl bg-white p-4 shadow-lg lg:p-6">
                    <Mockup post={selected} />
                  </div>
                </ScalableMockupWrapper>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white">
                <StoryboardEditor post={selected} />
              </div>
            </div>
          </section>
        )}
      </div>
    </EditorLayout>
  )
}
