import type { Metadata } from 'next'
import './globals.css'
import { SiteHeader, SiteFooter } from './components/SiteChrome'
import { localBusinessSchema, JsonLd, BUSINESS_URL, BUSINESS_PHONE } from '@/lib/schema'
import { Montserrat, Inter, Oswald, Barlow_Condensed } from 'next/font/google'
import { cn } from "@/lib/utils";

const montserrat = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
})

const inter = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_URL),
  title: {
    default: 'Repair It Raccoon | Heating, AC, Solar & Home Improvement — Frisco Texas',
    template: '%s | Repair It Raccoon',
  },
  description:
    'Family-owned HVAC company serving in Frisco Texas since 2008. Service, installation, and maintenance on all brands. furnaces, AC, heat pumps, boilers, solar water heating, and home improvement. Licensed, bonded, and insured.',
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
    siteName: 'Repair It Raccoon',
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
        <main className="flex-1">{children}
          <div className='fixed right-2 bottom-10 z-30 md:hidden flex bg-[#D91F26] justify-center items-center p-3 h-12 rounded-xl gap-3'>
            <a href={BUSINESS_PHONE} className="bg-[#D91F26] flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="#FFF" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.43 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </a>
            <p className='font-bold justify-center text-white text-xs' style={{ fontFamily: 'var(--font-display)' }}> CALL US</p>
          </div>
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
