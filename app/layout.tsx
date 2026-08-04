import type { Metadata } from 'next'
import './globals.css'
import { SiteHeader, SiteFooter } from './components/SiteChrome'
import { localBusinessSchema, JsonLd, BUSINESS_URL } from '@/lib/schema'
import { Montserrat, Inter } from 'next/font/google'
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_URL),
  title: {
    default: 'HVAC Innovation | Heating, AC, Solar & Home Improvement — Washington Metro Area',
    template: '%s | HVAC Innovation',
  },
  description:
    'Family-owned HVAC company serving the Washington Metro Area since 2004. Service, installation, and maintenance on all brands. furnaces, AC, heat pumps, boilers, solar water heating, and home improvement. Licensed, bonded, and insured.',
  keywords: [
    'HVAC Silver Spring MD',
    'HVAC Washington DC metro',
    'furnace repair Rockville',
    'AC installation Fairfax',
    'solar water heating Maryland',
    'heat pump repair Arlington',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'HVAC Innovation',
    url: BUSINESS_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(montserrat.variable, inter.variable)}>
      <body className="min-h-screen flex flex-col" style={{ fontFamily: 'var(--font-body)' }}>
        {/* Business-wide LocalBusiness schema: appears on every page so
            crawlers and AI answer engines always have NAP + service area,
            regardless of which page is the entry point. */}
        <JsonLd data={localBusinessSchema()} />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
