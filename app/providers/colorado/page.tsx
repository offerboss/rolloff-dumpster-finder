import type { Metadata } from 'next'
import Link from 'next/link'
import { coloradoProviders } from '@/content/providers'

export const metadata: Metadata = {
  title: 'Colorado Dumpster Rental Companies | Provider Directory',
  description:
    'Find verified roll-off dumpster rental companies serving Colorado. Browse local providers by city, service area, and container size, or submit a listing for your company.',
  alternates: {
    canonical: 'https://rolloffdumpsterfinder.com/providers/colorado',
  },
  openGraph: {
    title: 'Colorado Dumpster Rental Companies | Provider Directory',
    description:
      'Find verified roll-off dumpster rental companies serving Colorado. Browse local providers by city, service area, and container size.',
    url: 'https://rolloffdumpsterfinder.com/providers/colorado',
    siteName: 'Rolloff Dumpster Finder',
    type: 'website',
    images: [
      {
        url: 'https://rolloffdumpsterfinder.com/home-page-images/commercial-construction-roll-off-dumpster-rental.png',
        width: 1448,
        height: 1086,
        alt: 'Roll-off dumpster rental companies in Colorado',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colorado Dumpster Rental Companies | Provider Directory',
    description:
      'Find verified roll-off dumpster rental companies serving Colorado.',
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
      name: 'Colorado',
      item: 'https://rolloffdumpsterfinder.com/providers/colorado',
    },
  ],
}

const coloradoCoverage = [
  'Denver Metro',
  'Colorado Springs',
  'Fort Collins',
  'Boulder',
  'Grand Junction',
  'Steamboat Springs',
  'Pueblo',
  'Greeley',
  'Longmont',
  'Loveland',
]

const featuredSlots = [
  {
    position: 'A',
    areas: 'Denver Metro · Front Range · Boulder County',
  },
  {
    position: 'B',
    areas: 'Colorado Springs · Pueblo · El Paso County',
  },
]

export default function ColoradoProvidersPage() {
  const featured = coloradoProviders.filter((p) => p.featured)
  const standard = coloradoProviders.filter((p) => !p.featured)

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
            {' '}/ Colorado
          </p>
          <h1 className="text-[clamp(30px,5vw,52px)] font-extrabold text-white leading-[1.08] tracking-tight mb-5">
            Colorado Dumpster Rental Companies
          </h1>
          <p className="text-[17px] text-white/[.58] max-w-[600px] leading-[1.65]">
            Verified roll-off dumpster rental companies serving Colorado cities. Browse by service
            area or submit a listing for your company.
          </p>
          <p className="mt-5 text-[13px] text-white/[.36]">
            Looking to rent a dumpster?{' '}
            <Link
              href="/locations/colorado"
              className="text-orange/70 hover:text-orange transition-colors underline underline-offset-2"
            >
              Browse the Colorado renter guides
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Coverage areas nav */}
      <section className="bg-white py-5 px-8 border-b border-[#E8E4DE]">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#9CA3AF] mb-3">
            Coverage Areas
          </p>
          <div className="flex flex-wrap gap-[8px]">
            {coloradoCoverage.map((area) => (
              <span
                key={area}
                className="inline-block px-[14px] py-[6px] rounded-sm text-[12px] font-semibold bg-[#F3F2EF] text-[#566070] border border-[#E5E3DE]"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured providers */}
      <section className="bg-[#F5F4F0] py-16 px-8">
        <div className="max-w-[1200px] mx-auto mb-10">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-2">
            Featured Providers
          </h2>
          <p className="text-[15px] text-[#6B7280] leading-[1.6]">
            Featured providers receive first-position placement on matching city and service area
            pages, along with a verified badge and direct contact display.
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
                  ● Featured Provider — Colorado
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
                  {provider.dumpsterSizes.length > 0 && (
                    <p className="text-[12px] text-[#566070]">
                      <span className="font-semibold text-charcoal">Sizes: </span>
                      {provider.dumpsterSizes.join(', ')}
                    </p>
                  )}
                </div>
                {provider.ctaLink && (
                  <a
                    href={provider.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange text-black font-bold text-[12px] px-[18px] py-[9px] rounded-full hover:opacity-90 transition-opacity self-start"
                  >
                    View Provider
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
                    ● Featured Provider — Colorado
                  </p>
                  <span className="text-[9px] font-bold uppercase tracking-[.08em] bg-[#F3F2EF] text-[#9CA3AF] px-[8px] py-[3px] rounded-sm border border-[#E5E3DE]">
                    Available
                  </span>
                </div>
                <h3 className="text-[18px] font-extrabold text-charcoal tracking-tight leading-[1.2] mb-2">
                  Featured Provider Slot
                </h3>
                <p className="text-[13px] text-[#566070] leading-[1.65] mb-5 flex-1">
                  This position is reserved for a verified roll-off dumpster rental company serving{' '}
                  {slot.areas}. Featured listings include first-position placement on all matching
                  city pages, a verified badge, and direct contact display.
                </p>
                <div className="space-y-[6px] mb-6">
                  <p className="text-[12px] text-[#9CA3AF]">
                    <span className="font-semibold text-[#B0B8C1]">Coverage: </span>
                    {slot.areas}
                  </p>
                  <p className="text-[12px] text-[#9CA3AF]">
                    <span className="font-semibold text-[#B0B8C1]">Sizes: </span>
                    10, 15, 20, 30, 40 yard
                  </p>
                </div>
                <a
                  href="mailto:adam@meetadamchandler.com?subject=Featured Listing Request — Colorado"
                  className="inline-block bg-orange text-black font-bold text-[12px] px-[18px] py-[9px] rounded-full hover:opacity-90 transition-opacity self-start"
                >
                  Request This Listing
                </a>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Standard listings */}
      <section className="bg-white border-y border-[#E8E4DE] py-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-2">
            All Colorado Providers
          </h2>
          <p className="text-[15px] text-[#6B7280] leading-[1.6] mb-10">
            Verified roll-off dumpster rental companies serving Colorado. Standard listings include
            service area, city coverage, container sizes, and contact information.
          </p>

          {/* Table header */}
          <div className="hidden md:grid grid-cols-[2fr_2fr_1fr_1fr] gap-4 px-4 pb-3 border-b border-[#E8E4DE]">
            <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#9CA3AF]">Company</p>
            <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#9CA3AF]">Service Areas</p>
            <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#9CA3AF]">Sizes</p>
            <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#9CA3AF]">Contact</p>
          </div>

          {standard.length > 0 ? (
            <div className="divide-y divide-[#E8E4DE]">
              {standard.map((provider) => (
                <div
                  key={provider.id}
                  className="grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr_1fr] gap-4 px-4 py-5 items-start"
                >
                  <div>
                    <p className="text-[14px] font-bold text-charcoal leading-[1.3] mb-[2px]">
                      {provider.name}
                    </p>
                    {provider.verified && (
                      <span className="text-[9px] font-bold uppercase tracking-[.08em] text-orange">
                        ● Verified
                      </span>
                    )}
                  </div>
                  <p className="text-[13px] text-[#566070]">
                    {provider.serviceAreas.join(', ')}
                  </p>
                  <p className="text-[13px] text-[#566070]">
                    {provider.dumpsterSizes.join(', ')}
                  </p>
                  <div>
                    {provider.website && (
                      <a
                        href={provider.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] font-semibold text-orange hover:underline"
                      >
                        Website
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="border border-dashed border-[#D0CCC5] rounded-sm px-8 py-12 text-center">
              <p className="text-[14px] font-semibold text-charcoal mb-2">
                No standard listings yet for Colorado
              </p>
              <p className="text-[13px] text-[#6B7280] leading-[1.65] max-w-[460px] mx-auto mb-6">
                We are currently onboarding verified providers. Standard listings are free for local
                roll-off dumpster rental companies with confirmed service areas. Listings typically
                go live within two to three business days of submission.
              </p>
              <a
                href="mailto:adam@meetadamchandler.com?subject=Standard Listing Request — Colorado"
                className="inline-block bg-charcoal text-white font-bold text-[13px] px-[22px] py-[10px] rounded-full hover:opacity-80 transition-opacity"
              >
                Submit a Listing Request
              </a>
            </div>
          )}
        </div>
      </section>

      {/* What listings include */}
      <section className="bg-[#F5F4F0] py-16 px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
          <div className="max-w-[520px]">
            <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
            <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-3">
              What a Listing Includes
            </h2>
            <p className="text-[15px] text-[#6B7280] leading-[1.7] mb-5">
              Standard listings include your company name, the cities and service areas you cover,
              container sizes offered, debris types accepted, and a link to your website. We verify
              coverage before any listing goes live.
            </p>
            <p className="text-[15px] text-[#6B7280] leading-[1.7]">
              Featured listings also include first-position placement on matching city pages, a
              verified badge, direct phone number display, and a short company description.
            </p>
          </div>
          <div className="shrink-0 flex flex-col gap-4">
            <a
              href="mailto:adam@meetadamchandler.com?subject=Provider Listing Request — Colorado"
              className="inline-block bg-orange text-black font-bold text-[14px] px-[28px] py-[13px] rounded-full hover:opacity-90 transition-opacity text-center"
            >
              Request a Standard Listing
            </a>
            <a
              href="mailto:adam@meetadamchandler.com?subject=Featured Listing Request — Colorado"
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
          List Your Colorado Company
        </h2>
        <p className="text-[16px] text-white/[.52] max-w-[500px] mx-auto mb-8 leading-[1.65]">
          We verify service areas and contact information before listings go live. Standard listings
          are free. Contact us to get started.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:adam@meetadamchandler.com?subject=Provider Listing Request — Colorado"
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
