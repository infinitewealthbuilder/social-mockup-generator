// AUTO-GENERATED seed — Q-1031 June 2026 organic Facebook posts.
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
    title: "Tenants Toilets Trash hook (Tired Landlord)",
    pillar: "D",
    pillarLabel: "Use Case",
    scheduledISO: "2026-06-08T12:00:00",
    hashtags: "#1031Exchange #RealEstateInvesting #CapitalGains #PassiveIncome",
    visualDescription: "Warm photo of an older couple relaxing on a porch with coffee, a 'For Rent' sign faded/blurred in the background, conveying relief and freedom from landlord stress.",
    theme: 'light',
    author: { ...Q1031_AUTHOR },
    content: "Tired of the 2 a.m. phone calls? Tenants, toilets, and trash have a way of stealing the freedom you spent decades building. Here's the part most landlords don't know: if you sell those rental units, you don't have to hand a giant chunk of your gain to the IRS all at once. A properly structured 1031 exchange lets you reinvest into new investment property and DEFER the capital gains tax, so more of your equity keeps working for you. Christian Ramsey, AIF® and best-selling author of \"Land Rich, Cash Poor,\" has helped owners nationwide trade the headaches for something more passive. Educational only, not tax or legal advice. What would you do with your time back? Book a free strategy call at q-1031.com.",
    metrics: { likes: 75, comments: 16, reposts: 10 },
    images: [],
    privacy: 'public',
  },
  {
    id: 'q1031-fb-2',
    title: "What a Qualified Intermediary actually does (1031 education)",
    pillar: "A",
    pillarLabel: "1031 Education",
    scheduledISO: "2026-06-10T12:00:00",
    hashtags: "#1031Exchange #QualifiedIntermediary #RealEstate #TaxDeferral",
    visualDescription: "Clean infographic-style image showing a simple timeline: Sale Day, 45-Day ID, 180-Day Close, with a shield icon labeled 'segregated bonded account' in the middle.",
    theme: 'light',
    author: { ...Q1031_AUTHOR },
    content: "Quick question for the real estate owners out there: do you know what a Qualified Intermediary (QI) actually does in a 1031 exchange? A lot of sellers find out the hard way that you can't just touch the sale proceeds and still defer the tax. That's where the QI comes in. We hold your funds in a segregated, bonded account, then coordinate the strict 45-day identification and 180-day closing timelines so your exchange stays compliant. Think of it as the guardrails that help keep your capital gains tax deferral on track. This is general education, not tax or legal advice, so loop in your own advisors too. Curious how it works for your situation? Comment 'STRATEGY' and we'll point you in the right direction.",
    metrics: { likes: 112, comments: 9, reposts: 3 },
    images: [],
    privacy: 'public',
  },
  {
    id: 'q1031-fb-3',
    title: "Myth-buster: 1031 is your only option (engagement)",
    pillar: "F",
    pillarLabel: "Engagement",
    scheduledISO: "2026-06-12T12:00:00",
    hashtags: "#CapitalGains #537IST #TaxStrategy #WealthPlanning",
    visualDescription: "Split-screen graphic: left side labeled '1031 Exchange = investment real estate,' right side labeled '537 IST = primary home, business, crypto & more,' with a friendly 'Myth Busted' stamp.",
    theme: 'light',
    author: { ...Q1031_AUTHOR },
    content: "Myth: \"If my property doesn't qualify for a 1031 exchange, I'm stuck paying all the tax now.\" Not necessarily. The 1031 is built for like-kind investment real estate, but it's not the only tool in the box. For assets that DON'T qualify, the 537 Installment Sale Trust can spread the gain (and the tax) out over 10 to 30 years under IRC 453. Two different tools, two different jobs, both designed to help you DEFER capital gains rather than take the hit all at once. The right move depends on what you're selling. General education only, not tax or legal advice. Drop a comment: are you selling real estate, a business, or something else?",
    metrics: { likes: 149, comments: 20, reposts: 10 },
    images: [],
    privacy: 'public',
  },
  {
    id: 'q1031-fb-4',
    title: "537 IST intro: assets a 1031 won't cover (537 education)",
    pillar: "B",
    pillarLabel: "537 IST Education",
    scheduledISO: "2026-06-15T12:00:00",
    hashtags: "#537IST #InstallmentSale #CapitalGains #BusinessExit",
    visualDescription: "Grid of four simple icons (house, storefront, Bitcoin symbol, stock chart) under a header reading 'Doesn't fit a 1031? There's another door.'",
    theme: 'light',
    author: { ...Q1031_AUTHOR },
    content: "Not every big sale fits in a 1031 box, and that surprises a lot of people. Selling your primary home, a family business, a crypto position, or a concentrated stock holding? None of those qualify for a 1031 exchange. That's exactly why the 537 Installment Sale Trust exists. Instead of paying capital gains tax on the whole gain in one painful year, the sale is structured as an installment note to an irrevocable trust, and you pay tax only as payments come to you, spread across 10 to 30 years. It's the capital-gains deferral strategy for assets a 1031 leaves out. This is educational only, so confirm the details with your own tax and legal advisors. Have an asset that doesn't fit a 1031? Send us a message and let's talk through it.",
    metrics: { likes: 41, comments: 13, reposts: 3 },
    images: [],
    privacy: 'public',
  },
  {
    id: 'q1031-fb-5',
    title: "Failed Exchange Frank: missed the 45-day deadline (use-case)",
    pillar: "D",
    pillarLabel: "Use Case",
    scheduledISO: "2026-06-17T12:00:00",
    hashtags: "#1031Exchange #537IST #CapitalGains #RealEstate",
    visualDescription: "Image of a calendar with a red-circled '45' and a clock, with a calm green 'Plan B' path arrow leading away from it, conveying reassurance rather than panic.",
    theme: 'light',
    author: { ...Q1031_AUTHOR },
    content: "Here's a stomach-drop moment we hear about a lot: the property sold, the clock started, and the 45-day window to identify a replacement quietly closed before the right deal came together. If that's you, take a breath. A blown 1031 deadline doesn't automatically mean you owe everything this year. The 537 Installment Sale Trust can often step in as a rescue, letting you structure the proceeds into an installment note and DEFER that capital gains tax over time instead. Christian Ramsey, AIF®, has spent 20+ years helping sellers find a path forward after a tight deadline. Educational only, not tax or legal advice. Staring down a missed deadline? Call (719) 714-1565 before you assume the worst.",
    metrics: { likes: 78, comments: 6, reposts: 10 },
    images: [],
    privacy: 'public',
  },
  {
    id: 'q1031-fb-6',
    title: "Which strategy is right for my sale? (front-door triage)",
    pillar: "C",
    pillarLabel: "Capital-Gains Triage",
    scheduledISO: "2026-06-19T12:00:00",
    hashtags: "#CapitalGains #TaxStrategy #1031Exchange #537IST",
    visualDescription: "Simple decision-tree flowchart starting with 'Selling something with $1M+ in gains?' branching into '1031 Exchange' and '537 IST' with a 'Start with a free triage call' box at the top.",
    theme: 'light',
    author: { ...Q1031_AUTHOR },
    content: "\"Which strategy is right for MY sale?\" If you're facing a big capital gains bill, that's the question that actually matters, and the honest answer is: it depends on what you're selling and what you want next. Investment real estate and rolling into more property? A 1031 exchange may fit. Selling a home, a business, crypto, or concentrated stock, or you want income spread over years? The 537 IST might be the better path. Sometimes it's a blend. That's why we offer a free triage call to help sellers facing $1M+ in gains figure out the right structure before they sell. General information, not tax or legal advice. Not sure where to start? Start here: q-1031.com.",
    metrics: { likes: 115, comments: 17, reposts: 3 },
    images: [],
    privacy: 'public',
  },
  {
    id: 'q1031-fb-7',
    title: "Christian Ramsey authority + Land Rich Cash Poor (authority)",
    pillar: "E",
    pillarLabel: "Authority",
    scheduledISO: "2026-06-22T12:00:00",
    hashtags: "#LandRichCashPoor #CapitalGains #TaxDeferral #WealthStrategy",
    visualDescription: "Professional photo of Christian Ramsey next to the 'Land Rich, Cash Poor' book cover, with a clean Q-1031 logo and the tagline 'Protect your real estate gains nationwide.'",
    theme: 'light',
    author: { ...Q1031_AUTHOR },
    content: "When you're sitting on decades of appreciation, who's in your corner matters. Christian Ramsey, AIF®, is the best-selling author of \"Land Rich, Cash Poor\" and has spent 20+ years specializing in installment sales and tax-deferral strategy. The whole idea behind the book and behind Q-1031 is simple: the wealth you built on paper shouldn't get stuck (or unnecessarily taxed all at once) when it's finally time to sell. As the capital-gains tax-deferral arm of The Q Companies, Q-1031 works with sellers nationwide on compliant exchange and installment-sale strategies. Educational only, not tax, legal, or investment advice. Want a real conversation about your situation? Book a free strategy call at q-1031.com.",
    metrics: { likes: 152, comments: 10, reposts: 10 },
    images: [],
    privacy: 'public',
  },
  {
    id: 'q1031-fb-8',
    title: "FedEx route / business seller scenario (use-case)",
    pillar: "D",
    pillarLabel: "Use Case",
    scheduledISO: "2026-06-24T12:00:00",
    hashtags: "#BusinessExit #537IST #CapitalGains #SellingYourBusiness",
    visualDescription: "Photo of a small-business owner (delivery van or storefront) shaking hands on a deal, with an overlay graphic showing payments spread across a 10-year timeline.",
    theme: 'light',
    author: { ...Q1031_AUTHOR },
    content: "You spent years building the business, running the routes, making payroll, and now a buyer is ready. Then the capital gains math hits and the celebration cools off fast. Here's some good news for business sellers: a business doesn't qualify for a 1031 exchange, but it may be a strong fit for the 537 Installment Sale Trust. Instead of a single brutal tax year, the sale is structured as an installment note, and you pay tax as payments arrive, spread over time. For a lot of FedEx-route and small-business owners, that means a smoother exit and more predictable income. As a hypothetical example only, a seller with $2M in gains could potentially defer a meaningful portion across years. Educational only, not tax or legal advice. Selling your business soon? Comment 'STRATEGY' and let's map it out.",
    metrics: { likes: 44, comments: 21, reposts: 3 },
    images: [],
    privacy: 'public',
  },
  {
    id: 'q1031-fb-9',
    title: "Common 1031 mistakes checklist (1031 education)",
    pillar: "A",
    pillarLabel: "1031 Education",
    scheduledISO: "2026-06-26T12:00:00",
    hashtags: "#1031Exchange #RealEstateInvesting #CapitalGains #InvestingTips",
    visualDescription: "Checklist-style graphic with three red X items (set up too late, touched the funds, missed 45 days) and a green checkmark header 'Do it right, defer the gain.'",
    theme: 'light',
    author: { ...Q1031_AUTHOR },
    content: "Three of the most common 1031 exchange mistakes we see, so you don't have to learn them the expensive way: 1) Waiting until AFTER closing to set things up. The Qualified Intermediary has to be in place before the sale closes. 2) Touching the proceeds. If the money hits your account, the deferral can be blown. 3) Missing the 45-day ID window. The clock is strict and it doesn't pause for a slow market. Get these right and a 1031 can help you DEFER capital gains tax and keep your equity working. Get them wrong and the door can close fast. General education only, not tax or legal advice. Thinking about an exchange this year? Tag a friend who owns rentals, this one's for them too.",
    metrics: { likes: 81, comments: 14, reposts: 10 },
    images: [],
    privacy: 'public',
  },
  {
    id: 'q1031-fb-10',
    title: "Engage before you sell (front-door timing)",
    pillar: "C",
    pillarLabel: "Capital-Gains Triage",
    scheduledISO: "2026-06-29T12:00:00",
    hashtags: "#CapitalGains #TaxPlanning #1031Exchange #537IST",
    visualDescription: "Hourglass graphic with 'Before you sell' on the full top bulb glowing green and 'After you sell' on the bottom dimmed, with text 'Your options are widest before closing.'",
    theme: 'light',
    author: { ...Q1031_AUTHOR },
    content: "The single most important piece of capital-gains education we can offer: talk to someone BEFORE you sell, not after. Once the deal closes, a lot of doors quietly shut. A 1031 exchange has to be set up before closing. A 537 IST works best when it's structured ahead of the sale. Post-sale tax planning has far fewer options than pre-sale planning. So if you're even thinking about selling investment property, a business, a home, or a concentrated position with $1M+ in gains, the best time to explore your options is now, while you still have all of them. Educational only, not tax or legal advice. Have a sale on the horizon? Send us a message and let's talk before the ink dries.",
    metrics: { likes: 118, comments: 7, reposts: 3 },
    images: [],
    privacy: 'public',
  },
]
