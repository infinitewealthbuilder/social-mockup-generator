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
  reactions: { like: 41, celebrate: 0, support: 0, love: 6, insightful: 0, funny: 0 },
}

interface AdMock {
  id: string
  adName: string
  metaAdId: string
  image: string
  format: string
  primary: string
  headline: string
  description: string
  cta: string
  note: string
}

// NEW estimator-relaunch campaign — built PAUSED 2026-06-11 in Meta (act_1059423152079067).
// Investor avatar (Bob Chen, tired-landlord/tenant pain). Soft estimator entry, optimize Schedule.
// Destination new.q-1031.com/537-ist-estimator → fires fbc-attributed Schedule on pixel 1058.
const ADS: AdMock[] = [
  {
    id: 'annuity',
    adName: 'image+sqr+537_ist+annuity-real-estate+hk1+cpy01+ho1+cta_learn+lp01+x+img01+i1+gen01+src_ai',
    metaAdId: '120251149944470536',
    image: '/creatives/q1031-schedule/01-annuity-real-estate.png',
    format: 'Square 1:1 · hk1 income',
    primary:
      'Selling investment property in California? A 537 Installment Sale Trust (IRC §453) can let you defer the capital-gains tax and turn the proceeds into a structured income stream — instead of a big tax bill at closing. See what your numbers could look like with the free 537 IST estimator.',
    headline: 'Defer Your Capital Gains',
    description: 'Run the free 537 IST estimate',
    cta: 'Learn More',
    note: 'PAUSED — pending Kevin sign-off + fbc-attributed Schedule smoke test.',
  },
  {
    id: 'liquidity',
    adName: 'image+prt+537_ist+liquidity-facts+hk2+cpy02+ho2+cta_learn+lp01+x+img02+i1+gen01+src_ai',
    metaAdId: '120251149945610536',
    image: '/creatives/q1031-schedule/02-liquidity-facts.png',
    format: 'Portrait 4:5 · hk2 tenant-fatigue',
    primary:
      'Another 2 a.m. call about an overflowing toilet? You built a rental portfolio for freedom — not a second job. When you sell, a 537 Installment Sale Trust (IRC §453) can defer the capital-gains tax and turn those tenant-and-toilet years into passive income. Run a free estimate in about 2 minutes.',
    headline: 'Trade Tenants For Income',
    description: 'Free 537 IST estimate',
    cta: 'Learn More',
    note: 'PAUSED — pending Kevin sign-off + fbc-attributed Schedule smoke test.',
  },
  {
    id: 'escrow',
    adName: 'image+sqr+537_ist+escrow-avoid-tax+hk3+cpy03+ho3+cta_learn+lp01+x+img03+i1+gen01+src_ai',
    metaAdId: '120251149947000536',
    image: '/creatives/q1031-schedule/03-escrow-avoid-tax.png',
    format: 'Square 1:1 · hk3 landlord-exit',
    primary:
      "You didn't buy rentals to spend weekends on plumbing bills and tenant drama. Before you sell to escape the management grind, see how a 537 Installment Sale Trust (IRC §453) defers the capital-gains tax and spreads it over time — passive income, without the toilets. Run the free estimate, then book a 15-minute call.",
    headline: 'Done Being A Landlord?',
    description: 'Estimate, then schedule a call',
    cta: 'Learn More',
    note: 'PAUSED — pending Kevin sign-off + fbc-attributed Schedule smoke test.',
  },
]

const GOLD = '#C99A2C'

export default function Q1031EstimatorRelaunchPage() {
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
          <h1 className="mt-3 text-2xl font-bold text-gray-900">Paid-Ad Mockups — 537 IST estimator relaunch</h1>
          <p className="mt-1 text-[15px] text-gray-600">
            New campaign{' '}
            <span className="font-mono text-[13px]">estimator_relaunch · All California → SCHEDULE</span> · destination{' '}
            <a
              href="https://new.q-1031.com/537-ist-estimator"
              className="font-semibold underline"
              style={{ color: GOLD }}
            >
              new.q-1031.com/537-ist-estimator
            </a>{' '}
            · $50/day · Schedule-optimized on pixel <span className="font-mono text-[13px]">1058</span> · Tier 11 naming.
          </p>
          <p className="mt-3 rounded-lg bg-gray-50 px-4 py-3 text-[14px] text-gray-700">
            <strong>Real-estate INVESTOR avatar</strong> (tired-landlord / tenant pain). Soft estimator entry → fires an{' '}
            <strong>fbc-attributed Schedule</strong> on the same-domain funnel (fixes the legacy 0-attribution bug). Built
            PAUSED in Meta — runs <strong>alongside</strong> the untouched live control. <strong>Nothing spends</strong> until
            Kevin Brunner&rsquo;s sign-off + the smoke-test confirmation + your go.
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
                  linkCard={{
                    domain: 'NEW.Q-1031.COM',
                    headline: ad.headline,
                    description: ad.description,
                    cta: ad.cta,
                  }}
                />
              </div>

              {/* Spec card */}
              <aside className="flex-1 rounded-xl bg-white p-5 shadow-sm">
                <div className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">Tier 11 ad name</div>
                <code className="mt-1 block break-all rounded bg-gray-50 p-2 text-[12px] text-gray-800">{ad.adName}</code>
                <dl className="mt-4 space-y-2 text-[14px]">
                  <div className="flex justify-between gap-4">
                    <dt className="text-gray-500">Meta ad ID</dt>
                    <dd className="text-right font-mono text-[12px] text-gray-800">{ad.metaAdId}</dd>
                  </div>
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
                <div className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-[13px] text-amber-900">⚠ {ad.note}</div>
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
          Q-1031 · 537 IST Installment Sale Trust · estimator-relaunch paid mockups · internal review · {ADS.length} ads
        </footer>
      </div>
    </div>
  )
}
