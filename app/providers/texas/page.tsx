import type { Metadata } from 'next'
import Link from 'next/link'
import { texasProviders } from '@/content/providers'

export const metadata: Metadata = {
  title: 'Texas Roll-Off Dumpster Rental Companies | Provider Directory',
  description:
    'Browse roll-off dumpster rental companies serving Texas by region. Listings cover Dallas–Fort Worth, Houston, Austin, San Antonio, El Paso, and communities statewide.',
  alternates: {
    canonical: 'https://rolloffdumpsterfinder.com/providers/texas',
  },
  openGraph: {
    title: 'Texas Roll-Off Dumpster Rental Companies | Provider Directory',
    description:
      'Browse roll-off dumpster rental companies serving Texas by region. Listings cover Dallas–Fort Worth, Houston, Austin, San Antonio, El Paso, and communities statewide.',
    url: 'https://rolloffdumpsterfinder.com/providers/texas',
    siteName: 'Rolloff Dumpster Finder',
    type: 'website',
    images: [
      {
        url: 'https://rolloffdumpsterfinder.com/home-page-images/commercial-construction-roll-off-dumpster-rental.png',
        width: 1448,
        height: 1086,
        alt: 'Roll-off dumpster rental companies in Texas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Texas Roll-Off Dumpster Rental Companies | Provider Directory',
    description:
      'Browse roll-off dumpster rental companies serving Texas by region.',
    images: [
      'https://rolloffdumpsterfinder.com/home-page-images/commercial-construction-roll-off-dumpster-rental.png',
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
      name: 'Provider Directory',
      item: 'https://rolloffdumpsterfinder.com/providers',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Texas',
      item: 'https://rolloffdumpsterfinder.com/providers/texas',
    },
  ],
}

const regions = [
  {
    key: 'Dallas-Fort Worth / North Texas',
    label: 'Dallas–Fort Worth / North Texas',
    desc: 'Serving Dallas, Fort Worth, Plano, Irving, Garland, Arlington, McKinney, Waxahachie, Allen, Celina, Frisco, Haltom City, Euless, Wylie, and communities across the DFW metroplex and North Texas.',
  },
  {
    key: 'Houston Metro / Southeast Texas',
    label: 'Houston Metro / Southeast Texas',
    desc: 'Serving Houston, Spring, Katy, Sugar Land, The Woodlands, Conroe, Pasadena, League City, La Porte, Missouri City, Stafford, Angleton, Magnolia, and communities across Southeast Texas.',
  },
  {
    key: 'Austin / Central Texas',
    label: 'Austin / Central Texas',
    desc: 'Serving Austin, Round Rock, Cedar Park, Georgetown, Pflugerville, Kyle, Buda, Leander, Liberty Hill, Hutto, Lakeway, and communities across Central Texas including the Waco and Killeen areas.',
  },
  {
    key: 'San Antonio / South Texas',
    label: 'San Antonio / South Texas',
    desc: 'Serving San Antonio, Boerne, New Braunfels, Schertz, Converse, Helotes, Pipe Creek, and communities across South Texas and the Texas Hill Country.',
  },
  {
    key: 'West Texas / El Paso',
    label: 'West Texas / El Paso',
    desc: 'Serving El Paso, Midland, Odessa, Lubbock, Amarillo, and communities across West Texas and the Panhandle.',
  },
]

const featuredSlots = [
  {
    position: 'A',
    areas: 'Dallas–Fort Worth · Plano · Irving · Fort Worth',
  },
  {
    position: 'B',
    areas: 'Houston Metro · Katy · Sugar Land · The Woodlands',
  },
]

export default function TexasProvidersPage() {
  const featured = texasProviders.filter((p) => p.featured)
  const standard = texasProviders.filter((p) => !p.featured)

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
          <p className="text-[11px] font-bold uppercase tracking-[.14em] text-orange/60 mb-4">
            <Link href="/providers" className="hover:text-orange transition-colors">
              Provider Directory
            </Link>
            {' '}/ Texas
          </p>
          <h1 className="text-[clamp(30px,5vw,52px)] font-extrabold text-white leading-[1.08] tracking-tight mb-5">
            Texas Roll-Off Dumpster Rental Companies
          </h1>
          <p className="text-[17px] text-white/[.58] max-w-[600px] leading-[1.65]">
            Roll-off dumpster rental companies serving Texas, organized by metro area and region.
            Standard listings are compiled from public business information and have not yet been
            confirmed by the provider.
          </p>
          <p className="mt-5 text-[13px] text-white/[.36]">
            Looking to rent a dumpster?{' '}
            <Link
              href="/locations/texas"
              className="text-orange/70 hover:text-orange transition-colors underline underline-offset-2"
            >
              Browse the Texas renter guides
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Texas context section */}
      <section className="bg-white border-b border-[#E8E4DE] py-12 px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12">
          <div className="max-w-[560px]">
            <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
            <h2 className="text-[clamp(18px,2.5vw,24px)] font-extrabold text-charcoal tracking-tight mb-3">
              Texas Markets
            </h2>
            <p className="text-[14px] text-[#566070] leading-[1.7]">
              The directory covers roll-off dumpster rental companies across the Dallas–Fort Worth
              metroplex, Houston and Southeast Texas, Austin and Central Texas, San Antonio and the
              Hill Country, El Paso, and West Texas. Common jobs include home cleanouts, roofing
              tear-offs, storm debris removal, construction and renovation debris, and commercial
              jobsite service.
            </p>
          </div>
          <div className="shrink-0">
            <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#9CA3AF] mb-4">
              Active City Guides
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-[6px]">
              {[
                { label: 'Dallas', href: '/locations/dallas-tx-dumpster-rental' },
                { label: 'Houston', href: '/locations/houston-tx-dumpster-rental' },
                { label: 'Austin', href: '/locations/austin-tx-dumpster-rental' },
                { label: 'San Antonio', href: '/locations/san-antonio-tx-dumpster-rental' },
                { label: 'Fort Worth', href: '/locations/fort-worth-tx-dumpster-rental' },
                { label: 'Plano', href: '/locations/plano-tx-dumpster-rental' },
              ].map((city) => (
                <Link
                  key={city.href}
                  href={city.href}
                  className="text-[13px] font-semibold text-orange hover:underline underline-offset-2"
                >
                  {city.label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured partner opportunities */}
      <section className="bg-[#F5F4F0] py-16 px-8">
        <div className="max-w-[1200px] mx-auto mb-10">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-2">
            Featured Partner Opportunities by Region
          </h2>
          <p className="text-[15px] text-[#6B7280] leading-[1.6]">
            We are looking for one strong preferred roll-off dumpster partner in each Texas service
            region. Featured partners receive first-position placement on matching city and service
            area pages, plus direct contact display.
          </p>
        </div>

        {featured.length > 0 ? (
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {featured.map((provider) => (
              <article
                key={provider.id}
                className="bg-white border border-[#E0DEDA] border-t-[3px] border-t-orange rounded-sm p-7 flex flex-col"
              >
                <p className="text-[9px] font-bold uppercase tracking-[.12em] text-orange mb-4">
                  ● Featured Partner — Texas
                </p>
                <h3 className="text-[22px] font-extrabold text-charcoal tracking-tight leading-[1.2] mb-2">
                  {provider.name}
                </h3>
                {provider.description && (
                  <p className="text-[13px] text-[#566070] leading-[1.65] mb-4 flex-1">
                    {provider.description}
                  </p>
                )}
                <div className="space-y-2 mb-6">
                  {provider.serviceAreas.length > 0 && (
                    <p className="text-[12px] text-[#566070]">
                      <span className="font-semibold text-charcoal">Service areas: </span>
                      {provider.serviceAreas.join(', ')}
                    </p>
                  )}
                </div>
                {provider.website && (
                  <a
                    href={provider.website}
                    target="_blank"
                    rel="sponsored nofollow noopener noreferrer"
                    className="inline-block bg-orange text-black font-bold text-[12px] px-[18px] py-[9px] rounded-full hover:opacity-90 transition-opacity self-start"
                  >
                    Visit Website
                  </a>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredSlots.map((slot) => (
              <div
                key={slot.position}
                className="bg-white border border-[#E0DEDA] border-t-[3px] border-t-orange rounded-sm p-7 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[9px] font-bold uppercase tracking-[.12em] text-orange">
                    ● Featured Partner — Texas
                  </p>
                  <span className="text-[9px] font-bold uppercase tracking-[.08em] bg-[#F3F2EF] text-[#9CA3AF] px-[8px] py-[3px] rounded-sm border border-[#E5E3DE]">
                    Available
                  </span>
                </div>
                <h3 className="text-[18px] font-extrabold text-charcoal tracking-tight leading-[1.2] mb-2">
                  Featured Partner Slot
                </h3>
                <p className="text-[13px] text-[#566070] leading-[1.65] mb-5 flex-1">
                  This position is reserved for a confirmed roll-off dumpster rental company serving{' '}
                  {slot.areas}. Featured placement includes first-position on all matching city pages
                  and direct contact display.
                </p>
                <div className="space-y-[6px] mb-6">
                  <p className="text-[12px] text-[#9CA3AF]">
                    <span className="font-semibold text-[#B0B8C1]">Coverage: </span>
                    {slot.areas}
                  </p>
                </div>
                <Link
                  href="/for-rental-companies"
                  className="inline-block bg-orange text-black font-bold text-[12px] px-[18px] py-[9px] rounded-full hover:opacity-90 transition-opacity self-start"
                >
                  Get Featured on Rolloff Dumpster Finder
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Standard listings by region — accordion */}
      <section className="bg-white border-y border-[#E8E4DE] py-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-2">
            Texas Providers by Region
          </h2>
          <p className="text-[15px] text-[#6B7280] leading-[1.6] mb-1">
            {standard.length > 0
              ? `${standard.length} companies listed across Texas service regions.`
              : 'No standard listings yet for Texas.'}
          </p>
          <p className="text-[13px] text-[#9CA3AF] leading-[1.6] mb-8">
            Standard listings are compiled from public business information and have not yet been
            confirmed by the provider. Contact information is displayed as found in public records.
          </p>
          <p className="text-[13px] text-[#6B7280] leading-[1.6] mb-6">
            Open a region below to view public roll-off dumpster provider listings.
          </p>

          <div className="border border-[#E8E4DE] rounded-sm overflow-hidden divide-y divide-[#E8E4DE]">
            {regions.map((region) => {
              const regionProviders = standard.filter((p) => p.primaryRegion === region.key)
              const hasFeatured = featured.some((p) => p.primaryRegion === region.key)

              return (
                <details key={region.key} className="group">
                  <summary className="list-none [&::-webkit-details-marker]:hidden flex items-start justify-between gap-4 cursor-pointer px-6 py-5 hover:bg-[#F9F8F6] transition-colors select-none">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-[5px]">
                        <span className="text-[15px] font-extrabold text-charcoal tracking-tight">
                          {region.label}
                        </span>
                        {regionProviders.length > 0 ? (
                          <span className="text-[10px] font-bold uppercase tracking-[.08em] bg-[#F3F2EF] text-[#566070] px-[8px] py-[3px] rounded-sm border border-[#E5E3DE]">
                            {regionProviders.length} {regionProviders.length === 1 ? 'provider' : 'providers'}
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold uppercase tracking-[.08em] bg-[#F3F2EF] text-[#9CA3AF] px-[8px] py-[3px] rounded-sm border border-[#E5E3DE]">
                            No listings yet
                          </span>
                        )}
                        {!hasFeatured && (
                          <span className="text-[9px] font-bold uppercase tracking-[.08em] text-orange/70 border border-orange/30 px-[7px] py-[2px] rounded-sm">
                            Featured Partner Available
                          </span>
                        )}
                      </div>
                      <p className="text-[12px] text-[#6B7280] leading-[1.55]">{region.desc}</p>
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 mt-[3px] text-[#9CA3AF] group-open:rotate-180 transition-transform duration-200"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>

                  <div className="border-t border-[#E8E4DE] bg-[#FAFAF8]">
                    {regionProviders.length > 0 ? (
                      <div className="divide-y divide-[#EEEAE4]">
                        {regionProviders.map((provider) => (
                          <div
                            key={provider.id}
                            className="px-6 py-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3"
                          >
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2 mb-[4px]">
                                <p className="text-[13px] font-bold text-charcoal leading-[1.3]">
                                  {provider.name}
                                </p>
                                <span className="text-[8px] font-bold uppercase tracking-[.08em] text-[#9CA3AF] bg-white px-[6px] py-[2px] rounded-sm border border-[#E5E3DE]">
                                  Public Listing
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-x-4 gap-y-[3px]">
                                {provider.serviceType && (
                                  <p className="text-[11px] text-[#566070]">
                                    <span className="font-semibold text-charcoal">Service: </span>
                                    {provider.serviceType}
                                  </p>
                                )}
                                {provider.cities && provider.cities.length > 0 && (
                                  <p className="text-[11px] text-[#566070]">
                                    <span className="font-semibold text-charcoal">City: </span>
                                    {provider.cities.join(', ')}
                                  </p>
                                )}
                                {provider.ownershipType && (
                                  <p className="text-[11px] text-[#566070]">
                                    <span className="font-semibold text-charcoal">Ownership: </span>
                                    {provider.ownershipType}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="flex flex-row sm:flex-col gap-x-4 gap-y-[5px] sm:items-end shrink-0">
                              {provider.phone && (
                                <a
                                  href={`tel:${provider.phone.replace(/\D/g, '')}`}
                                  className="text-[12px] font-semibold text-charcoal hover:text-orange transition-colors"
                                >
                                  {provider.phone}
                                </a>
                              )}
                              {provider.website && (
                                <a
                                  href={provider.website}
                                  target="_blank"
                                  rel="nofollow noopener noreferrer"
                                  className="text-[11px] font-semibold text-orange hover:underline"
                                >
                                  Website →
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="px-6 py-10 text-center">
                        <p className="text-[13px] font-semibold text-charcoal mb-1">
                          No listings yet for {region.label}
                        </p>
                        <p className="text-[12px] text-[#6B7280] leading-[1.65] max-w-[380px] mx-auto mb-5">
                          We are adding providers to this region. Standard listings are free for local
                          roll-off dumpster rental companies.
                        </p>
                        <Link
                          href="/for-rental-companies"
                          className="inline-block bg-charcoal text-white font-bold text-[12px] px-[18px] py-[9px] rounded-full hover:opacity-80 transition-opacity"
                        >
                          Get Featured on Rolloff Dumpster Finder
                        </Link>
                      </div>
                    )}
                  </div>
                </details>
              )
            })}
          </div>
        </div>
      </section>

      {/* About listings */}
      <section className="bg-[#F5F4F0] py-16 px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
          <div className="max-w-[520px]">
            <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
            <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-3">
              About These Listings
            </h2>
            <p className="text-[15px] text-[#6B7280] leading-[1.7] mb-5">
              Standard listings are compiled from public business data and have not been confirmed by
              the provider. Contact information is displayed as found. If you are a provider and want
              to update or claim your listing, contact us directly.
            </p>
            <p className="text-[15px] text-[#6B7280] leading-[1.7]">
              Featured partner positions include first-position placement on matching city and service
              area pages, direct phone and contact display, and a confirmed partner badge.
            </p>
          </div>
          <div className="shrink-0 flex flex-col gap-4">
            <Link
              href="/for-rental-companies"
              className="inline-block bg-orange text-black font-bold text-[14px] px-[28px] py-[13px] rounded-full hover:opacity-90 transition-opacity text-center"
            >
              Get Featured on Rolloff Dumpster Finder
            </Link>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-[#1A2530] py-[72px] px-8 text-center">
        <div className="w-11 h-1 bg-orange rounded-sm mx-auto mb-6" />
        <h2 className="text-[clamp(26px,4vw,38px)] font-extrabold text-white tracking-tight mb-[14px]">
          Get Featured on Rolloff Dumpster Finder
        </h2>
        <p className="text-[16px] text-white/[.52] max-w-[500px] mx-auto mb-8 leading-[1.65]">
          Apply for featured placement and put your Texas company in front of customers
          actively searching for dumpster rentals in the markets you serve.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/for-rental-companies"
            className="inline-block bg-orange text-black font-bold text-[14px] px-[28px] py-[13px] rounded-full hover:opacity-90 transition-opacity"
          >
            Get Featured on Rolloff Dumpster Finder
          </Link>
          <Link
            href="/providers"
            className="inline-block text-white/60 font-semibold text-[14px] px-[28px] py-[13px] rounded-full border border-white/[.18] hover:border-white/40 hover:text-white transition-all"
          >
            All States
          </Link>
        </div>
      </section>
    </>
  )
}
