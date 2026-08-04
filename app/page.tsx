import type { Metadata } from 'next'
import HomeContent from './HomeContent'
import { BUSINESS_URL } from '@/lib/schema'

// Homepage metadata gets special weight in SEO: it's almost always the page
// with the most inbound links/authority, and the one most likely to rank
// for the core "[service] + [city/region]" queries.
export const metadata: Metadata = {
  title: 'HVAC Innovation | Heating, AC, Solar & Home Improvement — Washington Metro Area',
  description:
    'Family-owned HVAC company serving the Washington Metro Area since 2004. Service, installation, and maintenance on all brands, plus solar water heating and home improvement. Licensed, bonded, and insured. 24/7 emergency service.',
  alternates: { canonical: BUSINESS_URL },
  openGraph: {
    title: 'HVAC Innovation | Heating, AC, Solar & Home Improvement in Washington Metro Area',
    description: 'Same-day AC and heating repair across the Washington Metro Area since 2004. Licensed, bonded, and insured.',
    url: BUSINESS_URL,
  },
}

export default function Page() {
  return <HomeContent />
}
