import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CATEGORIES, findService } from '@/lib/navigation'
import { getServiceContent } from '@/lib/service-content'
import { ServicePage } from '../../components/ServicePage'
import { JsonLd, breadcrumbSchema, serviceSchema, BUSINESS_URL } from '@/lib/schema'


interface Props {
  params: Promise<{
    category: string; service: string
  }>
}


// Pre-renders one static page per leaf service (13 total) at build time —
// e.g. /heating/furnace-services, /solar-solutions/solar-water-heating.
export function generateStaticParams() {
  const params = CATEGORIES.flatMap((c) =>
    c.services.map((s) => ({
      category: c.slug,
      service: s.slug,
    }))
  )

  return params
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { category, service } = await params
  const found = findService(category, service)
  const content = getServiceContent(category, service)
  if (!found || !content) return {}

  const url = `${BUSINESS_URL}/${category}/${service}`

  return {
    title: `${found.service.label} in Northern Virginia & Maryland | ProAir HVAC`,
    description: content.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${found.service.label} | ProAir HVAC`,
      description: content.metaDescription,
      url,
    },
  }
}

export default async function ServiceDetailPage(
  { params }: Props
) {
  const { category: categorySlug, service: serviceSlug } = await params

  const found = findService(categorySlug, serviceSlug)
  const content = getServiceContent(categorySlug, serviceSlug)
  if (!found || !content) notFound()

  const { category, service } = found
  const url = `${BUSINESS_URL}/${category.slug}/${service.slug}`

  // Related links: the other services in the same category, so each leaf
  // page reinforces the category it belongs to (topical relevance signal).
  const relatedLinks = category.services
    .filter((s) => s.slug !== service.slug)
    .map((s) => ({ label: s.label, href: `/${category.slug}/${s.slug}` }))

  const PROCESS = [
    { step: '1', title: 'Free diagnosis', desc: 'We evaluate your system and home at no cost to recommend the best solution.', image: '../images/process1.png' },
    { step: '2', title: 'Clear quote', desc: 'A final price in writing before any work starts. No surprises on the invoice.', image: '../images/process2.png' },
    { step: '3', title: 'Service or install', desc: 'Certified technicians using the latest equipment and quality parts.', image: '../images/process3.png' },
    { step: '4', title: 'Test & clean up', desc: 'We verify everything runs perfectly and leave the work area spotless.', image: '../images/process4.png' },
  ]

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: BUSINESS_URL },
            { name: category.label, url: `${BUSINESS_URL}/${category.slug}` },
            { name: service.label, url },
          ]),
          serviceSchema({
            name: service.label,
            description: content.metaDescription,
            url,
          }),
        ]}
      />
      <ServicePage
        badge={`${category.label} · ${service.label}`}
        title={content.title}
        subtitle={content.subtitle}
        heroImg={content.heroImg}
        heroImgAlt={content.heroImgAlt}
        intro={content.intro}

        signTitle={content.signTitle}
        signs={content.signs}
        signTitleDesc={content.signTitleDesc}
        signDescription={content.signDescription}
        signImg={content.signImg}

        benefits={content.benefits}
        process={PROCESS}
        faqs={content.faqs}
        relatedLinks={relatedLinks}
      />
    </>
  )
}
