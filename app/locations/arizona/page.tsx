import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Arizona Dumpster Rental Locations | Rolloff Dumpster Finder',
  description:
    'Find roll-off dumpster rental options across Arizona for home cleanouts, roofing jobs, construction debris, desert landscaping, and renovation projects.',
  alternates: {
    canonical: 'https://rolloffdumpsterfinder.com/locations/arizona',
  },
  openGraph: {
    title: 'Arizona Dumpster Rental Locations | Rolloff Dumpster Finder',
    description:
      'Find roll-off dumpster rental options across Arizona for home cleanouts, roofing jobs, construction debris, desert landscaping, and renovation projects.',
    url: 'https://rolloffdumpsterfinder.com/locations/arizona',
    siteName: 'Rolloff Dumpster Finder',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arizona Dumpster Rental Locations | Rolloff Dumpster Finder',
    description:
      'Find roll-off dumpster rental options across Arizona for home cleanouts, roofing jobs, construction debris, desert landscaping, and renovation projects.',
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
      name: 'Arizona',
      item: 'https://rolloffdumpsterfinder.com/locations/arizona',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does dumpster rental cost in Arizona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Arizona dumpster rental pricing varies by city and provider. A 10-yard container typically runs $280–$480 in metro Phoenix markets. A 20-yard runs $380–$650. Get a written itemized quote — base rates often exclude fuel surcharges and disposal fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size dumpster do I need for an Arizona home cleanout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 20-yard container handles most full-home cleanouts in Arizona. For a garage or single-room cleanout, a 10-yard is usually enough. Older mid-century homes in Phoenix and Glendale with decades of accumulated material may need a 30-yard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a permit to place a dumpster in Arizona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Street placement typically requires a permit from your city or municipality. Driveway placement on private property does not usually require a permit. Requirements vary by city across the Phoenix metro — confirm with your provider before scheduling delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I put pool demolition debris or concrete in a roll-off?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but dense materials like concrete, rebar, and pool plaster require containers with appropriate weight allowances. Standard roll-offs hit weight limits fast with dense debris. Tell your provider what you are hauling so they can size the container correctly.',
      },
    },
  ],
}

const cityCards = [
  {
    city: 'Phoenix',
    slug: 'phoenix-az-dumpster-rental',
    desc: 'Greater Phoenix roll-off dumpster rental for home cleanouts, construction debris, renovation projects, and desert landscaping debris across the Valley of the Sun.',
  },
  {
    city: 'Scottsdale',
    slug: 'scottsdale-az-dumpster-rental',
    desc: 'Scottsdale roll-off dumpster rental for luxury renovation projects, home cleanouts, roofing debris, and desert landscaping jobs across north and south Scottsdale.',
  },
  {
    city: 'Mesa',
    slug: 'mesa-az-dumpster-rental',
    desc: 'Mesa dumpster rental covering residential cleanouts, roofing tear-offs, construction debris, and renovation projects across one of the largest cities in the Southwest.',
  },
  {
    city: 'Chandler',
    slug: 'chandler-az-dumpster-rental',
    desc: 'Chandler roll-off dumpster rental for HOA-community renovations, home cleanouts, construction debris, and desert landscaping waste in the East Valley.',
  },
  {
    city: 'Tempe',
    slug: 'tempe-az-dumpster-rental',
    desc: 'Tempe dumpster rental for home cleanouts, renovation debris, roofing jobs, and construction waste near Arizona State University and the greater Tempe area.',
  },
  {
    city: 'Glendale',
    slug: 'glendale-az-dumpster-rental',
    desc: 'Glendale and West Valley roll-off dumpster rental for home cleanouts, construction debris, roofing tear-offs, and renovation projects across the Phoenix west side.',
  },
]

const projects = [
  {
    num: '01',
    name: 'Roofing Dumpster Rentals',
    desc: 'Flat, low-slope, tile, and foam roofing systems all require tear-offs over time. Arizona roofing debris is heavy — tile roofs weigh significantly more than shingles. Confirm weight limits before loading.',
  },
  {
    num: '02',
    name: 'Construction Dumpster Rentals',
    desc: 'Arizona is one of the fastest-growing states in the country. Framing, drywall, concrete, and lumber from new builds and commercial jobs work best in 20 and 30-yard containers.',
  },
  {
    num: '03',
    name: 'Home Cleanout Dumpsters',
    desc: 'Older Phoenix and Glendale neighborhoods have mid-century homes that generate full-estate volume when ownership changes. Drop-and-go rentals with flexible pickup scheduling.',
  },
  {
    num: '04',
    name: 'Desert Landscaping Debris',
    desc: 'Saguaro removal, palm tree trimming, desert scrub clearing, and decomposed granite produce more debris than expected. Ask about green waste policies before booking.',
  },
  {
    num: '05',
    name: 'Pool Demo & Concrete Debris',
    desc: 'Pool demolition, patio removal, and concrete work are common Arizona projects. Dense material hits weight limits fast — book a container with appropriate allowances.',
  },
]

const faq = [
  {
    q: 'How much does dumpster rental cost in Arizona?',
    a: 'Arizona dumpster rental pricing varies by city and provider. A 10-yard container typically runs $280–$480 in metro Phoenix markets. A 20-yard runs $380–$650. Get a written itemized quote — base rates often exclude fuel surcharges and disposal fees.',
  },
  {
    q: 'What size dumpster do I need for an Arizona home cleanout?',
    a: 'A 20-yard container handles most full-home cleanouts in Arizona. For a garage or single-room cleanout, a 10-yard is usually enough. Older mid-century homes in Phoenix and Glendale with decades of accumulated material may need a 30-yard.',
  },
  {
    q: 'Can I get a dumpster for roofing debris in Arizona?',
    a: 'Yes. Arizona has high roofing turnover — flat, foam, tile, and shingle systems all require periodic replacement. A 20-yard container handles most residential jobs. Tile roofing is significantly heavier than shingles, so confirm the weight allowance before loading.',
  },
  {
    q: 'Do I need a permit to place a dumpster in Arizona?',
    a: 'Street placement typically requires a permit from your city or municipality. Driveway placement on private property does not usually require a permit. Requirements vary by city across the Phoenix metro — confirm with your provider before scheduling delivery.',
  },
  {
    q: 'Can I put pool demolition debris or concrete in a roll-off?',
    a: 'Yes, but dense materials like concrete, rebar, and pool plaster require containers with appropriate weight allowances. Standard roll-offs hit weight limits fast with dense debris. Tell your provider what you are hauling so they can size the container correctly.',
  },
  {
    q: 'Are HOA restrictions a factor for dumpster placement in Arizona?',
    a: 'In many Arizona communities — particularly in Scottsdale, Chandler, and planned developments across the Valley — HOA rules may restrict where a container can be placed or require advance notice. Confirm with your HOA before scheduling delivery.',
  },
  {
    q: 'How does Arizona heat affect dumpster rental scheduling?',
    a: 'Container availability is not typically affected by summer heat, but project scheduling often is. Most exterior renovation and landscaping work in Arizona happens October through April. Booking early in the busy fall and winter season gives you more date and size options.',
  },
  {
    q: 'Do you serve cities outside the Phoenix metro?',
    a: 'Rolloff Dumpster Finder helps customers find local providers across Arizona. Coverage and pricing vary by location. Use the city guides above or contact us directly for availability in Tucson, Flagstaff, Prescott, and other Arizona markets.',
  },
]

export default function ArizonaLocationsPage() {
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
            {' '}/ Arizona
          </p>
          <h1 className="text-[clamp(30px,5vw,52px)] font-extrabold text-white leading-[1.08] tracking-tight mb-5">
            Roll-Off Dumpster Rental in Arizona
          </h1>
          <p className="text-[17px] text-white/[.58] max-w-[580px] leading-[1.65]">
            Find local roll-off dumpster rental options for home cleanouts, roofing jobs,
            construction debris, desert landscaping, and renovation projects across Arizona.
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
            <Link
              href="/locations/colorado"
              className="inline-flex items-center gap-2 px-[18px] py-[9px] rounded-sm text-[13px] font-semibold bg-charcoal text-white border-2 border-orange hover:opacity-90 transition-opacity"
            >
              <span className="w-[7px] h-[7px] rounded-full bg-orange shrink-0" aria-hidden="true" />
              Colorado
            </Link>
            <div className="inline-flex items-center gap-2 px-[18px] py-[9px] rounded-sm text-[13px] font-semibold bg-charcoal text-white border-2 border-orange">
              <span className="w-[7px] h-[7px] rounded-full bg-orange shrink-0" aria-hidden="true" />
              Arizona
            </div>
            {['Texas', 'Wyoming', 'New Mexico', 'Utah'].map((state) => (
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

      {/* Section 1 — City cards */}
      <section className="bg-[#F5F4F0] py-16 px-8">
        <div className="max-w-[1200px] mx-auto mb-10">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-2">
            Arizona Dumpster Rental by City
          </h2>
          <p className="text-[15px] text-[#6B7280] leading-[1.6]">
            Roll-off dumpster rental guides for Arizona cities. Delivery zones and availability
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
                ● Arizona Location
              </p>
              <h2 className="text-[26px] font-extrabold text-white tracking-tight leading-[1.1] mb-[10px]">
                {card.city}
              </h2>
              <p className="text-[13px] text-white/[.48] leading-[1.65] flex-1 mb-6">
                {card.desc}
              </p>
              {card.slug ? (
                <Link
                  href={`/locations/${card.slug}`}
                  className="inline-block bg-orange text-black font-bold text-[12px] px-[18px] py-[9px] rounded-full hover:opacity-90 transition-opacity self-start"
                >
                  View Location Guide
                </Link>
              ) : (
                <a
                  href="https://rolloffdumpsterfinder.com/#section-i0tmdJpJCs"
                  className="inline-block bg-orange text-black font-bold text-[12px] px-[18px] py-[9px] rounded-full hover:opacity-90 transition-opacity self-start"
                >
                  Get a Quote
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Section 2 — Common projects */}
      <section className="bg-charcoal py-[72px] px-8">
        <div className="max-w-[1200px] mx-auto mb-10">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-white tracking-tight mb-2">
            Common Projects in Arizona
          </h2>
          <p className="text-[15px] text-white/[.5] leading-[1.6]">
            Arizona's climate, construction pace, and HOA-dense communities shape a specific set
            of dumpster rental needs. Here are the most common project types we handle across the
            state.
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
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          <div className="max-w-[560px]">
            <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
            <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-3">
              Not sure what size you need?
            </h2>
            <p className="text-[15px] text-[#6B7280] leading-[1.7]">
              A 10-yard container holds roughly 3 pickup truck loads. A 20-yard handles most home
              cleanouts and mid-size renovations. A 30-yard covers a full gut renovation, large
              roofing tear-off, or extended construction job. In Arizona, tile roofing and pool
              concrete can hit weight limits before the bin looks full — booking the right size up
              front avoids a second pull.
            </p>
          </div>
          <Link
            href="/blog/how-to-choose-the-right-dumpster-size"
            className="shrink-0 inline-block bg-orange text-black font-bold text-[14px] px-[28px] py-[13px] rounded-full hover:opacity-90 transition-opacity"
          >
            View Dumpster Size Guide
          </Link>
        </div>
      </section>

      {/* Section 4 — FAQ */}
      <section className="bg-[#F5F4F0] py-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-10">
            Arizona Dumpster Rental — Straight Answers
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
          Need a Dumpster in Arizona?
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
              Operating a roll-off company in Arizona?{' '}
              <Link
                href="/providers/arizona"
                className="text-orange hover:opacity-80 transition-opacity underline underline-offset-2"
              >
                List your business in the Arizona provider directory.
              </Link>
            </p>
          </div>
          <Link
            href="/providers/arizona"
            className="shrink-0 inline-block text-charcoal font-semibold text-[13px] px-[22px] py-[10px] rounded-full border border-[#D1CEC8] hover:border-charcoal transition-colors"
          >
            View Provider Directory
          </Link>
        </div>
      </section>
    </>
  )
}
