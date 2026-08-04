export interface ServiceNavItem {
  slug: string
  label: string
  /** Short blurb for nav menus and hub-page cards */
  cardBlurb: string
}

export interface CategoryNavItem {
  slug: string
  label: string
  /** Short blurb for the mega-menu and homepage cards */
  navBlurb: string
  /** Longer paragraph for the category hub page intro */
  heroIntro: string
  services: ServiceNavItem[]
}

export const CATEGORIES: CategoryNavItem[] = [
  {
    slug: 'heating',
    label: 'Heating',
    navBlurb: 'Furnaces, boilers, heat pumps, and ductless heating — installation and maintenance for all brands.',
    heroIntro:
      'Since 2004, HVAC Innovation has kept homes across the Washington Metro Area warm and safe. We follow blueprints and manufacturer specifications to install gas and electric heating systems, connect wiring and controls, and use combustion test equipment (including carbon monoxide testers) to ensure every system operates safely and at peak efficiency. Whether you need a furnace tune-up, a new boiler, or a heat pump replacement, our technicians handle it all with a smile.',
    services: [
      {
        slug: 'furnaces',
        label: 'Furnaces',
        cardBlurb: 'Gas and electric furnace installation, repair, and maintenance with combustion safety testing.',
        
      },
      {
        slug: 'boilers',
        label: 'Boilers',
        cardBlurb: 'Professional boiler installation and maintenance for reliable hydronic heating.',
      },
      {
        slug: 'heat-pumps',
        label: 'Heat Pumps',
        cardBlurb: 'Energy-efficient heat pump installation and service for year-round comfort.',
      },
      {
        slug: 'ductless-heating',
        label: 'Ductless Heating',
        cardBlurb: 'Ductless heating solutions for homes without existing ductwork or targeted zone control.',
      },
    ],
  },
  {
    slug: 'cooling',
    label: 'Air Conditioning & Cooling',
    navBlurb: 'Central AC, ductless mini-splits, and air handler services to keep you cool all summer.',
    heroIntro:
      'HVAC Innovation installs and services all brands of air conditioning systems across Rockville, Silver Spring, DC, Alexandria, and beyond. We install air ducts, vents, pumps, and components; connect electrical wiring and controls; and carefully conserve, recover, and recycle refrigerants to protect the environment. From central AC to ductless mini-splits, we make sure your cooling system runs safely and efficiently.',
    services: [
      {
        slug: 'central-ac',
        label: 'Central AC',
        cardBlurb: 'Central air conditioning installation and repair following manufacturer specifications.',
      },
      {
        slug: 'ductless-mini-splits',
        label: 'Ductless Mini Splits',
        cardBlurb: 'Ductless heating and cooling installation for additions, retrofits, and zoned comfort.',
      },
      {
        slug: 'air-handlers',
        label: 'Air Handlers',
        cardBlurb: 'Air handler unit installation and service for efficient air circulation and climate control.',
      },
    ],
  },
  {
    slug: 'water-heating',
    label: 'Water Heating',
    navBlurb: 'Traditional water heaters and solar water heating systems installed and maintained by experts.',
    heroIntro:
      'Hot water is essential, and HVAC Innovation delivers reliable water heating solutions for every home. We install and maintain traditional water heaters as well as solar water boilers, helping you choose the right system for your needs and budget. Our experienced technicians ensure safe, efficient operation on every job.',
    services: [
      {
        slug: 'water-heaters',
        label: 'Water Heaters',
        cardBlurb: 'Installation and maintenance of traditional and tankless water heaters.',
      },
      {
        slug: 'solar-water-heating',
        label: 'Solar Water Heating',
        cardBlurb: 'Solar water boiler installation and maintenance to cut energy costs with renewable power.',
      },
    ],
  },
  {
    slug: 'indoor-air-quality',
    label: 'Indoor Air Quality',
    navBlurb: 'Air cleaners, humidifiers, and smart thermostats for healthier, more comfortable homes.',
    heroIntro:
      'Breathe easier with HVAC Innovation’s indoor air quality solutions. We install and service air cleaners, humidifiers, and thermostats to help you control temperature, humidity, and airborne contaminants. Our team ensures every component is properly integrated with your HVAC system for maximum comfort and efficiency.',
    services: [
      {
        slug: 'air-cleaners',
        label: 'Air Cleaners',
        cardBlurb: 'Air cleaner installation to purify your home’s air and reduce allergens and pollutants.',
      },
      {
        slug: 'humidifiers',
        label: 'Humidifiers',
        cardBlurb: 'Humidifier installation and service to maintain optimal moisture levels year-round.',
      },
      {
        slug: 'thermostats-controls',
        label: 'Thermostats & Controls',
        cardBlurb: 'Smart thermostat and HVAC control installation for precise temperature management.',
      },
    ],
  },
  {
    slug: 'commercial-hvac',
    label: 'Commercial HVAC',
    navBlurb: 'Rooftop units and commercial heating and cooling for businesses across the Metro Area.',
    heroIntro:
      'HVAC Innovation extends its expertise to commercial properties throughout the Washington Metro Area. We install and maintain roof top units and other commercial HVAC systems, ensuring reliable climate control for offices, retail spaces, and light industrial buildings. From estimates to installation, we coordinate directly with your team to minimize downtime.',
    services: [
      {
        slug: 'roof-top-units',
        label: 'Roof Top Units',
        cardBlurb: 'Commercial rooftop HVAC unit installation and maintenance for reliable business climate control.',
      },
    ],
  },
  {
    slug: 'solar-solutions',
    label: 'Solar Solutions',
    navBlurb: 'Solar panel systems and solar water heating to reduce your electric bills and carbon footprint.',
    heroIntro:
      'Maryland is one of the few states that has incorporated solar energy into homes, and HVAC Innovation is proud to lead the way. Our expert contractors install and maintain solar panel systems and solar water boilers, helping customers incorporate solar electricity into their homes. It is a great investment that can save you significantly on your electric bills while supporting a greener future.',
    services: [
      {
        slug: 'solar-panel-systems',
        label: 'Solar Panel Systems',
        cardBlurb: 'Solar panel installation and maintenance to power your home with clean, renewable energy.',
      },
    ],
  },
  {
    slug: 'home-improvement',
    label: 'Home Improvement',
    navBlurb: 'Comprehensive home improvement services to enhance your living space.',
    heroIntro:
      'Beyond heating and cooling, HVAC Innovation offers home improvement services to help you get the most out of your living space. Whether it is upgrading your HVAC infrastructure, improving energy efficiency, or enhancing overall home comfort, we are here for all your concerns — from estimates and repairs to installations and maintenance with a smile.',
    services: [],
  },
]

export function findCategory(categorySlug: string) {
  return CATEGORIES.find((c) => c.slug === categorySlug)
}

export function findService(categorySlug: string, serviceSlug: string) {
  const category = findCategory(categorySlug)
  const service = category?.services.find((s) => s.slug === serviceSlug)
  return category && service ? { category, service } : null
}