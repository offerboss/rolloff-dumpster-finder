import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Roll-Off Dumpster Rentals in the Denver Metro Area',
  description:
    'Compare roll-off dumpster rental options across Denver, Aurora, Lakewood, Arvada, Westminster, Thornton, Littleton, and surrounding Colorado communities.',
  alternates: {
    canonical: 'https://rolloffdumpsterfinder.com/locations/colorado/denver-metro',
  },
  openGraph: {
    title: 'Roll-Off Dumpster Rentals in the Denver Metro Area',
    description:
      'Compare roll-off dumpster rental options across Denver, Aurora, Lakewood, Arvada, Westminster, Thornton, Littleton, and surrounding Colorado communities.',
    url: 'https://rolloffdumpsterfinder.com/locations/colorado/denver-metro',
    siteName: 'Rolloff Dumpster Finder',
    type: 'website',
    images: [
      {
        url: 'https://rolloffdumpsterfinder.com/home-page-images/hero-dumpster-construction.png',
        width: 1672,
        height: 941,
        alt: 'Roll-off dumpster rental in the Denver metro area',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roll-Off Dumpster Rentals in the Denver Metro Area',
    description:
      'Compare roll-off dumpster rental options across Denver, Aurora, Lakewood, Arvada, Westminster, Thornton, Littleton, and surrounding Colorado communities.',
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
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Denver Metro Area',
      item: 'https://rolloffdumpsterfinder.com/locations/colorado/denver-metro',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a dumpster rental cost in the Denver metro area?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 10-yard container in Denver metro markets commonly runs $280–$480 per week. A 20-yard is typically $380–$650. The final cost depends on container size, the weight of what goes in, rental duration, and the specific provider and delivery location. Always ask for a quote that includes the weight allowance — not just the base rental rate.',
      },
    },
    {
      '@type': 'Question',
      name: 'What dumpster size is best for a Denver metro home cleanout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most full-home cleanouts need a 20-yard container. A single room or garage typically fits in a 10-yard. Older Denver metro homes from the 1950s and 1960s that have not been cleared in decades often need a 20 or 30-yard — and sometimes a second pull.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size dumpster works for a Denver metro roofing project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 20-yard container handles most residential shingle tear-offs. Shingles are dense — a full roof commonly produces 3 tons or more. Confirm the weight allowance with your provider before the tear-off starts. After a major hail event, container availability across the metro tightens quickly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a dumpster be placed on a public street in the Denver metro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Street placement is allowed in most Denver metro cities but requires a right-of-way permit. Each city administers its own process: Denver through the Department of Public Works, Aurora through Aurora Public Works, Lakewood through the City of Lakewood Engineering Division, and Arvada through the City of Arvada. Driveway placement on private property typically does not require a permit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can concrete or dirt go in a roll-off dumpster in the Denver metro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Usually yes, but in limited amounts. Concrete, brick, and soil are dense enough to exceed weight limits well before the container looks full. Many providers offer dedicated heavy-debris containers for jobs that are mostly concrete or dirt. Confirm the weight allowance before loading heavy material.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long can I keep a dumpster rental in the Denver metro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard rental periods typically run 7 to 14 days. Extension rates are usually $5–$15 per day depending on the container size. Call your provider before the rental period ends — extending is almost always cheaper than paying for a second haul.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much driveway space is needed for a roll-off container delivery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most delivery trucks need at least 60 feet of clearance from the street to set the container. The container itself is typically 10–22 feet long depending on size. Check for overhead obstructions — trees, eaves, power lines — before scheduling. Tight driveways are better identified before the driver arrives than after.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far in advance should I reserve a dumpster in the Denver metro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'During normal periods, one to three business days is usually enough lead time. After a major hail event, availability across the metro tightens within days as providers fill with roofing jobs. During hail season — June through August — book as soon as a project is scheduled.',
      },
    },
  ],
}

const cityCards = [
  {
    city: 'Denver',
    slug: 'denver-co-dumpster-rental',
    desc: "Denver's housing stock spans Capitol Hill bungalows, Park Hill ranch homes, and active RiNo and LoDo construction. The metro's most diverse market for cleanouts, remodels, and C&D containers.",
  },
  {
    city: 'Aurora',
    slug: 'aurora-co-dumpster-rental',
    desc: "Colorado's third-largest city, with Buckley Space Force Base driving consistent rental property turnover and the Front Range hail corridor fueling roofing demand across 154 square miles of suburban housing.",
  },
  {
    city: 'Lakewood',
    slug: 'lakewood-co-dumpster-rental',
    desc: "The metro's largest western suburb, with 1950s–1970s ranch homes in Eiber and Cloverdale generating steady remodel and cleanout volume, plus newer infill jobs near the Belmar district.",
  },
  {
    city: 'Arvada',
    slug: 'arvada-co-dumpster-rental',
    desc: 'Northwest Denver suburb spanning early 1900s homes near historic Olde Town Arvada to active new construction in the Candelas development. The G Line light rail has accelerated renovation activity near the station.',
  },
]

const projects = [
  {
    num: '01',
    name: 'Hail Season Roofing',
    desc: 'The Front Range sees 1–3 significant hail events per year. After a major storm, roofing container demand across the metro spikes within days. A 20-yard is the standard setup for most residential tear-offs.',
  },
  {
    num: '02',
    name: 'Home Cleanouts',
    desc: "Mid-century ranch homes in Aurora, Lakewood, and central Denver with 30–50 years of accumulated material. Many need a 20 or 30-yard container — sometimes a second pull for the basement.",
  },
  {
    num: '03',
    name: 'Kitchen & Bath Remodels',
    desc: "Original 1960s kitchens and tile bathrooms in the metro's ranch-era housing produce weight-intensive debris. Granite countertops and cement board hit weight limits faster than the volume suggests.",
  },
  {
    num: '04',
    name: 'Construction Debris',
    desc: "Active development in Aurora's High Point area, Arvada's Candelas, and Denver infill zones produces consistent C&D demand. Mixed framing, drywall, and concrete waste works best in 20 and 30-yard containers.",
  },
  {
    num: '05',
    name: 'Estate Cleanouts',
    desc: "Older established neighborhoods throughout the metro generate estate clearances that regularly need 20 or 30-yard containers. Homes lived in for 40 or 50 years can fill a 30-yard before the garage is touched.",
  },
  {
    num: '06',
    name: 'Yard Waste & Landscaping',
    desc: 'Xeriscape conversions and turf removals driven by rising water rates across Jefferson, Arapahoe, and Adams counties. A 10 or 15-yard handles most residential landscaping jobs.',
  },
  {
    num: '07',
    name: 'Demolition',
    desc: 'Concrete, block, and mixed structural debris. Heavy material hits weight limits fast — 10 yards of concrete is already more than most containers can legally haul. Ask about dedicated heavy-debris containers.',
  },
  {
    num: '08',
    name: 'Commercial Renovation',
    desc: "Tenant improvements, office conversions, and retail buildouts along the I-225 corridor, Wadsworth, and downtown Denver's active redevelopment zones. Commercial jobs often need 30 or 40-yard containers.",
  },
]

const faq = [
  {
    q: 'How much does a dumpster rental cost in the Denver metro area?',
    a: 'A 10-yard container in Denver metro markets commonly runs $280–$480 per week. A 20-yard is typically $380–$650. The final cost depends on container size, the weight of what goes in, rental duration, and the specific provider and delivery location. Always ask for a quote that includes the weight allowance — not just the base rental rate.',
  },
  {
    q: 'What dumpster size is best for a home cleanout in the Denver metro?',
    a: "Most full-home cleanouts need a 20-yard container. A single room or garage typically fits in a 10-yard. Older Denver metro homes from the 1950s and 1960s that haven't been cleared in decades often need a 20 or 30-yard — and sometimes a second pull.",
  },
  {
    q: 'What size works for a roofing project in the Denver metro?',
    a: 'A 20-yard container handles most residential shingle tear-offs. Shingles are dense — a full roof commonly produces 3 tons or more. Confirm the weight allowance before the tear-off starts. After a major hail event, container availability across the metro tightens quickly.',
  },
  {
    q: 'Can a dumpster be placed on a public street in the Denver metro?',
    a: 'Street placement is allowed in most Denver metro cities but requires a right-of-way permit. Each city runs its own process: Denver through the Department of Public Works, Aurora through Aurora Public Works, Lakewood through the Engineering Division, and Arvada through the City of Arvada. Driveway placement typically does not require a permit.',
  },
  {
    q: 'Do I need a permit to place a dumpster in the Denver metro?',
    a: "For driveway placement on private property, usually no. Street placement requires a right-of-way permit from the relevant city. Permit requirements and fees vary. Many providers can assist with the permit process — ask when you book. The permit guide at Rolloff Dumpster Finder covers what to expect by placement type.",
  },
  {
    q: 'Can concrete or dirt go in a roll-off dumpster in the Denver metro?',
    a: 'Usually yes, but in limited amounts. Concrete, brick, and soil are dense enough to exceed weight limits well before the container looks full. Many providers offer dedicated heavy-debris containers for jobs that are mostly concrete or dirt. Confirm the weight allowance before loading heavy material.',
  },
  {
    q: 'How long can I keep a rental dumpster in the Denver metro?',
    a: 'Standard rental periods typically run 7 to 14 days. Extension rates are usually $5–$15 per day depending on the container size. Call your provider before the rental period ends — extending is almost always cheaper than paying for a second haul.',
  },
  {
    q: 'How far in advance should I reserve a dumpster in the Denver metro?',
    a: 'During normal periods, one to three business days is usually enough. After a major hail event, availability across the metro tightens within days as providers fill with roofing jobs. During hail season — June through August — book as soon as a project is scheduled.',
  },
]

export default function DenverMetroPage() {
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
            {' '}/{' '}
            <Link href="/locations/colorado" className="hover:text-orange transition-colors">
              Colorado
            </Link>
            {' '}/ Denver Metro
          </p>
          <h1 className="text-[clamp(28px,5vw,50px)] font-extrabold text-white leading-[1.08] tracking-tight mb-5">
            Roll-Off Dumpster Rentals in the Denver Metro Area
          </h1>
          <p className="text-[17px] text-white/[.58] max-w-[600px] leading-[1.65]">
            Roll-off dumpster rental for home cleanouts, roofing tear-offs, remodels, and
            construction projects across Denver, Aurora, Lakewood, Arvada, and the surrounding
            Front Range communities.
          </p>
        </div>
      </section>

      {/* Hero image */}
      <div className="bg-[#F5F4F0]">
        <img
          src="/RDF-Images/denver-metro-roll-off-dumpster-rentals.png"
          alt="Roll-off dumpster rentals across the Denver metro area"
          width={1920}
          height={1080}
          className="w-full h-auto block"
          loading="eager"
        />
      </div>

      {/* Quick summary callout */}
      <section className="bg-white border-b border-[#E8E4DE] py-10 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#F5F4F0] border border-[#E8E4DE] rounded-sm p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.12em] text-orange mb-2">
                Common Sizes
              </p>
              <p className="text-[13px] text-[#566070] leading-[1.65]">
                10, 15, 20, 30, and 40-yard containers cover most residential and commercial
                projects. The 20-yard is the most commonly rented size across the Denver metro for
                roofing, cleanouts, and remodels.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.12em] text-orange mb-2">
                Weight Matters
              </p>
              <p className="text-[13px] text-[#566070] leading-[1.65]">
                Material type affects cost as much as volume. Granite countertops, cement board, and
                roofing shingles can hit weight limits before a bin looks half full. Always confirm
                the weight allowance before loading.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.12em] text-orange mb-2">
                Hail Season Note
              </p>
              <p className="text-[13px] text-[#566070] leading-[1.65]">
                The Denver metro sits in the Front Range hail corridor. After a major storm,
                container availability tightens across the metro within days. Book as soon as a
                roofing project is scheduled — June through August especially.
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
            Denver Metro Communities With Local Guides
          </h2>
          <p className="text-[15px] text-[#6B7280] leading-[1.6]">
            Each guide covers local project types, pricing context, neighborhoods, placement notes,
            and city-specific FAQ. Additional metro communities are being added.
          </p>
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {cityCards.map((card) => (
            <article
              key={card.city}
              className="bg-charcoal border border-white/[.06] rounded-sm p-7 flex flex-col transition-all duration-200 hover:bg-[#1A2530] hover:shadow-[0_10px_36px_rgba(0,0,0,.3)]"
            >
              <p className="text-[9px] font-bold uppercase tracking-[.12em] text-orange mb-[10px]">
                ● Denver Metro Location
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
                View Local Guide
              </Link>
            </article>
          ))}
        </div>
        <div className="max-w-[1200px] mx-auto mt-6">
          <p className="text-[13px] text-[#9CA3AF] leading-[1.65]">
            Additional Denver metro communities — including Westminster, Thornton, Centennial,
            Littleton, and Englewood — do not yet have dedicated local guides. Providers serving
            these cities are available through{' '}
            <Link
              href="/locations/denver-co-dumpster-rental"
              className="text-orange hover:opacity-80 transition-opacity underline underline-offset-2"
            >
              the Denver city guide
            </Link>{' '}
            or the{' '}
            <Link
              href="/providers/colorado"
              className="text-orange hover:opacity-80 transition-opacity underline underline-offset-2"
            >
              Colorado provider directory
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Common projects */}
      <section className="bg-charcoal py-[72px] px-8">
        <div className="max-w-[1200px] mx-auto mb-10">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-white tracking-tight mb-2">
            Common Denver Metro Dumpster Projects
          </h2>
          <p className="text-[15px] text-white/[.5] leading-[1.6]">
            Hail season roofing, mid-century home renovations, estate cleanouts, and active
            suburban construction are the defining project types across the Denver metro.
          </p>
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
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

      {/* Sizes section */}
      <section className="bg-white border-y border-[#E8E4DE] py-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-3">
            Dumpster Sizes and Project Fit
          </h2>
          <p className="text-[15px] text-[#6B7280] leading-[1.7] mb-8 max-w-[680px]">
            Container availability varies by provider. Use the guide below as a starting point, then
            confirm with the provider that the size is appropriate for your specific materials and
            weight. Dense debris — shingles, concrete, tile — commonly hits weight limits before a
            container looks full.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-charcoal text-white">
                  <th className="px-4 py-3 text-left font-semibold">Size</th>
                  <th className="px-4 py-3 text-left font-semibold">Commonly Used For</th>
                  <th className="px-4 py-3 text-left font-semibold">Typical Capacity</th>
                  <th className="px-4 py-3 text-left font-semibold">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-semibold text-charcoal">10-Yard</td>
                  <td className="px-4 py-3 text-[#566070]">Single-room remodel, garage cleanout, minor roofing job, yard debris</td>
                  <td className="px-4 py-3 text-[#566070]">~3 pickup truck loads</td>
                  <td className="px-4 py-3 text-[#566070]">Dense debris hits weight limits before the bin fills</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-charcoal">15-Yard</td>
                  <td className="px-4 py-3 text-[#566070]">Bathroom remodel, medium cleanout, deck removal (small), landscaping debris</td>
                  <td className="px-4 py-3 text-[#566070]">~4.5 pickup truck loads</td>
                  <td className="px-4 py-3 text-[#566070]">A useful middle option between 10 and 20-yard</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-semibold text-charcoal">20-Yard</td>
                  <td className="px-4 py-3 text-[#566070]">Roofing tear-off, kitchen remodel, full basement cleanout, whole-home cleanout</td>
                  <td className="px-4 py-3 text-[#566070]">~6 pickup truck loads</td>
                  <td className="px-4 py-3 text-[#566070]">The most commonly rented size across the Denver metro</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-charcoal">30-Yard</td>
                  <td className="px-4 py-3 text-[#566070]">Large renovation, estate cleanout, multi-room demo, commercial tenant improvement</td>
                  <td className="px-4 py-3 text-[#566070]">~9 pickup truck loads</td>
                  <td className="px-4 py-3 text-[#566070]">Right for projects a single 20-yard cannot handle</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-semibold text-charcoal">40-Yard</td>
                  <td className="px-4 py-3 text-[#566070]">Major construction, large commercial demolition, industrial cleanout</td>
                  <td className="px-4 py-3 text-[#566070]">~12 pickup truck loads</td>
                  <td className="px-4 py-3 text-[#566070]">Not available from all providers — confirm before booking</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6">
            <Link
              href="/resources/how-to-choose-the-right-dumpster-size"
              className="inline-block text-orange font-semibold text-[13px] hover:opacity-80 transition-opacity underline underline-offset-2"
            >
              Full dumpster size guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Residential vs Construction */}
      <section className="bg-[#F5F4F0] py-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-8">
            Residential vs. Construction Dumpster Rentals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Residential */}
            <div className="bg-white border border-[#E8E4DE] border-t-[3px] border-t-orange rounded-sm p-6">
              <h3 className="text-[16px] font-bold text-charcoal mb-4">Residential</h3>
              <dl className="space-y-4 text-[13px]">
                <div>
                  <dt className="font-semibold text-charcoal mb-[2px]">Typical projects</dt>
                  <dd className="text-[#566070] leading-[1.6]">Home cleanouts, estate clearances, kitchen and bath remodels, roofing tear-offs, garage and basement cleanouts, yard waste removal</dd>
                </div>
                <div>
                  <dt className="font-semibold text-charcoal mb-[2px]">Common sizes</dt>
                  <dd className="text-[#566070]">10-yard and 20-yard cover most residential jobs</dd>
                </div>
                <div>
                  <dt className="font-semibold text-charcoal mb-[2px]">Typical rental period</dt>
                  <dd className="text-[#566070]">7–10 days for most projects</dd>
                </div>
                <div>
                  <dt className="font-semibold text-charcoal mb-[2px]">Key weight consideration</dt>
                  <dd className="text-[#566070]">Tile, stone countertops, cement board, and shingles hit weight limits faster than general junk</dd>
                </div>
                <div>
                  <dt className="font-semibold text-charcoal mb-[2px]">Placement</dt>
                  <dd className="text-[#566070]">Usually driveway; street placement requires a city permit</dd>
                </div>
              </dl>
              <div className="mt-5 pt-4 border-t border-[#E8E4DE] flex flex-wrap gap-3">
                <Link href="/resources/home-cleanout-dumpster-rental" className="text-[12px] font-semibold text-orange hover:opacity-80 underline underline-offset-2">Home cleanout guide</Link>
                <Link href="/resources/roofing-dumpster-rental" className="text-[12px] font-semibold text-orange hover:opacity-80 underline underline-offset-2">Roofing dumpster guide</Link>
                <Link href="/resources/kitchen-remodel-dumpster-rental" className="text-[12px] font-semibold text-orange hover:opacity-80 underline underline-offset-2">Kitchen remodel guide</Link>
              </div>
            </div>

            {/* Construction */}
            <div className="bg-white border border-[#E8E4DE] border-t-[3px] border-t-orange rounded-sm p-6">
              <h3 className="text-[16px] font-bold text-charcoal mb-4">Construction</h3>
              <dl className="space-y-4 text-[13px]">
                <div>
                  <dt className="font-semibold text-charcoal mb-[2px]">Typical projects</dt>
                  <dd className="text-[#566070] leading-[1.6]">New construction, major renovation, structural demolition, commercial tenant improvement, multi-unit property management</dd>
                </div>
                <div>
                  <dt className="font-semibold text-charcoal mb-[2px]">Common sizes</dt>
                  <dd className="text-[#566070]">20, 30, and 40-yard; swap-outs common on longer jobs</dd>
                </div>
                <div>
                  <dt className="font-semibold text-charcoal mb-[2px]">Typical rental period</dt>
                  <dd className="text-[#566070]">7–30+ days depending on project length; discuss extended rates upfront</dd>
                </div>
                <div>
                  <dt className="font-semibold text-charcoal mb-[2px]">Key weight consideration</dt>
                  <dd className="text-[#566070]">Concrete, block, and structural debris can fill weight limits in a fraction of the container's volume</dd>
                </div>
                <div>
                  <dt className="font-semibold text-charcoal mb-[2px]">Site access</dt>
                  <dd className="text-[#566070]">Coordinate container placement with the site manager; confirm gate width and overhead clearance</dd>
                </div>
              </dl>
              <div className="mt-5 pt-4 border-t border-[#E8E4DE] flex flex-wrap gap-3">
                <Link href="/resources/renting-a-construction-dumpster" className="text-[12px] font-semibold text-orange hover:opacity-80 underline underline-offset-2">Construction dumpster guide</Link>
                <Link href="/resources/demolition-dumpster-rental" className="text-[12px] font-semibold text-orange hover:opacity-80 underline underline-offset-2">Demolition dumpster guide</Link>
                <Link href="/resources/concrete-dumpster-rental" className="text-[12px] font-semibold text-orange hover:opacity-80 underline underline-offset-2">Concrete debris guide</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roofing section */}
      <section className="bg-charcoal py-[72px] px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
            <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-white tracking-tight mb-4">
              Roofing Dumpster Rentals in the Denver Metro
            </h2>
            <div className="space-y-4 text-[14px] text-white/[.65] leading-[1.7]">
              <p>
                The Denver metro sits in Colorado's Front Range hail corridor. The metro averages
                1–3 significant hail events per year, and a major storm can trigger thousands of
                roofing replacements across Aurora, Lakewood, Arvada, and the broader metro within
                weeks.
              </p>
              <p>
                A 20-yard container handles most residential shingle tear-offs. Shingles are
                heavier than most homeowners expect — a full residential roof can produce 3 tons
                or more. That weight matters because most containers have a per-ton limit. Confirm
                the weight allowance before the first shingle comes off.
              </p>
              <p>
                Coordinate the container delivery with your roofing schedule. Delivery on the
                morning of the tear-off is the usual setup. Protect the driveway surface if you are
                on asphalt — plywood sheets under the container legs help. Ask your provider whether
                roofing nails and underlayment are accepted.
              </p>
              <p>
                After a major hail event, container availability tightens across the metro within
                days. Book as soon as the project is scheduled, not after the contractor has started.
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/resources/roofing-dumpster-rental"
                className="inline-block bg-orange text-black font-bold text-[13px] px-[22px] py-[10px] rounded-full hover:opacity-90 transition-opacity"
              >
                Full Roofing Dumpster Guide
              </Link>
            </div>
          </div>
          <div className="bg-white/[.05] border border-white/[.08] rounded-sm p-6 space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[.12em] text-orange">
              Roofing Checklist
            </p>
            {[
              'Confirm container weight allowance before tear-off starts',
              'Coordinate delivery for the morning of the job',
              'Ask if roofing nails and underlayment are accepted',
              'Protect asphalt driveways with plywood under container legs',
              'Book early after any hail event — availability tightens fast',
              'Check whether the container needs to go on the street (permit required)',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="shrink-0 w-[6px] h-[6px] rounded-full bg-orange mt-[7px]" aria-hidden="true" />
                <p className="text-[13px] text-white/[.65] leading-[1.6]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery and placement */}
      <section className="bg-white border-y border-[#E8E4DE] py-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-3">
            Delivery and Placement in the Denver Metro
          </h2>
          <p className="text-[15px] text-[#6B7280] leading-[1.7] mb-8 max-w-[680px]">
            Placement rules vary by city and property type. The notes below cover the most common
            situations across the metro. When in doubt, confirm with your rental provider before
            scheduling delivery.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Driveway Placement',
                body: 'The most common setup across the metro. No permit is required for containers on private property in most cases. Check for adequate length and overhead clearance — trees, garage eaves, and power lines are the most common obstacles.',
              },
              {
                title: 'Street Placement and Permits',
                body: 'Street placement requires a right-of-way permit from the relevant city. Denver, Aurora, Lakewood, and Arvada each run their own permitting process. Many providers can assist. Budget 1–3 business days for permit processing before delivery.',
              },
              {
                title: 'HOA Communities',
                body: 'HOA restrictions on container placement are common throughout Aurora, Arvada, and Lakewood. Some associations limit placement duration, restrict visibility from the street, or require written approval. Check your CC&Rs before booking.',
              },
              {
                title: 'Tight Driveways',
                body: "Many 1950s and 1960s ranch homes in central Aurora, Lakewood, and Denver have narrow single-car driveways. Measure the width and length before scheduling. The delivery truck needs adequate clearance to approach and set the container.",
              },
              {
                title: 'Surface Protection',
                body: 'Roll-off trucks use rubber tracks or pads, but asphalt driveways — especially in warm weather — can show impressions from container legs. Plywood sheets under the legs reduce the risk. Ask your provider what their standard procedure is.',
              },
              {
                title: 'Condos, Townhomes, and Dense Areas',
                body: 'Shared parking areas and managed access points in urban Denver and Belmar-area developments add complexity. Contact building management before booking to confirm where the container can go and for how long.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#F5F4F0] border border-[#E8E4DE] rounded-sm p-5">
                <h3 className="text-[14px] font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-[13px] text-[#566070] leading-[1.65]">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/resources/do-you-need-a-permit-for-a-dumpster-rental"
              className="text-[13px] font-semibold text-orange hover:opacity-80 underline underline-offset-2"
            >
              Permit requirements by placement type →
            </Link>
          </div>
        </div>
      </section>

      {/* Materials accepted / restricted */}
      <section className="bg-[#F5F4F0] py-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-3">
            What Goes In and What Does Not
          </h2>
          <p className="text-[15px] text-[#6B7280] leading-[1.7] mb-8 max-w-[680px]">
            Accepted materials vary by provider, disposal facility, and load type. The guidance
            below covers the most common situations. Confirm the specific restricted-items list
            with your provider before delivery.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#E8E4DE] border-t-[3px] border-t-orange rounded-sm p-6">
              <h3 className="text-[14px] font-bold text-charcoal mb-4">Commonly Accepted</h3>
              <ul className="space-y-2">
                {[
                  'Household junk, furniture, and appliances (with caveats — see below)',
                  'Construction debris: wood, drywall, insulation, flooring',
                  'Cabinets, fixtures, and countertops',
                  'Roofing shingles and underlayment',
                  'Yard waste: branches, brush, sod, landscaping debris',
                  'General renovation debris and packaging waste',
                  'Concrete, brick, and soil (in limited quantities — watch weight limits)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[13px] text-[#566070] leading-[1.6]">
                    <span className="shrink-0 text-orange font-bold mt-[1px]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-[#E8E4DE] border-t-[3px] border-t-[#DC2626] rounded-sm p-6">
              <h3 className="text-[14px] font-bold text-charcoal mb-4">Commonly Restricted</h3>
              <ul className="space-y-2">
                {[
                  'Hazardous materials: paint (liquid), solvents, chemicals, oils',
                  'Propane tanks and fuel containers',
                  'Tires and automotive fluids',
                  'Batteries (automotive and household)',
                  'Electronics and e-waste',
                  'Refrigerators and appliances containing refrigerant — may require separate handling',
                  'Pre-1980 flooring and ceiling tile (may contain asbestos — test before demo)',
                  'Medical or biohazardous waste',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[13px] text-[#566070] leading-[1.6]">
                    <span className="shrink-0 text-[#DC2626] font-bold mt-[1px]">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/resources/what-can-you-put-in-a-roll-off-dumpster"
              className="text-[13px] font-semibold text-orange hover:opacity-80 underline underline-offset-2"
            >
              Full accepted and prohibited materials guide →
            </Link>
          </div>
        </div>
      </section>

      {/* How to compare providers */}
      <section className="bg-white border-y border-[#E8E4DE] py-16 px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
            <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-4">
              How to Compare Denver Metro Providers
            </h2>
            <p className="text-[15px] text-[#6B7280] leading-[1.7] mb-6">
              Roll-off pricing in the Denver metro is not standardized. The base rate tells you
              less than the full quote. Here is what to confirm before booking.
            </p>
            <p className="text-[14px] text-[#566070] leading-[1.7]">
              The most common source of surprise invoices is the weight overage fee. A bin that
              looks right for the volume may still come in over the weight limit if the load
              includes shingles, tile, stone, or concrete. Get the weight allowance in writing
              before the container is delivered — not after the driver picks it up.
            </p>
            <div className="mt-6">
              <Link
                href="/resources/what-does-a-dumpster-rental-cost"
                className="text-[13px] font-semibold text-orange hover:opacity-80 underline underline-offset-2"
              >
                What moves the price — full cost guide →
              </Link>
            </div>
          </div>
          <div className="bg-[#F5F4F0] border border-[#E8E4DE] rounded-sm p-6">
            <p className="text-[10px] font-bold uppercase tracking-[.12em] text-orange mb-4">
              Pre-Booking Checklist
            </p>
            <div className="space-y-3">
              {[
                { label: 'Container size available', detail: 'Confirm the size you need is in stock for your delivery date' },
                { label: 'Weight allowance', detail: 'How many tons are included in the base rate' },
                { label: 'Overage fee per ton', detail: 'What you pay if the load exceeds the weight limit' },
                { label: 'Rental period', detail: 'How many days are included before daily extension fees start' },
                { label: 'Delivery lead time', detail: 'How far in advance you need to book' },
                { label: 'Service area confirmation', detail: 'Confirm your specific street address is covered' },
                { label: 'Prohibited materials list', detail: 'What the provider will not accept in this container' },
                { label: 'Permit assistance', detail: 'Can the provider pull the street permit for you if needed' },
                { label: 'Pickup scheduling', detail: 'How you request pickup and how much advance notice is required' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="shrink-0 w-[6px] h-[6px] rounded-full bg-orange mt-[7px]" aria-hidden="true" />
                  <div>
                    <p className="text-[13px] font-semibold text-charcoal">{item.label}</p>
                    <p className="text-[12px] text-[#9CA3AF] leading-[1.5]">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F5F4F0] py-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-10">
            Denver Metro Dumpster Rentals — Straight Answers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faq.map((item) => (
              <div key={item.q} className="bg-white rounded-sm p-6 border border-[#E8E4DE]">
                <h3 className="text-[14px] font-bold text-charcoal mb-3 leading-[1.4]">{item.q}</h3>
                <p className="text-[13px] text-[#566070] leading-[1.65]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-[#1A2530] py-[72px] px-8 text-center">
        <div className="w-11 h-1 bg-orange rounded-sm mx-auto mb-6" />
        <h2 className="text-[clamp(26px,4vw,38px)] font-extrabold text-white tracking-tight mb-[14px]">
          Find a Roll-Off Dumpster Rental in the Denver Metro Area
        </h2>
        <p className="text-[16px] text-white/[.52] max-w-[500px] mx-auto mb-8 leading-[1.65]">
          Compare local providers by container size, weight allowance, and delivery area for your
          specific Denver metro address.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://rolloffdumpsterfinder.com/#section-i0tmdJpJCs"
            className="inline-block bg-orange text-black font-bold text-[14px] px-[28px] py-[13px] rounded-full hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </a>
          <Link
            href="/locations/colorado"
            className="inline-block text-white/60 font-semibold text-[14px] px-[28px] py-[13px] rounded-full border border-white/[.18] hover:border-white/40 hover:text-white transition-all"
          >
            All Colorado Locations
          </Link>
        </div>
      </section>

      {/* Provider CTA band */}
      <section className="bg-white border-t border-[#E8E4DE] py-10 px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#9CA3AF] mb-1">
              For Companies
            </p>
            <p className="text-[15px] font-semibold text-charcoal leading-[1.5]">
              Operating a roll-off company in the Denver metro area?{' '}
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
