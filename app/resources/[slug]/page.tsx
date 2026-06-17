import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/content/blog-posts'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `https://rolloffdumpsterfinder.com/resources/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Rolloff Dumpster Finder`,
      description: post.metaDescription,
      url: `https://rolloffdumpsterfinder.com/resources/${post.slug}`,
      siteName: 'Rolloff Dumpster Finder',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.coverImage,
          width: 1260,
          height: 750,
          alt: post.coverImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
      images: [post.coverImage],
    },
  }
}

export default async function ResourcePostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://rolloffdumpsterfinder.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Rolloff Dumpster Finder',
      url: 'https://rolloffdumpsterfinder.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://rolloffdumpsterfinder.com/resources/${post.slug}`,
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
        name: 'Resources',
        item: 'https://rolloffdumpsterfinder.com/resources',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://rolloffdumpsterfinder.com/resources/${post.slug}`,
      },
    ],
  }

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: post.author,
    url: 'https://rolloffdumpsterfinder.com/about',
    worksFor: {
      '@type': 'Organization',
      name: 'Rolloff Dumpster Finder',
    },
  }

  const faqSchema =
    post.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
        <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-charcoal transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/resources" className="hover:text-charcoal transition-colors">
                Resources
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium truncate max-w-[200px] sm:max-w-none">
              {post.title}
            </li>
          </ol>
        </nav>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="mb-4">
            <span className="inline-block bg-orange text-black text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">
            {post.title}
          </h1>

          {/* Author byline */}
          <div className="flex items-center gap-4 py-4 border-y border-gray-200">
            <div className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center text-white font-bold text-sm shrink-0">
              {post.author
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>
            <div>
              <p className="font-semibold text-charcoal text-sm">{post.author}</p>
              <p className="text-gray-500 text-sm">
                {formattedDate} &middot; {post.readingTime} min read
              </p>
            </div>
          </div>
        </header>

        {/* Cover image */}
        <div className="mb-10 rounded-xl overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            width={1260}
            height={750}
            priority
            className="w-full object-cover"
          />
        </div>

        {/* Table of contents */}
        {post.toc.length > 0 && (
          <nav
            aria-label="Table of contents"
            className="mb-10 rounded-lg border border-gray-200 bg-gray-50 p-6"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
              In this guide
            </p>
            <ol className="space-y-2">
              {post.toc.map((item, i) => (
                <li key={item.id} className="flex gap-3 text-sm">
                  <span className="text-orange font-semibold shrink-0">{i + 1}.</span>
                  <a
                    href={`#${item.id}`}
                    className="text-charcoal hover:text-orange transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Body */}
        {post.body ? (
          <div
            className="prose prose-lg max-w-none
              prose-headings:text-charcoal prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-a:text-orange prose-a:no-underline hover:prose-a:underline
              prose-strong:text-charcoal
              prose-ul:text-gray-700 prose-li:my-1
              prose-table:text-sm"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        ) : (
          <div className="rounded-lg border border-dashed border-gray-300 p-12 text-center">
            <p className="text-gray-400">Full post coming soon.</p>
          </div>
        )}

        {/* FAQ section */}
        {post.faq.length > 0 && (
          <section className="mt-16" aria-labelledby="faq-heading">
            <h2
              id="faq"
              className="text-2xl font-bold text-charcoal mb-8 pb-3 border-b border-gray-200"
            >
              Frequently Asked Questions
            </h2>
            <dl className="space-y-6">
              {post.faq.map((item, i) => (
                <div key={i} className="rounded-lg border border-gray-200 p-6">
                  <dt className="font-semibold text-charcoal mb-2">{item.question}</dt>
                  <dd className="text-gray-700 text-sm leading-relaxed">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {/* CTA */}
        <div className="mt-16 rounded-xl bg-charcoal text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Find the Best Price?</h2>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            Compare quotes from vetted local companies. No hidden fees, no oversized containers.
          </p>
          <a
            href="https://rolloffdumpsterfinder.com/#get-quote"
            className="inline-block bg-orange text-black font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Get a Free Quote
          </a>
        </div>

        {/* Back to resources */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange transition-colors"
          >
            <span aria-hidden="true">←</span> Back to all guides
          </Link>
        </div>
      </article>
    </>
  )
}
