import type { MetadataRoute } from 'next'

import { BUSINESS_URL } from '@/lib/schema'
import { PROMOTIONS } from '@/lib/promotions'
import { CATEGORIES } from '@/lib/navigation'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = Date.now()

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: BUSINESS_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },

    {
      url: `${BUSINESS_URL}/promotions`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    ...CATEGORIES.flatMap((category) => {
      const categoryUrl = `${BUSINESS_URL}/${category.slug}`

      const categoryEntry: MetadataRoute.Sitemap[number] = {
        url: categoryUrl,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      }

      const serviceEntries: MetadataRoute.Sitemap = category.services.map((service) => ({
        url: `${categoryUrl}/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      }))

      return [categoryEntry, ...serviceEntries]
    }),
  ]

  const promotionEntries: MetadataRoute.Sitemap = PROMOTIONS.filter(
    (promotion) => new Date(promotion.validThrough).getTime() >= now,
  ).map((promotion) => ({
    url: `${BUSINESS_URL}${promotion.slug}`,
    lastModified: new Date(
    promotion.validFrom ?? promotion.validThrough),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticEntries, ...promotionEntries]
}