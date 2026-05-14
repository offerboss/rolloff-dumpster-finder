'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavLink({
  href,
  children,
  external,
}: {
  href: string
  children: React.ReactNode
  external?: boolean
}) {
  const pathname = usePathname()
  const isActive =
    !external && (href === '/' ? pathname === '/' : pathname.startsWith(href))

  const base = 'whitespace-nowrap transition-colors hover:text-orange'
  const active = 'text-orange font-semibold'
  const inactive = 'text-charcoal font-medium'

  if (external) {
    return (
      <a href={href} className={`${base} ${inactive}`}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={`${base} ${isActive ? active : inactive}`}>
      {children}
    </Link>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E8E6E1]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10 min-h-[90px] sm:min-h-[170px] flex items-center justify-between gap-8">

        <Link href="/" aria-label="Rolloff Dumpster Finder home">
          <Image
            src="https://assets.cdn.filesafe.space/v57xFnmYy49mB7csJulf/media/69f7f3d66b07ab33035b936b.png"
            alt="Rolloff Dumpster Finder"
            width={220}
            height={66}
            className="w-[140px] sm:w-[170px] lg:w-[220px] h-auto"
            priority
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden sm:flex items-center gap-9 text-[20px]">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/resources">Resources</NavLink>
          <NavLink href="/locations">Locations</NavLink>
          <NavLink href="/#contact">Contact</NavLink>
        </nav>

        <a
          href="https://form.typeform.com/to/vgtrPHz6"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-block bg-orange text-black font-bold text-[18px] px-[30px] py-[14px] rounded-full shrink-0 hover:opacity-90 transition-opacity"
        >
          Book Now
        </a>
        <a
          href="https://form.typeform.com/to/vgtrPHz6"
          target="_blank"
          rel="noopener noreferrer"
          className="sm:hidden bg-orange text-black font-bold px-5 py-2 rounded-full text-sm hover:opacity-90 transition-opacity"
        >
          Book Now
        </a>

      </div>
    </header>
  )
}
