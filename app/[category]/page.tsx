import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CATEGORIES, findCategory } from '@/lib/navigation'
import { CategoryHub } from '../components/CategoryHub'
import { JsonLd, breadcrumbSchema, collectionPageSchema, BUSINESS_URL } from '@/lib/schema'

interface Props {
  params: Promise<{
    category: string
  }>
}

// Pre-renders one static page per top-level category at build time.
export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  
  const { category: slug } = await params

  const category = findCategory(slug)

  if (!category) return {}

  const url = `${BUSINESS_URL}/${category.slug}`
  const title = `${category.label} Services in Northern Virginia & Maryland | ProAir HVAC`

  return {
    title,
    description: category.navBlurb,
    alternates: { canonical: url },
    openGraph: { title, description: category.navBlurb, url },
  }
}

export default async function CategoryPage(
  { params }: Props
) {
  const { category: slug } = await params

  const category = findCategory(slug)
  if (!category) notFound()

  const url = `${BUSINESS_URL}/${category.slug}`

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: BUSINESS_URL },
            { name: category.label, url },
          ]),
          collectionPageSchema({
            name: `${category.label} Services`,
            description: category.navBlurb,
            url,
            items: category.services.map((s) => ({
              name: s.label,
              url: `${url}/${s.slug}`,
            })),
          }),
        ]}
      />
      <CategoryHub category={category} />
    </>
  )
}
