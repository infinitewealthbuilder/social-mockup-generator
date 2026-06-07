'use client'

import { FacebookPost } from '@/components/mockups/FacebookPost'
import type { StoryboardPost } from '@/data/q1031-june-facebook'
import { composeContent } from './helpers'

const FB_WIDTH = 500

interface MiniFacebookPostProps {
  post: StoryboardPost
  scale?: number
  heightPx?: number
}

/**
 * A scaled-down, non-interactive thumbnail of a Facebook mockup for the
 * storyboard filmstrip. Clipped to a fixed box with a fade at the bottom.
 */
export function MiniFacebookPost({ post, scale = 0.34, heightPx = 250 }: MiniFacebookPostProps) {
  const isDark = post.theme === 'dark'
  return (
    <div
      className="relative overflow-hidden rounded-lg"
      style={{ width: FB_WIDTH * scale, height: heightPx, backgroundColor: isDark ? '#242526' : '#ffffff' }}
    >
      <div
        style={{ transform: `scale(${scale})`, transformOrigin: 'top left', width: FB_WIDTH }}
        aria-hidden
      >
        <FacebookPost
          theme={post.theme}
          author={post.author}
          content={composeContent(post)}
          timestamp={new Date(post.scheduledISO)}
          metrics={post.metrics}
          images={post.images}
          privacy={post.privacy}
          editable={false}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-10"
        style={{
          backgroundImage: `linear-gradient(to top, ${isDark ? '#242526' : '#ffffff'}, transparent)`,
        }}
      />
    </div>
  )
}
