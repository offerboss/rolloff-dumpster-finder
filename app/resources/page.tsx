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
    href: '/resources/how-to-choose-the-right-dumpster-size',
  },
  {
    badge: 'Pricing',
    title: 'What Does a Roll-Off Dumpster Rental Actually Cost?',
    excerpt:
      'Prices shift based on location, container size, haul distance, and what you put in it. This is what drives the number up or down, and what you can negotiate before booking.',
    href: '/resources/what-does-a-dumpster-rental-cost',
  },
  {
    badge: 'Sizing Guide',
    title: '20 Yard Dumpster Rental: What Fits, What It Costs, and When to Use One',
    excerpt:
      'The 20-yard is the most commonly rented roll-off container. It handles most roof tear-offs, whole-home cleanouts, and kitchen remodels — here is what the weight limits actually mean and when to rent a different size.',
    href: '/resources/20-yard-dumpster-rental',
  },
  {
    badge: 'Sizing Guide',
    title: '10 Yard Dumpster Rental: Best Uses, Weight Limits, and Pricing',
    excerpt:
      'The 10-yard is the right container for single-room remodels, garage cleanouts, and small concrete jobs. Here is what it holds, why the 1–2 ton weight limit matters more than the cubic-yard number, and when to step up.',
    href: '/resources/10-yard-dumpster-rental',
  },
  {
    badge: 'Sizing Guide',
    title: '30 Yard Dumpster Rental: When Bigger Makes Sense',
    excerpt:
      'The 30-yard is the right container for large renovations, estate cleanouts, commercial tenant improvements, and any project where a 20-yard has run short. Here is what fits, what the weight limits mean, and when to size down.',
    href: '/resources/30-yard-dumpster-rental',
  },
  {
    badge: 'Sizing Guide',
    title: '40 Yard Dumpster Rental: When the Biggest Bin Makes Sense',
    excerpt:
      'The 40-yard is right for new construction, large commercial demolitions, and industrial cleanouts. Here is when it fits, what the weight limits mean, and when the 30-yard saves you money.',
    href: '/resources/40-yard-dumpster-rental',
  },
  {
    badge: 'Comparison',
    title: 'Dumpster Trailer Rental vs Roll-Off: What to Know',
    excerpt:
      'A dumpster trailer costs less and fits tighter driveways. The 2,000-lb weight limit is where most jobs outgrow it — here is how to tell which option fits your project before you book.',
    href: '/resources/dumpster-trailer-rental',
  },
  {
    badge: 'Rules',
    title: 'What Can You Put in a Roll-Off Dumpster?',
    excerpt:
      'Tires, paint, and mattresses are prohibited at most companies. Here is what is typically accepted, what gets rejected at the landfill, and what triggers an extra disposal fee.',
    href: '/resources/what-can-you-put-in-a-roll-off-dumpster',
  },
  {
    badge: 'Permits',
    title: 'Do You Need a Permit for a Dumpster Rental?',
    excerpt:
      'Placing a container on public property usually requires a permit. On a private driveway it typically does not. Here is how to find out what your city or county requires before your drop date.',
    href: '/resources/do-you-need-a-permit-for-a-dumpster-rental',
  },
  {
    badge: 'Roofing',
    title: 'Dumpster Rental Tips for Roofing Projects',
    excerpt:
      'Shingles are heavy. A full roof tear-off can hit weight limits fast. Here is how to size your container for a roofing job and what surcharges to watch for when booking.',
    href: '/resources/roofing-dumpster-rental',
  },
  {
    badge: 'Companies',
    title: 'Choosing a Dumpster Rental Company: What Actually Matters',
    excerpt:
      'Not all roll-off dumpster rental companies are equal. This guide explains how to compare local providers, spot hidden fees, avoid unreliable service, and choose the right company before booking.',
    href: '/resources/how-to-choose-a-dumpster-rental-company',
  },
  {
    badge: 'Pricing',
    title: 'Cheap Dumpster Rental: What Actually Moves the Price',
    excerpt:
      'A 10-yard container starts around $220 per week. Six variables move the price — and three of them you control before booking. Here is what to ask before the quote becomes the invoice.',
    href: '/resources/cheap-dumpster-rental',
  },
  {
    badge: 'Commercial',
    title: 'Commercial Dumpster Rental: What Businesses Actually Need',
    excerpt:
      'A commercial roll-off is the same container as a residential one. What changes is scale, site access, and the permit checklist. Here is how to size, price, and book it.',
    href: '/resources/commercial-dumpster-rental',
  },
  {
    badge: 'Home Cleanouts',
    title: 'Home Cleanout Dumpster Rental: What Size to Rent and What to Toss',
    excerpt:
      'A home cleanout usually needs a 10- or 20-yard bin. Here is how to estimate volume by room, what the container takes, and when junk removal is the smarter call.',
    href: '/resources/home-cleanout-dumpster-rental',
  },
  {
    badge: 'Tips',
    title: 'Same Day Dumpster Rental: What to Know Before You Call',
    excerpt:
      'Same day delivery is available in most markets from local operators if you call before noon. Here is what it costs, which companies can do it, and when to skip the $50–$100 rush fee.',
    href: '/resources/same-day-dumpster-rental',
  },
  {
    badge: 'Construction',
    title: 'Renting a Construction Dumpster: What Job Sites Actually Need',
    excerpt:
      'Construction debris hits weight limits faster than residential waste — concrete especially. Here is how to size, permit, and plan pulls for a job site before the truck arrives.',
    href: '/resources/renting-a-construction-dumpster',
  },
  {
    badge: 'Construction',
    title: 'Demolition Dumpster Rental: What Size You Need and What Gets Heavy Fast',
    excerpt:
      'A demolition dumpster is sized by weight, not volume. Tile, concrete, and plaster hit weight limits at a fraction of the bin\'s capacity. Here is how to size it before the invoice.',
    href: '/resources/demolition-dumpster-rental',
  },
  {
    badge: 'Construction',
    title: 'Concrete Dumpster Rental: Why Smaller Bins Usually Make More Sense',
    excerpt:
      'Concrete hits weight limits long before it fills a container. Here is how to size the right bin for concrete, brick, pavers, and heavy debris — and when a dedicated heavy-debris container beats a 30-yard.',
    href: '/resources/concrete-dumpster-rental',
  },
  {
    badge: 'Home Cleanouts',
    title: 'Garage Cleanout Dumpster Rental: What Size Makes Sense for Years of Stuff',
    excerpt:
      'Most garage cleanouts fit a 10-yard bin. Two-car garages and estate situations usually need a 15 or 20. Here is what goes in, what stays out, and when junk removal makes more sense.',
    href: '/resources/garage-cleanout-dumpster-rental',
  },
  {
    badge: 'Construction',
    title: 'Bathroom Remodel Dumpster Rental: Tile, Tubs, Drywall, and Weight Limits',
    excerpt:
      'Bathroom debris is heavier than it looks. Tile, cement board, and a cast iron tub add up fast. Here is what size container to book, and why weight matters more than volume.',
    href: '/resources/bathroom-remodel-dumpster-rental',
  },
  {
    badge: 'Comparison',
    title: 'Junk Removal vs. Dumpster Rental: How to Decide',
    excerpt:
      'Junk removal wins for small loads and no-driveway situations. The bin wins on cost for anything bigger. Here is the break-even point and four questions to ask before booking either.',
    href: '/resources/junk-removal-vs-dumpster-rental',
  },
  {
    badge: 'Home Cleanouts',
    title: 'Estate Cleanout Dumpster Rental: What the Job Actually Takes',
    excerpt:
      'A 3-bedroom house lived in for forty years typically needs one 20-yard container — sometimes two. Here is what household furniture weighs, what the dumpster cannot take, and how to plan around a probate deadline.',
    href: '/resources/estate-cleanout-dumpster-rental',
  },
  {
    badge: 'Landscaping',
    title: 'Yard Waste Dumpster Rental: What You Can Toss and What to Ask First',
    excerpt:
      'Clean green waste and mixed debris get treated differently by haulers. What goes in, what does not, and the six questions to ask before you book a roll-off for yard cleanup.',
    href: '/resources/yard-waste-dumpster-rental',
  },
  {
    badge: 'Home Renovation',
    title: 'Kitchen Remodel Dumpster Rental: Cabinets, Counters, Flooring, and Debris',
    excerpt:
      'A kitchen gut is a mixed-load job — light cabinets and heavy stone in the same bin. Here is how to size the container, what to ask about appliances, and why weight matters more than volume.',
    href: '/resources/kitchen-remodel-dumpster-rental',
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
