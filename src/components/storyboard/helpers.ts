import type { StoryboardPost } from '@/data/q1031-june-facebook'

/** Body + hashtags, the way it would actually appear in the published post. */
export function composeContent(p: StoryboardPost): string {
  const body = (p.content || '').trim()
  const tags = (p.hashtags || '').trim()
  return tags ? `${body}\n\n${tags}` : body
}

/** "Mon, Jun 8" */
export function fmtDay(iso: string): string {
  const d = new Date(iso)
  if (isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
}

/** "Mon, Jun 8 · 12:00 PM" */
export function fmtDayTime(iso: string): string {
  const d = new Date(iso)
  if (isNaN(d.getTime())) return iso
  const day = d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
  const time = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
  return `${day} · ${time}`
}

/** ISO 'YYYY-MM-DDTHH:mm:ss' -> value for <input type="datetime-local"> ('YYYY-MM-DDTHH:mm') */
export function toDatetimeLocal(iso: string): string {
  return (iso || '').slice(0, 16)
}

/** datetime-local value -> stored ISO (append :00 seconds) */
export function fromDatetimeLocal(v: string): string {
  if (!v) return v
  return v.length === 16 ? `${v}:00` : v
}
