import type { Metadata } from 'next'
import Link from 'next/link'
import { arizonaProviders } from '@/content/providers'

export const metadata: Metadata = {
  title: 'Arizona Roll-Off Dumpster Rental Companies | Provider Directory',
  description:
    'Browse roll-off dumpster rental companies serving Arizona by region. Listings are compiled from public business information and have not yet been confirmed by providers.',
  alternates: {
    canonical: 'https://rolloffdumpsterfinder.com/providers/arizona',
  },
  openGraph: {
    title: 'Arizona Roll-Off Dumpster Rental Companies | Provider Directory',
    description:
      'Browse roll-off dumpster rental companies serving Arizona by region. Listings are compiled from public business information and have not yet been confirmed by providers.',
    url: 'https://rolloffdumpsterfinder.com/providers/arizona',
    siteName: 'Rolloff Dumpster Finder',
    type: 'website',
    images: [
      {
        url: 'https://rolloffdumpsterfinder.com/home-page-images/commercial-construction-roll-off-dumpster-rental.png',
        width: 1448,
        height: 1086,
        alt: 'Roll-off dumpster rental companies in Arizona',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arizona Roll-Off Dumpster Rental Companies | Provider Directory',
    description:
      'Browse roll-off dumpster rental companies serving Arizona by region.',
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
      name: 'Arizona',
      item: 'https://rolloffdumpsterfinder.com/providers/arizona',
    },
  ],
}

const regions = [
  {
    key: 'Phoenix Metro',
    label: 'Phoenix Metro',
    desc: 'Serving Phoenix, Mesa, Scottsdale, Chandler, Tempe, Glendale, Gilbert, Peoria, Queen Creek, and surrounding East Valley and West Valley communities.',
  },
  {
    key: 'Tucson Metro',
    label: 'Tucson Metro',
    desc: 'Serving Tucson, Marana, Sahuarita, Sierra Vista, and surrounding southern Arizona communities.',
  },
  {
    key: 'Northern Arizona',
    label: 'Northern Arizona',
    desc: 'Serving Flagstaff, Prescott, Sedona, Kingman, Show Low, Payson, and surrounding high-country communities.',
  },
  {
    key: 'Western Arizona',
    label: 'Western Arizona',
    desc: 'Serving Yuma, Bullhead City, Lake Havasu City, and communities along the Colorado River corridor.',
  },
]

const featuredSlots = [
  {
    position: 'A',
    areas: 'Phoenix Metro · East Valley · Mesa · Scottsdale',
  },
  {
    position: 'B',
    areas: 'Tucson Metro · Southern Arizona',
  },
]

export default function ArizonaProvidersPage() {
  const featured = arizonaProviders.filter((p) => p.featured)
  const standard = arizonaProviders.filter((p) => !p.featured)

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
            {' '}/ Arizona
          </p>
          <h1 className="text-[clamp(30px,5vw,52px)] font-extrabold text-white leading-[1.08] tracking-tight mb-5">
            Arizona Roll-Off Dumpster Rental Companies
          </h1>
          <p className="text-[17px] text-white/[.58] max-w-[600px] leading-[1.65]">
            Roll-off dumpster rental companies serving Arizona, organized by service region. Standard
            listings are compiled from public business information and have not yet been confirmed by
            the provider.
          </p>
          <p className="mt-5 text-[13px] text-white/[.36]">
            Looking to rent a dumpster?{' '}
            <Link
              href="/locations/arizona"
              className="text-orange/70 hover:text-orange transition-colors underline underline-offset-2"
            >
              Browse the Arizona renter guides
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Arizona context section */}
      <section className="bg-white border-b border-[#E8E4DE] py-12 px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12">
          <div className="max-w-[560px]">
            <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
            <h2 className="text-[clamp(18px,2.5vw,24px)] font-extrabold text-charcoal tracking-tight mb-3">
              Arizona Markets
            </h2>
            <p className="text-[14px] text-[#566070] leading-[1.7]">
              The directory covers providers across Phoenix, Scottsdale, Mesa, Chandler, Tempe, and
              Glendale in the Valley, plus Tucson, Flagstaff, Prescott, Yuma, and communities
              statewide. Common jobs include home cleanouts, roofing tear-offs, construction debris
              removal, desert landscaping, full renovation projects, and post-storm cleanup.
            </p>
          </div>
          <div className="shrink-0">
            <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#9CA3AF] mb-4">
              Active City Guides
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-[6px]">
              {[
                { label: 'Phoenix', href: '/locations/phoenix-az-dumpster-rental' },
                { label: 'Scottsdale', href: '/locations/scottsdale-az-dumpster-rental' },
                { label: 'Mesa', href: '/locations/mesa-az-dumpster-rental' },
                { label: 'Chandler', href: '/locations/chandler-az-dumpster-rental' },
                { label: 'Tempe', href: '/locations/tempe-az-dumpster-rental' },
                { label: 'Glendale', href: '/locations/glendale-az-dumpster-rental' },
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
            We are looking for one strong preferred roll-off dumpster partner in each Arizona service
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
                  ● Featured Partner — Arizona
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
                    ● Featured Partner — Arizona
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
                <a
                  href="mailto:adam@meetadamchandler.com?subject=Featured Listing Request — Arizona"
                  className="inline-block bg-orange text-black font-bold text-[12px] px-[18px] py-[9px] rounded-full hover:opacity-90 transition-opacity self-start"
                >
                  Request This Position
                </a>
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
            Arizona Providers by Region
          </h2>
          <p className="text-[15px] text-[#6B7280] leading-[1.6] mb-1">
            {standard.length > 0
              ? `${standard.length} companies listed across Arizona service regions.`
              : 'No standard listings yet for Arizona.'}
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
                    {/* Left: name, meta, desc */}
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

                    {/* Right: chevron */}
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

                  {/* Expanded content */}
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
                        <a
                          href={`mailto:adam@meetadamchandler.com?subject=Listing Request — Arizona, ${region.label}`}
                          className="inline-block bg-charcoal text-white font-bold text-[12px] px-[18px] py-[9px] rounded-full hover:opacity-80 transition-opacity"
                        >
                          Submit a Listing
                        </a>
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
            <a
              href="mailto:adam@meetadamchandler.com?subject=Provider Listing Request — Arizona"
              className="inline-block bg-orange text-black font-bold text-[14px] px-[28px] py-[13px] rounded-full hover:opacity-90 transition-opacity text-center"
            >
              Submit or Update a Listing
            </a>
            <a
              href="mailto:adam@meetadamchandler.com?subject=Featured Listing Request — Arizona"
              className="inline-block bg-charcoal text-white font-bold text-[14px] px-[28px] py-[13px] rounded-full hover:opacity-80 transition-opacity text-center"
            >
              Ask About Featured Placement
            </a>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-[#1A2530] py-[72px] px-8 text-center">
        <div className="w-11 h-1 bg-orange rounded-sm mx-auto mb-6" />
        <h2 className="text-[clamp(26px,4vw,38px)] font-extrabold text-white tracking-tight mb-[14px]">
          List Your Arizona Company
        </h2>
        <p className="text-[16px] text-white/[.52] max-w-[500px] mx-auto mb-8 leading-[1.65]">
          Standard listings are free. Contact us with your company name, service area, and the cities
          you cover.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:adam@meetadamchandler.com?subject=Provider Listing Request — Arizona"
            className="inline-block bg-orange text-black font-bold text-[14px] px-[28px] py-[13px] rounded-full hover:opacity-90 transition-opacity"
          >
            Submit a Listing Request
          </a>
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
