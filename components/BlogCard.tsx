import Image from 'next/image'
import Link from 'next/link'
import type { BlogPost } from '@/content/blog-posts'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span className="inline-block bg-orange text-black text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start">
          {post.category}
        </span>

        <h2 className="text-base font-bold text-charcoal leading-snug mb-3">
          {post.title}
        </h2>

        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="bg-orange text-black font-semibold text-sm px-5 py-2.5 rounded-full text-center hover:opacity-90 transition-opacity self-start"
        >
          Read Full Post
        </Link>
      </div>
    </article>
  )
}
