import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import { services } from '@/content/services'

export const metadata: Metadata = {
  title: 'Dumpster Rental Services',
  description:
    'Roll-off dumpster rental services for residential cleanouts, construction debris, roofing tear-offs, yard waste, and commercial projects.',
  alternates: {
    canonical: 'https://rolloffdumpsterfinder.com/services',
  },
  openGraph: {
    title: 'Dumpster Rental Services | Rolloff Dumpster Finder',
    description:
      'Roll-off dumpster rental services for residential cleanouts, construction debris, roofing tear-offs, yard waste, and commercial projects.',
    url: 'https://rolloffdumpsterfinder.com/services',
    siteName: 'Rolloff Dumpster Finder',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dumpster Rental Services | Rolloff Dumpster Finder',
    description:
      'Roll-off dumpster rental services for residential cleanouts, construction debris, roofing tear-offs, yard waste, and commercial projects.',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://rolloffdumpsterfinder.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://rolloffdumpsterfinder.com/services',
    },
  ],
}

export default function ServicesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-charcoal transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-charcoal font-medium">Services</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold text-charcoal mb-3">
            Our Services
          </h1>
          <p className="text-gray-500 text-lg max-w-xl">
            Roll-off dumpster rentals for residential, commercial, and
            construction projects of any scale.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
