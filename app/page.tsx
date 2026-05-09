import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Rolloff Dumpster Finder',
  description:
    'Find and book roll-off dumpster rentals near you for any project size.',
  alternates: {
    canonical: 'https://rolloffdumpsterfinder.com',
  },
}

export default function HomePage() {
  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-charcoal mb-6 leading-tight">
          Find the Right Dumpster for Any Project
        </h1>
        <p className="text-xl text-gray-500 mb-10">
          Roll-off dumpster rentals for residential cleanouts, construction
          debris, and commercial waste removal.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/services"
            className="bg-orange text-black font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            View Services
          </Link>
          <Link
            href="/blog"
            className="border border-charcoal text-charcoal font-semibold px-7 py-3 rounded-full hover:bg-charcoal hover:text-white transition-colors"
          >
            Read the Blog
          </Link>
        </div>
      </div>
    </section>
  )
}
