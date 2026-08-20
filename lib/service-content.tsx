import { GENERIC_ICONS } from './service-icons'

export interface ServiceContent {
  /** H1 / hero title, can include a line break as \n */
  title: string

  /** Meta description, ~150-160 chars */
  metaDescription: string

  subtitle: string

  heroImg: string
  heroImgAlt: string

  intro: string

  /** "Know the Signs" section */
  signTitle: string
  signs: string[]
  signTitleDesc: string
  signDescription: string
  signImg: string

  benefits: { title: string; desc: string }[]
  faqs: { q: string; a: string }[]
}

function withIcons(benefits: { title: string; desc: string }[]) {
  return benefits.map((b, i) => ({ ...b, icon: GENERIC_ICONS[i % GENERIC_ICONS.length] }))
}

export const RAW_CONTENT = {
  'air-conditioning/repair': {
    title: 'AC Repair',
    metaDescription:
      'Professional AC repair services for central air conditioning systems. Fast diagnostics, all brands serviced, and reliable cooling solutions.',
    subtitle:
      'Expert air conditioning repair to restore comfort, efficiency, and reliable performance.',
    heroImg: '/images/services/ac-repair.webp',
    heroImgAlt: 'HVAC technician repairing an air conditioning system',
    intro:
      'When your air conditioner stops cooling properly, our technicians provide fast and accurate diagnostics to identify the issue and restore comfort. We service all major brands and repair compressors, capacitors, evaporator coils, condensers, thermostats, and electrical components.',
    signTitle: "Signs Your Air Conditioner Needs Repair",

    signs: [
      "Warm air coming from vents",
      "Weak or inconsistent airflow",
      "Strange noises or vibrations",
      "Frequent cycling on and off",
      "Water leaks around the unit",
      "Unexpected increases in energy bills",
    ],

    signTitleDesc: "Comprehensive Air Conditioning Diagnostics and Repairs",

    signDescription:
      "If you notice any of these warning signs, our technicians can quickly diagnose the issue and restore your cooling system. We repair compressors, coils, capacitors, thermostats, and other critical components to keep your home comfortable and energy efficient.",
    signImg: "/images/services/ac-repair.webp",
    benefits: [
      { title: 'All-Brand Repairs', desc: 'We repair all major air conditioning manufacturers and system types.' },
      { title: 'Accurate Diagnostics', desc: 'We identify the root cause to prevent recurring breakdowns.' },
      { title: 'Reliable Cooling', desc: 'Restore comfort quickly with professional repairs.' },
    ],
    faqs: [
      { q: 'Why is my AC blowing warm air?', a: 'Low refrigerant, electrical issues, thermostat problems, or compressor failures are common causes.' },
      { q: 'Do you repair all brands?', a: 'Yes, we service and repair all major manufacturers.' },
      { q: 'Should I repair or replace my AC?', a: 'We evaluate age, efficiency, and repair costs before making recommendations.' },
    ],
  },

  'air-conditioning/installation': {
    title: 'AC Installation',
    metaDescription:
      'Professional air conditioning installation and replacement services for homes and businesses.',
    subtitle:
      'Energy-efficient air conditioning systems installed for long-term performance.',
    heroImg: '/images/services/ac-installation.webp',
    heroImgAlt: 'New air conditioning installation',
    intro:
      'Whether replacing an outdated unit or installing a new system, we ensure proper sizing, airflow design, wiring, and commissioning for maximum efficiency and comfort.',
    signTitle: "Signs It's Time to Replace Your Air Conditioner",
    signs: [
      "System is more than 10–15 years old",
      "Frequent and costly repairs",
      "Poor cooling performance",
      "High utility bills",
      "Uneven temperatures throughout the home",
      "Outdated or inefficient equipment",
    ],

    signTitleDesc: "Professional AC Replacement and Installation",

    signDescription:
      "When repairs are no longer cost-effective, a new air conditioning system can improve comfort, efficiency, and reliability. We help you select the right equipment and ensure a professional installation for long-term performance.",
    signImg: '/images/services/ac-installation.webp',
    benefits: [
      { title: 'Proper Sizing', desc: 'Avoid inefficient oversized or undersized systems.' },
      { title: 'Energy Savings', desc: 'Modern systems help reduce monthly utility bills.' },
      { title: 'Professional Installation', desc: 'Installed according to manufacturer specifications.' },
    ],
    faqs: [
      { q: 'How long does installation take?', a: 'Most residential installations can be completed within one day.' },
      { q: 'Do you replace old units?', a: 'Yes, we remove and replace outdated equipment.' },
      { q: 'What size AC do I need?', a: 'We perform load calculations to determine the correct system size.' },
    ],
  },

  'air-conditioning/maintenance': {
    title: 'AC Maintenance',
    metaDescription:
      'Preventive AC maintenance services to improve efficiency and reduce breakdowns.',
    subtitle:
      'Keep your cooling system running efficiently year after year.',
    heroImg: '/images/services/ac-maintenance.webp',
    heroImgAlt: 'Air conditioning maintenance service',
    intro:
      'Routine maintenance helps improve efficiency, extend equipment life, and reduce the likelihood of costly emergency repairs.',
    signTitle: "Signs Your AC System Needs Maintenance",

    signs: [
      "Reduced cooling performance",
      "Dirty or clogged air filters",
      "Unusual odors when operating",
      "Longer cooling cycles",
      "Higher energy consumption",
      "Excessive dust indoors",
    ],

    signTitleDesc: "Preventive AC Maintenance Services",

    signDescription:
      "Routine maintenance helps prevent breakdowns, improve efficiency, and extend the life of your air conditioning system. Our comprehensive inspections identify minor issues before they become costly repairs.",
    signImg: '/images/services/ac-maintenance.webp',
    benefits: [
      { title: 'Lower Energy Costs', desc: 'Well-maintained systems consume less energy.' },
      { title: 'Fewer Breakdowns', desc: 'Identify issues before they become major problems.' },
      { title: 'Longer Equipment Life', desc: 'Reduce wear on critical components.' },
    ],
    faqs: [
      { q: 'How often should maintenance be performed?', a: 'Most systems should be serviced annually.' },
      { q: 'What is included?', a: 'Cleaning, inspection, testing, and performance checks.' },
      { q: 'Does maintenance help efficiency?', a: 'Yes, clean and calibrated systems operate more efficiently.' },
    ],
  },

  'heating/furnace-repair': {
    title: 'Furnace Repair',
    metaDescription:
      'Professional furnace repair services for gas and electric heating systems.',
    subtitle:
      'Fast and reliable furnace repair to restore heat and comfort.',
    heroImg: '/images/services/furnace-repair.webp',
    heroImgAlt: 'Technician repairing a furnace',
    intro:
      'Our technicians diagnose and repair furnace issues quickly, restoring safe and reliable heating for your home or business.',

    signTitle: "Signs Your Furnace Needs Repair",

    signs: [
      "Inconsistent or uneven heating",
      "Banging, rattling, or squealing noises",
      "Weak airflow from vents",
      "Frequent cycling",
      "Thermostat issues",
      "Unexpected increases in heating costs",
    ],

    signTitleDesc: "Comprehensive Furnace Inspections and Repairs",

    signDescription:
      "If your furnace is showing signs of trouble, our technicians can diagnose the problem and provide reliable repairs. We service gas and electric furnaces from all major manufacturers to restore safe and dependable heating.",
    signImg: "/images/services/furnace-repair.webp",
    benefits: [
      { title: 'Rapid Diagnostics', desc: 'Quickly identify the source of heating problems.' },
      { title: 'Safe Operation', desc: 'Combustion and safety systems thoroughly checked.' },
      { title: 'All Major Brands', desc: 'Repair services for most furnace manufacturers.' },
    ],
    faqs: [
      { q: 'Why is my furnace not heating?', a: 'Common causes include ignition failures, thermostats, airflow restrictions, or electrical issues.' },
      { q: 'Do you service gas furnaces?', a: 'Yes, we service both gas and electric systems.' },
      { q: 'Can you repair older furnaces?', a: 'Yes, provided replacement parts are available.' },
    ],
  },

  'heating/furnace-installation': {
    title: 'Furnace Installation',
    metaDescription:
      'Professional furnace installation and replacement services for reliable heating.',
    subtitle:
      'Efficient furnace installations designed for long-term comfort.',
    heroImg: '/images/services/furnace-installation.webp',
    heroImgAlt: 'New furnace installation',
    intro:
      'We install properly sized heating systems that provide dependable performance, energy efficiency, and consistent indoor comfort.',
    signTitle: "Signs It's Time for a New Furnace",

    signs: [
      "Furnace is over 15–20 years old",
      "Frequent breakdowns",
      "Rising heating bills",
      "Uneven heating throughout the home",
      "Excessive repair costs",
      "Poor indoor comfort",
    ],

    signTitleDesc: "Professional Furnace Replacement and Installation",

    signDescription:
      "A modern furnace can improve comfort, reliability, and energy efficiency. Our team will help you select the right system and ensure proper installation for years of dependable performance.",
    signImg: '/images/services/furnace-installation.webp',
    benefits: [
      { title: 'Energy Efficiency', desc: 'Modern equipment reduces heating costs.' },
      { title: 'Correct Sizing', desc: 'Systems matched to your property requirements.' },
      { title: 'Professional Setup', desc: 'Installed and tested for optimal operation.' },
    ],
    faqs: [
      { q: 'When should a furnace be replaced?', a: 'Most systems should be evaluated for replacement after 15–20 years.' },
      { q: 'Do you remove old equipment?', a: 'Yes, removal and disposal are included.' },
      { q: 'Can I upgrade efficiency?', a: 'Yes, we offer high-efficiency furnace options.' },
    ],
  },

  'heating/furnace-maintenance': {
    title: 'Furnace Maintenance',
    metaDescription:
      'Preventive furnace maintenance services to improve safety and reliability.',
    subtitle:
      'Protect your heating investment with annual maintenance.',
    heroImg: '/images/services/furnace-maintenance.webp',
    heroImgAlt: 'Furnace maintenance inspection',
    intro:
      'Routine furnace maintenance improves efficiency, reduces breakdowns, and helps ensure safe operation throughout the heating season.',
    signTitle: "Signs Your Furnace Is Due for Maintenance",

    signs: [
      "Reduced heating performance",
      "Dust buildup around vents",
      "Unusual operating noises",
      "Frequent cycling",
      "Delayed startup",
      "Increasing utility costs",
    ],

    signTitleDesc: "Preventive Furnace Maintenance Services",

    signDescription:
      "Annual maintenance helps improve efficiency, reduce wear on critical components, and identify potential issues before they lead to costly repairs or unexpected breakdowns.",
    signImg: '/images/services/furnace-maintenance.webp',

    benefits: [
      { title: 'Improved Safety', desc: 'Safety controls and combustion systems inspected.' },
      { title: 'Greater Reliability', desc: 'Reduce unexpected heating failures.' },
      { title: 'Longer Equipment Life', desc: 'Routine care helps extend system lifespan.' },
    ],
    faqs: [
      { q: 'How often should a furnace be serviced?', a: 'Annual maintenance is recommended.' },
      { q: 'What does maintenance include?', a: 'Inspection, cleaning, testing, and safety checks.' },
      { q: 'Does maintenance lower energy use?', a: 'Yes, clean systems operate more efficiently.' },
    ],
  },

  'heating/repair': {
    title: 'Heating Repair',
    metaDescription:
      'Heating repair services for furnaces, heat pumps, and residential heating systems.',
    subtitle:
      'Reliable heating repairs to keep your property comfortable during colder months.',
    heroImg: '/images/services/heating-repair.webp',
    heroImgAlt: 'Heating repair service',
    intro:
      'We diagnose and repair a wide range of heating systems, restoring comfort and dependable operation as quickly as possible.',
    signTitle: "Signs Your Heating System Needs Repair",

    signs: [
      "Insufficient heat",
      "Uneven temperatures",
      "Unusual noises",
      "Frequent system cycling",
      "Poor airflow",
      "Higher heating bills",
    ],

    signTitleDesc: "Expert Heating System Diagnostics and Repairs",

    signDescription:
      "Whether you have a furnace, heat pump, or another heating system, our technicians can identify the source of the problem and restore reliable operation quickly and safely.",
    signImg: '/images/services/heating-repair.webp',
    benefits: [
      { title: 'Comprehensive Repairs', desc: 'Service for multiple heating system types.' },
      { title: 'Experienced Technicians', desc: 'Accurate troubleshooting and repair.' },
      { title: 'Reliable Comfort', desc: 'Restore heat quickly and safely.' },
    ],
    faqs: [
      { q: 'What heating systems do you repair?', a: 'Furnaces, heat pumps, and many other heating systems.' },
      { q: 'Do you provide emergency repairs?', a: 'Availability depends on location and scheduling.' },
      { q: 'Can heating issues increase energy bills?', a: 'Yes, malfunctioning systems often operate inefficiently.' },
    ],
  },

  'heating/heat-pumps': {
    title: 'Heat Pumps',
    metaDescription:
      'Heat pump installation, repair, and maintenance services for year-round comfort.',
    subtitle:
      'Efficient heating and cooling from a single system.',
    heroImg: '/images/services/heat-pumps.webp',
    heroImgAlt: 'Residential heat pump system',
    intro:
      'Heat pumps provide efficient year-round temperature control by delivering both heating and cooling from one system.',
    signTitle: "Signs Your Heat Pump Needs Service",

    signs: [
      "Poor heating or cooling performance",
      "Ice buildup on the outdoor unit",
      "Unusual noises",
      "Frequent cycling",
      "Weak airflow",
      "Rising energy costs",
    ],

    signTitleDesc: "Heat Pump Repair, Maintenance, and Installation",

    signDescription:
      "Heat pumps work year-round and require proper care to maintain efficiency. Our technicians provide complete heat pump services to keep your system operating at peak performance.",
    signImg: '/images/services/heat-pumps.webp',
    benefits: [
      { title: 'Year-Round Comfort', desc: 'Heating and cooling from a single system.' },
      { title: 'Energy Efficiency', desc: 'Lower energy consumption compared to many traditional systems.' },
      { title: 'Environmentally Friendly', desc: 'Efficient operation with reduced energy demand.' },
    ],
    faqs: [
      { q: 'Do heat pumps work in winter?', a: 'Yes, modern heat pumps operate efficiently in many climates.' },
      { q: 'Can a heat pump replace a furnace?', a: 'In many applications, yes.' },
      { q: 'Do you repair heat pumps?', a: 'Yes, we provide repair, maintenance, and installation services.' },
    ],
  },

  'hvac-services/commercial-hvac': {
    title: 'Commercial HVAC',
    metaDescription:
      'Commercial HVAC installation, maintenance, and repair services for offices, retail, and industrial facilities.',
    subtitle:
      'Professional climate control solutions for commercial properties.',
    heroImg: '/images/services/commercial-hvac.webp',
    heroImgAlt: 'Commercial HVAC rooftop units',
    intro:
      'We provide commercial HVAC services designed to maximize comfort, reliability, and energy efficiency while minimizing downtime.',
    signTitle: "Signs Your Commercial HVAC System Needs Attention",

    signs: [
      "Inconsistent temperatures",
      "Frequent equipment downtime",
      "Poor indoor air quality",
      "Unusual noises",
      "Rising utility expenses",
      "Employee or customer comfort complaints",
    ],

    signTitleDesc: "Commercial HVAC Inspection and Repair Services",

    signDescription:
      "HVAC problems can impact productivity, customer experience, and operating costs. Our commercial technicians provide fast diagnostics and reliable solutions to minimize disruptions and keep your facility comfortable.",

    signImg: '/images/services/commercial-hvac.webp',
    benefits: [
      { title: 'Reduced Downtime', desc: 'Fast service to keep operations running.' },
      { title: 'Energy Efficiency', desc: 'Optimize system performance and operating costs.' },
      { title: 'Scalable Solutions', desc: 'Support for small businesses and large facilities.' },
    ],
    faqs: [
      { q: 'What facilities do you service?', a: 'Offices, retail stores, warehouses, and many commercial properties.' },
      { q: 'Do you service rooftop units?', a: 'Yes, RTUs are one of our specialties.' },
      { q: 'Do you offer maintenance plans?', a: 'Yes, preventive maintenance programs are available.' },
    ],
  },

  'hvac-services/duct-work': {
    title: 'Duct Work',
    metaDescription:
      'Professional ductwork installation, repair, replacement, and airflow optimization services.',
    subtitle:
      'Efficient duct systems for improved comfort and indoor air distribution.',
    heroImg: '/images/services/duct-work.webp',
    heroImgAlt: 'HVAC ductwork installation',
    intro:
      'Properly designed and sealed ductwork improves airflow, comfort, and HVAC system efficiency throughout your property.',
    signTitle: "Signs Your Ductwork Needs Repair or Replacement",

    signs: [
      "Uneven temperatures between rooms",
      "Weak airflow",
      "Excessive dust indoors",
      "Whistling or rattling sounds",
      "Hot or cold spots",
      "Higher energy bills",
    ],

    signTitleDesc: "Professional Duct Inspection and Airflow Solutions",

    signDescription:
      "Damaged or poorly designed ductwork can reduce comfort and increase energy costs. Our team can inspect your duct system, identify leaks or restrictions, and recommend the best solution for improved airflow and efficiency.",

    signImg: '/images/services/duct-work.webp',
    benefits: [
      { title: 'Improved Airflow', desc: 'Balanced distribution throughout the building.' },
      { title: 'Better Efficiency', desc: 'Reduce energy loss caused by leaks and poor design.' },
      { title: 'Enhanced Comfort', desc: 'More consistent temperatures from room to room.' },
    ],
    faqs: [
      { q: 'How do I know if my ducts need repair?', a: 'Uneven temperatures, high energy bills, and poor airflow are common signs.' },
      { q: 'Can duct leaks affect efficiency?', a: 'Yes, leaking ducts can significantly increase energy costs.' },
      { q: 'Do you install new duct systems?', a: 'Yes, we provide complete duct design and installation services.' },
    ],
  },
};

export function getServiceContent(
  categorySlug: string,
  serviceSlug?: string
) {
  const key = serviceSlug
    ? `${categorySlug}/${serviceSlug}`
    : categorySlug

  if (!(key in RAW_CONTENT)) {
    return null
  }

  const raw = RAW_CONTENT[key as keyof typeof RAW_CONTENT]

  return {
    ...raw,
    benefits: withIcons(raw.benefits),
  }
}