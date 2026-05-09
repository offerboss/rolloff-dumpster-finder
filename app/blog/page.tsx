import type { Metadata } from 'next'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import { blogPosts } from '@/content/blog-posts'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Practical guides on dumpster sizing, rental pricing, permitted materials, and what to expect from a roll-off rental.',
  alternates: {
    canonical: 'https://rolloffdumpsterfinder.com/blog',
  },
  openGraph: {
    title: 'Blog | Rolloff Dumpster Finder',
    description:
      'Practical guides on dumpster sizing, rental pricing, permitted materials, and what to expect from a roll-off rental.',
    url: 'https://rolloffdumpsterfinder.com/blog',
    siteName: 'Rolloff Dumpster Finder',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Rolloff Dumpster Finder',
    description:
      'Practical guides on dumpster sizing, rental pricing, permitted materials, and what to expect from a roll-off rental.',
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
      name: 'Blog',
      item: 'https://rolloffdumpsterfinder.com/blog',
    },
  ],
}

export default function BlogIndexPage() {
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
              <li className="text-charcoal font-medium">Blog</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold text-charcoal mb-3">Blog</h1>
          <p className="text-gray-500 text-lg max-w-xl">
            Practical guides on sizing, pricing, and what to expect from a
            roll-off dumpster rental.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
