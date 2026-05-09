import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    template: '%s | Rolloff Dumpster Finder',
    default: 'Rolloff Dumpster Finder',
  },
  description:
    'Find and book roll-off dumpster rentals for residential cleanouts, construction projects, and commercial waste removal.',
  metadataBase: new URL('https://rolloffdumpsterfinder.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-charcoal antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
