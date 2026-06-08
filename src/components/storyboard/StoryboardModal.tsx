'use client'

import * as React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ChevronLeft, ChevronRight, ImageDown, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScalableMockupWrapper } from '@/components/mockups/ScalableMockupWrapper'
import { exportToImage, downloadImage } from '@/lib/export'
import { Mockup, MOCKUP_WIDTH } from './Mockup'
import { StoryboardEditor } from './StoryboardEditor'
import { fmtDayTime } from './helpers'
import { PLATFORM_LABELS, type StoryboardPost } from '@/data/q1031-june-facebook'

interface StoryboardModalProps {
  openId: string | null
  ordered: StoryboardPost[]
  onClose: () => void
  onNavigate: (id: string) => void
}

export function StoryboardModal({ openId, ordered, onClose, onNavigate }: StoryboardModalProps) {
  const previewRef = React.useRef<HTMLDivElement>(null)
  const [exporting, setExporting] = React.useState(false)

  const index = openId ? ordered.findIndex((p) => p.id === openId) : -1
  const selected = index >= 0 ? ordered[index] : undefined
  const open = !!selected

  const go = React.useCallback(
    (delta: number) => {
      if (index < 0 || ordered.length === 0) return
      const next = ordered[(index + delta + ordered.length) % ordered.length]
      if (next) onNavigate(next.id)
    },
    [index, ordered, onNavigate]
  )

  // Arrow-key navigation while open — but not while typing in a field.
  React.useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      const tag = (document.activeElement?.tagName || '').toLowerCase()
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1) }
      if (e.key === 'ArrowRight') { e.preventDefault(); go(1) }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, go])

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

  return (
    <Dialog.Root open={open} onOpenChange={(o) => { if (!o) onClose() }}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 flex h-[88vh] max-h-[860px] w-[95vw] max-w-[1200px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl bg-white shadow-2xl focus:outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 max-md:left-0 max-md:top-0 max-md:h-[100dvh] max-md:max-h-none max-md:w-screen max-md:max-w-none max-md:translate-x-0 max-md:translate-y-0 max-md:rounded-none"
        >
          {selected && (
            <>
              <Dialog.Title className="sr-only">Preview &amp; edit — {PLATFORM_LABELS[selected.platform]} post {index + 1} of {ordered.length}</Dialog.Title>
              <Dialog.Description className="sr-only">{selected.title}</Dialog.Description>

              {/* Header */}
              <div className="flex h-14 shrink-0 items-center justify-between gap-2 border-b border-gray-200 px-3">
                <div className="flex min-w-0 items-center gap-2">
                  <Button variant="outline" size="sm" onClick={() => go(-1)} aria-label="Previous post"><ChevronLeft className="h-4 w-4" /></Button>
                  <Button variant="outline" size="sm" onClick={() => go(1)} aria-label="Next post"><ChevronRight className="h-4 w-4" /></Button>
                  <div className="ml-1 min-w-0">
                    <p className="truncate text-sm font-semibold text-gray-900">
                      {PLATFORM_LABELS[selected.platform]} · {index + 1} of {ordered.length}
                      <span className="ml-2 font-normal text-gray-500">{fmtDayTime(selected.scheduledISO)}</span>
                    </p>
                    <p className="truncate text-xs text-gray-400">{selected.title}</p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <Button variant="outline" size="sm" onClick={downloadPng} disabled={exporting}>
                    <ImageDown className="mr-1.5 h-4 w-4" /> {exporting ? 'Rendering…' : 'PNG'}
                  </Button>
                  <Dialog.Close asChild>
                    <button aria-label="Close" className="rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9B01C]">
                      <X className="h-5 w-5" />
                    </button>
                  </Dialog.Close>
                </div>
              </div>

              {/* Body: pinned preview + independently-scrolling editor (stacks + scrolls as one on mobile) */}
              <div className="flex min-h-0 flex-1 flex-col overflow-y-auto md:flex-row md:overflow-hidden">
                <div className="flex flex-1 items-center justify-center bg-gray-100 p-6 md:overflow-hidden">
                  <ScalableMockupWrapper mockupWidth={MOCKUP_WIDTH[selected.platform]}>
                    <div ref={previewRef} className="rounded-xl bg-white p-4 shadow-lg">
                      <Mockup post={selected} />
                    </div>
                  </ScalableMockupWrapper>
                </div>
                <div className="w-full shrink-0 border-t border-gray-200 bg-white md:w-[440px] md:overflow-y-auto md:border-l md:border-t-0">
                  <StoryboardEditor post={selected} />
                </div>
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
