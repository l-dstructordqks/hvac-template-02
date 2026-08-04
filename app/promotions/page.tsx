import type { Metadata } from 'next'
import { PromoCard } from '../components/PromoCard'
import { PROMOTIONS } from '@/lib/promotions'
import { JsonLd, offerSchema, BUSINESS_URL } from '@/lib/schema'

const PAGE_URL = `${BUSINESS_URL}/promotions`

export const metadata: Metadata = {
  title: 'Current HVAC Coupons & Specials in Northern Virginia | ProAir HVAC',
  description:
    'Save on AC repair, heating repair, and new system installation with our current specials: $500 off new systems, $59.99 tune-ups, senior discounts, and more.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Current HVAC Coupons & Specials | ProAir HVAC',
    description: 'Save on AC repair, heating repair, and new system installation across Northern Virginia and Maryland.',
    url: PAGE_URL,
  },
}

const currentTime = Date.now()

export default function PromotionsPage() {
  // Only list offers that haven't expired — keeps the ItemList JSON-LD (and
  // the page itself) honest about what's actually still active. PromoCard
  // has its own guardrail too, but filtering here avoids rendering empty
  // grid gaps for expired entries.
  const activePromotions = PROMOTIONS.filter((p) => new Date(p.validThrough).getTime() >= currentTime)

  return (
    <>
      <JsonLd
        data={activePromotions.map((p) =>
          offerSchema({
            name: `${p.category} — ${p.amount}`,
            description: p.description,
            validThrough: p.validThrough,
            url: `${BUSINESS_URL}${p.slug}`,
          })
        )}
      />

      <section className="bg-[#0f3460] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#e8420a] text-xs font-bold tracking-widest mb-3" style={{ fontFamily: 'var(--font-display)' }}>
            LIMITED-TIME SAVINGS
          </p>
          {/* Single H1, keyword-forward: "coupons/specials" is the actual
              search term people use, more than "promotions". */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Current HVAC Coupons &amp; Specials
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Verified, up-to-date offers for homeowners across Northern Virginia and Maryland. All prices and
            discounts below are current and valid through the date shown on each offer.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-6">
          {activePromotions.length === 0 ? (
            <p className="text-center text-[#5a6778]">No active promotions right now — check back soon, or call us for current pricing.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
              {activePromotions.map((p) => (
                <PromoCard key={p.id} {...p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
