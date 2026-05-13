import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { cityLocations } from '@/content/locations'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return cityLocations.map((city) => ({ slug: city.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const city = cityLocations.find((c) => c.slug === slug)
  if (!city) return {}
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    keywords: [city.primaryKeyword, ...city.secondaryKeywords],
    alternates: {
      canonical: `https://rolloffdumpsterfinder.com/locations/${city.slug}`,
    },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `https://rolloffdumpsterfinder.com/locations/${city.slug}`,
      siteName: 'Rolloff Dumpster Finder',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: city.metaTitle,
      description: city.metaDescription,
    },
  }
}

// ─── Shared static content (same for all city pages) ──────────

const sizeGuide = [
  {
    size: '10 Yard',
    capacity: '~3 pickup truck loads',
    goodFor: [
      'Small garage or room cleanout',
      'Minor bathroom remodel',
      'Small roofing job',
      'Yard debris cleanup',
    ],
    note: 'The smallest standard container. Right for focused, single-space jobs.',
  },
  {
    size: '15 Yard',
    capacity: '~4.5 pickup truck loads',
    goodFor: [
      'Bathroom remodel',
      'Medium cleanout',
      'Deck removal (small)',
      'Landscaping debris',
    ],
    note: 'A good middle option when a 10-yard feels tight but a 20-yard seems excessive.',
  },
  {
    size: '20 Yard',
    capacity: '~6 pickup truck loads',
    goodFor: [
      'Kitchen or basement remodel',
      'Full roof tear-off',
      'Whole-home cleanout',
      'Deck removal (large)',
    ],
    note: 'The most common choice for Denver homeowners. Handles most remodels and cleanouts comfortably.',
  },
  {
    size: '30 Yard',
    capacity: '~9 pickup truck loads',
    goodFor: [
      'Large renovation',
      'Estate cleanout',
      'New construction cleanup',
      'Mixed C&D debris',
    ],
    note: 'Step up to a 30-yard when the job is big or when you want buffer room to avoid a second pull.',
  },
  {
    size: '40 Yard',
    capacity: '~12 pickup truck loads',
    goodFor: [
      'Major construction project',
      'Commercial renovation',
      'Large demolition',
      'Multi-unit cleanout',
    ],
    note: 'The largest standard container. Typically reserved for commercial jobs and major construction.',
  },
]

const accepted = [
  'Household junk and furniture',
  'Construction lumber and wood',
  'Drywall and plaster',
  'Flooring (carpet, hardwood, tile)',
  'Roofing shingles and materials',
  'Yard waste (check with provider)',
  'Non-hazardous renovation debris',
  'Metal scraps and fixtures',
  'Glass and windows',
  'Cardboard and packaging',
]

const restricted = [
  'Paint and solvents',
  'Chemicals and pesticides',
  'Motor oil and automotive fluids',
  'Propane tanks',
  'Batteries (car and household)',
  'Tires',
  'Appliances containing refrigerants (freon)',
  'Asbestos-containing materials',
  'Hazardous waste of any kind',
  'Electronics (e-waste) — varies by provider',
  'Concrete, dirt, brick, asphalt (require special heavy-debris containers)',
]

const processSteps = [
  {
    step: '01',
    title: 'Tell us about your project',
    description:
      'Share your city, project type, and approximate debris volume. The more specific you are, the more accurate the quote.',
  },
  {
    step: '02',
    title: 'Choose the right size',
    description:
      'Pick a container size based on your project. Use the size guide above or ask — getting the size right the first time avoids paying for a second pull.',
  },
  {
    step: '03',
    title: 'Schedule delivery',
    description:
      'Confirm a delivery date and placement location. Make sure the area is clear of vehicles, overhead lines, and any access obstacles before the truck arrives.',
  },
  {
    step: '04',
    title: 'Fill it and call for pickup',
    description:
      "Fill the container at your pace during the rental period. When you're done, call for pickup. Pickup is included in your flat-rate quote to the stated weight limit.",
  },
]

// ─── Page component ───────────────────────────────────────────

export default async function CityPage({ params }: Props) {
  const { slug } = await params
  const city = cityLocations.find((c) => c.slug === slug)
  if (!city) notFound()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rolloffdumpsterfinder.com' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://rolloffdumpsterfinder.com/locations' },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${city.cityName}, ${city.stateAbbr}`,
        item: `https://rolloffdumpsterfinder.com/locations/${city.slug}`,
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: city.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Rolloff Dumpster Finder — ${city.cityName}, ${city.stateAbbr}`,
    description: city.metaDescription,
    url: `https://rolloffdumpsterfinder.com/locations/${city.slug}`,
    areaServed: {
      '@type': 'City',
      name: city.cityName,
      containedIn: { '@type': 'State', name: city.stateName },
    },
    ...(city.latitude && city.longitude
      ? { geo: { '@type': 'GeoCoordinates', latitude: city.latitude, longitude: city.longitude } }
      : {}),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* ── Breadcrumb ─────────────────────────────────────── */}
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
        <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li><a href="https://rolloffdumpsterfinder.com/" className="hover:text-charcoal transition-colors">Home</a></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/locations" className="hover:text-charcoal transition-colors">Locations</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">{city.cityName}, {city.stateAbbr}</li>
          </ol>
        </nav>
      </div>

      {/* ── 1. Hero ────────────────────────────────────────── */}
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
          <h1 className="text-[clamp(28px,5vw,52px)] font-extrabold text-white leading-[1.08] tracking-tight mb-5 max-w-[800px]">
            {city.heroH1}
          </h1>
          <p className="text-[17px] text-white/[.62] max-w-[620px] leading-[1.65] mb-8">
            {city.heroSubheadline}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#cost-guide"
              className="inline-block bg-orange text-black font-bold text-[15px] px-7 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Get Dumpster Rental Pricing
            </a>
            <a
              href="#dumpster-sizes"
              className="inline-block border border-white/30 text-white font-semibold text-[15px] px-7 py-4 rounded-full hover:border-white/60 hover:bg-white/[.05] transition-all"
            >
              View Dumpster Sizes
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. Intro ───────────────────────────────────────── */}
      <section className="bg-white py-16 px-8 border-b border-[#E8E4DE]">
        <div className="max-w-[800px] mx-auto">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-5" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-8">
            Roll Off Dumpster Rental in {city.cityName}: What to Know
          </h2>
          <div className="space-y-5">
            {city.introParagraphs.map((para, i) => (
              <p key={i} className="text-[16px] text-[#444F5A] leading-[1.75]">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Cost Guide ──────────────────────────────────── */}
      <section className="bg-[#F5F4F0] py-16 px-8" id="cost-guide">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-5" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-3">
            How Much Does a Dumpster Rental Cost in {city.cityName}?
          </h2>
          <p className="text-[15px] text-[#6B7280] max-w-[700px] leading-[1.65] mb-8">
            Pricing depends on container size, debris type, weight, rental period, delivery
            location, and landfill disposal fees. The ranges below are estimates based on typical
            {city.cityName}-area pricing. Your actual quote will vary.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-charcoal text-white">
                  <th className="px-5 py-3 text-left font-semibold whitespace-nowrap">Dumpster Size</th>
                  <th className="px-5 py-3 text-left font-semibold">Common Uses</th>
                  <th className="px-5 py-3 text-left font-semibold whitespace-nowrap">
                    Est. {city.cityName} Range
                  </th>
                </tr>
              </thead>
              <tbody>
                {city.pricingGuide.map((row, i) => (
                  <tr
                    key={row.size}
                    className={`border-b border-gray-200 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-orange/[.04] transition-colors`}
                  >
                    <td className="px-5 py-4 font-semibold text-charcoal whitespace-nowrap">{row.size}</td>
                    <td className="px-5 py-4 text-[#556070]">{row.uses}</td>
                    <td className="px-5 py-4 font-semibold text-orange whitespace-nowrap">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[12px] text-[#9CA3AF] mb-8 leading-relaxed max-w-[700px]">
            Estimates only. Actual pricing varies based on dumpster size, debris type, weight,
            rental period, delivery address, and provider availability. Street or right-of-way
            placement may require a permit which is not included in rental pricing.
          </p>

          <a
            href="https://form.typeform.com/to/vgtrPHz6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange text-black font-bold text-[14px] px-7 py-[13px] rounded-full hover:opacity-90 transition-opacity"
          >
            Get a {city.cityName} Dumpster Quote
          </a>
        </div>
      </section>

      {/* ── 4. Size Guide ──────────────────────────────────── */}
      <section className="bg-charcoal py-16 px-8" id="dumpster-sizes">
        <div className="max-w-[1200px] mx-auto mb-10">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-5" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-white tracking-tight mb-3">
            What Size Dumpster Do You Need?
          </h2>
          <p className="text-[15px] text-white/[.52] max-w-[640px] leading-[1.65]">
            For many {city.cityName} homeowners, a 20-yard dumpster covers most remodels, roofing
            jobs, and whole-home cleanouts without being oversized. Here is the full breakdown by
            container size.
          </p>
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {sizeGuide.map((s) => (
            <div
              key={s.size}
              className="bg-white/[.05] border border-white/[.08] border-t-2 border-t-orange rounded-sm p-5 flex flex-col"
            >
              <p className="text-[22px] font-extrabold text-orange tracking-tight mb-1">{s.size}</p>
              <p className="text-[11px] text-white/[.4] mb-4">{s.capacity}</p>
              <ul className="space-y-[6px] flex-1 mb-4">
                {s.goodFor.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[12px] text-white/[.65] leading-[1.5]">
                    <span className="w-[5px] h-[5px] rounded-full bg-orange mt-[5px] shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-white/[.36] leading-[1.5] border-t border-white/[.08] pt-3 mt-auto">
                {s.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. Common Projects ─────────────────────────────── */}
      <section className="bg-white py-16 px-8 border-b border-[#E8E4DE]">
        <div className="max-w-[1200px] mx-auto mb-10">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-5" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-3">
            Common {city.cityName} Dumpster Rental Projects
          </h2>
          <p className="text-[15px] text-[#6B7280] max-w-[640px] leading-[1.65]">
            From older neighborhood renovations to new construction debris, here are the project
            types we most commonly help {city.cityName}-area customers with.
          </p>
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {city.projects.map((p) => (
            <div
              key={p.number}
              className="bg-[#F5F4F0] border border-[#E0DEDA] border-t-2 border-t-orange rounded-sm p-5"
            >
              <div className="text-[28px] font-extrabold text-orange leading-none mb-3 tracking-tight">
                {p.number}
              </div>
              <p className="text-[13px] font-bold text-charcoal leading-[1.35] mb-2">{p.name}</p>
              <p className="text-[12px] text-[#6B7280] leading-[1.6]">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. Placement ───────────────────────────────────── */}
      <section className="bg-[#F5F4F0] py-16 px-8">
        <div className="max-w-[800px] mx-auto">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-5" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-3">
            Dumpster Placement in {city.cityName}: Driveways, Alleys & Street Access
          </h2>
          <p className="text-[16px] text-[#444F5A] leading-[1.75] mb-7">
            {city.placementIntro}
          </p>
          <ul className="space-y-4">
            {city.placementNotes.map((note, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="shrink-0 w-6 h-6 rounded-full bg-orange/[.12] text-orange text-[11px] font-bold flex items-center justify-center mt-[2px]">
                  {i + 1}
                </span>
                <p className="text-[15px] text-[#444F5A] leading-[1.7]">{note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 7. What Can / Cannot Go In ─────────────────────── */}
      <section className="bg-white py-16 px-8 border-y border-[#E8E4DE]">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-5" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-3">
            What Can You Put in a Roll Off Dumpster?
          </h2>
          <p className="text-[15px] text-[#6B7280] max-w-[640px] leading-[1.65] mb-10">
            Accepted and restricted items vary by provider and disposal facility. Always confirm
            with your rental company if you have items you are not sure about.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Accepted */}
            <div className="bg-[#F0FAF4] border border-green-200 rounded-md p-6">
              <p className="text-[11px] font-bold uppercase tracking-[.1em] text-green-700 mb-4">
                Commonly Accepted
              </p>
              <ul className="space-y-[10px]">
                {accepted.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-[#374151] leading-[1.5]">
                    <span className="w-2 h-2 rounded-full bg-green-500 mt-[5px] shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Restricted */}
            <div className="bg-[#FFF7F0] border border-orange-200 rounded-md p-6">
              <p className="text-[11px] font-bold uppercase tracking-[.1em] text-orange mb-4">
                Commonly Restricted
              </p>
              <ul className="space-y-[10px]">
                {restricted.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-[#374151] leading-[1.5]">
                    <span className="w-2 h-2 rounded-full bg-orange mt-[5px] shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Neighborhoods & Service Area ───────────────── */}
      <section className="bg-[#F5F4F0] py-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-5" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-3">
            {city.cityName} Neighborhoods & Surrounding Areas
          </h2>
          <p className="text-[15px] text-[#6B7280] max-w-[640px] leading-[1.65] mb-10">
            Rolloff Dumpster Finder helps customers across {city.cityName} neighborhoods and the
            surrounding metro area. Availability may vary by delivery location.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.12em] text-orange mb-4">
                {city.cityName} Neighborhoods
              </p>
              <div className="flex flex-wrap gap-2">
                {city.neighborhoods.map((hood) => (
                  <span
                    key={hood}
                    className="inline-block bg-white border border-[#E0DEDA] text-charcoal text-[13px] font-medium px-3 py-[6px] rounded-sm"
                  >
                    {hood}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.12em] text-orange mb-4">
                Nearby Cities & Suburbs
              </p>
              <div className="flex flex-wrap gap-2">
                {city.nearbyCities.map((nearby) => (
                  <span
                    key={nearby}
                    className="inline-block bg-white border border-[#E0DEDA] text-charcoal text-[13px] font-medium px-3 py-[6px] rounded-sm"
                  >
                    {nearby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. Rental Process ──────────────────────────────── */}
      <section className="bg-charcoal py-16 px-8">
        <div className="max-w-[1200px] mx-auto mb-10">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-5" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-white tracking-tight mb-3">
            How Dumpster Rental Works in {city.cityName}
          </h2>
          <p className="text-[15px] text-white/[.52] max-w-[520px] leading-[1.65]">
            Four steps from first contact to final pickup.
          </p>
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {processSteps.map((s) => (
            <div
              key={s.step}
              className="bg-white/[.05] border border-white/[.08] rounded-sm p-6"
            >
              <div className="text-[36px] font-extrabold text-orange leading-none mb-4 tracking-tight">
                {s.step}
              </div>
              <p className="text-[14px] font-bold text-white mb-2 leading-[1.3]">{s.title}</p>
              <p className="text-[13px] text-white/[.48] leading-[1.65]">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 10. FAQ ────────────────────────────────────────── */}
      <section className="bg-white py-16 px-8 border-b border-[#E8E4DE]" id="faq">
        <div className="max-w-[800px] mx-auto">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-5" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-10">
            {city.cityName} Dumpster Rental — Frequently Asked Questions
          </h2>
          <dl className="space-y-5">
            {city.faq.map((item, i) => (
              <div
                key={i}
                className="border border-[#E8E4DE] rounded-md overflow-hidden"
              >
                <dt className="bg-[#F9F8F6] px-6 py-4 font-semibold text-charcoal text-[15px] leading-[1.4]">
                  {item.question}
                </dt>
                <dd className="px-6 py-4 text-[14px] text-[#556070] leading-[1.75]">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── 11. Final CTA ──────────────────────────────────── */}
      <section className="relative bg-[#1A2530] py-20 px-8 overflow-hidden text-center">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,.025) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,.025) 40px)',
          }}
        />
        <div className="max-w-[600px] mx-auto relative z-10">
          <div className="w-11 h-1 bg-orange rounded-sm mx-auto mb-6" />
          <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold text-white tracking-tight mb-5">
            Need a Roll Off Dumpster in {city.cityName}?
          </h2>
          <p className="text-[16px] text-white/[.58] leading-[1.7] mb-8">
            Whether you are cleaning out a home, remodeling a kitchen, tearing off a roof, or
            managing construction debris, Rolloff Dumpster Finder can help you compare roll off
            dumpster options in the {city.cityName} area.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://form.typeform.com/to/vgtrPHz6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange text-black font-bold text-[15px] px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Get Dumpster Rental Pricing
            </a>
            <Link
              href="/resources"
              className="inline-block border border-white/30 text-white font-semibold text-[15px] px-8 py-4 rounded-full hover:border-white/60 hover:bg-white/[.05] transition-all"
            >
              Browse Resources
            </Link>
          </div>
          <p className="mt-8 text-[13px] text-white/[.32]">
            Availability may vary. Pricing depends on debris type, weight, rental period, and
            delivery location.
          </p>
        </div>
      </section>
    </>
  )
}
