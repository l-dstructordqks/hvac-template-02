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
    slug: 'air-conditioning',
    label: 'Air Conditioning',
    navBlurb:
      'AC repair, installation, and maintenance services for residential and commercial cooling systems.',
    heroIntro:
      'Our air conditioning specialists provide professional repair, installation, and maintenance services to keep your home or business comfortable year-round. From diagnosing cooling issues to installing high-efficiency systems, we ensure reliable performance, improved energy efficiency, and long-term comfort.',
    services: [
      {
        slug: 'repair',
        label: 'AC Repair',
        cardBlurb:
          'Fast and reliable air conditioning repair for all major brands and system types.',
      },
      {
        slug: 'installation',
        label: 'AC Installation',
        cardBlurb:
          'Professional air conditioning installation and replacement designed for maximum efficiency.',
      },
      {
        slug: 'maintenance',
        label: 'AC Maintenance',
        cardBlurb:
          'Preventive maintenance services to improve efficiency and reduce unexpected breakdowns.',
      },
    ],
  },

  {
    slug: 'heating',
    label: 'Heating & Furnaces',
    navBlurb:
      'Furnace repair, installation, maintenance, heating repairs, and heat pump services.',
    heroIntro:
      'Our heating experts help homeowners and businesses stay comfortable during colder months with professional furnace services, heating repairs, and energy-efficient heat pump solutions. We service all major brands and focus on safety, reliability, and long-term performance.',
    services: [
      {
        slug: 'furnace-repair',
        label: 'Furnace Repair',
        cardBlurb:
          'Professional furnace diagnostics and repair for gas and electric heating systems.',
      },
      {
        slug: 'furnace-installation',
        label: 'Furnace Installation',
        cardBlurb:
          'High-efficiency furnace installation and replacement services.',
      },
      {
        slug: 'furnace-maintenance',
        label: 'Furnace Maintenance',
        cardBlurb:
          'Annual furnace maintenance to improve safety, reliability, and efficiency.',
      },
      {
        slug: 'repair',
        label: 'Heating Repair',
        cardBlurb:
          'General heating system repair services for residential and commercial properties.',
      },
      {
        slug: 'heat-pumps',
        label: 'Heat Pumps',
        cardBlurb:
          'Professional heat pump installation, repair, maintenance, and replacement services for residential and commercial properties.',
      },
    ],
  },

  /*{
    slug: 'heat-pumps',
    label: 'Heat Pumps',
    navBlurb:
      'Energy-efficient heat pump installation, repair, and maintenance services.',
    heroIntro:
      'Heat pumps provide efficient heating and cooling from a single system. Our technicians install, repair, and maintain heat pumps to help maximize comfort while reducing energy consumption.',
    services: [],
  },

  {
    slug: 'commercial-hvac',
    label: 'Commercial HVAC',
    navBlurb:
      'Commercial heating, cooling, maintenance, and climate control solutions.',
    heroIntro:
      'We provide commercial HVAC services for offices, retail spaces, warehouses, and other business facilities. Our team delivers dependable installations, repairs, and maintenance programs designed to minimize downtime and maximize efficiency.',
    services: [],
  },

  {
    slug: 'duct-work',
    label: 'Duct Work',
    navBlurb:
      'Duct installation, repair, replacement, and airflow optimization services.',
    heroIntro:
      'Properly designed ductwork is essential for HVAC performance. We install, repair, and optimize duct systems to improve airflow, comfort, indoor air quality, and energy efficiency.',
    services: [],
  },*/
  {
    slug: 'hvac-services',
    label: 'HVAC Services',
    navBlurb:
      'Ductwork, commercial HVAC, ventilation, HVAC repairs, maintenance, installation, and system replacement services.',
    heroIntro:
      'Our HVAC professionals provide reliable heating, cooling, ventilation, and air distribution solutions for residential and commercial properties. From ductwork services and commercial HVAC systems to repairs, maintenance, installation, and replacement, we help keep HVAC systems efficient, reliable, and comfortable year-round.',
    services: [
      {
        slug: 'duct-work',
        label: 'Ductwork',
        cardBlurb:
          'Professional ductwork installation, repair, replacement, and maintenance for residential and commercial HVAC systems.',
      },
      {
        slug: 'commercial-hvac',
        label: 'Commercial HVAC',
        cardBlurb:
          'Commercial HVAC installation, repair, maintenance, and replacement for heating, cooling, and ventilation systems.',
      },
    ],
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