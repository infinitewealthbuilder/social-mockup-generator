'use client'

import * as React from 'react'
import { FacebookPost } from '@/components/mockups/FacebookPost'
import { LinkedInPost } from '@/components/mockups/LinkedInPost'
import { InstagramPost } from '@/components/mockups/InstagramPost'
import { TwitterPost } from '@/components/mockups/TwitterPost'
import type { StoryboardPost, StoryPlatform } from '@/data/q1031-june-facebook'
import { composeContent } from './helpers'

// Fixed render widths of each platform mockup (from the component source).
export const MOCKUP_WIDTH: Record<StoryPlatform, number> = {
  facebook: 500,
  linkedin: 552,
  instagram: 468,
  x: 598,
}

/** Renders a post in its native platform mockup, fed entirely by props (no global store). */
export const Mockup = React.forwardRef<HTMLDivElement, { post: StoryboardPost }>(
  function Mockup({ post }, ref) {
    const common = {
      theme: post.theme,
      author: post.author,
      content: composeContent(post),
      timestamp: new Date(post.scheduledISO),
      metrics: post.metrics,
      images: post.images,
      editable: false as const,
    }
    switch (post.platform) {
      case 'facebook':
        return <FacebookPost ref={ref} {...common} privacy={post.privacy} />
      case 'linkedin':
        return <LinkedInPost ref={ref} {...common} />
      case 'instagram':
        return <InstagramPost ref={ref} {...common} />
      case 'x':
        return <TwitterPost ref={ref} {...common} client="Twitter for Web" />
      default:
        return <FacebookPost ref={ref} {...common} />
    }
  }
)
