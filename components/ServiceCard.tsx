import Image from 'next/image'
import Link from 'next/link'
import type { Service } from '@/content/services'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h2 className="text-base font-bold text-charcoal leading-snug mb-3">
          {service.name}
        </h2>

        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
          {service.description}
        </p>

        <Link
          href={service.ctaHref}
          className="bg-orange text-black font-semibold text-sm px-5 py-2.5 rounded-full text-center hover:opacity-90 transition-opacity self-start"
        >
          {service.ctaText}
        </Link>
      </div>
    </article>
  )
}
