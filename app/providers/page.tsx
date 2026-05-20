import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dumpster Rental Provider Directory | Rolloff Dumpster Finder',
  description:
    'Browse verified roll-off dumpster rental companies by state and service area. Rolloff Dumpster Finder lists local providers in Colorado with city coverage, container sizes, and direct contact information.',
  alternates: {
    canonical: 'https://rolloffdumpsterfinder.com/providers',
  },
  openGraph: {
    title: 'Dumpster Rental Provider Directory | Rolloff Dumpster Finder',
    description:
      'Browse verified roll-off dumpster rental companies by state and service area. Rolloff Dumpster Finder lists local providers in Colorado with city coverage, container sizes, and direct contact information.',
    url: 'https://rolloffdumpsterfinder.com/providers',
    siteName: 'Rolloff Dumpster Finder',
    type: 'website',
    images: [
      {
        url: 'https://rolloffdumpsterfinder.com/home-page-images/commercial-construction-roll-off-dumpster-rental.png',
        width: 1448,
        height: 1086,
        alt: 'Roll-off dumpster rental company directory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dumpster Rental Provider Directory | Rolloff Dumpster Finder',
    description:
      'Browse verified roll-off dumpster rental companies by state and service area.',
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
  ],
}

const steps = [
  {
    num: '01',
    title: 'Submit Your Company',
    desc: 'Provide your company name, service areas, the cities you cover, and the container sizes you offer. Standard listings are available at no charge.',
  },
  {
    num: '02',
    title: 'We Verify Coverage',
    desc: 'We confirm your service area and contact information before the listing goes live. Verification typically takes two to three business days.',
  },
  {
    num: '03',
    title: 'Your Listing Goes Live',
    desc: 'Your company appears in the relevant state and city directory pages. Featured listings receive first-position placement and a verified badge on matching service area pages.',
  },
]

const activeStates = [
  {
    state: 'Colorado',
    href: '/providers/colorado',
    desc: 'Roll-off dumpster rental companies serving the Front Range, Western Slope, and mountain communities. Now accepting provider listings.',
    status: 'Accepting Listings',
  },
  {
    state: 'Arizona',
    href: '/providers/arizona',
    desc: 'Roll-off dumpster rental companies serving Phoenix metro, Tucson, and markets across Arizona. Now accepting provider listings.',
    status: 'Accepting Listings',
  },
]

const comingSoon = ['Texas', 'Utah', 'Wyoming', 'New Mexico']

export default function ProvidersPage() {
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
            Provider Directory
          </p>
          <h1 className="text-[clamp(30px,5vw,52px)] font-extrabold text-white leading-[1.08] tracking-tight mb-5">
            Dumpster Rental Companies by State
          </h1>
          <p className="text-[17px] text-white/[.58] max-w-[600px] leading-[1.65]">
            Rolloff Dumpster Finder lists verified roll-off dumpster rental companies by state and
            service area. This directory is for companies — if you are looking to rent a dumpster,
            see the{' '}
            <Link href="/locations" className="text-orange/80 hover:text-orange transition-colors underline underline-offset-2">
              location guides
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Active states */}
      <section className="bg-[#F5F4F0] py-16 px-8">
        <div className="max-w-[1200px] mx-auto mb-10">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-2">
            Browse Providers by State
          </h2>
          <p className="text-[15px] text-[#6B7280] leading-[1.6]">
            Select a state to browse verified roll-off dumpster rental companies by city and service
            area.
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {activeStates.map((card) => (
            <article
              key={card.state}
              className="bg-charcoal border border-white/[.06] rounded-sm p-8 flex flex-col transition-all duration-200 hover:bg-[#1A2530] hover:shadow-[0_10px_36px_rgba(0,0,0,.3)]"
            >
              <p className="text-[9px] font-bold uppercase tracking-[.12em] text-orange mb-[10px]">
                ● {card.status}
              </p>
              <h2 className="text-[32px] font-extrabold text-white tracking-tight leading-[1.1] mb-3">
                {card.state}
              </h2>
              <p className="text-[13px] text-white/[.48] leading-[1.65] flex-1 mb-7">
                {card.desc}
              </p>
              <Link
                href={card.href}
                className="inline-block bg-orange text-black font-bold text-[12px] px-[18px] py-[9px] rounded-full hover:opacity-90 transition-opacity self-start"
              >
                Browse {card.state} Providers
              </Link>
            </article>
          ))}
        </div>

        {/* Coming soon */}
        <div className="max-w-[1200px] mx-auto">
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

      {/* How listings work */}
      <section className="bg-white border-y border-[#E8E4DE] py-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-2">
            How Provider Listings Work
          </h2>
          <p className="text-[15px] text-[#6B7280] leading-[1.6] mb-10">
            Standard listings are free for verified local companies. Featured placement is available
            for providers who want first-position visibility on matching city and service area pages.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-[#F5F4F0] border border-[#E8E4DE] border-t-[3px] border-t-orange rounded-sm px-6 py-7"
              >
                <div className="text-[32px] font-extrabold text-orange leading-none mb-3 tracking-tight">
                  {step.num}
                </div>
                <p className="text-[14px] font-bold text-charcoal leading-[1.35] mb-2">
                  {step.title}
                </p>
                <p className="text-[13px] text-[#566070] leading-[1.65]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Listing types comparison */}
      <section className="bg-[#F5F4F0] py-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-2">
            Standard and Featured Listings
          </h2>
          <p className="text-[15px] text-[#6B7280] leading-[1.6] mb-10">
            What each listing type includes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Standard */}
            <div className="bg-white border border-[#E0DEDA] rounded-sm p-7">
              <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#9CA3AF] mb-4">
                Standard Listing — Free
              </p>
              <ul className="space-y-3">
                {[
                  'Company name and service state',
                  'City and service area coverage',
                  'Container sizes offered',
                  'Debris types accepted',
                  'Website and contact link',
                  'Verified badge upon confirmation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[13px] text-[#566070] leading-[1.55]">
                    <span className="w-[5px] h-[5px] rounded-full bg-orange shrink-0 mt-[6px]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Featured */}
            <div className="bg-charcoal border border-white/[.06] border-t-[3px] border-t-orange rounded-sm p-7">
              <p className="text-[10px] font-bold uppercase tracking-[.12em] text-orange mb-4">
                Featured Listing — Premium
              </p>
              <ul className="space-y-3">
                {[
                  'Everything in a standard listing',
                  'First-position placement in state and city pages',
                  'Featured badge on all matching service area pages',
                  'Company description and logo placement',
                  'Direct phone number display',
                  'Priority review for new coverage areas',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[13px] text-white/[.55] leading-[1.55]">
                    <span className="w-[5px] h-[5px] rounded-full bg-orange shrink-0 mt-[6px]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A2530] py-[72px] px-8 text-center">
        <div className="w-11 h-1 bg-orange rounded-sm mx-auto mb-6" />
        <h2 className="text-[clamp(26px,4vw,38px)] font-extrabold text-white tracking-tight mb-[14px]">
          List Your Company
        </h2>
        <p className="text-[16px] text-white/[.52] max-w-[500px] mx-auto mb-8 leading-[1.65]">
          Standard listings are free for verified local operators. Contact us with your company
          name, service area, and the cities you cover.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:adam@meetadamchandler.com?subject=Provider Listing Request"
            className="inline-block bg-orange text-black font-bold text-[14px] px-[28px] py-[13px] rounded-full hover:opacity-90 transition-opacity"
          >
            Submit a Listing Request
          </a>
          <Link
            href="/providers/colorado"
            className="inline-block text-white/60 font-semibold text-[14px] px-[28px] py-[13px] rounded-full border border-white/[.18] hover:border-white/40 hover:text-white transition-all"
          >
            Browse Colorado Providers
          </Link>
        </div>
      </section>
    </>
  )
}
