import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Utah Dumpster Rental Locations | Rolloff Dumpster Finder',
  description:
    'Find roll-off dumpster rental options across Utah for home cleanouts, roofing jobs, construction debris, estate cleanouts, and renovation projects.',
  alternates: {
    canonical: 'https://rolloffdumpsterfinder.com/locations/utah',
  },
  openGraph: {
    title: 'Utah Dumpster Rental Locations | Rolloff Dumpster Finder',
    description:
      'Find roll-off dumpster rental options across Utah for home cleanouts, roofing jobs, construction debris, estate cleanouts, and renovation projects.',
    url: 'https://rolloffdumpsterfinder.com/locations/utah',
    siteName: 'Rolloff Dumpster Finder',
    type: 'website',
    images: [
      {
        url: 'https://rolloffdumpsterfinder.com/home-page-images/hero-dumpster-construction.png',
        width: 1672,
        height: 941,
        alt: 'Roll-off dumpster rental in Utah',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Utah Dumpster Rental Locations | Rolloff Dumpster Finder',
    description:
      'Find roll-off dumpster rental options across Utah for home cleanouts, roofing jobs, construction debris, estate cleanouts, and renovation projects.',
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
      name: 'Utah',
      item: 'https://rolloffdumpsterfinder.com/locations/utah',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does dumpster rental cost in Utah?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pricing varies by city and container size. In the Salt Lake Valley, a 10-yard container typically runs $260–$440 per week. A 20-yard runs $360–$610. Mountain and rural markets may add for transport distance. Get an itemized quote — fuel surcharges and disposal fees are often listed separately.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size dumpster do I need for a Utah home cleanout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 20-yard container handles most full-home cleanouts. For a garage or single room, a 10-yard is usually enough. Utah homes tend to have large basements that accumulate material over decades — when in doubt, size up to avoid a second haul.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a permit to place a dumpster in Utah?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Street placement requires a right-of-way permit from your city or county. Driveway placement on private property typically does not require a permit. Requirements vary by municipality — your rental provider can advise on local requirements before scheduling delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a dumpster for roofing debris in Utah?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A 20-yard container handles most residential roofing jobs. Asphalt shingles load heavier than they look — confirm the weight allowance before the job starts, not after the scale comes back over.',
      },
    },
  ],
}

const cityCards = [
  {
    city: 'Salt Lake City',
    slug: 'salt-lake-city-ut-dumpster-rental',
    desc: 'Salt Lake City and the Salt Lake Valley — roll-off dumpster rental for home cleanouts, construction debris, roofing tear-offs, and renovation projects across The Avenues, Sugarhouse, and the greater metro.',
  },
  {
    city: 'West Valley City',
    slug: '',
    desc: "West Valley City roll-off dumpster rental for residential cleanouts, construction debris, and renovation projects in Utah's second-largest city.",
  },
  {
    city: 'Provo',
    slug: '',
    desc: 'Provo and Utah Valley dumpster rental for home cleanouts, construction debris, roofing jobs, and renovation projects across the rapidly growing Utah County area.',
  },
  {
    city: 'Ogden',
    slug: '',
    desc: 'Ogden and Weber County roll-off dumpster rental for home cleanouts, renovation debris, roofing tear-offs, and construction jobs along the northern Wasatch Front.',
  },
  {
    city: 'Sandy',
    slug: '',
    desc: 'Sandy and the south Salt Lake Valley — roll-off dumpster rental for residential cleanouts, construction debris, and renovation projects near the Cottonwood Canyons.',
  },
  {
    city: 'Lehi',
    slug: '',
    desc: 'Lehi and Silicon Slopes roll-off dumpster rental for new construction cleanup, residential cleanouts, and renovation debris across one of the fastest-growing areas in Utah County.',
  },
]

const projects = [
  {
    num: '01',
    name: 'Roofing Tear-Offs',
    desc: 'Salt Lake Valley homes run asphalt shingles that need replacement every 20–30 years. Occasional hail events along the Wasatch Front drive periodic surge demand. A 20-yard container handles most residential tear-offs — confirm the weight allowance before you load.',
  },
  {
    num: '02',
    name: 'Construction Dumpster Rentals',
    desc: "Utah is one of the fastest-growing states in the country. Silicon Slopes tech growth, new residential builds, and commercial expansion across the Salt Lake Valley and Utah County generate steady C&D debris that needs somewhere to go.",
  },
  {
    num: '03',
    name: 'Home Cleanout Dumpsters',
    desc: 'Older Salt Lake City neighborhoods — The Avenues, Sugarhouse, Marmalade District — have properties that have been in families for decades. Estate cleanouts and pre-sale clearances in these neighborhoods regularly fill a 20 or 30-yard container.',
  },
  {
    num: '04',
    name: 'Basement & Estate Cleanouts',
    desc: 'Utah homes tend to have larger basements than most states. A full basement clearance combined with a garage often requires a 20 or 30-yard container. Multi-generational estates can fill two pulls for larger properties.',
  },
  {
    num: '05',
    name: 'Yard Waste & Landscaping',
    desc: 'Drought-tolerant landscaping conversions are increasingly common across the Salt Lake Valley as water rates rise. Sod removal, tree debris, and xeriscape work haul lighter than construction waste but can fill a 10 or 15-yard container quickly.',
  },
]

const faq = [
  {
    q: 'How much does dumpster rental cost in Utah?',
    a: 'Pricing varies by city and container size. In the Salt Lake Valley, a 10-yard container typically runs $260–$440 per week. A 20-yard runs $360–$610. Mountain and rural markets may add for transport distance. Get an itemized quote — fuel surcharges and disposal fees are often listed separately.',
  },
  {
    q: 'What size dumpster do I need for a Utah home cleanout?',
    a: 'A 20-yard container handles most full-home cleanouts. For a garage or single room, a 10-yard is usually enough. Utah homes tend to have large basements that accumulate material over decades — when in doubt, size up to avoid a second haul.',
  },
  {
    q: 'Can I get a roofing dumpster in Utah?',
    a: 'Yes. A 20-yard container handles most residential roofing jobs. Asphalt shingles load heavier than they look — a full tear-off can push weight limits on a standard container. Confirm the weight allowance before the job starts.',
  },
  {
    q: 'Do I need a permit to place a dumpster in Utah?',
    a: 'Street placement requires a right-of-way permit from your city or county. Driveway placement on private property typically does not require a permit. Requirements vary by municipality across Utah — your rental provider can usually advise on the local process.',
  },
  {
    q: 'How does Utah altitude or mountain terrain affect delivery?',
    a: "Mountain markets near Park City and the Wasatch range have fewer provider options and longer haul distances. Some access roads restrict larger containers. Confirm truck clearance and access before booking for rural or mountain properties.",
  },
  {
    q: 'How quickly can I get delivery in Utah?',
    a: 'Salt Lake Valley providers typically deliver within 24–48 hours of booking. Mountain and rural markets need more lead time — plan for 2–4 days when outside the metro. During busy spring and fall seasons, booking a few days ahead gives you more flexibility.',
  },
  {
    q: 'Do you serve ski resort towns and mountain communities near Salt Lake City?',
    a: 'We have a city guide for Salt Lake City. Mountain communities — Park City, Heber City, Moab — are served by regional providers at higher rates due to access and transport distance. Give us a call for availability in specific mountain markets.',
  },
  {
    q: 'Are there items I cannot put in a Utah dumpster?',
    a: 'Hazardous materials — paint, solvents, motor oil, batteries, propane tanks — are prohibited in standard roll-offs. Asbestos-containing materials common in pre-1980 Utah homes require special handling. Dirt and concrete are allowed but hit weight limits fast — ask your provider about heavy-material allowances.',
  },
]

export default function UtahLocationsPage() {
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
            {' '}/ Utah
          </p>
          <h1 className="text-[clamp(30px,5vw,52px)] font-extrabold text-white leading-[1.08] tracking-tight mb-5">
            Roll-Off Dumpster Rental in Utah
          </h1>
          <p className="text-[17px] text-white/[.58] max-w-[580px] leading-[1.65]">
            Find local roll-off dumpster rental options for home cleanouts, roofing jobs,
            construction debris, estate cleanouts, and renovation projects across Utah.
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
            <Link
              href="/locations/arizona"
              className="inline-flex items-center gap-2 px-[18px] py-[9px] rounded-sm text-[13px] font-semibold bg-charcoal text-white border-2 border-orange hover:opacity-90 transition-opacity"
            >
              <span className="w-[7px] h-[7px] rounded-full bg-orange shrink-0" aria-hidden="true" />
              Arizona
            </Link>
            <div className="inline-flex items-center gap-2 px-[18px] py-[9px] rounded-sm text-[13px] font-semibold bg-charcoal text-white border-2 border-orange">
              <span className="w-[7px] h-[7px] rounded-full bg-orange shrink-0" aria-hidden="true" />
              Utah
            </div>
            {['Texas', 'Wyoming', 'New Mexico'].map((state) => (
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
            src="/home-page-images/commercial-construction-roll-off-dumpster-rental.png"
            alt="Roll-off dumpster rental for residential and construction projects in Utah"
            width={1448}
            height={1086}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2530]/88 via-[#1A2530]/55 to-transparent" />
          <div className="relative z-10 flex items-center min-h-[240px] lg:min-h-[290px] px-10 py-8">
            <div className="max-w-[460px]">
              <div className="w-8 h-[3px] bg-orange rounded-sm mb-4" />
              <p className="text-[clamp(18px,2.5vw,26px)] font-extrabold text-white tracking-tight leading-[1.2] mb-2">
                Residential and Commercial Roll-Off Rentals Across Utah
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
            Utah Dumpster Rental by City
          </h2>
          <p className="text-[15px] text-[#6B7280] leading-[1.6]">
            Roll-off dumpster rental guides for Utah cities. Delivery zones and availability
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
                ● Utah Location
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
                <span className="text-[12px] font-bold text-orange/40 self-start cursor-default">
                  Coming Soon
                </span>
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
            Common Projects in Utah
          </h2>
          <p className="text-[15px] text-white/[.5] leading-[1.6]">
            Rapid population growth, older urban housing stock, and large Utah basements shape
            a specific set of dumpster rental needs. Here are the most common project types we
            handle across the state.
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
              roofing tear-off, or extended construction job. In Utah, large basements and dense
              estate material can hit weight limits before the bin looks full — getting the right
              size up front avoids a second haul.
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
              alt="Residential cleanout roll-off dumpster rental in Utah"
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
            Utah Dumpster Rental — Straight Answers
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
          Need a Dumpster in Utah?
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
              Operating a roll-off company in Utah?{' '}
              <Link
                href="/providers/utah"
                className="text-orange hover:opacity-80 transition-opacity underline underline-offset-2"
              >
                Browse the provider directory.
              </Link>
            </p>
          </div>
          <Link
            href="/providers/utah"
            className="shrink-0 inline-block text-charcoal font-semibold text-[13px] px-[22px] py-[10px] rounded-full border border-[#D1CEC8] hover:border-charcoal transition-colors"
          >
            View Provider Directory
          </Link>
        </div>
      </section>
    </>
  )
}
