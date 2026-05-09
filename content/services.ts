export interface Service {
  slug: string
  name: string
  description: string
  image: string
  ctaText: string
  ctaHref: string
}

export const services: Service[] = [
  {
    slug: 'residential-cleanouts',
    name: 'Residential Cleanouts',
    description:
      'Clear out a garage, basement, or full house without making 40 trips to the transfer station. We drop the container and haul it when you are done.',
    image: 'https://picsum.photos/seed/residential-cleanout/800/500',
    ctaText: 'Get a Quote',
    ctaHref: '#contact',
  },
  {
    slug: 'construction-debris',
    name: 'Construction and Demolition Debris',
    description:
      'Concrete, drywall, framing lumber, and mixed C&D waste. Available in 20-yard and 30-yard containers sized for job sites of most scales.',
    image: 'https://picsum.photos/seed/construction-debris/800/500',
    ctaText: 'Get a Quote',
    ctaHref: '#contact',
  },
  {
    slug: 'roofing-material-disposal',
    name: 'Roofing Material Disposal',
    description:
      'Shingles are heavy and surcharge-prone. Our roofing containers come with weight limits designed for tear-off projects so there are no surprise overage fees.',
    image: 'https://picsum.photos/seed/roofing-disposal/800/500',
    ctaText: 'Get a Quote',
    ctaHref: '#contact',
  },
  {
    slug: 'yard-waste-removal',
    name: 'Yard Waste Removal',
    description:
      'Tree branches, sod, and brush after a landscaping project. Clean yard waste typically hauls at a lower rate than mixed loads — ask about the rate difference before booking.',
    image: 'https://picsum.photos/seed/yard-waste/800/500',
    ctaText: 'Get a Quote',
    ctaHref: '#contact',
  },
  {
    slug: 'commercial-waste-management',
    name: 'Commercial Waste Management',
    description:
      'One-time or ongoing debris removal for retail, office, and industrial sites. Scheduled pickups available weekly or on-call depending on your project timeline.',
    image: 'https://picsum.photos/seed/commercial-waste/800/500',
    ctaText: 'Get a Quote',
    ctaHref: '#contact',
  },
  {
    slug: 'estate-cleanouts',
    name: 'Estate and Foreclosure Cleanouts',
    description:
      'Full-property cleanouts for estate sales, inherited properties, and bank-owned homes. Container drop and pickup coordinated around your access window.',
    image: 'https://picsum.photos/seed/estate-cleanout/800/500',
    ctaText: 'Get a Quote',
    ctaHref: '#contact',
  },
]
