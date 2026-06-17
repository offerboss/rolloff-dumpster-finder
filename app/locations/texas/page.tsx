import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Texas Dumpster Rental Locations | Rolloff Dumpster Finder',
  description:
    'Find roll-off dumpster rental options across Texas for home cleanouts, roofing tear-offs, storm cleanup, construction debris, and renovation projects.',
  alternates: {
    canonical: 'https://rolloffdumpsterfinder.com/locations/texas',
  },
  openGraph: {
    title: 'Texas Dumpster Rental Locations | Rolloff Dumpster Finder',
    description:
      'Find roll-off dumpster rental options across Texas for home cleanouts, roofing tear-offs, storm cleanup, construction debris, and renovation projects.',
    url: 'https://rolloffdumpsterfinder.com/locations/texas',
    siteName: 'Rolloff Dumpster Finder',
    type: 'website',
    images: [
      {
        url: 'https://rolloffdumpsterfinder.com/home-page-images/hero-dumpster-construction.png',
        width: 1672,
        height: 941,
        alt: 'Roll-off dumpster rental in Texas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Texas Dumpster Rental Locations | Rolloff Dumpster Finder',
    description:
      'Find roll-off dumpster rental options across Texas for home cleanouts, roofing tear-offs, storm cleanup, construction debris, and renovation projects.',
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
      name: 'Texas',
      item: 'https://rolloffdumpsterfinder.com/locations/texas',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does dumpster rental cost in Texas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pricing varies by city and container size. Texas markets differ significantly — Dallas-Fort Worth and Houston tend to run similar ranges to other large metros. A 10-yard container typically runs $250–$450 per week depending on market. A 20-yard runs $350–$650. Get an itemized quote specific to your city — fuel surcharges and disposal fees vary by provider.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a dumpster for hail damage or storm cleanup in Texas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A 20-yard container handles most residential roofing tear-offs after hail damage. During active storm seasons in North Texas, provider capacity tightens fast — booking as soon as you have a contractor lined up gives you the best chance at same-week delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size dumpster do I need for a Texas home cleanout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 20-yard container handles most full-home cleanouts. For a garage or single room, a 10-yard is usually enough. Large suburban Texas homes — especially those with detached garages or pool equipment — often generate more debris than expected. Size up if you are unsure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you serve multiple Texas cities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are building out Texas city guides for Dallas, Houston, Austin, San Antonio, Fort Worth, and Plano. Delivery coverage and pricing vary significantly across Texas markets — give us a call to get matched with a provider in your area.',
      },
    },
  ],
}

const cityCards = [
  {
    city: 'Dallas',
    slug: 'dallas-tx-dumpster-rental',
    desc: 'Dallas dumpster rental for roofing tear-offs, home cleanouts, construction debris, and renovation projects across the DFW Metroplex.',
  },
  {
    city: 'Houston',
    slug: 'houston-tx-dumpster-rental',
    desc: 'Houston roll-off dumpster rental for home cleanouts, construction debris, storm cleanup, and renovation projects across the greater Houston area.',
  },
  {
    city: 'Austin',
    slug: 'austin-tx-dumpster-rental',
    desc: 'Austin dumpster rental for home cleanouts, kitchen and bath remodels, construction debris, and renovation projects across the rapidly growing Austin metro.',
  },
  {
    city: 'San Antonio',
    slug: 'san-antonio-tx-dumpster-rental',
    desc: 'San Antonio roll-off dumpster rental for home cleanouts, construction debris, roofing tear-offs, and renovation projects across Bexar County.',
  },
  {
    city: 'Fort Worth',
    slug: 'fort-worth-tx-dumpster-rental',
    desc: 'Fort Worth dumpster rental for home cleanouts, roofing tear-offs, construction debris, and renovation projects across Tarrant County.',
  },
  {
    city: 'Plano',
    slug: 'plano-tx-dumpster-rental',
    desc: 'Plano roll-off dumpster rental for home cleanouts, kitchen and bath remodels, construction cleanup, and renovation projects in the northern DFW suburbs.',
  },
]

const projects = [
  {
    num: '01',
    name: 'Roofing Tear-Offs',
    desc: 'North Texas sits in Hail Alley. A single spring storm system can trigger thousands of roofing replacements across the DFW area in a weekend. A 20-yard container handles most residential tear-offs — book early during storm season, provider capacity fills fast.',
  },
  {
    num: '02',
    name: 'Storm Debris Cleanup',
    desc: 'Texas storm events — hail, high winds, ice storms, and hurricane remnants along the coast — generate debris that needs fast removal. Branches, damaged siding, fencing, and construction material from structural repairs fill containers quickly.',
  },
  {
    num: '03',
    name: 'Construction Debris',
    desc: 'Population growth and corporate relocations fuel year-round new construction across Texas metros. Houston, Dallas, and Austin see constant residential and commercial buildout generating framing lumber, drywall, and mixed C&D waste.',
  },
  {
    num: '04',
    name: 'Home Cleanouts',
    desc: "Texas suburbs built in the 1970s, 80s, and 90s are turning over as original owners downsize. Estate cleanouts and pre-sale clearances in these neighborhoods regularly fill a 15 or 20-yard container — sometimes more for larger ranch-style homes.",
  },
  {
    num: '05',
    name: 'Commercial Renovation',
    desc: 'Corporate relocations and commercial tenant turnover drive active buildout across DFW, Houston, and Austin. Office gut jobs, retail conversions, and restaurant renovations generate significant debris at commercial scale.',
  },
]

const faq = [
  {
    q: 'How much does dumpster rental cost in Texas?',
    a: 'Pricing varies by city and container size. Texas markets differ significantly — Dallas-Fort Worth and Houston tend to run similar ranges to other large metros. A 10-yard container typically runs $250–$450 per week. A 20-yard runs $350–$650. Get an itemized quote specific to your city — fuel surcharges and disposal fees vary by provider and market.',
  },
  {
    q: 'Can I get a dumpster for hail damage or storm cleanup in Texas?',
    a: 'Yes. A 20-yard container handles most residential roofing tear-offs after hail damage. During active storm seasons in North Texas, provider capacity tightens fast — booking as soon as you have a contractor lined up gives you the best chance at same-week delivery.',
  },
  {
    q: 'What size dumpster do I need for a Texas home cleanout?',
    a: 'A 20-yard container handles most full-home cleanouts. For a garage or single room, a 10-yard is usually enough. Large suburban Texas homes — especially those with detached garages or pool equipment — often generate more debris than expected. Size up if you are unsure.',
  },
  {
    q: 'What about concrete, dirt, or heavy debris in Texas?',
    a: 'Dense material hits weight limits at roughly half the container volume. Concrete, soil, and brick need a heavy-material container with the right allowance. Texas construction projects often involve significant concrete flatwork and caliche — tell your provider what you are hauling before they quote you.',
  },
  {
    q: 'How quickly can I get dumpster delivery in Texas?',
    a: 'In major metros like Dallas, Houston, and Austin, same-week delivery is typically available. During hail season or after major storm events, lead times stretch as providers get slammed with roofing jobs. During normal periods, plan for 24–48 hours in metro areas.',
  },
  {
    q: 'Do you serve multiple Texas cities?',
    a: 'We are building out Texas city guides for Dallas, Houston, Austin, San Antonio, Fort Worth, and Plano. Delivery coverage and pricing vary significantly across Texas markets — give us a call to get matched with a provider in your area.',
  },
  {
    q: 'How long can I keep a dumpster rental in Texas?',
    a: 'Standard rental periods run 7–10 days. Extension rates typically run $5–$15 per day depending on the provider and market. If the project will run long, ask about extended pricing when you book.',
  },
  {
    q: 'Are there items I cannot put in a Texas dumpster?',
    a: 'Hazardous materials — paint, solvents, motor oil, propane tanks, car batteries, and appliances with refrigerants — are not accepted in standard roll-off containers. Asbestos-containing materials in pre-1980 Texas homes require special handling. If you suspect asbestos in floor tile, roofing material, or insulation, test before you demo.',
  },
]

export default function TexasLocationsPage() {
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
            {' '}/ Texas
          </p>
          <h1 className="text-[clamp(30px,5vw,52px)] font-extrabold text-white leading-[1.08] tracking-tight mb-5">
            Roll-Off Dumpster Rental in Texas
          </h1>
          <p className="text-[17px] text-white/[.58] max-w-[580px] leading-[1.65]">
            Find local roll-off dumpster rental options for roofing tear-offs, home cleanouts,
            storm debris, construction projects, and renovation jobs across Texas.
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
            <Link
              href="/locations/utah"
              className="inline-flex items-center gap-2 px-[18px] py-[9px] rounded-sm text-[13px] font-semibold bg-charcoal text-white border-2 border-orange hover:opacity-90 transition-opacity"
            >
              <span className="w-[7px] h-[7px] rounded-full bg-orange shrink-0" aria-hidden="true" />
              Utah
            </Link>
            <div className="inline-flex items-center gap-2 px-[18px] py-[9px] rounded-sm text-[13px] font-semibold bg-charcoal text-white border-2 border-orange">
              <span className="w-[7px] h-[7px] rounded-full bg-orange shrink-0" aria-hidden="true" />
              Texas
            </div>
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

      {/* Image banner */}
      <section className="bg-[#F5F4F0] pt-12 px-8">
        <div className="max-w-[1200px] mx-auto rounded-2xl overflow-hidden shadow-sm relative min-h-[240px] lg:min-h-[290px]">
          <img
            src="/home-page-images/commercial-construction-roll-off-dumpster-rental.png"
            alt="Roll-off dumpster rental for residential and construction projects in Texas"
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
                Residential and Commercial Roll-Off Rentals Across Texas
              </p>
              <p className="text-[13px] text-white/[.65] leading-[1.6]">
                Roofing tear-offs, storm cleanup, home cleanouts, and construction debris — from Dallas to Houston to the Hill Country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro copy */}
      <section className="bg-[#F5F4F0] pt-14 pb-4 px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <p className="text-[15px] text-[#566070] leading-[1.75]">
            Texas sits squarely in Hail Alley, and North Texas takes the worst of it. A single spring storm system can trigger thousands of roofing replacements across the Dallas–Fort Worth area in a weekend. A 20-yard container fills fast on a residential tear-off — and after a major hail event, provider capacity across the market stretches thin. Book early if you know a storm came through.
          </p>
          <p className="text-[15px] text-[#566070] leading-[1.75]">
            Beyond storm cleanup, Texas construction runs year-round. Steady population growth and corporate relocations fuel residential and commercial builds across every major metro. Houston and Dallas are constant build-out markets. Austin&apos;s tech sector has pushed renovation into neighborhoods that were quiet a decade ago. San Antonio&apos;s military installations generate contractor and housing turnover that does not slow between seasons.
          </p>
          <p className="text-[15px] text-[#566070] leading-[1.75]">
            Rolloff Dumpster Finder is building out Texas city guides for Dallas, Houston, Austin, San Antonio, Fort Worth, and Plano. Pricing, provider coverage, and delivery lead times vary significantly across Texas markets. Give us a call to get matched with the right provider for your city and project.
          </p>
        </div>
      </section>

      {/* City cards */}
      <section className="bg-[#F5F4F0] py-16 px-8">
        <div className="max-w-[1200px] mx-auto mb-10">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-2">
            Texas Dumpster Rental by City
          </h2>
          <p className="text-[15px] text-[#6B7280] leading-[1.6]">
            City-level guides are in progress. Get a quote for your city now — delivery coverage
            and pricing vary by market.
          </p>
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cityCards.map((card) => (
            <article
              key={card.city}
              className="bg-charcoal border border-white/[.06] rounded-sm p-7 flex flex-col transition-all duration-200 hover:bg-[#1A2530] hover:shadow-[0_10px_36px_rgba(0,0,0,.3)]"
            >
              <p className="text-[9px] font-bold uppercase tracking-[.12em] text-orange mb-[10px]">
                ● Texas Location
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

      {/* Common projects */}
      <section className="bg-charcoal py-[72px] px-8">
        <div className="max-w-[1200px] mx-auto mb-10">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-white tracking-tight mb-2">
            Common Projects in Texas
          </h2>
          <p className="text-[15px] text-white/[.5] leading-[1.6]">
            Hail storms, year-round construction, and a steady population boom shape Texas dumpster
            demand. Here are the project types that drive the most volume across the state.
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

      {/* Size guide band */}
      <section className="bg-white border-y border-[#E8E4DE] py-16 px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div>
            <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
            <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-3">
              Not sure what size you need?
            </h2>
            <p className="text-[15px] text-[#6B7280] leading-[1.7] mb-8">
              A 10-yard container holds roughly 3 pickup truck loads and covers most single-room
              cleanouts or small roofing jobs. A 20-yard handles most home cleanouts, full roofing
              tear-offs, and mid-size renovations. A 30-yard covers a full gut renovation, large
              demolition, or extended construction site cleanup. In Texas, concrete flatwork and
              caliche hit weight limits fast — get a heavy-material quote if you are hauling dense
              debris.
            </p>
            <Link
              href="/resources/how-to-choose-the-right-dumpster-size"
              className="inline-block bg-orange text-black font-bold text-[14px] px-[28px] py-[13px] rounded-full hover:opacity-90 transition-opacity"
            >
              View Dumpster Size Guide
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <img
              src="/home-page-images/residential-cleanout-dumpster.png"
              alt="Residential cleanout roll-off dumpster rental in Texas"
              width={1448}
              height={1086}
              loading="lazy"
              className="w-full h-[300px] lg:h-[360px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F5F4F0] py-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-10">
            Texas Dumpster Rental — Straight Answers
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

      {/* Dark CTA band */}
      <section className="bg-[#1A2530] py-[72px] px-8 text-center">
        <div className="w-11 h-1 bg-orange rounded-sm mx-auto mb-6" />
        <h2 className="text-[clamp(26px,4vw,38px)] font-extrabold text-white tracking-tight mb-[14px]">
          Need a Dumpster in Texas?
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

      {/* Provider CTA */}
      <section className="bg-white border-t border-[#E8E4DE] py-10 px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#9CA3AF] mb-1">
              For Companies
            </p>
            <p className="text-[15px] font-semibold text-charcoal leading-[1.5]">
              Operating a roll-off company in Texas?{' '}
              <Link
                href="/providers/texas"
                className="text-orange hover:opacity-80 transition-opacity underline underline-offset-2"
              >
                Browse the Texas provider directory.
              </Link>
            </p>
          </div>
          <Link
            href="/providers/texas"
            className="shrink-0 inline-block text-charcoal font-semibold text-[13px] px-[22px] py-[10px] rounded-full border border-[#D1CEC8] hover:border-charcoal transition-colors"
          >
            View Texas Providers
          </Link>
        </div>
      </section>
    </>
  )
}
