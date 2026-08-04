// Structured data helpers.
// These JSON-LD blocks are the single highest-leverage lever for both
// classic local SEO (Google Maps/local pack) and GEO — they give AI answer
// engines (ChatGPT, Perplexity, Google AI Overviews, Claude) an unambiguous,
// machine-readable summary of who we are, where we serve, and what we do,
// which they lean on heavily when citing/recommending a business.

export const BUSINESS_NAME = "HVAC Innovation"
export const BUSINESS_LEGAL_NAME = "HVAC Innovation LLC"
export const BUSINESS_PHONE = "+1-301-946-0700"
export const BUSINESS_PHONE_DISPLAY = "(301) 946-0700"
export const BUSINESS_EMAIL = "ben@hvacinnovation.net"
// TODO: confirm this is the live production domain before deploying —
// used as metadataBase and as the canonical/url base in every schema block.
export const BUSINESS_URL = "https://www.hvacinnovation.net"
//export const BUSINESS_URL = "http://localhost:3000/"
export const FOUNDING_YEAR = "2004"
export const BUSINESS_SCHEDULE_WEEK = "Mon–Fri 7am–7pm"
export const BUSINESS_SCHEDULE_WEEKEND = "Sat 8am–5pm"

export const ADDRESS = {
  streetAddress: "4121 Sampson Rd",
  addressLocality: "Silver Spring",
  addressRegion: "MD",
  postalCode: "20906",
  addressCountry: "US",
}

export const SERVICE_AREA_CITIES = [
  "Rockville",
  "Silver Spring",
  "Washington, DC",
  "Alexandria",
  "Herndon",
  "Sterling",
  "Fairfax",
  "Arlington",
]
export const SERVICE_AREA = ["Maryland", "Virginia", "District of Columbia"]




export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: BUSINESS_NAME,
    legalName: BUSINESS_LEGAL_NAME,
    image: `${BUSINESS_URL}/og-image.jpg`,
    url: BUSINESS_URL,
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    priceRange: "$$",
    foundingDate: FOUNDING_YEAR,
    areaServed: [
      ...SERVICE_AREA.map((name) => ({ "@type": "State", name })),
      ...SERVICE_AREA_CITIES.map((name) => ({ "@type": "City", name })),
    ],
    address: {
      "@type": "PostalAddress",
      ...ADDRESS,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "16:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "07:30",
        closes: "13:30",
      },
    ],
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "HVAC, Solar & Home Improvement Services",
      itemListElement: [
        "Furnaces",
        "Air Handlers",
        "Air Conditioning",
        "Heat Pumps",
        "Boilers",
        "Water Heaters",
        "Roof Top Units",
        "Ductless Heating and Cooling",
        "Humidifiers",
        "Thermostats",
        "Air Cleaners",
        "Solar Water Heating",
        "Home Improvement",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  }
}

export function serviceSchema(opts: {
  name: string
  description: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${opts.url}#service`,
    serviceType: opts.name,
    name: `${opts.name} Services | ${BUSINESS_NAME}`,
    description: opts.description,
    url: opts.url,
    provider: {
      "@type": "HVACBusiness",
      name: BUSINESS_NAME,
      telephone: BUSINESS_PHONE,
    },
    areaServed: [
      ...SERVICE_AREA.map((name) => ({ "@type": "State", name })),
      ...SERVICE_AREA_CITIES.map((name) => ({ "@type": "City", name })),
    ],
  }
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  }
}

export function offerSchema(opts: {
  name: string
  description: string
  price?: string
  priceCurrency?: string
  validFrom?: string // ISO date, e.g. "2026-07-01"
  validThrough: string // ISO date — required: an offer without an end date
  // is not verifiable/citable by search engines or AI answer engines.
  url: string
  serviceName?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    priceCurrency: opts.priceCurrency ?? "USD",
    ...(opts.price ? { price: opts.price } : {}),
    ...(opts.validFrom ? { validFrom: opts.validFrom } : {}),
    validThrough: opts.validThrough,
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "HVACBusiness",
      name: BUSINESS_NAME,
      telephone: BUSINESS_PHONE,
    },
    itemOffered: {
      "@type": "Service",

      "@id": `${opts.url}#service`,

      name: opts.serviceName ?? opts.name,
    },
    areaServed: SERVICE_AREA.map((name) => ({ "@type": "State", name })),
  }
}

export function breadcrumbSchema(items: {
  name: string
  url: string
}[]) {
  return {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",

      position: index + 1,

      name: item.name,

      item: item.url,
    })),
  }
}

export function collectionPageSchema(opts: { name: string; description: string; url: string; items: { name: string; url: string }[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: opts.items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        url: item.url,
      })),
    },
  }
}

/** Renders a <script type="application/ld+json"> tag from any schema object(s). */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
