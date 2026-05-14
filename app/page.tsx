import type { Metadata } from 'next'
import Link from 'next/link'

const QUOTE_URL = 'https://form.typeform.com/to/vgtrPHz6'

export const metadata: Metadata = {
  title: 'Rolloff Dumpster Finder | Roll-Off Dumpster Rental in Colorado',
  description:
    'Find and book roll-off dumpster rentals in Colorado for home cleanouts, roofing, construction, and demolition. Right-sized containers, no hidden fees.',
  alternates: { canonical: 'https://rolloffdumpsterfinder.com' },
  openGraph: {
    title: 'Rolloff Dumpster Finder | Roll-Off Dumpster Rental in Colorado',
    description:
      'Find and book roll-off dumpster rentals in Colorado for home cleanouts, roofing, construction, and demolition. Right-sized containers, no hidden fees.',
    url: 'https://rolloffdumpsterfinder.com',
    siteName: 'Rolloff Dumpster Finder',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rolloff Dumpster Finder | Roll-Off Dumpster Rental in Colorado',
    description:
      'Find and book roll-off dumpster rentals in Colorado for home cleanouts, roofing, construction, and demolition. Right-sized containers, no hidden fees.',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Rolloff Dumpster Finder',
  url: 'https://rolloffdumpsterfinder.com',
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  name: 'Rolloff Dumpster Finder',
  url: 'https://rolloffdumpsterfinder.com',
  telephone: '+19705686136',
  email: 'adam@meetadamchandler.com',
  areaServed: { '@type': 'State', name: 'Colorado' },
  logo: 'https://assets.cdn.filesafe.space/v57xFnmYy49mB7csJulf/media/69f7f3d66b07ab33035b936b.png',
}

const faqs = [
  {
    question: 'What sizes of roll-off dumpsters are available?',
    answer:
      'Roll-off dumpsters come in 10, 15, 20, 30, and 40-yard sizes. The 20-yard is the most common choice for residential projects and handles most roofing jobs, kitchen remodels, and whole-home cleanouts. Smaller containers start at 10 yards for focused single-space projects like garage cleanouts.',
  },
  {
    question: 'How do I know which dumpster size to rent?',
    answer:
      'Match the size to your project volume and debris type. A 10-yard handles most garage cleanouts. A 20-yard covers whole-home cleanouts and full roofing tear-offs. A 30-yard is right for large renovations and estate cleanouts. See our full dumpster size guide or tell us about your project and we will match you.',
  },
  {
    question: 'How much does roll-off dumpster rental cost?',
    answer:
      'Most homeowners pay $350–$500 for a standard 7-day rental. A 10-yard container typically runs $300–$450 per week. A 20-yard averages $400–$550. Pricing depends on container size, rental duration, location, and debris type. Dense materials like concrete or roofing shingles may carry a weight surcharge.',
  },
  {
    question: 'What can I put in a roll-off dumpster?',
    answer:
      'Most household junk, furniture, construction debris, roofing shingles, flooring, drywall, lumber, and yard waste are accepted. Hazardous materials — paint, motor oil, propane tanks, batteries, tires, and asbestos — are prohibited. See our accepted and prohibited items guide for the full breakdown.',
  },
  {
    question: 'Do I need to be present for dumpster delivery or pickup?',
    answer:
      'Not necessarily. You need the placement area clear of vehicles and overhead obstructions before the driver arrives. For pickup, call when you are done and the driver handles the rest. Being present is helpful but usually not required.',
  },
  {
    question: 'Can I rent a dumpster for a residential cleanout or home renovation?',
    answer:
      'Yes. Residential cleanouts and home renovation debris are the most common roll-off rental use cases. Whether you are clearing a garage, renovating a kitchen, or handling a full estate cleanout, a properly sized container is far faster than hauling material yourself.',
  },
  {
    question: 'Do roll-off dumpster rentals work for construction sites and commercial projects?',
    answer:
      'Yes. Larger 30 and 40-yard containers handle mixed C&D debris, framing waste, drywall, and demolition material for commercial and construction projects. Most providers also offer flexible scheduling for ongoing job site needs.',
  },
  {
    question: 'How long can I keep a rental dumpster?',
    answer:
      'Standard rentals run 7–10 days. Extensions are available at a daily rate, typically $5–$10 per day. If you know your project will run long, ask about extended rental pricing at booking — it is often more cost-effective than adding days mid-rental.',
  },
  {
    question: 'What items are not allowed in a dumpster rental?',
    answer:
      'Prohibited items include paint, motor oil, solvents, propane tanks, batteries, tires, appliances containing refrigerants, asbestos-containing materials, and hazardous waste of any kind. Some providers also restrict mattresses and electronics. Confirm with your provider if you are unsure about a specific item.',
  },
  {
    question: 'How do I find dumpster rental companies near me?',
    answer:
      'Browse our Locations page for city-specific guides and available providers in your area. You can also submit your project through our booking form and we will match you with local options based on your project type, debris volume, and delivery address.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

const dumpsterSizes = [
  {
    size: '10 Yard',
    loads: '~3 pickup truck loads',
    best: 'Garage cleanouts, single-room remodels, small yard debris cleanup',
  },
  {
    size: '15 Yard',
    loads: '~4–5 pickup truck loads',
    best: 'Bathroom remodels, small deck removal, medium home cleanouts',
  },
  {
    size: '20 Yard',
    loads: '~6 pickup truck loads',
    best: 'Kitchen remodels, full roof tear-offs, whole-home cleanouts',
  },
  {
    size: '30 Yard',
    loads: '~9 pickup truck loads',
    best: 'Large renovations, estate cleanouts, new construction cleanup',
  },
  {
    size: '40 Yard',
    loads: '~12 pickup truck loads',
    best: 'Major construction, commercial demolition, large-scale projects',
  },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── 1. Hero ────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[660px] flex items-center"
        style={{
          backgroundImage: "url('/home-page-images/hero-dumpster-construction.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-8 py-20">
          {/* Card — sits on the left, right side of hero image shows through */}
          <div className="w-full max-w-[520px] bg-[#2D3A4A] rounded-2xl p-8 sm:p-10 shadow-2xl">
            <div className="w-10 h-1 bg-orange rounded-sm mb-5" />
            <h1 className="text-[clamp(26px,4.5vw,44px)] font-extrabold text-white leading-[1.12] tracking-tight mb-5">
              Efficient Dumpster Rentals for Every Project and Need
            </h1>
            <p className="text-[15px] sm:text-[16px] text-white/70 leading-[1.7] mb-8">
              Effortlessly manage waste with Rolloff Dumpster Finder. Quick quotes, varied sizes, and
              reliable service tailored for any project. Start clearing out with ease today.
            </p>
            <a
              href={QUOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange text-black font-bold text-[15px] px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Book Your Dumpster Today
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. Intro ───────────────────────────────────────────────────── */}
      <section id="about" className="bg-[#1A2530] py-14 px-6 sm:px-8">
        <div className="max-w-[860px] mx-auto">
          <div className="bg-[#E8EEF5] rounded-2xl px-8 sm:px-12 py-10 text-center shadow-sm">
            <div className="w-10 h-1 bg-orange rounded-sm mx-auto mb-5" />
            <h2 className="text-[clamp(22px,3vw,32px)] font-extrabold text-charcoal tracking-tight mb-4">
              Explore Dumpster Rental Options for Every Project
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4A5568] leading-[1.75] max-w-[640px] mx-auto">
              From home cleanouts to construction debris, roofing jobs, and commercial waste, Rolloff
              Dumpster Finder helps you compare local dumpster rental options based on your project,
              location, and timeline.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Residential / Home Cleanout ────────────────────────────── */}
      <section className="bg-[#F5F4F0] py-14 px-6 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#E8EEF5] rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Text */}
              <div className="flex flex-col justify-center gap-5 p-8 sm:p-10 lg:p-12">
                <div className="w-10 h-1 bg-orange rounded-sm" />
                <h2 className="text-[clamp(22px,2.8vw,32px)] font-extrabold text-charcoal tracking-tight leading-[1.15]">
                  Dumpster Rentals for Home Cleanouts &amp; Renovation Projects
                </h2>
                <p className="text-[15px] sm:text-[16px] text-[#4A5568] leading-[1.75]">
                  Perfect for garage cleanouts, remodeling projects, yard debris, roofing waste, and
                  renovation cleanup. We help you find residential dumpster rental options from local
                  providers so you can choose the right size, schedule delivery, and keep your project
                  moving.
                </p>
                <div>
                  <a
                    href={QUOTE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange text-black font-bold text-[14px] px-7 py-[13px] rounded-full hover:opacity-90 transition-opacity"
                  >
                    Find Residential Dumpster Rentals
                  </a>
                </div>
              </div>
              {/* Image */}
              <div className="relative min-h-[320px] lg:min-h-[420px]">
                <img
                  src="/home-page-images/roll-off-dumpster-rental-residential-cleanout.png"
                  alt="Roll-off dumpster rental at a residential home cleanout and renovation project"
                  width={1448}
                  height={1086}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Size Guide / General Project ───────────────────────────── */}
      <section className="bg-white py-14 px-6 sm:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <img
              src="/home-page-images/residential-cleanout-dumpster.png"
              alt="Residential dumpster rental for home cleanout and general project debris removal"
              width={1448}
              height={1086}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text */}
          <div className="flex flex-col gap-5">
            <div className="w-10 h-1 bg-orange rounded-sm" />
            <h2 className="text-[clamp(22px,2.8vw,32px)] font-extrabold text-charcoal tracking-tight leading-[1.15]">
              Find the Right Dumpster Size for Your Project
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4A5568] leading-[1.75]">
              Whether you&apos;re cleaning out a garage, remodeling a home, replacing a roof, or
              managing a job site, Rolloff Dumpster Finder helps you compare local rental options and
              request quotes from providers near you.
            </p>
            <div>
              <a
                href={QUOTE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange text-black font-bold text-[14px] px-7 py-[13px] rounded-full hover:opacity-90 transition-opacity"
              >
                Find Dumpster Rentals Near Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 + 6. Commercial Area ─────────────────────────────────────── */}
      <section className="bg-[#1A2530] py-14 px-6 sm:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8">

          {/* Card 1 — Commercial & Construction */}
          <div className="bg-[#2D3A4A] rounded-2xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image left */}
              <div className="relative min-h-[300px] lg:min-h-[420px]">
                <img
                  src="/home-page-images/commercial-construction-roll-off-dumpster-rental.png"
                  alt="Commercial construction roll-off dumpster rental on an active job site"
                  width={1448}
                  height={1086}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              {/* Text right */}
              <div className="flex flex-col justify-center gap-5 p-8 sm:p-10 lg:p-12">
                <div className="w-10 h-1 bg-orange rounded-sm" />
                <h2 className="text-[clamp(22px,2.8vw,30px)] font-extrabold text-white tracking-tight leading-[1.15]">
                  Commercial &amp; Construction Dumpster Rentals
                </h2>
                <p className="text-[15px] sm:text-[16px] text-white/65 leading-[1.75]">
                  Need a dumpster for a job site, roofing project, business cleanout, or larger debris
                  removal job? We help you compare local roll-off dumpster rental options for
                  commercial projects, construction debris, demolition cleanup, and ongoing waste needs.
                </p>
                <div>
                  <a
                    href={QUOTE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange text-black font-bold text-[14px] px-7 py-[13px] rounded-full hover:opacity-90 transition-opacity"
                  >
                    Find Commercial Dumpster Rentals
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — Business / Property Cleanup */}
          <div className="bg-[#E8EEF5] rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Text left */}
              <div className="flex flex-col justify-center gap-5 p-8 sm:p-10 lg:p-12">
                <div className="w-10 h-1 bg-orange rounded-sm" />
                <h2 className="text-[clamp(22px,2.8vw,30px)] font-extrabold text-charcoal tracking-tight leading-[1.15]">
                  Dumpster Rentals for Businesses, Properties &amp; Large Cleanups
                </h2>
                <p className="text-[15px] sm:text-[16px] text-[#4A5568] leading-[1.75]">
                  From apartment turnovers and retail renovations to warehouse cleanouts and property
                  maintenance projects, we help you find local dumpster rental providers who can handle
                  larger cleanup needs without slowing down your schedule.
                </p>
                <div>
                  <a
                    href={QUOTE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange text-black font-bold text-[14px] px-7 py-[13px] rounded-full hover:opacity-90 transition-opacity"
                  >
                    Find Dumpster Rentals Near Me
                  </a>
                </div>
              </div>
              {/* Image right */}
              <div className="relative min-h-[300px] lg:min-h-[420px]">
                <img
                  src="/home-page-images/commercial-construction-dumpster.png"
                  alt="Commercial construction dumpster for business property cleanout and large debris removal"
                  width={1448}
                  height={1086}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 7. Dumpster Sizes ─────────────────────────────────────────── */}
      <section id="dumpster-sizes" className="bg-[#F5F4F0] py-14 px-6 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-10">
            <div className="w-10 h-1 bg-orange rounded-sm mb-5" />
            <h2 className="text-[clamp(22px,3vw,32px)] font-extrabold text-charcoal tracking-tight mb-3">
              Common Roll-Off Dumpster Sizes
            </h2>
            <p className="text-[15px] text-[#6B7280] max-w-[600px] leading-[1.65]">
              The right size depends on your debris type and project volume. When in doubt, size up
              one step — a second haul costs more than extra unused space.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            {dumpsterSizes.map((d) => (
              <div
                key={d.size}
                className="bg-white border border-[#E0DEDA] border-t-[3px] border-t-orange rounded-xl p-5 flex flex-col"
              >
                <p className="text-[22px] font-extrabold text-orange leading-none tracking-tight mb-1">
                  {d.size}
                </p>
                <p className="text-[11px] text-[#9CA3AF] mb-4">{d.loads}</p>
                <p className="text-[12px] text-[#556070] leading-[1.6] flex-1">{d.best}</p>
              </div>
            ))}
          </div>

          <a
            href={QUOTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange text-black font-bold text-[14px] px-7 py-[13px] rounded-full hover:opacity-90 transition-opacity"
          >
            Get Dumpster Rental Pricing
          </a>
        </div>
      </section>

      {/* ── 8. FAQ ────────────────────────────────────────────────────── */}
      <section className="bg-white py-14 px-6 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-10 text-center max-w-[700px] mx-auto">
            <div className="w-10 h-1 bg-orange rounded-sm mx-auto mb-5" />
            <h2 className="text-[clamp(22px,3vw,32px)] font-extrabold text-charcoal tracking-tight mb-4">
              Roll-Off Dumpster Rental FAQs
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#6B7280] leading-[1.7]">
              Get quick answers about dumpster sizes, rental costs, delivery, pickup, and what type of
              roll-off dumpster rental is right for your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {faqs.map((f) => (
              <details
                key={f.question}
                className="group bg-[#EEF5FF] rounded-xl overflow-hidden border border-[#D1E3F8]"
              >
                <summary className="[&::-webkit-details-marker]:hidden list-none flex items-start justify-between gap-4 px-5 py-4 cursor-pointer">
                  <span className="font-semibold text-charcoal text-[14px] leading-[1.45]">
                    {f.question}
                  </span>
                  <span
                    className="shrink-0 w-5 h-5 rounded-full bg-orange text-black text-[12px] font-bold flex items-center justify-center mt-[1px] transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-[13px] sm:text-[14px] text-[#4A5568] leading-[1.75] border-t border-[#D1E3F8] pt-4">
                  {f.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/resources"
              className="inline-block border border-[#E0DEDA] text-charcoal font-semibold text-[14px] px-7 py-[13px] rounded-full hover:border-orange hover:text-orange transition-colors"
            >
              Browse All Guides &amp; Resources
            </Link>
          </div>
        </div>
      </section>

      {/* ── 9. Final CTA ──────────────────────────────────────────────── */}
      <section id="contact" className="bg-[#1A2530] py-20 px-6 sm:px-8 text-center">
        <div className="max-w-[600px] mx-auto">
          <div className="w-11 h-1 bg-orange rounded-sm mx-auto mb-6" />
          <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold text-white tracking-tight mb-5">
            Need a Dumpster for Your Next Project?
          </h2>
          <p className="text-[16px] text-white/60 leading-[1.7] mb-8">
            Tell us what you&apos;re throwing away and where your project is located. We&apos;ll help
            you find the right roll-off dumpster rental option.
          </p>
          <a
            href={QUOTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange text-black font-bold text-[15px] px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Get Dumpster Rental Pricing
          </a>
        </div>
      </section>
    </>
  )
}
