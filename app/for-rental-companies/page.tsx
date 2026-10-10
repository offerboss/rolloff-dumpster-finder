import type { Metadata } from 'next'
import Link from 'next/link'
import GhlFormEmbed from '@/components/GhlFormEmbed'

export const metadata: Metadata = {
  title: 'Apply to Be Featured on Rolloff Dumpster Finder',
  description:
    'Put your dumpster rental company in front of customers actively searching in the markets you serve. Apply for featured placement on Rolloff Dumpster Finder.',
  alternates: {
    canonical: 'https://www.rolloffdumpsterfinder.com/for-rental-companies',
  },
  openGraph: {
    title: 'Apply to Be Featured on Rolloff Dumpster Finder',
    description:
      'Put your dumpster rental company in front of customers actively searching in the markets you serve. Apply for featured placement on Rolloff Dumpster Finder.',
    url: 'https://www.rolloffdumpsterfinder.com/for-rental-companies',
    siteName: 'Rolloff Dumpster Finder',
    type: 'website',
    images: [
      {
        url: 'https://www.rolloffdumpsterfinder.com/home-page-images/commercial-construction-roll-off-dumpster-rental.png',
        width: 1448,
        height: 1086,
        alt: 'Apply to be featured on Rolloff Dumpster Finder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apply to Be Featured on Rolloff Dumpster Finder',
    description:
      'Put your dumpster rental company in front of customers actively searching in the markets you serve. Apply for featured placement on Rolloff Dumpster Finder.',
    images: [
      'https://www.rolloffdumpsterfinder.com/home-page-images/commercial-construction-roll-off-dumpster-rental.png',
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rolloffdumpsterfinder.com' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'For Rental Companies',
      item: 'https://www.rolloffdumpsterfinder.com/for-rental-companies',
    },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Apply to Be Featured on Rolloff Dumpster Finder',
  description:
    'Put your dumpster rental company in front of customers actively searching in the markets you serve. Apply for featured placement on Rolloff Dumpster Finder.',
  url: 'https://www.rolloffdumpsterfinder.com/for-rental-companies',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Rolloff Dumpster Finder',
    url: 'https://www.rolloffdumpsterfinder.com',
  },
}

const valuePropCards = [
  {
    num: '01',
    title: 'Reach active local searches',
    body: 'Rolloff Dumpster Finder connects homeowners, contractors, and property managers with local dumpster rental companies. Featured placement puts your business in front of people who are actively searching for roll-off rentals in the markets you serve.',
  },
  {
    num: '02',
    title: 'One short application',
    body: 'The application covers your company information, the container sizes you offer, and the service areas you cover. No long intake forms. Our team reviews each application and follows up about available opportunities.',
  },
  {
    num: '03',
    title: 'Built for dumpster rental companies',
    body: 'This is for local and regional roll-off dumpster rental providers. Residential cleanouts, roofing, remodeling, construction, demolition, estate cleanouts, commercial — if you operate roll-off containers and serve local customers, this is for you.',
  },
]

export default function ForRentalCompaniesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* ── Hero ──────────────────────────────────────────────── */}
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
            For Rental Companies
          </p>
          <h1 className="text-[clamp(28px,5vw,50px)] font-extrabold text-white leading-[1.08] tracking-tight mb-5 max-w-[820px]">
            Get Your Dumpster Rental Company Featured on Rolloff Dumpster Finder
          </h1>
          <p className="text-[17px] text-white/[.58] max-w-[640px] leading-[1.65]">
            Rolloff Dumpster Finder helps homeowners, contractors, property managers, and businesses
            connect with local dumpster rental companies. This page is for rental companies
            interested in featured placement — enhanced visibility with customers searching for
            dumpster rentals in the markets you serve, beyond our standard directory listings.
          </p>
          <div className="mt-8">
            <a
              href="#apply"
              className="inline-block bg-orange text-black font-bold text-[15px] px-7 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Apply for Featured Placement
            </a>
          </div>
        </div>
      </section>

      {/* ── Why apply ─────────────────────────────────────────── */}
      <section className="bg-[#F5F4F0] py-16 px-8">
        <div className="max-w-[1200px] mx-auto mb-10">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-[14px]" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-2">
            Why Apply for Featured Placement
          </h2>
          <p className="text-[15px] text-[#6B7280] leading-[1.6] max-w-[640px]">
            Rolloff Dumpster Finder is a consumer resource first. Featured placement connects
            your company with customers who have already decided they need a dumpster rental.
          </p>
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {valuePropCards.map((card) => (
            <div
              key={card.num}
              className="bg-white border border-[#E8E4DE] border-t-[3px] border-t-orange rounded-sm px-6 py-7"
            >
              <div className="text-[32px] font-extrabold text-orange leading-none mb-3 tracking-tight">
                {card.num}
              </div>
              <p className="text-[14px] font-bold text-charcoal leading-[1.35] mb-2">
                {card.title}
              </p>
              <p className="text-[13px] text-[#566070] leading-[1.65]">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Application form ──────────────────────────────────── */}
      <section className="bg-white py-16 px-8 border-y border-[#E8E4DE]" id="apply">
        <div className="max-w-[800px] mx-auto">
          <div className="w-10 h-[3px] bg-orange rounded-sm mb-5" />
          <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold text-charcoal tracking-tight mb-3">
            Apply to Be Featured on Rolloff Dumpster Finder
          </h2>
          <p className="text-[15px] text-[#6B7280] max-w-[640px] leading-[1.65] mb-10">
            Put your company in front of customers actively searching for roll-off dumpster rentals
            in the markets you serve. Tell us about your business below and we will follow up about
            featured placement opportunities.
          </p>
          <GhlFormEmbed
            formId="7SfcLyXB03XsFmarfwkA"
            formName="Get Featured on Rolloff Dumpster Finder"
            dataHeight={1643}
          />
          <p className="mt-8 text-[12px] text-[#9CA3AF] leading-[1.65] max-w-[600px]">
            Rolloff Dumpster Finder may include rental companies in its directory independently of
            this application. This form is specifically for companies interested in featured
            placement, and submitting it does not guarantee acceptance. Our team reviews every
            application and will follow up about available opportunities.
          </p>
        </div>
      </section>

      {/* ── Attribution ───────────────────────────────────────── */}
      <section className="bg-[#F5F4F0] border-t border-[#E8E4DE] py-10 px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[12px] text-[#9CA3AF]">
            Rolloff Dumpster Finder is part of the{' '}
            <a
              href="https://rentalgrowthsystems.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9CA3AF] hover:text-charcoal transition-colors underline underline-offset-2"
            >
              Rental Growth Systems
            </a>{' '}
            network.
          </p>
          <a
            href="https://rentalgrowthsystems.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-[12px] text-[#6B7280] hover:text-charcoal transition-colors underline underline-offset-2"
          >
            Explore Rental Growth Systems →
          </a>
        </div>
      </section>
    </>
  )
}
