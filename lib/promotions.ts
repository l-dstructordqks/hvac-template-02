import type { PromoCardProps } from '@/app/components/PromoCard'

// Central place to manage active offers. To rotate a promotion, edit the
// dates here — nothing else needs to change. PromoCard itself won't render
// anything past `validThrough`, so an expired entry just silently drops off
// the site instead of needing to be manually removed everywhere.
//
// Slugs are deliberately descriptive (not "/promotions/offer-1") because
// the slug becomes the canonical URL in each offer's JSON-LD — a URL search
// engines and AI answer engines can point to directly, e.g. when someone
// searches "hvac senior discount virginia".

export type Promotion = Omit<PromoCardProps, 'primaryCta' | 'secondaryCta'> & {
  id: string
  primaryCta: PromoCardProps['primaryCta']
  secondaryCta?: PromoCardProps['secondaryCta']
}

export const PROMOTIONS: Promotion[] = [
  {
    id: 'new-system-500-off',
    category: 'New System Installation',
    amount: '$500',
    description: 'Save $500 on the installation of a full new heating and cooling system.',
    slug: '/promotions/new-system-500-off',
    validFrom: '2026-07-01',
    validThrough: '2026-09-30',
    primaryCta: { label: 'Schedule Online', href: '#quote' },
    secondaryCta: { label: 'View Details', href: '/promotions/new-system-500-off' },
  },
  {
    id: 'ac-heating-checkup-special',
    category: 'AC & Heating Checkup',
    amount: '$59.99',
    description: 'A/C or heating checkup special — one full system inspection and tune-up per household.',
    slug: '/promotions/ac-heating-checkup-special',
    validFrom: '2026-07-01',
    validThrough: '2026-09-30',
    primaryCta: { label: 'Schedule Online', href: '#quote' },
    secondaryCta: { label: 'View Details', href: '/promotions/ac-heating-checkup-special' },
    ribbonLabel: 'SPECIAL',
  },
  {
    id: 'senior-citizen-discount',
    category: 'Senior Citizen Discount',
    amount: '10% Off',
    description: 'We offer a 10% senior citizen discount on all repair and maintenance services.',
    slug: '/promotions/senior-citizen-discount',
    // Standing discount program rather than a limited-time deal — long
    // window, and it's presented without urgency framing on the card.
    validFrom: '2026-01-01',
    validThrough: '2026-12-31',
    primaryCta: { label: 'Schedule Online', href: '#quote' },
    secondaryCta: { label: 'View Details', href: '/promotions/senior-citizen-discount' },
    ribbonLabel: undefined,
  },
  {
    id: 'free-aprilaire-humidifier',
    category: 'Free Aprilaire Humidifier',
    amount: 'Free',
    description: 'Get a free Aprilaire whole-home humidifier with any full HVAC system installation.',
    slug: '/promotions/free-aprilaire-humidifier',
    validFrom: '2026-07-01',
    validThrough: '2026-09-30',
    primaryCta: { label: 'Schedule Online', href: '#quote' },
    secondaryCta: { label: 'View Details', href: '/promotions/free-aprilaire-humidifier' },
    ribbonLabel: 'FREE GIFT',
  },
]
