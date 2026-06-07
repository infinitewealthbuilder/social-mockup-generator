'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useStoryboardStore } from '@/hooks/useStoryboardStore'
import type { StoryboardPost } from '@/data/q1031-june-facebook'
import { toDatetimeLocal, fromDatetimeLocal } from './helpers'

const GOLD = '#D9B01C'

export function StoryboardEditor({ post }: { post: StoryboardPost }) {
  const { update, patchAuthor, patchMetrics, applyThemeToAll, applyAuthorToAll } = useStoryboardStore()
  const id = post.id

  return (
    <div className="space-y-6 p-5">
      {/* Pillar / meta */}
      <div className="flex items-center justify-between">
        <span
          className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold"
          style={{ backgroundColor: `${GOLD}1a`, color: '#8a6f12' }}
        >
          {post.pillar} · {post.pillarLabel}
        </span>
        <span className="text-xs text-gray-400">{post.id}</span>
      </div>

      {/* Theme */}
      <div className="space-y-2">
        <Label className="text-sm font-semibold text-gray-900">Theme</Label>
        <div className="flex gap-2">
          {(['light', 'dark'] as const).map((t) => (
            <button
              key={t}
              onClick={() => update(id, { theme: t })}
              className={`flex-1 rounded-lg border-2 p-2 text-sm font-medium capitalize transition-all ${
                post.theme === t
                  ? 'border-[#D9B01C] bg-[#D9B01C]/10 text-gray-900'
                  : 'border-gray-200 text-gray-600 hover:border-gray-300'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Scheduled */}
      <div className="space-y-1.5">
        <Label htmlFor="sched">Scheduled date &amp; time</Label>
        <Input
          id="sched"
          type="datetime-local"
          value={toDatetimeLocal(post.scheduledISO)}
          onChange={(e) => update(id, { scheduledISO: fromDatetimeLocal(e.target.value) })}
        />
        <p className="text-xs text-gray-500">Drives both the mockup timestamp and the storyboard order.</p>
      </div>

      <hr className="border-gray-200" />

      {/* Author */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-900">Page / Author</h3>
        <div className="space-y-1.5">
          <Label htmlFor="name">Page name</Label>
          <Input
            id="name"
            value={post.author.name}
            onChange={(e) => patchAuthor(id, { name: e.target.value })}
            autoComplete="off"
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="verified">Verified badge</Label>
          <Switch
            id="verified"
            checked={post.author.verified}
            onCheckedChange={(checked) => patchAuthor(id, { verified: checked })}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="privacy">Audience</Label>
          <Select
            value={post.privacy}
            onValueChange={(v: 'public' | 'friends' | 'only_me') => update(id, { privacy: v })}
          >
            <SelectTrigger id="privacy">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="public">Public</SelectItem>
              <SelectItem value="friends">Friends</SelectItem>
              <SelectItem value="only_me">Only me</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              applyAuthorToAll({
                name: post.author.name,
                handle: post.author.handle,
                avatar: post.author.avatar,
                verified: post.author.verified,
              })
            }
          >
            Apply page identity to all
          </Button>
          <Button variant="outline" size="sm" onClick={() => applyThemeToAll(post.theme)}>
            Apply theme to all
          </Button>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-900">Content</h3>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="body">Post text</Label>
            <span className="text-xs text-gray-400">{post.content.length} chars</span>
          </div>
          <Textarea
            id="body"
            value={post.content}
            onChange={(e) => update(id, { content: e.target.value })}
            rows={10}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="tags">Hashtags</Label>
          <Input
            id="tags"
            value={post.hashtags}
            onChange={(e) => update(id, { hashtags: e.target.value })}
            placeholder="#1031Exchange #CapitalGains"
          />
          <p className="text-xs text-gray-500">Shown under the post body in the preview; stored separately for HighLevel.</p>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Image */}
      <div className="space-y-1.5">
        <Label htmlFor="img">Image URL (optional)</Label>
        <Input
          id="img"
          value={post.images[0]?.url ?? ''}
          onChange={(e) =>
            update(id, { images: e.target.value ? [{ url: e.target.value, alt: post.title }] : [] })
          }
          placeholder="Paste a Nano Banana / hosted image URL to preview it"
        />
        <p className="text-xs text-gray-500">
          Images get generated &amp; approved in the image step — paste a URL here to preview placement.
        </p>
      </div>

      <hr className="border-gray-200" />

      {/* Metrics */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-900">Engagement (cosmetic)</h3>
        <div className="grid grid-cols-3 gap-2">
          <div className="space-y-1.5">
            <Label htmlFor="likes" className="text-xs">Reactions</Label>
            <Input id="likes" type="number" min={0} value={post.metrics.likes}
              onChange={(e) => patchMetrics(id, { likes: parseInt(e.target.value) || 0 })} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="comments" className="text-xs">Comments</Label>
            <Input id="comments" type="number" min={0} value={post.metrics.comments}
              onChange={(e) => patchMetrics(id, { comments: parseInt(e.target.value) || 0 })} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="shares" className="text-xs">Shares</Label>
            <Input id="shares" type="number" min={0} value={post.metrics.reposts}
              onChange={(e) => patchMetrics(id, { reposts: parseInt(e.target.value) || 0 })} />
          </div>
        </div>
      </div>

      {/* Visual brief (read-only) */}
      {post.visualDescription && (
        <div className="rounded-lg bg-gray-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Visual brief</p>
          <p className="mt-1 text-sm text-gray-600">{post.visualDescription}</p>
        </div>
      )}
    </div>
  )
}
