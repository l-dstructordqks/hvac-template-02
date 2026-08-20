import Link from 'next/link'
import { JsonLd, offerSchema, BUSINESS_URL } from '@/lib/schema'
import Image from 'next/image'

export interface PromoCardProps {
  /** e.g. "Plumbing Services" — shown in the header bar */
  category: string
  /** e.g. "$20", "15%" — the big number */
  amount: string
  /** e.g. "Save $20 on Any Plumbing Service" */
  description: string
  /** Small ribbon text in the corner, e.g. "SAVE!" */
  ribbonLabel?: string
  /** Primary CTA (solid button) */
  primaryCta: { label: string; href: string }
  /** Secondary CTA (outline button) */
  secondaryCta?: { label: string; href: string }
  /**
   * Stable, indexable path for this specific offer, e.g. "/promotions/plumbing-20".
   * Used as the canonical URL inside the Offer schema — without it, search
   * engines and AI answer engines have nothing stable to cite/link back to.
   */
  slug: string
  /** ISO date the offer expires, e.g. "2026-08-31". REQUIRED for schema —
   * an offer without an end date can't be verified as still active, so
   * most search/AI engines won't surface it. */
  validThrough: string
  /** ISO date the offer starts. Defaults to "now" if omitted. */
  validFrom?: string
  home?: string
}
const currentTime = Date.now()

export function PromoCard({
  category,
  amount,
  description,
  ribbonLabel = 'SAVE!',
  primaryCta,
  secondaryCta,
  slug,
  validThrough,
  validFrom,
  home
}: PromoCardProps) {
  const offerUrl = `${BUSINESS_URL}${slug}`

  // Guardrail: never render an expired offer. This is what actually
  // prevents the "someone set a 2-year date and forgot about it" problem —
  // if validThrough has passed, the card simply doesn't render, so a stale
  // promo can't sit live on the site (bad for SEO/GEO trust and legally risky).
  if (new Date(validThrough).getTime() < currentTime) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`PromoCard "${category}" expired on ${validThrough} and was not rendered. Update validThrough or remove it.`)
    }
    return null
  }

  return (
    <div className="relative w-full max-w-sm bg-white rounded-xl overflow-hidden shadow-sm">
      {/* Offer structured data: gives search engines and AI answer engines
          a verifiable, dated claim they can safely cite ("ProAir is
          currently offering $20 off plumbing, valid through Aug 31"). */}
      <JsonLd
        data={offerSchema({
          name: `${category} — ${amount}`,
          description,
          validFrom,
          validThrough,
          url: offerUrl,
        })}
      />

      {/* Ribbon badge */}
      {ribbonLabel && (
        
          
          <div
            className="absolute top-[-5] right-[-7] z-10 bg-[#D91F26] text-white text-[10px] font-bold px-10 py-2 rotate-45 translate-x-6 translate-y-4 shadow-md text-center"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
          >
            {ribbonLabel}
          </div>
        
      )}

      {/* Header bar */}
      <div className="bg-[#0A3B8A] text-white font-bold py-4 px-6 ">
        <p
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {category.toUpperCase()}
        </p>
      </div>

      {/* Body */}
      <div className='grid grid-cols-10 px-6 py-6 gap-2'>
        <Image 
          src={'/images/raccon.webp'}
          height={100}
          width={100}
          alt='reviewerporfile photo'
          className="w-full h-auto col-span-4"
        />
        <div className="text-left col-span-6">
          <h3
            className="text-[#0f3460] text-4xl font-bold mb-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {/^(save|off|free)\b/i.test(amount) || /\b(off|free)\b/i.test(amount) ? amount : `Save ${amount}`}
          </h3>
          <p className="text-[#2C3440] text-base leading-relaxed mb-2">{description}</p>
          {/* Visible expiration date: matters for SEO/GEO trust signals (a
              promo with no visible end date reads as stale/unverifiable to
              both users and crawlers) and it's required for FTC-style ad
              disclosure in most US states. */}
          <p className="text-[#2C3440]/70 text-xs mb-2">
            Offer valid through {new Date(validThrough).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}.
          </p>
          

          
        </div>
      </div>
      
      <div className="flex flex-col gap-3 p-3 pt-0">
          {!home && 
            <Link
              href={primaryCta.href}
              className="w-full text-center bg-[#D91F26] hover:bg-[#b92127] text-white font-bold py-3 rounded-xl transition-colors text-sm"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
            >
              {primaryCta.label.toUpperCase()}
            </Link>
          }
          
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="w-full text-center border border-[#0A3B8A] hover:bg-[#0A3B8A] hover:text-white text-[#0A3B8A] font-bold py-3 rounded-xl text-sm  shadow-md transform transition duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
            >
              {secondaryCta.label.toUpperCase()}
            </Link>
          )}
        </div>
    </div>
  )
}
