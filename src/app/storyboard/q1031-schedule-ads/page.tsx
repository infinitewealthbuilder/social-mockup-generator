'use client'

import { FacebookPost } from '@/components/mockups/FacebookPost'
import type { PostAuthor, PostMetrics } from '@/lib/types'

export const dynamic = 'force-dynamic'

const PAGE: PostAuthor = {
  name: 'Q-1031',
  handle: 'q1031',
  avatar: '/avatars/q-1031.svg',
  verified: true,
}

const METRICS: PostMetrics = {
  likes: 0,
  comments: 0,
  reposts: 0,
  reactions: { like: 38, celebrate: 0, support: 0, love: 7, insightful: 0, funny: 0 },
}

interface AdMock {
  id: string
  adName: string
  image: string
  format: string
  primary: string
  headline: string
  cta: string
  compliance: string
}

// Proven creatives (ABS 08-Advisors/q-1031/creatives) re-pointed to new.q-1031.com/schedule.
// Copy softened toward the canonical "defer the gain / book a call" angle.
const ADS: AdMock[] = [
  {
    id: 'annuity',
    adName: 'image+sqr+537_ist+annuity-real-estate+hk3+cpy01+ho1+cta_sign_up+lp01+x+img01+i1',
    image: '/creatives/q1031-schedule/01-annuity-real-estate.png',
    format: 'Square 1:1 · hk3',
    primary:
      'California property owners: what if your real estate paid you a monthly income instead of a six-figure tax bill? The 537 Installment Sale Trust lets you sell, defer the capital-gains tax, and draw income for up to 30 years. Book a 30-min call to see if your sale qualifies.',
    headline: 'Turn your sale into 30 years of income',
    cta: 'Sign Up',
    compliance: 'Income projection ($4,800/mo) + "$0 tax" + "annuity" on image → Kevin sign-off required before ACTIVE.',
  },
  {
    id: 'liquidity',
    adName: 'image+prt+537_ist+liquidity-facts+hk4+cpy01+ho1+cta_sign_up+lp01+x+img01+i1',
    image: '/creatives/q1031-schedule/02-liquidity-facts.png',
    format: 'Portrait 4:5 · hk4',
    primary:
      "Land-rich, cash-poor? A $2M property can leave you almost nothing to spend while you wait. The 537 IST converts a sale into deferred tax + monthly income. Book a call to run your specific numbers with a Q-1031 specialist.",
    headline: "Unlock income from property you can't spend",
    cta: 'Sign Up',
    compliance: 'Income projection ($58K/yr) + "$0 tax at sale" on image → Kevin sign-off required before ACTIVE.',
  },
  {
    id: 'escrow',
    adName: 'image+sqr+537_ist+escrow-avoid-tax+hk5+cpy01+ho1+cta_sign_up+lp01+x+img01+i1',
    image: '/creatives/q1031-schedule/03-escrow-avoid-tax.png',
    format: 'Square 1:1 · hk5',
    primary:
      'Selling and facing a big capital-gains bill? Route the sale through a 537 Installment Sale Trust to defer the tax and pull income for up to 30 years. See if your sale qualifies — book a 30-min call.',
    headline: 'Defer the tax. Keep the income.',
    cta: 'Sign Up',
    compliance: 'Most /schedule-aligned. "$427K tax bill" claim + income → Kevin sign-off required before ACTIVE.',
  },
]

const GOLD = '#C99A2C'

export default function Q1031ScheduleAdsPage() {
  return (
    <div className="min-h-screen bg-[#f0f2f5] py-10 px-4">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-8 rounded-xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2">
            <span
              className="rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white"
              style={{ backgroundColor: GOLD }}
            >
              Q-1031 · 537 IST
            </span>
            <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-amber-800">
              Paused · review only
            </span>
          </div>
          <h1 className="mt-3 text-2xl font-bold text-gray-900">Paid-Ad Mockups — /schedule relaunch</h1>
          <p className="mt-1 text-[15px] text-gray-600">
            Proposed ad set <span className="font-mono text-[13px]">All California → SCHEDULE</span> · destination{' '}
            <a href="https://new.q-1031.com/schedule" className="font-semibold underline" style={{ color: GOLD }}>
              new.q-1031.com/schedule
            </a>{' '}
            · $50/day · count-optimized on pixel <span className="font-mono text-[13px]">1058</span> · Tier 11 naming.
          </p>
          <p className="mt-3 rounded-lg bg-gray-50 px-4 py-3 text-[14px] text-gray-700">
            <strong>Nothing runs</strong> until Kevin Brunner&rsquo;s compliance sign-off + your go. These are the 3 proven
            creatives, re-pointed and copy-matched to a booking page (hybrid set — fresh concepts to follow).
          </p>
        </header>

        {/* Ads */}
        <div className="space-y-10">
          {ADS.map((ad) => (
            <section key={ad.id} className="flex flex-col gap-5 lg:flex-row lg:items-start">
              {/* Mockup */}
              <div className="flex justify-center lg:justify-start">
                <FacebookPost
                  theme="light"
                  sponsored
                  author={PAGE}
                  metrics={METRICS}
                  content={ad.primary}
                  images={[{ url: ad.image, alt: ad.headline }]}
                  linkCard={{ domain: 'NEW.Q-1031.COM', headline: ad.headline, cta: ad.cta }}
                />
              </div>

              {/* Spec card */}
              <aside className="flex-1 rounded-xl bg-white p-5 shadow-sm">
                <div className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">Tier 11 ad name</div>
                <code className="mt-1 block break-all rounded bg-gray-50 p-2 text-[12px] text-gray-800">{ad.adName}</code>
                <dl className="mt-4 space-y-2 text-[14px]">
                  <div className="flex justify-between gap-4">
                    <dt className="text-gray-500">Format</dt>
                    <dd className="text-right font-medium text-gray-800">{ad.format}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-gray-500">Headline</dt>
                    <dd className="text-right font-medium text-gray-800">{ad.headline}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-gray-500">CTA</dt>
                    <dd className="text-right font-medium text-gray-800">{ad.cta}</dd>
                  </div>
                </dl>
                <div className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-[13px] text-amber-900">
                  ⚠ {ad.compliance}
                </div>
                <a
                  href={ad.image}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-[14px] font-semibold underline"
                  style={{ color: GOLD }}
                >
                  View full creative →
                </a>
              </aside>
            </section>
          ))}
        </div>

        <footer className="mt-10 text-center text-[13px] text-gray-400">
          Q-1031 · 537 IST Installment Sale Trust · mockups for internal review · {ADS.length} ads
        </footer>
      </div>
    </div>
  )
}
