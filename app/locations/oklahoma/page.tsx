import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Oklahoma Dumpster Rental Locations | Rolloff Dumpster Finder',
  description:
    'Find roll-off dumpster rental options across Oklahoma for tornado and storm cleanup, home cleanouts, roofing tear-offs, and construction debris.',
  alternates: {
    canonical: 'https://rolloffdumpsterfinder.com/locations/oklahoma',
  },
  openGraph: {
    title: 'Oklahoma Dumpster Rental Locations | Rolloff Dumpster Finder',
    description:
      'Find roll-off dumpster rental options across Oklahoma for tornado and storm cleanup, home cleanouts, roofing tear-offs, and construction debris.',
    url: 'https://rolloffdumpsterfinder.com/locations/oklahoma',
    siteName: 'Rolloff Dumpster Finder',
    type: 'website',
    images: [
      {
        url: 'https://rolloffdumpsterfinder.com/home-page-images/hero-dumpster-construction.png',
        width: 1672,
        height: 941,
        alt: 'Roll-off dumpster rental in Oklahoma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oklahoma Dumpster Rental Locations | Rolloff Dumpster Finder',
    description:
      'Find roll-off dumpster rental options across Oklahoma for tornado and storm cleanup, home cleanouts, roofing tear-offs, and construction debris.',
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
      name: 'Oklahoma',
      item: 'https://rolloffdumpsterfinder.com/locations/oklahoma',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does dumpster rental cost in Oklahoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 10-yard container runs $250–$420 in Oklahoma City and Tulsa metro markets. Smaller markets like Lawton may run slightly higher due to fewer providers. Get an itemized quote — fuel surcharges and disposal fees are often listed separately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a dumpster for tornado or storm cleanup in Oklahoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Oklahoma sits in Tornado Alley and storm cleanup is one of the most common reasons residents rent roll-off containers. During and after major weather events, availability can tighten quickly — call as soon as you know you need a container.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size dumpster do I need for an Oklahoma home cleanout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 20-yard container handles most full-home cleanouts in Oklahoma. For a single room, garage, or basement, a 10-yard is usually enough. If the property has been occupied long-term or includes an outbuilding, size up to avoid a second pull fee.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a permit to place a dumpster in Oklahoma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Street placement in Oklahoma cities requires a right-of-way permit from the city. Driveway placement on private property does not typically require a permit. Suburban municipalities — Moore, Edmond, Broken Arrow — have their own rules separate from OKC and Tulsa.',
      },
    },
  ],
}

const cityCards = [
  {
    city: 'Oklahoma City',
    slug: 'oklahoma-city-ok-dumpster-rental',
    desc: 'Oklahoma\'s capital and largest city. Storm and tornado cleanup, home cleanouts, and construction debris across the OKC metro.',
  },
  {
    city: 'Tulsa',
    slug: 'tulsa-ok-dumpster-rental',
    desc: 'Oklahoma\'s second city. Home cleanouts, historic home renovation, storm debris, and construction projects across the Tulsa metro.',
  },
  {
    city: 'Norman',
    slug: 'norman-ok-dumpster-rental',
    desc: 'Home of the University of Oklahoma. Home cleanouts, rental property turnover, construction debris, and storm cleanup in Cleveland County.',
  },
  {
    city: 'Broken Arrow',
    slug: 'broken-arrow-ok-dumpster-rental',
    desc: 'Tulsa\'s largest suburb. New construction debris, home cleanouts, renovation projects, and storm cleanup across the east Tulsa metro.',
  },
  {
    city: 'Edmond',
    slug: 'edmond-ok-dumpster-rental',
    desc: 'Fast-growing suburb north of OKC. New construction containers, full-home cleanouts, renovation projects, and storm cleanup.',
  },
  {
    city: 'Lawton',
    slug: 'lawton-ok-dumpster-rental',
    desc: 'Southwest Oklahoma adjacent to Fort Sill. Home cleanouts, military housing turnover, construction debris, and storm cleanup in Comanche County.',
  },
]

const projects = [
  {
    num: '01',
    name: 'Tornado & Storm Cleanup',
    desc: 'Oklahoma sits in Tornado Alley. Post-storm debris — roofing, siding, wood framing, fence material — is one of the largest drivers of roll-off container demand statewide.',
  },
  {
    num: '02',
    name: 'Roofing Tear-Offs',
    desc: 'Hail and wind damage from Oklahoma\'s severe weather season drives consistent shingle replacement. A 20-yard handles most residential tear-offs across the state.',
  },
  {
    num: '03',
    name: 'Home Cleanouts',
    desc: 'Full-house, estate, and garage cleanouts across Oklahoma\'s residential markets. A 10–20 yard handles most cleanout volumes in OKC, Tulsa, and their suburbs.',
  },
  {
    num: '04',
    name: 'Construction & New Builds',
    desc: 'Oklahoma City and Tulsa are among Oklahoma\'s fastest-growing metros. Mixed C&D waste from framing, drywall, and finish work is a steady demand driver year-round.',
  },
  {
    num: '05',
    name: 'Renovation & Remodels',
    desc: 'Kitchen, bathroom, and structural remodels across Oklahoma\'s established residential neighborhoods and growing suburbs generate consistent container demand.',
  },
]

const faq = [
  {
    q: 'How much does dumpster rental cost in Oklahoma?',
    a: 'A 10-yard container runs $250–$420 in Oklahoma City and Tulsa metro markets. Smaller markets like Lawton may run slightly higher due to fewer providers. Get an itemized quote — fuel surcharges and disposal fees are often listed separately.',
  },
  {
    q: 'Can I get a dumpster for tornado or storm cleanup?',
    a: 'Yes. Oklahoma sits in Tornado Alley and storm cleanup is one of the most common reasons residents rent roll-off containers. During and after major weather events, availability can tighten quickly — call as soon as you know you need a container.',
  },
  {
    q: 'What size dumpster do I need for an Oklahoma home cleanout?',
    a: 'A 20-yard container handles most full-home cleanouts. For a single room, garage, or basement, a 10-yard is usually enough. If the property has been occupied long-term or includes an outbuilding, size up to avoid a second pull fee.',
  },
  {
    q: 'Do I need a permit to place a dumpster in Oklahoma?',
    a: 'Street placement in Oklahoma cities requires a right-of-way permit from the city. Driveway placement on private property does not typically require a permit. Suburban municipalities — Moore, Edmond, Broken Arrow — have their own rules separate from OKC and Tulsa.',
  },
  {
    q: 'How quickly can I get delivery in Oklahoma City or Tulsa?',
    a: 'OKC and Tulsa providers typically deliver within 24–48 hours. During post-storm surges, lead times can extend — call early. Smaller markets like Lawton and Norman book 48–72 hours out under normal conditions.',
  },
  {
    q: 'What items are prohibited in Oklahoma dumpsters?',
    a: 'Hazardous materials — paint, solvents, motor oil, batteries, propane tanks — are prohibited in standard roll-offs. Tires, appliances with refrigerants, and electronics vary by provider. Ask for the prohibited items list before loading.',
  },
  {
    q: 'Do Oklahoma providers serve suburban cities like Moore and Midwest City?',
    a: 'Most OKC-area providers cover Moore, Edmond, Midwest City, Yukon, and surrounding communities. Tulsa providers typically cover Broken Arrow, Owasso, Jenks, and Bixby. Confirm service area at booking.',
  },
  {
    q: 'Are there extra surcharges after a tornado or storm event?',
    a: 'Some providers add surge pricing or priority delivery fees after major storm events when demand spikes. Get a written quote before booking. If you can wait a few days after the immediate storm window, pricing typically normalizes.',
  },
]

export default function OklahomaLocationsPage() {
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
            {' '}/ Oklahoma
          </p>
          <h1 className="text-[clamp(30px,5vw,52px)] font-extrabold text-white leading-[1.08] tracking-tight mb-5">
            Roll-Off Dumpster Rental in Oklahoma
          </h1>
          <p className="text-[17px] text-white/[.58] max-w-[580px] leading-[1.65]">
            Find local roll-off dumpster rental options for tornado and storm cleanup, home
            cleanouts, roofing tear-offs, and construction debris across Oklahoma.
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
            <div className="inline-flex items-center gap-2 px-[18px] py-[9px] rounded-sm text-[13px] font-semibold bg-charcoal text-white border-2 border-orange">
              <span className="w-[7px] h-[7px] rounded-full bg-orange shrink-0" aria-hidden="true" />
              Oklahoma
            </div>
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
            src="/home-page-images/hero-dumpster-construction.png"
            alt="Roll-off dumpster rental for storm cleanup and construction projects in Oklahoma"
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
                Storm Cleanup, Home Cleanouts, and Construction — Covered Statewide
              </p>
              <p className="text-[13px] text-white/[.65] leading-[1.6]">
                From Oklahoma City to Lawton, roll-off container rental for residential and commercial Oklahoma projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City cards */}
      <section className="bg-[#F5F4F0] py-16 px-8">
        <div className="max-w-[1200px] mx-auto mb-10">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-2">
            Oklahoma Dumpster Rental by City
          </h2>
          <p className="text-[15px] text-[#6B7280] leading-[1.6]">
            Roll-off dumpster rental guides for Oklahoma cities. Delivery zones and availability
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
                ● Oklahoma Location
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

      {/* Common projects */}
      <section className="bg-charcoal py-[72px] px-8">
        <div className="max-w-[1200px] mx-auto mb-10">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-white tracking-tight mb-2">
            Common Projects in Oklahoma
          </h2>
          <p className="text-[15px] text-white/[.5] leading-[1.6]">
            Oklahoma&apos;s position in Tornado Alley, fast-growing metros, and a mix of urban and
            rural markets shape a specific set of dumpster rental needs. Here are the most common
            project types we handle across the state.
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
              A 10-yard container holds roughly 3 pickup truck loads. A 20-yard handles most home
              cleanouts and mid-size renovation jobs. For post-tornado cleanup with structural
              debris — wood framing, insulation, roofing — a 30-yard gives you the buffer to avoid
              a second pull. Getting the size right the first time matters most when you are already
              managing storm damage.
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
              alt="Residential cleanout roll-off dumpster rental in Oklahoma"
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
            Oklahoma Dumpster Rental — Straight Answers
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
          Need a Dumpster in Oklahoma?
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
    </>
  )
}
