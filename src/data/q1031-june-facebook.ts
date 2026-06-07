// AUTO-GENERATED seed — Q-1031 June 2026 organic Facebook posts (specialist-crafted).
// Source of truth: q-companies-ops/08-Advisors/q-1031/campaigns/june-2026-organic/result.json
// Edits made in the GUI persist to localStorage (see useStoryboardStore); 'Reset' restores this seed.
import type { Theme, PostAuthor, PostMetrics, PostImage } from '@/lib/types'

export interface StoryboardPost {
  id: string
  title: string
  pillar: string
  pillarLabel: string
  scheduledISO: string
  hashtags: string
  visualDescription: string
  theme: Theme
  author: PostAuthor
  content: string
  metrics: PostMetrics
  images: PostImage[]
  privacy: 'public' | 'friends' | 'only_me'
}

export const Q1031_AUTHOR: PostAuthor = {
  name: 'Q-1031 Exchange Solutions',
  handle: 'q1031',
  avatar: '/avatars/q-1031.svg',
  verified: false,
}

export const PILLAR_LABELS: Record<string, string> = {"A": "1031 Education", "B": "537 IST Education", "C": "Capital-Gains Triage", "D": "Use Case", "E": "Authority", "F": "Engagement"}

export const Q1031_JUNE_FACEBOOK: StoryboardPost[] = [
  {
    id: 'q1031-fb-1',
    title: "The 45-Day Clock Most Sellers Forget About",
    pillar: "A",
    pillarLabel: "1031 Education",
    scheduledISO: "2026-06-08T12:00:00",
    hashtags: "#1031Exchange #CapitalGainsDeferral #RealEstateInvesting #TaxStrategy",
    visualDescription: "Clean, warm-toned graphic of a wall calendar with Day 45 and Day 180 circled in Q-1031 brand purple; bright, high-contrast, minimal text overlay (under 20%). Square 1080x1080.",
    theme: 'light',
    author: { ...Q1031_AUTHOR },
    content: "Here's the deadline that catches more real estate investors off guard than any other.\n\nWhen you sell investment property and plan a 1031 Exchange, the IRS gives you exactly 45 days to identify your replacement property in writing, and 180 days total to close. Those clocks start the day your sale closes. They don't pause for holidays, financing hiccups, or a deal that falls through.\n\nThe investors who defer their capital gains successfully are the ones who line up a Qualified Intermediary and a shortlist of properties BEFORE they sell, not after.\n\nAre you planning a sale this year? Drop a question below or send us a message and we'll walk you through the timeline.\n\nThis is educational only and not tax, legal, or investment advice. Consult your own advisors.",
    metrics: { likes: 75, comments: 16, reposts: 10 },
    images: [],
    privacy: 'public',
  },
  {
    id: 'q1031-fb-2',
    title: "When a 1031 Can't Help You",
    pillar: "B",
    pillarLabel: "537 IST Education",
    scheduledISO: "2026-06-10T12:00:00",
    hashtags: "#537IST #CapitalGainsDeferral #BusinessExit #TaxStrategy",
    visualDescription: "Split-image concept: left side a small storefront/business, right side a single-family home, joined by a purple bridge labeled 537 IST. Friendly, approachable style, 1080x1080.",
    theme: 'light',
    author: { ...Q1031_AUTHOR },
    content: "Not every appreciated asset qualifies for a 1031 Exchange, and that surprises a lot of people.\n\nA 1031 is built for investment real estate. But what about the family business you're selling, the primary home you've owned for 30 years, a concentrated stock position, or a large crypto holding? None of those fit inside a 1031.\n\nThat's where the 537 Installment Sale Trust comes in. Built on IRC Section 453, it lets you structure the sale as an installment note to an irrevocable trust, so the capital gains tax is paid only as you receive payments, spread across 10 to 30 years.\n\nSitting on an asset a 1031 can't touch? Send a message and let's talk through your options.\n\nEducational only, not tax, legal, or investment advice. Consult your own advisors.",
    metrics: { likes: 112, comments: 9, reposts: 3 },
    images: [],
    privacy: 'public',
  },
  {
    id: 'q1031-fb-3',
    title: "MYTH: It's Too Late to Plan After You Sell",
    pillar: "F",
    pillarLabel: "Engagement",
    scheduledISO: "2026-06-12T12:00:00",
    hashtags: "#CapitalGains #TaxStrategy #StartBeforeYouSell #NationwideServices",
    visualDescription: "Bold MYTH vs TRUTH split card in brand purple and white, large readable type, a faded stopwatch in the background to reinforce timing. Square 1080x1080.",
    theme: 'light',
    author: { ...Q1031_AUTHOR },
    content: "MYTH: \"I already accepted an offer, so it's too late to do anything about the taxes.\"\n\nTRUTH: One of the biggest factors in deferring capital gains is timing, and the best time to plan is before you sign, not after the wire hits your account. Once the sale closes and you've taken the proceeds, many of the most useful deferral structures are off the table.\n\nThat's exactly why we built a free front-door strategy call for sellers facing $1M or more in gains. We look at your situation and point you toward the right path, whether that's a 1031 Exchange, a 537 IST, or something else entirely.\n\nThinking about selling something big this year? Comment \"PLAN\" below and we'll reach out.\n\nEducational only, not tax, legal, or investment advice. Consult your own advisors.",
    metrics: { likes: 149, comments: 20, reposts: 10 },
    images: [],
    privacy: 'public',
  },
  {
    id: 'q1031-fb-4',
    title: "Tired of Being a Landlord but Scared of the Tax Bill",
    pillar: "D",
    pillarLabel: "Use Case",
    scheduledISO: "2026-06-15T12:00:00",
    hashtags: "#TiredLandlord #1031Exchange #RealEstateInvesting #CapitalGainsDeferral",
    visualDescription: "Warm photo-style image of a relaxed older couple on a porch, keys set on a table, soft natural light. Faces perform well on Facebook. 1200x630 feed format.",
    theme: 'light',
    author: { ...Q1031_AUTHOR },
    content: "You've owned the rentals for decades. The cash flow was great. But lately the 2 a.m. maintenance calls and the turnover headaches just aren't worth it anymore.\n\nSo why don't you sell? For most longtime landlords, it's one thing: the capital gains and depreciation recapture bill waiting on the other side. After years of appreciation, that number can be staggering, and it freezes people in place.\n\nHere's the good news. A 1031 Exchange can let you trade into something more passive while deferring those gains. And if you're ready to step out of real estate entirely, a 537 IST may be the path. You have more options than \"sell and pay\" or \"hold forever.\"\n\nReady to explore an exit? Call (719) 714-1565 or send us a message.\n\nEducational only, not tax, legal, or investment advice. Consult your own advisors.",
    metrics: { likes: 41, comments: 13, reposts: 3 },
    images: [],
    privacy: 'public',
  },
  {
    id: 'q1031-fb-5',
    title: "What a Qualified Intermediary Actually Does",
    pillar: "A",
    pillarLabel: "1031 Education",
    scheduledISO: "2026-06-17T12:00:00",
    hashtags: "#QualifiedIntermediary #1031Exchange #TaxStrategy #RealEstateInvesting",
    visualDescription: "Simple icon-driven flow graphic: Sell to QI (segregated bonded account) to Replacement Property, three steps with purple connecting arrows. Clean and bright, 1080x1080.",
    theme: 'light',
    author: { ...Q1031_AUTHOR },
    content: "Quick 1031 fact that trips up first-timers: you are not allowed to touch the money.\n\nIRC Section 1031 requires a Qualified Intermediary, or QI, to hold your sale proceeds between the time you sell and the time you buy your replacement property. If those funds ever land in your bank account, even for a day, the exchange can be disqualified and the gains become taxable.\n\nA good QI holds your funds in a segregated, bonded account, handles the paperwork for identification and replacement, and helps keep the exchange compliant from sale through close. It's the quiet, behind-the-scenes role that makes the deferral work.\n\nCurious how the QI piece fits your sale? Drop a comment and we'll explain.\n\nEducational only, not tax, legal, or investment advice. Consult your own advisors.",
    metrics: { likes: 78, comments: 6, reposts: 10 },
    images: [],
    privacy: 'public',
  },
  {
    id: 'q1031-fb-6',
    title: "The Story Behind Land Rich, Cash Poor",
    pillar: "E",
    pillarLabel: "Authority",
    scheduledISO: "2026-06-19T12:00:00",
    hashtags: "#LandRichCashPoor #CapitalGainsDeferral #TaxStrategy #NationwideServices",
    visualDescription: "Author-style image of the Land Rich, Cash Poor book cover beside a simple headshot frame placeholder for Christian Ramsey; warm, credible, bookstore feel. 1200x630 feed.",
    theme: 'light',
    author: { ...Q1031_AUTHOR },
    content: "Ever met someone whose net worth is locked up in property they can't sell without losing a fortune to taxes? Our brand face, Christian Ramsey, AIF, wrote a book about exactly that problem. It's called \"Land Rich, Cash Poor.\"\n\nFor more than 20 years, Christian has specialized in installment sales and tax-deferral strategy, helping sellers across the country turn illiquid, highly appreciated assets into structured, tax-deferred income.\n\nThat's the whole idea behind Q-1031: helping people who are rich on paper but stuck, find a path forward without a brutal tax hit all at once.\n\nWant to talk through your own situation with our team? Visit q-1031.com or send a message.\n\nEducational only, not tax, legal, or investment advice. Consult your own advisors.",
    metrics: { likes: 115, comments: 17, reposts: 3 },
    images: [],
    privacy: 'public',
  },
  {
    id: 'q1031-fb-7',
    title: "Missed Your 1031 Deadline? You May Still Have a Move",
    pillar: "D",
    pillarLabel: "Use Case",
    scheduledISO: "2026-06-22T12:00:00",
    hashtags: "#FailedExchange #537IST #1031Exchange #CapitalGainsDeferral",
    visualDescription: "Calm, reassuring graphic: a winding road with one path blocked and an alternate purple route opening up, labeled subtly. Hopeful tone, not alarmist. 1080x1080.",
    theme: 'light',
    author: { ...Q1031_AUTHOR },
    content: "It happens more than you'd think. You started a 1031 Exchange in good faith, then your replacement deal fell through, or the 45-day clock ran out before you could identify a property.\n\nNow you're staring at a sale that's about to become fully taxable, and it feels like there's nothing left to do.\n\nDepending on where you are in the process, a 537 Installment Sale Trust may offer a path to still defer those gains by structuring the proceeds as installments over time. Every situation is different and timing matters a lot, so the sooner we can look at it, the better.\n\nIn a failed-exchange jam right now? Call (719) 714-1565 today so we can review the details fast.\n\nEducational only, not tax, legal, or investment advice. Consult your own advisors.",
    metrics: { likes: 152, comments: 10, reposts: 10 },
    images: [],
    privacy: 'public',
  },
  {
    id: 'q1031-fb-8',
    title: "This or That: 1031 or 537 IST",
    pillar: "C",
    pillarLabel: "Capital-Gains Triage",
    scheduledISO: "2026-06-24T12:00:00",
    hashtags: "#1031Exchange #537IST #CapitalGainsDeferral #TaxStrategy",
    visualDescription: "Side-by-side comparison card: 1031 EXCHANGE on the left, 537 IST on the right, with a few quick bullet differentiators under each. Brand purple headers, clean grid. 1080x1080.",
    theme: 'light',
    author: { ...Q1031_AUTHOR },
    content: "Let's make this simple. Two of the most common capital-gains deferral tools, and how to tell them apart.\n\nGo with a 1031 Exchange when: you're selling investment or business-use real estate AND you want to stay invested in real estate by trading into a like-kind replacement property.\n\nGo with a 537 IST when: you're selling something a 1031 can't cover, like a primary residence, a business, crypto, or concentrated stock, OR you want to exit real estate entirely and receive tax-deferred income over time.\n\nThe right answer depends on what you're selling and what you want next. That's the whole point of our free triage call.\n\nWhich one fits your situation? Tell us what you're selling in the comments and we'll point you in the right direction.\n\nEducational only, not tax, legal, or investment advice. Consult your own advisors.",
    metrics: { likes: 44, comments: 21, reposts: 3 },
    images: [],
    privacy: 'public',
  },
  {
    id: 'q1031-fb-9',
    title: "Selling Your FedEx Route or Business? Read This First",
    pillar: "D",
    pillarLabel: "Use Case",
    scheduledISO: "2026-06-26T12:00:00",
    hashtags: "#BusinessExit #537IST #FedExRoutes #CapitalGainsDeferral",
    visualDescription: "Friendly photo-style image of a delivery van and a business owner shaking hands at a handoff; warm, optimistic, real-world. 1200x630 feed format.",
    theme: 'light',
    author: { ...Q1031_AUTHOR },
    content: "If you're a business owner heading toward an exit, here's a question worth sitting with: how much of your sale price actually ends up in your pocket after taxes?\n\nFor a lot of FedEx route owners and small-business sellers, the capital gains bill takes a serious bite. But there's another way to think about the deal.\n\nWith a 537 Installment Sale Trust, you can structure the sale so the gains are deferred and paid as installments over time, while the trust holds the note and administers the payments to you. It can even make you a more flexible, attractive seller to the buyer, which can help the deal close.\n\nIdeally this is planned 12 to 24 months ahead, but it's worth a conversation any time. Send a message to start one.\n\nEducational only, not tax, legal, or investment advice. Consult your own advisors.",
    metrics: { likes: 81, comments: 14, reposts: 10 },
    images: [],
    privacy: 'public',
  },
  {
    id: 'q1031-fb-10',
    title: "Before You Sell Anything Over $1M, Ask These 3 Questions",
    pillar: "C",
    pillarLabel: "Capital-Gains Triage",
    scheduledISO: "2026-06-29T12:00:00",
    hashtags: "#CapitalGains #TaxStrategy #1031Exchange #537IST",
    visualDescription: "Numbered checklist card with three checkbox lines, clean and saveable, brand purple accents and a small Q-1031 logo lockup at the bottom. 1080x1080 square.",
    theme: 'light',
    author: { ...Q1031_AUTHOR },
    content: "Selling a big asset this year? Before you sign anything, run through this quick checklist.\n\n1. What's my estimated capital gains exposure, including depreciation recapture if it's real estate?\n\n2. Does this asset qualify for a 1031 Exchange, or is it a candidate for a 537 IST instead?\n\n3. Have I talked to anyone about deferral BEFORE the sale closes, while I still have the most options on the table?\n\nIf any of those gave you pause, that's exactly what our free capital-gains strategy call is for. We're the front door: one conversation, and we help you find the right structure for your situation, nationwide.\n\nSave this post for when your sale gets real, then comment \"REVIEW\" or call (719) 714-1565.\n\nEducational only, not tax, legal, or investment advice. Consult your own advisors.",
    metrics: { likes: 118, comments: 7, reposts: 3 },
    images: [],
    privacy: 'public',
  },
]
