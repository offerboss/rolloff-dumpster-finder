import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wyoming Dumpster Rental Locations | Rolloff Dumpster Finder',
  description:
    'Find roll-off dumpster rental options across Wyoming for home cleanouts, ranch property debris, construction projects, and wind and hail storm cleanup.',
  alternates: {
    canonical: 'https://rolloffdumpsterfinder.com/locations/wyoming',
  },
  openGraph: {
    title: 'Wyoming Dumpster Rental Locations | Rolloff Dumpster Finder',
    description:
      'Find roll-off dumpster rental options across Wyoming for home cleanouts, ranch property debris, construction projects, and wind and hail storm cleanup.',
    url: 'https://rolloffdumpsterfinder.com/locations/wyoming',
    siteName: 'Rolloff Dumpster Finder',
    type: 'website',
    images: [
      {
        url: 'https://rolloffdumpsterfinder.com/home-page-images/hero-dumpster-construction.png',
        width: 1672,
        height: 941,
        alt: 'Roll-off dumpster rental in Wyoming',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wyoming Dumpster Rental Locations | Rolloff Dumpster Finder',
    description:
      'Find roll-off dumpster rental options across Wyoming for home cleanouts, ranch property debris, construction projects, and wind and hail storm cleanup.',
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
      name: 'Wyoming',
      item: 'https://rolloffdumpsterfinder.com/locations/wyoming',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does dumpster rental cost in Wyoming?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 10-yard container runs $260–$440 in most Wyoming markets. Wyoming has a smaller provider pool than neighboring Colorado, which keeps pricing slightly higher. Mountain and rural markets may add a mileage surcharge on top of the base rental rate.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size dumpster do I need for a Wyoming home cleanout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 20-yard container handles most full-home cleanouts. For a single room, garage, or basement, a 10-yard is usually enough. Ranch and rural properties with outbuildings often need a 30-yard or multiple pulls.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Wyoming winter weather affect dumpster delivery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Snow, ice, and high winds can delay delivery and pickup from November through March across most of Wyoming. Build extra lead time into your schedule if your project falls in that window, and confirm road access before scheduling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a permit to place a dumpster in Wyoming?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Street placement within any Wyoming city requires a right-of-way permit from the city. Driveway placement on private property does not typically require a permit. Rural placements on private land generally do not require a permit, but confirm county road rules if the container will be near a road.',
      },
    },
  ],
}

const cityCards = [
  {
    city: 'Cheyenne',
    slug: 'cheyenne-wy-dumpster-rental',
    desc: 'Wyoming\'s capital city. Home cleanouts, construction debris, and wind storm cleanup in Laramie County.',
  },
  {
    city: 'Casper',
    slug: 'casper-wy-dumpster-rental',
    desc: 'Central Wyoming dumpster rental for home cleanouts, residential construction, roofing projects, and ranch property debris in Natrona County.',
  },
  {
    city: 'Gillette',
    slug: 'gillette-wy-dumpster-rental',
    desc: 'Northeast Wyoming\'s commercial hub. Residential cleanouts, construction debris, and rural Campbell County deliveries.',
  },
  {
    city: 'Laramie',
    slug: 'laramie-wy-dumpster-rental',
    desc: 'University of Wyoming city. Home and rental property cleanouts, construction debris, and renovation projects in Albany County.',
  },
  {
    city: 'Rock Springs',
    slug: 'rock-springs-wy-dumpster-rental',
    desc: 'Southwest Wyoming along I-80. Home cleanouts, construction debris, and rural Sweetwater County deliveries.',
  },
  {
    city: 'Sheridan',
    slug: 'sheridan-wy-dumpster-rental',
    desc: 'Northern Wyoming at the base of the Bighorn Mountains. Home cleanouts, ranch property debris, and historic home renovations.',
  },
]

const projects = [
  {
    num: '01',
    name: 'Home & Estate Cleanouts',
    desc: 'Full-house, garage, and estate cleanouts across Wyoming\'s residential base. Mid-century homes in Cheyenne and Casper generate estate volume when ownership changes.',
  },
  {
    num: '02',
    name: 'Ranch & Rural Property',
    desc: 'Outbuildings, equipment sheds, and accumulated debris on Wyoming\'s agricultural and ranch parcels are a common source of large-container requests.',
  },
  {
    num: '03',
    name: 'Construction & New Builds',
    desc: 'Cheyenne and Casper lead Wyoming\'s residential construction market. Mixed C&D debris from framing, drywall, and finish work works best in 20 and 30-yard containers.',
  },
  {
    num: '04',
    name: 'Wind & Hail Storm Cleanup',
    desc: 'Wyoming\'s high plains and mountain terrain produce significant wind events. Fence damage, roof loss, and outbuilding debris are recurring post-storm container requests statewide.',
  },
  {
    num: '05',
    name: 'Roofing Projects',
    desc: 'Hail and wind load damage drives shingle and metal roof replacements across Wyoming cities. A 20-yard handles most residential tear-offs. Confirm weight limits before loading.',
  },
]

const faq = [
  {
    q: 'How much does dumpster rental cost in Wyoming?',
    a: 'A 10-yard container runs $260–$440 in most Wyoming markets. Wyoming has a smaller provider pool than neighboring Colorado, which keeps pricing slightly higher. Mountain and rural markets may add a mileage surcharge on top of the base rental rate.',
  },
  {
    q: 'What size dumpster do I need for a Wyoming home cleanout?',
    a: 'A 20-yard container handles most full-home cleanouts. For a single room, garage, or basement, a 10-yard is usually enough. Ranch and rural properties with outbuildings often need a 30-yard or multiple pulls.',
  },
  {
    q: 'Does Wyoming winter weather affect delivery?',
    a: 'Yes. Snow, ice, and high winds can delay delivery and pickup from November through March. Build extra lead time into your schedule if your project falls in that window, and confirm road access before scheduling.',
  },
  {
    q: 'Do I need a permit to place a dumpster in Wyoming?',
    a: 'Street placement within Wyoming cities requires a right-of-way permit from the city. Driveway placement on private property does not typically require a permit. Rural placements on private land generally do not require a permit.',
  },
  {
    q: 'Can I get a dumpster for a ranch or rural property in Wyoming?',
    a: 'Yes. Most providers serving Wyoming cities also cover surrounding rural areas. Rural delivery may carry a mileage surcharge and require more lead time. Confirm road access and service area when booking.',
  },
  {
    q: 'How quickly can I get delivery in Wyoming?',
    a: 'Cheyenne and Casper providers typically deliver within 48–72 hours. Smaller markets like Sheridan, Rock Springs, and Gillette may need 3–5 business days. Summer months tighten availability — book ahead.',
  },
  {
    q: 'What items are prohibited in Wyoming dumpsters?',
    a: 'Hazardous materials — paint, solvents, oils, batteries, propane tanks — are prohibited in all standard roll-offs. Tires and appliances containing refrigerants are also typically restricted. Ask your provider for the full prohibited items list before loading.',
  },
  {
    q: 'Are there special considerations for high-altitude or mountain delivery?',
    a: 'Yes. Wyoming\'s high plains and mountain terrain can restrict access for large containers, particularly in winter. Steep grades and unpaved roads may limit which container sizes can be delivered. Confirm access conditions with your provider before booking.',
  },
]

export default function WyomingLocationsPage() {
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
            {' '}/ Wyoming
          </p>
          <h1 className="text-[clamp(30px,5vw,52px)] font-extrabold text-white leading-[1.08] tracking-tight mb-5">
            Roll-Off Dumpster Rental in Wyoming
          </h1>
          <p className="text-[17px] text-white/[.58] max-w-[580px] leading-[1.65]">
            Find local roll-off dumpster rental options for home cleanouts, ranch property debris,
            construction projects, and storm cleanup across Wyoming.
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
            <div className="inline-flex items-center gap-2 px-[18px] py-[9px] rounded-sm text-[13px] font-semibold bg-charcoal text-white border-2 border-orange">
              <span className="w-[7px] h-[7px] rounded-full bg-orange shrink-0" aria-hidden="true" />
              Wyoming
            </div>
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
            src="/home-page-images/hero-dumpster-construction.png"
            alt="Roll-off dumpster rental for residential and construction projects in Wyoming"
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
                Home Cleanouts, Ranch Debris, and Construction — Covered Statewide
              </p>
              <p className="text-[13px] text-white/[.65] leading-[1.6]">
                From Cheyenne to Sheridan, roll-off container rental for residential and rural Wyoming projects.
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
            Wyoming Dumpster Rental by City
          </h2>
          <p className="text-[15px] text-[#6B7280] leading-[1.6]">
            Roll-off dumpster rental guides for Wyoming cities. Delivery zones and availability
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
                ● Wyoming Location
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
            Common Projects in Wyoming
          </h2>
          <p className="text-[15px] text-white/[.5] leading-[1.6]">
            Wyoming&apos;s mix of urban residential, ranch agricultural, and high-plains industrial
            properties creates a distinct set of roll-off rental needs. Here are the most common
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
              A 10-yard container holds roughly 3 pickup truck loads and handles a single room or
              garage. A 20-yard covers most full-home cleanouts and standard roofing jobs. In
              Wyoming, ranch and rural properties with decades of accumulated material often need a
              30-yard or multiple pulls — size up to avoid a second haul fee.
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
              alt="Residential cleanout roll-off dumpster rental in Wyoming"
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
            Wyoming Dumpster Rental — Straight Answers
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
          Need a Dumpster in Wyoming?
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
