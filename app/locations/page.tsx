import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Roll-Off Dumpster Rental Locations',
  description:
    'Find local roll-off dumpster rental options for home cleanouts, roofing jobs, construction debris, demolition projects, and more. Currently serving Colorado.',
  alternates: {
    canonical: 'https://rolloffdumpsterfinder.com/locations',
  },
  openGraph: {
    title: 'Roll-Off Dumpster Rental Locations | Rolloff Dumpster Finder',
    description:
      'Find local roll-off dumpster rental options for home cleanouts, roofing jobs, construction debris, demolition projects, and more. Currently serving Colorado.',
    url: 'https://rolloffdumpsterfinder.com/locations',
    siteName: 'Rolloff Dumpster Finder',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roll-Off Dumpster Rental Locations | Rolloff Dumpster Finder',
    description:
      'Find local roll-off dumpster rental options for home cleanouts, roofing jobs, construction debris, demolition projects, and more. Currently serving Colorado.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rolloffdumpsterfinder.com' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://rolloffdumpsterfinder.com/locations' },
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
    name: 'Roofing Dumpster Rentals',
    desc: 'Container-only rentals sized for shingle tear-offs and roofing debris, with weight limits built for heavy loads.',
  },
  {
    num: '02',
    name: 'Construction Dumpster Rentals',
    desc: 'Mixed C&D waste from framing, drywall, concrete, and lumber. Available in 20 and 30-yard sizes.',
  },
  {
    num: '03',
    name: 'Home Cleanout Dumpsters',
    desc: 'Full house, estate, or garage cleanouts. Drop-and-go rental with flexible pickup scheduling.',
  },
  {
    num: '04',
    name: 'Demolition Dumpsters',
    desc: 'Concrete, block, and structural debris. Heavy material rentals with appropriate weight allowances.',
  },
  {
    num: '05',
    name: 'Yard Waste Dumpsters',
    desc: 'Tree branches, sod, and brush after a landscaping project. Clean yard waste typically hauls at a lower rate than mixed loads.',
  },
]

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
            Roll-Off Dumpster Rental Locations
          </h1>
          <p className="text-[17px] text-white/[.58] max-w-[580px] leading-[1.65]">
            Find local roll-off dumpster rental options for home cleanouts, roofing jobs,
            construction debris, demolition projects, and more.
          </p>
        </div>
      </section>

      {/* Section 1 — Browse by state */}
      <section className="bg-white py-12 px-8 border-b border-[#E8E4DE]">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[.12em] text-orange mb-3">
            Browse by State
          </p>
          <p className="text-[15px] text-[#6B7280] max-w-[520px] leading-[1.6] mb-5">
            We are currently operating in Colorado. Additional states are being added.
          </p>
          <div className="flex flex-wrap gap-[10px] mt-5">
            {/* Active state */}
            <div className="inline-flex items-center gap-2 px-[18px] py-[9px] rounded-sm text-[13px] font-semibold bg-charcoal text-white border-2 border-orange">
              <span className="w-[7px] h-[7px] rounded-full bg-orange shrink-0" aria-hidden="true" />
              Colorado
            </div>
            {/* Coming soon states */}
            {['Arizona', 'Texas', 'Wyoming', 'New Mexico'].map((state) => (
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

      {/* Section 2 — Colorado city cards */}
      <section className="bg-[#F5F4F0] py-16 px-8">
        <div className="max-w-[1200px] mx-auto mb-10">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-2">
            Popular Colorado Dumpster Rental Locations
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
                  View Location Guide
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Section 3 — Common projects */}
      <section className="bg-charcoal py-[72px] px-8">
        <div className="max-w-[1200px] mx-auto mb-10">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-white tracking-tight mb-2">
            Common Projects We Help With
          </h2>
          <p className="text-[15px] text-white/[.5] leading-[1.6]">
            The right container size depends on what you are hauling. Here are the most common
            project types we handle.
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

      {/* Section 4 — Size guide band */}
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

      {/* Section 5 — Dark CTA band */}
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
