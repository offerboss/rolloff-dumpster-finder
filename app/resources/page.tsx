import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dumpster Rental Resources',
  description:
    'Practical guides on roll-off dumpster sizes, pricing, cleanouts, construction debris, roofing jobs, permits, and what to expect before you book.',
  alternates: {
    canonical: 'https://rolloffdumpsterfinder.com/resources',
  },
  openGraph: {
    title: 'Dumpster Rental Resources | Rolloff Dumpster Finder',
    description:
      'Practical guides on roll-off dumpster sizes, pricing, cleanouts, construction debris, roofing jobs, permits, and what to expect before you book.',
    url: 'https://rolloffdumpsterfinder.com/resources',
    siteName: 'Rolloff Dumpster Finder',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dumpster Rental Resources | Rolloff Dumpster Finder',
    description:
      'Practical guides on roll-off dumpster sizes, pricing, cleanouts, construction debris, roofing jobs, permits, and what to expect before you book.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rolloffdumpsterfinder.com' },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://rolloffdumpsterfinder.com/resources' },
  ],
}

const resourceCards = [
  {
    badge: 'Sizing Guide',
    title: 'How to Choose the Right Dumpster Size for Your Project',
    excerpt:
      'Renting a dumpster that is too small costs you a second haul fee. Renting one that is too large costs you money on unused capacity. Here is the breakdown by project type.',
    href: '/blog/how-to-choose-the-right-dumpster-size',
  },
  {
    badge: 'Pricing',
    title: 'What Does a Roll-Off Dumpster Rental Actually Cost?',
    excerpt:
      'Prices shift based on location, container size, haul distance, and what you put in it. This is what drives the number up or down, and what you can negotiate before booking.',
    href: '/blog/what-does-a-dumpster-rental-cost',
  },
  {
    badge: 'Tips',
    title: '5 Things to Ask Before Booking a Dumpster Rental',
    excerpt:
      'Not all rental agreements are the same. Knowing what to ask about weight limits, prohibited materials, and extension fees saves you money and avoids surprises on pickup day.',
    href: '/blog/5-things-to-ask-before-booking',
  },
  {
    badge: 'Rules',
    title: 'What Can You Put in a Roll-Off Dumpster?',
    excerpt:
      'Tires, paint, and mattresses are prohibited at most companies. Here is what is typically accepted, what gets rejected at the landfill, and what triggers an extra disposal fee.',
    href: '/blog/what-can-you-put-in-a-roll-off-dumpster',
  },
  {
    badge: 'Permits',
    title: 'Do You Need a Permit for a Dumpster Rental?',
    excerpt:
      'Placing a container on public property usually requires a permit. On a private driveway it typically does not. Here is how to find out what your city or county requires before your drop date.',
    href: '#',
  },
  {
    badge: 'Roofing',
    title: 'Dumpster Rental Tips for Roofing Projects',
    excerpt:
      'Shingles are heavy. A full roof tear-off can hit weight limits fast. Here is how to size your container for a roofing job and what surcharges to watch for when booking.',
    href: '/blog/roofing-dumpster-rental',
  },
  {
    badge: 'Companies',
    title: 'Choosing a Dumpster Rental Company: What Actually Matters',
    excerpt:
      'Not all roll-off dumpster rental companies are equal. This guide explains how to compare local providers, spot hidden fees, avoid unreliable service, and choose the right company before booking.',
    href: '/blog/how-to-choose-a-dumpster-rental-company',
  },
  {
    badge: 'Cleanouts',
    title: 'Home Cleanout Dumpster Rental Guide',
    excerpt:
      'Clearing a full house, estate, or hoarded property is a different job than a renovation. This guide covers the right container size, access requirements, and what to do with items that cannot go in the bin.',
    href: '#',
  },
]

export default function ResourcesPage() {
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
            Dumpster Rental Resources
          </h1>
          <p className="text-[17px] text-white/[.58] max-w-[580px] leading-[1.65]">
            Practical guides on roll-off dumpster sizes, pricing, cleanouts, construction debris,
            roofing jobs, permits, and what to expect before you book.
          </p>
        </div>
      </section>

      {/* Resource card grid */}
      <section className="bg-[#F5F4F0] py-16 px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {resourceCards.map((card) => {
            const CardWrapper = card.href === '#' ? 'article' : Link
            const wrapperProps =
              card.href === '#'
                ? {}
                : { href: card.href as string }

            return (
              <article
                key={card.title}
                className="bg-white border border-[#E0DEDA] border-t-[3px] border-t-orange rounded-sm p-6 flex flex-col transition-all duration-200 hover:shadow-[0_8px_28px_rgba(0,0,0,.11)] hover:-translate-y-0.5"
              >
                <span className="inline-block bg-orange text-black text-[9px] font-bold uppercase tracking-[.1em] px-[9px] py-[4px] rounded-sm mb-[14px] self-start">
                  {card.badge}
                </span>
                <h2 className="text-[15px] font-bold text-charcoal leading-[1.35] mb-[10px]">
                  {card.title}
                </h2>
                <p className="text-[13px] text-[#566070] leading-[1.65] flex-1 mb-5">
                  {card.excerpt}
                </p>
                <div className="h-px bg-[#E8E4DE] mb-4" />
                {card.href === '#' ? (
                  <span className="text-[13px] font-semibold text-orange inline-flex items-center gap-[6px] opacity-40 cursor-default">
                    Coming Soon
                  </span>
                ) : (
                  <Link
                    href={card.href}
                    className="text-[13px] font-semibold text-orange inline-flex items-center gap-[6px] hover:gap-[11px] transition-all duration-150"
                    aria-label={`Read guide: ${card.title}`}
                  >
                    Read Guide <span aria-hidden="true">→</span>
                  </Link>
                )}
              </article>
            )
          })}
        </div>
      </section>

      {/* Dark CTA band */}
      <section className="bg-[#1A2530] py-[72px] px-8 text-center">
        <div className="w-11 h-1 bg-orange rounded-sm mx-auto mb-6" />
        <h2 className="text-[clamp(26px,4vw,38px)] font-extrabold text-white tracking-tight mb-[14px]">
          Ready to Book?
        </h2>
        <p className="text-[16px] text-white/[.52] max-w-[460px] mx-auto mb-8 leading-[1.65]">
          Find available roll-off dumpster rentals near you. No oversized containers, no hidden fees.
        </p>
        <a
          href="https://rolloffdumpsterfinder.com/#section-i0tmdJpJCs"
          className="inline-block bg-orange text-black font-bold text-[14px] px-[28px] py-[13px] rounded-full hover:opacity-90 transition-opacity"
        >
          Get a Quote
        </a>
      </section>
    </>
  )
}
