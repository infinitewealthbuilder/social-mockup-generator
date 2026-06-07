'use client'

import { Mockup, MOCKUP_WIDTH } from './Mockup'
import type { StoryboardPost } from '@/data/q1031-june-facebook'

interface MiniMockupProps {
  post: StoryboardPost
  targetWidth?: number // rendered thumbnail width; scale is derived per platform
  heightPx?: number
}

/** Scaled, non-interactive thumbnail of any platform mockup for the storyboard filmstrip. */
export function MiniMockup({ post, targetWidth = 152, heightPx = 196 }: MiniMockupProps) {
  const fullWidth = MOCKUP_WIDTH[post.platform] ?? 500
  const scale = targetWidth / fullWidth
  const isDark = post.theme === 'dark'
  const bg = isDark ? '#000000' : '#ffffff'
  return (
    <div className="relative overflow-hidden rounded-lg" style={{ width: targetWidth, height: heightPx, backgroundColor: bg }}>
      <div style={{ transform: `scale(${scale})`, transformOrigin: 'top left', width: fullWidth }} aria-hidden>
        <Mockup post={post} />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-10"
        style={{ backgroundImage: `linear-gradient(to top, ${bg}, transparent)` }}
      />
    </div>
  )
}
