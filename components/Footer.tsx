import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#FAFAF8] text-charcoal border-t border-[#E0DEDA]">
      <div className="max-w-[1200px] mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] gap-12">

        <div>
          <Image
            src="https://assets.cdn.filesafe.space/v57xFnmYy49mB7csJulf/media/69f7f3d66b07ab33035b936b.png"
            alt="Rolloff Dumpster Finder"
            width={180}
            height={54}
            className="w-[180px] h-auto mb-[18px]"
          />
          <p className="text-[13px] text-[#6B7280] leading-[1.7] max-w-[260px]">
            Roll-off dumpster rentals matched to your project. No oversized containers, no hidden fees.
          </p>
        </div>

        <div>
          <p className="text-[9px] font-bold uppercase tracking-[.14em] text-orange mb-[18px]">
            Pages
          </p>
          <ul className="flex flex-col gap-[10px]">
            <li>
              <Link href="/" className="text-[13px] text-charcoal hover:text-orange transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="text-[13px] text-charcoal hover:text-orange transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/resources" className="text-[13px] text-charcoal hover:text-orange transition-colors">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/locations" className="text-[13px] text-charcoal hover:text-orange transition-colors">
                Locations
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="text-[13px] text-charcoal hover:text-orange transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[9px] font-bold uppercase tracking-[.14em] text-orange mb-[18px]">
            Contact
          </p>
          <ul className="flex flex-col gap-[10px]">
            <li>
              <a href="tel:+19705686136" className="text-[13px] text-charcoal hover:text-orange transition-colors">
                (970) 568-6136
              </a>
            </li>
            <li>
              <a href="mailto:adam@meetadamchandler.com" className="text-[13px] text-charcoal hover:text-orange transition-colors">
                adam@meetadamchandler.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-[#E0DEDA]">
        <div className="max-w-[1200px] mx-auto px-8 py-4">
          <p className="text-[11px] text-[#9CA3AF]">
            &copy; 2025 Rolloff Dumpster Finder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
