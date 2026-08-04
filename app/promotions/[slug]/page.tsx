import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PROMOTIONS } from '@/lib/promotions'
import { JsonLd, offerSchema, BUSINESS_URL, BUSINESS_PHONE_DISPLAY } from '@/lib/schema'

interface Props {
  params: Promise<{
    slug: string
  }>
}

function findPromotion(slug: string) {
  return PROMOTIONS.find((p) => p.slug === `/promotions/${slug}`)
}

// Pre-renders one static page per offer at build time — e.g.
// /promotions/new-system-500-off, /promotions/senior-citizen-discount.
// Each gets its own indexable URL instead of only existing as a card
// embedded in the /promotions grid.
export function generateStaticParams() {
  return PROMOTIONS.map((p) => ({ slug: p.id }))
}
const currentTime = Date.now()
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  const promo = findPromotion(slug)
  if (!promo) return {}

  const url = `${BUSINESS_URL}${promo.slug}`
  const title = `${promo.category} — ${promo.amount} | ProAir HVAC`
  const description = promo.description

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    robots:
      new Date(promo.validThrough).getTime() < currentTime
        ? { index: false, follow: false }
        : undefined,
  }
}


export default async function PromotionDetailPage({ params }: Props) {
  const { slug } = await params

  const promo = findPromotion(slug)

  if (!promo || new Date(promo.validThrough).getTime() < currentTime) {
    notFound()
  }

  const offerUrl = `${BUSINESS_URL}${promo.slug}`
  const formattedValidThrough = new Date(promo.validThrough).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  )

  return (
    <>
      <JsonLd
        data={offerSchema({
          name: `${promo.category} — ${promo.amount}`,
          description: promo.description,
          validFrom: promo.validFrom,
          validThrough: promo.validThrough,
          url: offerUrl,
        })}
      />

      <section className="bg-[#0f3460] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <nav
            className="flex items-center gap-2 text-white/50 text-xs mb-6"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">
              HOME
            </Link>
            <span>/</span>
            <Link href="/promotions" className="hover:text-white transition-colors">
              COUPONS &amp; SPECIALS
            </Link>
            <span>/</span>
            <span className="text-[#e8420a]">{promo.category.toUpperCase()}</span>
          </nav>

          <p className="text-[#e8420a] text-xs font-bold tracking-widest mb-3" style={{ fontFamily: 'var(--font-display)' }}>
            {promo.category.toUpperCase()}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-none mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            {promo.amount}
          </h1>
          <p className="text-white/70 text-xl leading-relaxed">{promo.description}</p>
          <p className="text-white/50 text-sm mt-4">Offer valid through {formattedValidThrough}.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[#f8f9fc] border border-[#d4dbe6] rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-[#0f3460] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              Ready to claim this offer?
            </h2>
            <p className="text-[#5a6778] mb-6">
              Mention this coupon when you schedule online or call — our team will confirm eligibility and apply it
              to your service.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="bg-[#e8420a] hover:bg-[#cf3508] text-white font-bold px-8 py-4 rounded transition-colors"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
              >
                SCHEDULE ONLINE
              </a>
              <a
                href="tel:+17035550192"
                className="border border-[#0f3460] text-[#0f3460] font-bold px-8 py-4 rounded hover:bg-[#0f3460] hover:text-white transition-colors"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                CALL {BUSINESS_PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <p className="text-[#5a6778]/70 text-xs text-center mt-8">
            Terms: Offer cannot be combined with other discounts. Valid for residential customers in our Northern
            Virginia and Maryland service area only. Ask a ProAir HVAC representative for full details.
          </p>

          <div className="text-center mt-10">
            <Link href="/promotions" className="text-[#0f3460] font-semibold text-sm hover:underline" style={{ fontFamily: 'var(--font-display)' }}>
              ← View all current offers
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

