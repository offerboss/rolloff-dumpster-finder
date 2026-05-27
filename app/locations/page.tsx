import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dumpster Rental Locations | Rolloff Dumpster Finder',
  description:
    'Browse dumpster rental guides by state. We currently serve Colorado, Arizona, Utah, Texas, Wyoming, and Oklahoma with local pricing, city guides, and roll-off rental options.',
  alternates: {
    canonical: 'https://rolloffdumpsterfinder.com/locations',
  },
  openGraph: {
    title: 'Dumpster Rental Locations | Rolloff Dumpster Finder',
    description:
      'Browse dumpster rental guides by state. We currently serve Colorado, Arizona, Utah, Texas, Wyoming, and Oklahoma with local pricing, city guides, and roll-off rental options.',
    url: 'https://rolloffdumpsterfinder.com/locations',
    siteName: 'Rolloff Dumpster Finder',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dumpster Rental Locations | Rolloff Dumpster Finder',
    description:
      'Browse dumpster rental guides by state. We currently serve Colorado, Arizona, Utah, Texas, Wyoming, and Oklahoma with local pricing, city guides, and roll-off rental options.',
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
  ],
}

const stateCards = [
  {
    state: 'Colorado',
    href: '/locations/colorado',
    cities: 'Denver, Colorado Springs, Fort Collins, Boulder, Grand Junction, and Steamboat Springs.',
    cityCount: 6,
    desc: 'Front Range and Western Slope roll-off dumpster rental guides covering residential cleanouts, hail-season roofing jobs, and construction projects.',
  },
  {
    state: 'Arizona',
    href: '/locations/arizona',
    cities: 'Phoenix, Scottsdale, Mesa, Chandler, Tempe, and Glendale.',
    cityCount: 6,
    desc: 'Metro Phoenix and Valley of the Sun roll-off dumpster rental guides for home cleanouts, roofing tear-offs, desert landscaping, and construction debris.',
  },
  {
    state: 'Utah',
    href: '/locations/utah',
    cities: 'Salt Lake City, West Valley City, Provo, Ogden, Sandy, and Lehi.',
    cityCount: 6,
    desc: 'Wasatch Front and Utah Valley roll-off dumpster rental guides for home cleanouts, construction debris, estate cleanouts, and renovation projects.',
  },
  {
    state: 'Texas',
    href: '/locations/texas',
    cities: 'Dallas, Houston, Austin, San Antonio, Fort Worth, and Plano.',
    cityCount: 6,
    desc: 'Hail Alley roofing tear-offs, year-round construction debris, storm cleanup, and home renovation dumpster rental guides across major Texas metros.',
  },
  {
    state: 'Wyoming',
    href: '/locations/wyoming',
    cities: 'Cheyenne, Casper, Gillette, Laramie, Rock Springs, and Sheridan.',
    cityCount: 6,
    desc: 'Wyoming roll-off dumpster rental guides for home cleanouts, ranch property debris, construction projects, and wind and hail storm cleanup across the state.',
  },
  {
    state: 'Oklahoma',
    href: '/locations/oklahoma',
    cities: 'Oklahoma City, Tulsa, Norman, Broken Arrow, Edmond, and Lawton.',
    cityCount: 6,
    desc: 'Oklahoma roll-off dumpster rental guides for tornado and storm cleanup, home cleanouts, roofing tear-offs, and construction debris across the state.',
  },
]

const comingSoon = ['New Mexico']

export default function LocationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
          <h1 className="text-[clamp(30px,5vw,52px)] font-extrabold text-white leading-[1.08] tracking-tight mb-5">
            Dumpster Rental Locations
          </h1>
          <p className="text-[17px] text-white/[.58] max-w-[580px] leading-[1.65]">
            We currently serve Colorado, Arizona, Utah, Texas, Wyoming, and Oklahoma. Select your
            state to browse city guides, local pricing, and roll-off rental options.
          </p>
        </div>
      </section>

      {/* State cards */}
      <section className="bg-[#F5F4F0] py-16 px-8">
        <div className="max-w-[1200px] mx-auto mb-10">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-2">
            Browse by State
          </h2>
          <p className="text-[15px] text-[#6B7280] leading-[1.6]">
            Select a state to see city-level dumpster rental guides, local pricing, and delivery
            information.
          </p>
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {stateCards.map((card) => (
            <article
              key={card.state}
              className="bg-charcoal border border-white/[.06] rounded-sm p-8 flex flex-col transition-all duration-200 hover:bg-[#1A2530] hover:shadow-[0_10px_36px_rgba(0,0,0,.3)]"
            >
              <p className="text-[9px] font-bold uppercase tracking-[.12em] text-orange mb-[10px]">
                ● Active State — {card.cityCount} Cities
              </p>
              <h2 className="text-[32px] font-extrabold text-white tracking-tight leading-[1.1] mb-3">
                {card.state}
              </h2>
              <p className="text-[13px] text-white/[.65] leading-[1.55] mb-2 font-medium">
                {card.cities}
              </p>
              <p className="text-[13px] text-white/[.42] leading-[1.65] flex-1 mb-7">
                {card.desc}
              </p>
              <Link
                href={card.href}
                className="inline-block bg-orange text-black font-bold text-[12px] px-[18px] py-[9px] rounded-full hover:opacity-90 transition-opacity self-start"
              >
                Browse {card.state}
              </Link>
            </article>
          ))}
        </div>

        {/* Coming soon */}
        <div className="max-w-[1200px] mx-auto mt-8">
          <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#9CA3AF] mb-3">
            Coming Soon
          </p>
          <div className="flex flex-wrap gap-[10px]">
            {comingSoon.map((state) => (
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

      {/* Size guide band */}
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
              roofing tear-off, or extended construction job. Booking the wrong size means paying
              for a second pull.
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

      {/* Dark CTA band */}
      <section className="bg-[#1A2530] py-[72px] px-8 text-center">
        <div className="w-11 h-1 bg-orange rounded-sm mx-auto mb-6" />
        <h2 className="text-[clamp(26px,4vw,38px)] font-extrabold text-white tracking-tight mb-[14px]">
          Need a Dumpster Now?
        </h2>
        <p className="text-[16px] text-white/[.52] max-w-[460px] mx-auto mb-8 leading-[1.65]">
          Tell us your city, project type, and how much material you have. We will match you with
          the right container and schedule a drop.
        </p>
        <a
          href="https://rolloffdumpsterfinder.com/#section-i0tmdJpJCs"
          className="inline-block bg-orange text-black font-bold text-[14px] px-[28px] py-[13px] rounded-full hover:opacity-90 transition-opacity"
        >
          Book Now / Get Quote
        </a>
      </section>
    </>
  )
}
