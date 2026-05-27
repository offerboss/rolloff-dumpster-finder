import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Colorado Dumpster Rental Locations | Rolloff Dumpster Finder',
  description:
    'Find roll-off dumpster rental options across Colorado for home cleanouts, hail-season roofing jobs, construction debris, and renovation projects.',
  alternates: {
    canonical: 'https://rolloffdumpsterfinder.com/locations/colorado',
  },
  openGraph: {
    title: 'Colorado Dumpster Rental Locations | Rolloff Dumpster Finder',
    description:
      'Find roll-off dumpster rental options across Colorado for home cleanouts, hail-season roofing jobs, construction debris, and renovation projects.',
    url: 'https://rolloffdumpsterfinder.com/locations/colorado',
    siteName: 'Rolloff Dumpster Finder',
    type: 'website',
    images: [
      {
        url: 'https://rolloffdumpsterfinder.com/home-page-images/hero-dumpster-construction.png',
        width: 1672,
        height: 941,
        alt: 'Roll-off dumpster rental in Colorado',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colorado Dumpster Rental Locations | Rolloff Dumpster Finder',
    description:
      'Find roll-off dumpster rental options across Colorado for home cleanouts, hail-season roofing jobs, construction debris, and renovation projects.',
    images: [
      'https://rolloffdumpsterfinder.com/home-page-images/hero-dumpster-construction.png',
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rolloffdumpsterfinder.com' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Locations',
      item: 'https://rolloffdumpsterfinder.com/locations',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Colorado',
      item: 'https://rolloffdumpsterfinder.com/locations/colorado',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does dumpster rental cost in Colorado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pricing varies by city and container size. A 10-yard container runs $220–$380 in Denver-area markets. Mountain markets like Steamboat Springs typically add 15–25% for transport costs. Get an itemized quote — fuel surcharges and disposal fees are often listed separately.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size dumpster do I need for a Colorado home cleanout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 20-yard container handles most full-home cleanouts. For a single room, garage, or basement, a 10-yard is usually enough. Older Denver and Colorado Springs homes built in the 1950s and 1960s often hold decades of accumulated material — when in doubt, size up.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a dumpster for roofing debris after a Colorado hail storm?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Colorado averages 1–3 significant hail events per year along the Front Range. A 20-yard container handles most residential shingle tear-offs. If you are removing a tile or heavy shake roof, confirm the weight allowance before loading.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a permit to place a dumpster in Colorado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Street placement requires a right-of-way permit from your city or county. Driveway placement on private property typically does not require a permit. Denver, Boulder, and Colorado Springs each have their own permitting process — your rental provider can usually pull the permit for a small fee.',
      },
    },
  ],
}

const cityCards = [
  {
    city: 'Denver',
    slug: 'denver-co-dumpster-rental',
    desc: 'Metro Denver roll-off dumpster rentals for home cleanouts, construction debris, and demolition projects across the front range.',
  },
  {
    city: 'Colorado Springs',
    slug: 'colorado-springs-co-dumpster-rental',
    desc: 'Roll-off dumpster rental service covering Colorado Springs and the surrounding El Paso County area for residential and commercial projects.',
  },
  {
    city: 'Fort Collins',
    slug: 'fort-collins-co-dumpster-rental',
    desc: 'Fort Collins and Larimer County roll-off rentals for residential cleanouts, roofing tear-offs, yard waste, and construction jobs.',
  },
  {
    city: 'Boulder',
    slug: 'boulder-co-dumpster-rental',
    desc: 'Boulder area roll-off dumpster rental for home cleanouts, renovation debris, and construction projects in Boulder County.',
  },
  {
    city: 'Grand Junction',
    slug: 'grand-junction-co-dumpster-rental',
    desc: 'Western Slope roll-off dumpster rental covering Grand Junction, Fruita, and the Grand Valley for cleanouts and construction debris.',
  },
  {
    city: 'Steamboat Springs',
    slug: 'steamboat-springs-co-dumpster-rental',
    desc: 'Routt County roll-off dumpster rental for seasonal cleanouts, construction projects, and debris removal in the Yampa Valley.',
  },
]

const projects = [
  {
    num: '01',
    name: 'Hail Season Roofing',
    desc: 'Colorado averages 1–3 significant hail events per year on the Front Range. Shingle tear-offs after a storm are the single biggest driver of residential dumpster demand in the state.',
  },
  {
    num: '02',
    name: 'Construction Dumpster Rentals',
    desc: 'Colorado remains one of the fastest-growing states in the country. Mixed C&D waste from framing, drywall, concrete, and lumber works best in 20 and 30-yard containers.',
  },
  {
    num: '03',
    name: 'Home Cleanout Dumpsters',
    desc: 'Full house, estate, or garage cleanouts. Older Denver and Colorado Springs neighborhoods have mid-century homes that generate estate volume when ownership changes.',
  },
  {
    num: '04',
    name: 'Demolition Dumpsters',
    desc: 'Concrete, block, and structural debris. Heavy material rentals with appropriate weight allowances. Dense loads hit limits fast — confirm capacity before delivery.',
  },
  {
    num: '05',
    name: 'Yard Waste & Landscaping',
    desc: 'Tree branches, sod, and brush after a landscaping project. Clean yard waste typically hauls at a lower rate than mixed loads. Confirm your provider allows green waste.',
  },
]

const faq = [
  {
    q: 'How much does dumpster rental cost in Colorado?',
    a: 'Pricing varies by city and container size. A 10-yard container runs $220–$380 in Denver-area markets. Mountain markets like Steamboat Springs typically add 15–25% for transport costs. Get an itemized quote — fuel surcharges and disposal fees are often listed separately.',
  },
  {
    q: 'What size dumpster do I need for a Colorado home cleanout?',
    a: 'A 20-yard container handles most full-home cleanouts. For a single room, garage, or basement, a 10-yard is usually enough. Older Denver and Colorado Springs homes from the 1950s and 1960s often hold decades of material — when in doubt, size up.',
  },
  {
    q: 'Can I get a roofing dumpster for hail damage in Colorado?',
    a: 'Yes. Colorado averages 1–3 significant hail events per year along the Front Range. A 20-yard container handles most residential shingle tear-offs. Tile or heavy shake roofing is significantly denser — confirm the weight allowance before loading.',
  },
  {
    q: 'Do I need a permit to place a dumpster in Colorado?',
    a: 'Street placement requires a right-of-way permit from your city or county. Driveway placement on private property typically does not require a permit. Denver, Boulder, and Colorado Springs each have their own process — your provider can usually pull the permit for a small fee.',
  },
  {
    q: 'How does altitude or mountain terrain affect delivery?',
    a: 'High-altitude markets like Steamboat Springs and Grand Junction have fewer provider options and longer haul times. Mountain roads with steep grades may restrict delivery of the largest containers. Confirm access before booking, especially for rural or off-highway properties.',
  },
  {
    q: 'How quickly can I get delivery in Colorado?',
    a: 'Front Range providers can typically deliver within 24–48 hours of booking. Mountain markets need 2–4 days lead time. During hail season (June through August), demand surges on the Front Range — book early or expect limited availability.',
  },
  {
    q: 'Do you serve ski resort towns and mountain communities?',
    a: 'We have city guides for Steamboat Springs and Grand Junction. Other mountain communities — Breckenridge, Vail, Glenwood Springs, Telluride — are served by regional providers at higher rates. Contact us directly for availability in specific mountain markets.',
  },
  {
    q: 'Are there items I cannot put in a Colorado dumpster?',
    a: 'Hazardous materials — paint, solvents, oils, batteries, propane tanks — are prohibited in all standard roll-offs. Colorado has specific rules for asbestos-containing materials common in pre-1980 homes. Dirt and concrete are allowed but hit weight limits fast. Ask your provider for the full restricted items list.',
  },
]

export default function ColoradoLocationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Dark hero */}
      <section className="relative bg-[#1A2530] py-20 px-8 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,.025) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,.025) 40px)',
          }}
        />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="w-11 h-1 bg-orange rounded-sm mb-6" />
          <p className="text-[11px] font-bold uppercase tracking-[.14em] text-orange/60 mb-4">
            <Link href="/locations" className="hover:text-orange transition-colors">
              All Locations
            </Link>
            {' '}/ Colorado
          </p>
          <h1 className="text-[clamp(30px,5vw,52px)] font-extrabold text-white leading-[1.08] tracking-tight mb-5">
            Roll-Off Dumpster Rental in Colorado
          </h1>
          <p className="text-[17px] text-white/[.58] max-w-[580px] leading-[1.65]">
            Find local roll-off dumpster rental options for home cleanouts, hail-season roofing
            jobs, construction debris, and renovation projects across Colorado.
          </p>
        </div>
      </section>

      {/* State navigation band */}
      <section className="bg-white py-5 px-8 border-b border-[#E8E4DE]">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#9CA3AF] mb-3">
            Browse by State
          </p>
          <div className="flex flex-wrap gap-[10px]">
            <div className="inline-flex items-center gap-2 px-[18px] py-[9px] rounded-sm text-[13px] font-semibold bg-charcoal text-white border-2 border-orange">
              <span className="w-[7px] h-[7px] rounded-full bg-orange shrink-0" aria-hidden="true" />
              Colorado
            </div>
            <Link
              href="/locations/arizona"
              className="inline-flex items-center gap-2 px-[18px] py-[9px] rounded-sm text-[13px] font-semibold bg-charcoal text-white border-2 border-orange hover:opacity-90 transition-opacity"
            >
              <span className="w-[7px] h-[7px] rounded-full bg-orange shrink-0" aria-hidden="true" />
              Arizona
            </Link>
            <Link
              href="/locations/utah"
              className="inline-flex items-center gap-2 px-[18px] py-[9px] rounded-sm text-[13px] font-semibold bg-charcoal text-white border-2 border-orange hover:opacity-90 transition-opacity"
            >
              <span className="w-[7px] h-[7px] rounded-full bg-orange shrink-0" aria-hidden="true" />
              Utah
            </Link>
            <Link
              href="/locations/texas"
              className="inline-flex items-center gap-2 px-[18px] py-[9px] rounded-sm text-[13px] font-semibold bg-charcoal text-white border-2 border-orange hover:opacity-90 transition-opacity"
            >
              <span className="w-[7px] h-[7px] rounded-full bg-orange shrink-0" aria-hidden="true" />
              Texas
            </Link>
            <Link
              href="/locations/wyoming"
              className="inline-flex items-center gap-2 px-[18px] py-[9px] rounded-sm text-[13px] font-semibold bg-charcoal text-white border-2 border-orange hover:opacity-90 transition-opacity"
            >
              <span className="w-[7px] h-[7px] rounded-full bg-orange shrink-0" aria-hidden="true" />
              Wyoming
            </Link>
            <Link
              href="/locations/oklahoma"
              className="inline-flex items-center gap-2 px-[18px] py-[9px] rounded-sm text-[13px] font-semibold bg-charcoal text-white border-2 border-orange hover:opacity-90 transition-opacity"
            >
              <span className="w-[7px] h-[7px] rounded-full bg-orange shrink-0" aria-hidden="true" />
              Oklahoma
            </Link>
            {['New Mexico'].map((state) => (
              <div
                key={state}
                className="inline-flex items-center gap-2 px-[18px] py-[9px] rounded-sm text-[13px] font-semibold bg-[#F3F2EF] text-[#9CA3AF] border-2 border-[#E5E3DE]"
              >
                {state}
                <span className="text-[9px] font-bold uppercase tracking-[.08em] bg-[#E5E3DE] text-[#9CA3AF] px-[6px] py-[2px] rounded-sm">
                  Soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image banner — visual break below state nav */}
      <section className="bg-[#F5F4F0] pt-12 px-8">
        <div className="max-w-[1200px] mx-auto rounded-2xl overflow-hidden shadow-sm relative min-h-[240px] lg:min-h-[290px]">
          <img
            src="/home-page-images/hero-dumpster-construction.png"
            alt="Roll-off dumpster rental for residential and construction projects in Colorado"
            width={1672}
            height={941}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2530]/88 via-[#1A2530]/55 to-transparent" />
          <div className="relative z-10 flex items-center min-h-[240px] lg:min-h-[290px] px-10 py-8">
            <div className="max-w-[460px]">
              <div className="w-8 h-[3px] bg-orange rounded-sm mb-4" />
              <p className="text-[clamp(18px,2.5vw,26px)] font-extrabold text-white tracking-tight leading-[1.2] mb-2">
                Residential and Commercial Roll-Off Rentals Across Colorado
              </p>
              <p className="text-[13px] text-white/[.65] leading-[1.6]">
                Home cleanouts, roofing tear-offs, construction debris, and renovation projects — covered statewide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 — City cards */}
      <section className="bg-[#F5F4F0] py-16 px-8">
        <div className="max-w-[1200px] mx-auto mb-10">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-2">
            Colorado Dumpster Rental by City
          </h2>
          <p className="text-[15px] text-[#6B7280] leading-[1.6]">
            Roll-off dumpster rental guides for Colorado cities. Delivery zones and availability
            vary by location.
          </p>
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cityCards.map((card) => (
            <article
              key={card.city}
              className="bg-charcoal border border-white/[.06] rounded-sm p-7 flex flex-col transition-all duration-200 hover:bg-[#1A2530] hover:shadow-[0_10px_36px_rgba(0,0,0,.3)]"
            >
              <p className="text-[9px] font-bold uppercase tracking-[.12em] text-orange mb-[10px]">
                ● Colorado Location
              </p>
              <h2 className="text-[26px] font-extrabold text-white tracking-tight leading-[1.1] mb-[10px]">
                {card.city}
              </h2>
              <p className="text-[13px] text-white/[.48] leading-[1.65] flex-1 mb-6">
                {card.desc}
              </p>
              <Link
                href={`/locations/${card.slug}`}
                className="inline-block bg-orange text-black font-bold text-[12px] px-[18px] py-[9px] rounded-full hover:opacity-90 transition-opacity self-start"
              >
                View Location Guide
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Section 2 — Common projects */}
      <section className="bg-charcoal py-[72px] px-8">
        <div className="max-w-[1200px] mx-auto mb-10">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-white tracking-tight mb-2">
            Common Projects in Colorado
          </h2>
          <p className="text-[15px] text-white/[.5] leading-[1.6]">
            Hail season, fast-growing Front Range communities, and a mix of mountain and urban
            markets shape a specific set of dumpster rental needs. Here are the most common project
            types we handle across the state.
          </p>
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {projects.map((p) => (
            <div
              key={p.num}
              className="bg-white/[.05] border border-white/[.08] border-t-2 border-t-orange rounded-sm px-[18px] py-[22px]"
            >
              <div className="text-[32px] font-extrabold text-orange leading-none mb-[10px] tracking-tight">
                {p.num}
              </div>
              <p className="text-[13px] font-bold text-white leading-[1.35] mb-2">{p.name}</p>
              <p className="text-[12px] text-white/[.42] leading-[1.6]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 — Size guide band */}
      <section className="bg-white border-y border-[#E8E4DE] py-16 px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div>
            <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
            <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-3">
              Not sure what size you need?
            </h2>
            <p className="text-[15px] text-[#6B7280] leading-[1.7] mb-8">
              A 10-yard container holds roughly 3 pickup truck loads. A 20-yard handles most home
              cleanouts and mid-size renovations. A 30-yard covers a full gut renovation, large
              roofing tear-off, or extended construction job. In Colorado, roofing material from
              hail-damaged homes and heavy concrete can hit weight limits before the bin looks
              full — getting the right size up front avoids a second pull.
            </p>
            <Link
              href="/blog/how-to-choose-the-right-dumpster-size"
              className="inline-block bg-orange text-black font-bold text-[14px] px-[28px] py-[13px] rounded-full hover:opacity-90 transition-opacity"
            >
              View Dumpster Size Guide
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <img
              src="/home-page-images/residential-cleanout-dumpster.png"
              alt="Residential cleanout roll-off dumpster rental in Colorado"
              width={1448}
              height={1086}
              loading="lazy"
              className="w-full h-[300px] lg:h-[360px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 4 — FAQ */}
      <section className="bg-[#F5F4F0] py-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-10">
            Colorado Dumpster Rental — Straight Answers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faq.map((item) => (
              <div key={item.q} className="bg-white rounded-sm p-6 border border-[#E8E4DE]">
                <h3 className="text-[14px] font-bold text-charcoal mb-3 leading-[1.4]">
                  {item.q}
                </h3>
                <p className="text-[13px] text-[#566070] leading-[1.65]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Dark CTA band */}
      <section className="bg-[#1A2530] py-[72px] px-8 text-center">
        <div className="w-11 h-1 bg-orange rounded-sm mx-auto mb-6" />
        <h2 className="text-[clamp(26px,4vw,38px)] font-extrabold text-white tracking-tight mb-[14px]">
          Need a Dumpster in Colorado?
        </h2>
        <p className="text-[16px] text-white/[.52] max-w-[460px] mx-auto mb-8 leading-[1.65]">
          Tell us your city, project type, and how much material you have. We will match you with
          the right container and schedule a drop.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://rolloffdumpsterfinder.com/#section-i0tmdJpJCs"
            className="inline-block bg-orange text-black font-bold text-[14px] px-[28px] py-[13px] rounded-full hover:opacity-90 transition-opacity"
          >
            Book Now / Get Quote
          </a>
          <Link
            href="/locations"
            className="inline-block text-white/60 font-semibold text-[14px] px-[28px] py-[13px] rounded-full border border-white/[.18] hover:border-white/40 hover:text-white transition-all"
          >
            View All Locations
          </Link>
        </div>
      </section>

      {/* Provider CTA — for companies, not renters */}
      <section className="bg-white border-t border-[#E8E4DE] py-10 px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#9CA3AF] mb-1">
              For Companies
            </p>
            <p className="text-[15px] font-semibold text-charcoal leading-[1.5]">
              Operating a roll-off company in Colorado?{' '}
              <Link
                href="/providers/colorado"
                className="text-orange hover:opacity-80 transition-opacity underline underline-offset-2"
              >
                List your business in the Colorado provider directory.
              </Link>
            </p>
          </div>
          <Link
            href="/providers/colorado"
            className="shrink-0 inline-block text-charcoal font-semibold text-[13px] px-[22px] py-[10px] rounded-full border border-[#D1CEC8] hover:border-charcoal transition-colors"
          >
            View Provider Directory
          </Link>
        </div>
      </section>
    </>
  )
}
