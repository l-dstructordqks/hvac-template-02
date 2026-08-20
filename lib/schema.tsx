// Structured data helpers.
// These JSON-LD blocks are the single highest-leverage lever for both
// classic local SEO (Google Maps/local pack) and GEO — they give AI answer
// engines (ChatGPT, Perplexity, Google AI Overviews, Claude) an unambiguous,
// machine-readable summary of who we are, where we serve, and what we do,
// which they lean on heavily when citing/recommending a business.

export const BUSINESS_NAME = "Repair It Raccoon"
export const BUSINESS_LEGAL_NAME = "Repair It Raccoon"
export const BUSINESS_PHONE = "+1-301-946-0600"
export const BUSINESS_PHONE_DISPLAY = "(301) 946-0600"
export const BUSINESS_EMAIL = "reapairitraccoon@gmail.net"
// TODO: confirm this is the live production domain before deploying —
// used as metadataBase and as the canonical/url base in every schema block.
export const BUSINESS_URL = "http://localhost:3000/"
//export const BUSINESS_URL = "http://localhost:3000/"
export const FOUNDING_YEAR = "2008"
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
  "Prosper",
  "McKinney",
  "Allen",
  "Plano",
  "Frisco",
  "The Colony",
  "Carrollton",
  "Lewisville",
  "Lake Dallas",
  "Little Elm",
  "Savannah",
  "Denton",
  "Corinth",
  "Highland Village",
  "Pilot Point",
  "Addison",
  "Richardson",
]
export const SERVICE_AREA = [
  "Frisco, TX"
]




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

    address: {
      "@type": "PostalAddress",
      ...ADDRESS,
    },

    areaServed: [
      ...SERVICE_AREA.map((name) => ({
        "@type": "Place",
        name,
      })),
      ...SERVICE_AREA_CITIES.map((name) => ({
        "@type": "City",
        name,
      })),
    ],

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "07:30",
        closes: "16:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:30",
        closes: "17:30",
      },
    ],

    sameAs: [],

    serviceType: [
      "Air Conditioning Repair",
      "Air Conditioning Installation",
      "Air Conditioning Maintenance",

      "Heating Repair",

      "Furnace Repair",
      "Furnace Installation",
      "Furnace Maintenance",

      "Heat Pump Services",

      "Commercial HVAC",

      "Duct Work",
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "HVAC Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Air Conditioning Repair",
            url: `${BUSINESS_URL}/air-conditioning/repair`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Air Conditioning Installation",
            url: `${BUSINESS_URL}/air-conditioning/installation`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Air Conditioning Maintenance",
            url: `${BUSINESS_URL}/air-conditioning/maintenance`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Heating Repair",
            url: `${BUSINESS_URL}/heating/repair`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Furnace Repair",
            url: `${BUSINESS_URL}/heating/furnace-repair`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Furnace Installation",
            url: `${BUSINESS_URL}/heating/furnace-installation`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Furnace Maintenance",
            url: `${BUSINESS_URL}/heating/furnace-maintenance`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Heat Pump Services",
            url: `${BUSINESS_URL}/heating/heat-pumps`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial HVAC",
            url: `${BUSINESS_URL}/hvac-services/commercial-hvac`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Duct Work",
            url: `${BUSINESS_URL}/hvac-services/duct-work`,
          },
        },
      ],
    },

    // TODO: UPDATE WITH REAL VALUES
    geo: {
      "@type": "GeoCoordinates",
      latitude: "...",
      longitude: "...",
    },

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "125",
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
      "@id": `${BUSINESS_URL}#business`,
      name: BUSINESS_NAME,
      telephone: BUSINESS_PHONE,
      url: BUSINESS_URL,
    },
    areaServed: [
      ...SERVICE_AREA.map((name) => ({
        "@type": "Place",
        name,
      })),
      ...SERVICE_AREA_CITIES.map((name) => ({
        "@type": "City",
        name,
      })),
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
  validThrough?: string // ISO date — required: an offer without an end date
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
    areaServed: SERVICE_AREA.map((name) => ({
      "@type": "Place",
      name,
    })),
  }
}

export function breadcrumbSchema(
  items: {
    name: string;
    url: string;
  }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
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

// MAINTENANCE PLANS
export function maintenancePlansSchema(opts: {
  name: string
  description: string
  url: string
  plans: {
    name: string
    description: string
    price: string
    systems: number
    duration: string
  }[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${opts.url}#maintenance-plans`,
    name: opts.name,
    description: opts.description,
    url: opts.url,

    about: {
      "@type": "Service",
      name: "HVAC Preventative Maintenance",
      serviceType: "HVAC Maintenance",
      provider: {
        "@type": "HVACBusiness",
        name: BUSINESS_NAME,
        telephone: BUSINESS_PHONE,
        url: BUSINESS_URL,
      },
    },

    mainEntity: {
      "@type": "ItemList",
      itemListElement: opts.plans.map((plan, index) => ({
        "@type": "ListItem",
        position: index + 1,

        item: {
          "@type": "Offer",
          name: plan.name,
          description: plan.description,
          price: plan.price,
          priceCurrency: "USD",

          itemOffered: {
            "@type": "Service",
            name: `${plan.name} - ${plan.systems} ${
              plan.systems === 1 ? "HVAC System" : "HVAC Systems"
            }`,
            serviceType: "HVAC Preventative Maintenance",
            provider: {
              "@type": "HVACBusiness",
              name: BUSINESS_NAME,
              telephone: BUSINESS_PHONE,
            },
          },

          areaServed: [
            {
              "@type": "AdministrativeArea",
              name: "North Dallas, TX",
            },
            {
              "@type": "AdministrativeArea",
              name: "Collin County, TX",
            },
            {
              "@type": "AdministrativeArea",
              name: "Denton County, TX",
            },
            ...SERVICE_AREA_CITIES.map((name) => ({
              "@type": "City",
              name: `${name}, TX`,
            })),
          ],
        },
      })),
    },
  }
}

// SERVICEAREAS
export function serviceAreasSchema(opts: {
  name: string
  description: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${opts.url}#service-areas`,
    name: opts.name,
    description: opts.description,
    url: opts.url,

    about: {
      "@type": "HVACBusiness",
      name: BUSINESS_NAME,
      url: BUSINESS_URL,
      telephone: BUSINESS_PHONE,
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "North Dallas, TX",
        },
        {
          "@type": "AdministrativeArea",
          name: "Collin County, TX",
        },
        {
          "@type": "AdministrativeArea",
          name: "Denton County, TX",
        },
        ...SERVICE_AREA_CITIES.map((name) => ({
          "@type": "City",
          name: `${name}, TX`,
        })),
      ],
    },

    mainEntity: {
      "@type": "ItemList",
      name: "HVAC Service Areas",
      numberOfItems: SERVICE_AREA_CITIES.length,

      itemListElement: SERVICE_AREA_CITIES.map((city, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${city}, TX`,
      })),
    },
  }
}