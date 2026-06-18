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
  reactions: { like: 38, celebrate: 0, support: 0, love: 5, insightful: 0, funny: 0 },
}

interface AdMock {
  id: string
  adName: string
  image: string
  imagePlaceholder: boolean
  format: string
  primary: string
  headline: string
  description: string
  cta: string
  note: string
}

// "45-day window" angle — Avatar A (investor stuck in the 1031 cycle).
// Source line: "The 45-day window has killed more 1031 exchanges than the market ever has."
// Soft estimator entry → new.q-1031.com/537-ist-estimator. Concept/copy review ONLY — not built in Meta.
const ADS: AdMock[] = [
  {
    id: 'the-clock',
    adName: 'image+sqr+537_ist+45day-clock+hk1+cpy01+ho1+cta_learn+lp_estimator+x+imgTBD+i1+gen01+src_ai',
    image: '/creatives/q1031-45day/01-the-clock.png',
    imagePlaceholder: false,
    format: 'Square 1:1 · hk1 the-clock',
    primary:
      'The 45-day window has killed more 1031 exchanges than the market ever has.\n\n' +
      'The moment you sell, the clock starts: 45 days to identify a replacement, 180 to close. Miss it and the deferral is gone — so you take the deal you can get, not the one you want.\n\n' +
      'There’s a different route. Instead of rolling into more real estate, an installment sale structured under IRC §453 — the method described in IRS Publication 537 — lets you exit real estate entirely and defer the capital-gains tax (including the depreciation recapture) over time as payments arrive.\n\n' +
      'No 45-day scramble. No replacement hunt. It’s federal tax code — not a loophole, not hidden. A niche.\n\n' +
      'See what the deferral looks like on your numbers. (Illustrative estimate only — not a prediction of your results. Tax-deferred, not tax-free. Consult your tax advisor.)',
    headline: 'The 45-Day Clock Killed It',
    description: 'Defer the gain under IRC §453',
    cta: 'Learn More',
    note: 'Final creative in place. Copy + layout review — OCR-safe, no on-image figures. Not built in Meta; pending Kevin sign-off.',
  },
  {
    id: 'the-cycle',
    adName: 'image+sqr+537_ist+exit-the-cycle+hk2+cpy02+ho2+cta_learn+lp_estimator+x+imgTBD+i1+gen01+src_ai',
    image: '/creatives/q1031-45day/02-the-cycle.png',
    imagePlaceholder: false,
    format: 'Square 1:1 · hk2 the-cycle',
    primary:
      'You know the dance. Sell, scramble for 45 days, overpay for a replacement just to beat the deadline, repeat. The clock isn’t a side effect of the 1031 — it’s the thing that keeps you in it.\n\n' +
      'A 1031 keeps your money locked in more real estate. A 537 Installment Sale Trust lets you exit real estate and defer the tax — including the depreciation recapture — into a structured income strategy under IRC §453.\n\n' +
      'The gain stays deferred. The note — a 10-year, interest-only structure — pays you a predictable income stream, not a lump sum. And the 45-day clock never starts.\n\n' +
      '(Tax-deferred, not tax-free. A note, not an annuity — not guaranteed, not FDIC insured. Consult your tax advisor.)',
    headline: 'Exit The 1031 Cycle',
    description: 'Defer the gain — no clock',
    cta: 'Learn More',
    note: 'Final creative in place. Copy + layout review — OCR-safe, no on-image figures. Not built in Meta; pending Kevin sign-off.',
  },
  {
    id: 'forced-buy',
    adName: 'image+sqr+537_ist+45day-forced-buy+hk3+cpy03+ho3+cta_learn+lp_estimator+x+img03+i1+gen01+src_ai',
    image: '/creatives/q1031-45day/03-forced-buy.png',
    imagePlaceholder: false,
    format: 'Square 1:1 · hk3 forced-buy',
    primary:
      'A 45-day deadline doesn’t make you a sharper investor. It makes you a rushed one.\n\n' +
      'The best replacement properties are spoken for long before a deadline forces the call — so the clock pushes you into the deal that’s available, not the one that’s right.\n\n' +
      'The 537 IST removes the forced buy. Structured under IRC §453, it lets you sell, exit real estate, and defer the capital-gains tax over time — without identifying a like-kind replacement at all.\n\n' +
      'Run your sale through the estimator and see the deferral. (Illustrative estimate only. Tax-deferred, not tax-free. Consult your tax advisor.)',
    headline: 'Done Buying On A Deadline?',
    description: 'No 45 days. No replacement requirement.',
    cta: 'Learn More',
    note: 'Final creative in place. Copy + layout review — OCR-safe, no on-image figures. Not built in Meta; pending Kevin sign-off.',
  },
  {
    id: 'cpa-blindspot',
    adName: 'image+sqr+537_ist+45day-cpa-453+hk4+cpy04+ho4+cta_learn+lp_estimator+x+img04+i1+gen01+src_ai',
    image: '/creatives/q1031-45day/04-cpa-blindspot.png',
    imagePlaceholder: false,
    format: 'Square 1:1 · hk4 cpa-blind-spot',
    primary:
      'Your CPA set up the 1031 — and the 45-day clock came with it. Few mention IRC §453.\n\n' +
      'It’s the installment-sale route that lets you exit real estate instead of rolling into more, deferring the capital-gains tax over time as payments arrive rather than racing a deadline into a replacement property.\n\n' +
      'It’s not a loophole and it’s not hidden — it’s a niche specialty, outside the standard CPA’s continuing education. Most are trained to file the return, not to plan the exit.\n\n' +
      'Ask the question your CPA didn’t raise.',
    headline: 'The §453 CPAs Skip',
    description: 'Exit real estate and defer the gain.',
    cta: 'Learn More',
    note: 'Final creative in place. Copy + layout review — OCR-safe, no on-image figures. Not built in Meta; pending Kevin sign-off.',
  },
  {
    id: 'downsize-skip',
    adName: 'image+sqr+537_ist+downsize-skip-1031+hk5+cpy05+ho5+cta_learn+lp_caexit+x+img05+i1+gen01+src_ai',
    image: '/creatives/q1031-45day/05-downsize-skip-1031.png',
    imagePlaceholder: false,
    format: 'Square 1:1 · hk5 downsizer → caexit',
    primary:
      'The 1031 exchange was never built for someone trying to simplify.\n\n' +
      'To defer the tax, it would put you on a 45-day clock to find a replacement property — while you’re trying to own less, not more. The timelines fight each other.\n\n' +
      'There’s a cleaner path for a primary residence. IRC §121 excludes a large share of the gain for joint filers; under IRC §453, a properly structured installment sale may let you defer the tax on what’s left — and actually exit, no replacement required, no clock.\n\n' +
      '(Tax-deferred, not tax-free. Consult your tax advisor.)',
    headline: 'Downsizing? Skip The 1031',
    description: 'Exit the home, defer the gain — §121 + §453.',
    cta: 'Learn More',
    note: 'Downsizer (Avatar B) → new.q-1031.com/caexit. Copy + layout review — OCR-safe. Not built in Meta; pending Kevin sign-off.',
  },
  {
    id: 'downsize-no-clock',
    adName: 'image+sqr+537_ist+downsize-no-clock+hk6+cpy06+ho6+cta_learn+lp_caexit+x+img06+i1+gen01+src_ai',
    image: '/creatives/q1031-45day/06-downsize-no-clock.png',
    imagePlaceholder: false,
    format: 'Square 1:1 · hk6 downsizer → caexit',
    primary:
      'You’d move to something that fits this chapter — one story, less yard, closer to the grandkids. A 1031 would hand you a 45-day deadline to buy another property first. That’s not downsizing.\n\n' +
      'Under IRC §453, a properly structured installment sale may let you sell the long-held home, defer the capital-gains tax above the §121 exclusion, and take it as a structured income stream over time — no replacement property, no deadline.\n\n' +
      '(Illustrative only. Tax-deferred, not tax-free. A note, not an annuity. Consult your tax advisor.)',
    headline: 'Downsize Without The Clock',
    description: 'Sell, defer the gain, skip the 45-day hunt.',
    cta: 'Learn More',
    note: 'Downsizer (Avatar B) → new.q-1031.com/caexit. Copy + layout review — OCR-safe. Not built in Meta; pending Kevin sign-off.',
  },
]

const GOLD = '#C99A2C'

export default function Q1031FortyFiveDayAdsPage() {
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
              Concept · review only
            </span>
          </div>
          <h1 className="mt-3 text-2xl font-bold text-gray-900">Paid-Ad Mockups — “45-Day Window” angle</h1>
          <p className="mt-1 text-[15px] text-gray-600">
            6 hooks · Avatar A (investor) → estimator, Avatar B (downsizer) → caexit · primary destination{' '}
            <a
              href="https://new.q-1031.com/537-ist-estimator"
              className="font-semibold underline"
              style={{ color: GOLD }}
            >
              new.q-1031.com/537-ist-estimator
            </a>{' '}
            · angle: <em>“The 45-day window has killed more 1031 exchanges than the market ever has.”</em>
          </p>
          <p className="mt-3 rounded-lg bg-gray-50 px-4 py-3 text-[14px] text-gray-700">
            <strong>Finished ad units.</strong> Real Nano Banana Pro concept creatives (stopwatch crossed out /
            exit-the-cycle), OCR-safe — no $, %, figures, or “guaranteed/annuity” on-image — with copy anchored to
            the <strong>10-year interest-only</strong> note standard. <strong>Nothing is built in Meta</strong> and
            nothing spends until Kevin Brunner’s sign-off.
          </p>
        </header>

        {/* Ads */}
        <div className="space-y-10">
          {ADS.map((ad) => (
            <section key={ad.id} className="flex flex-col gap-5 lg:flex-row lg:items-start">
              {/* Mockup */}
              <div className="relative flex justify-center lg:justify-start">
                {ad.imagePlaceholder && (
                  <span className="absolute left-2 top-2 z-10 rounded bg-black/70 px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                    Placeholder image
                  </span>
                )}
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
                <div className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">Tier 11 ad name (draft)</div>
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
                <div className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-[13px] text-amber-900">⚠ {ad.note}</div>
              </aside>
            </section>
          ))}
        </div>

        <footer className="mt-10 text-center text-[13px] text-gray-400">
          Q-1031 · 537 IST · “45-day window” paid-ad concepts · internal review · {ADS.length} ads
        </footer>
      </div>
    </div>
  )
}
