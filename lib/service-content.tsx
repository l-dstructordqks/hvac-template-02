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
  benefits: { title: string; desc: string }[]
  faqs: { q: string; a: string }[]
}

function withIcons(benefits: { title: string; desc: string }[]) {
  return benefits.map((b, i) => ({ ...b, icon: GENERIC_ICONS[i % GENERIC_ICONS.length] }))
}

const RAW_CONTENT: Record<string, ServiceContent> = {
  'heating/furnaces': {
    title: 'Furnace Repair &\nInstallation',
    metaDescription:
      'Gas and electric furnace installation, repair, and maintenance across the Washington Metro Area since 2004. All brands serviced. Upfront pricing.',
    subtitle: 'Expert furnace installation and repair for gas and electric systems, with combustion safety testing on every job.',
    heroImg: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1400&h=700&fit=crop&auto=format',
    heroImgAlt: 'Residential gas furnace unit being serviced',
    intro:
      'Since 2004, HVAC Innovation has installed and serviced furnaces across Rockville, Silver Spring, DC, Alexandria, Herndon, Sterling, Fairfax, and Arlington. We follow blueprints and manufacturer specifications to install gas and electric heating systems, connect electrical wiring and controls, and check every unit for proper operation. To ensure your safety, we use combustion test equipment and carbon monoxide testers so your furnace runs safely and at peak efficiency.',
    benefits: [
      { title: 'All-brand furnace service', desc: 'We service, install, and maintain furnaces from every major manufacturer, regardless of brand.' },
      { title: 'Safety-first installation', desc: 'Every furnace is tested with combustion equipment and carbon monoxide detectors before we leave.' },
      { title: 'Complete system setup', desc: 'We install air ducts, vents, pumps, and all components following manufacturer blueprints.' },
    ],
    faqs: [
      { q: 'Do you service all furnace brands?', a: 'Yes. HVAC Innovation services, installs, and maintains all brands of gas and electric furnaces.' },
      { q: 'How do you ensure my furnace is safe?', a: 'We use combustion test equipment and carbon monoxide testers on every installation and repair to verify safe, efficient operation.' },
      { q: 'What areas do you service?', a: 'We proudly serve the Washington Metro Area including Rockville, Silver Spring, DC, Alexandria, Herndon, Sterling, Fairfax, and Arlington.' },
    ],
  },

  'heating/boilers': {
    title: 'Boiler Repair &\nInstallation',
    metaDescription:
      'Boiler installation and maintenance for homes across the Washington Metro Area. All brands. Safe, efficient hydronic heating since 2004.',
    subtitle: 'Professional boiler installation and maintenance for reliable hydronic heating in your home.',
    heroImg: 'https://images.unsplash.com/photo-1621905252472-e52a9be9dbee?w=1400&h=700&fit=crop&auto=format',
    heroImgAlt: 'Residential boiler heating system',
    intro:
      'HVAC Innovation provides expert boiler installation and maintenance throughout the Washington Metro Area. We follow manufacturer specifications and blueprints to install your system, connect all electrical wiring and controls, and verify proper operation. Our technicians ensure your boiler heats your home safely and efficiently, season after season.',
    benefits: [
      { title: 'All-brand boiler expertise', desc: 'Installation, repair, and maintenance for boilers of every make and model.' },
      { title: 'Blueprint-accurate installs', desc: 'We follow manufacturer specifications and blueprints to ensure every component is placed correctly.' },
      { title: 'Safe operation guaranteed', desc: 'Full system testing including pressure checks and combustion verification on every job.' },
    ],
    faqs: [
      { q: 'Do you install and maintain boilers?', a: 'Yes, we provide complete boiler installation and maintenance services for homes across the Washington Metro Area.' },
      { q: 'What brands do you work with?', a: 'We service all brands of boilers and heating equipment.' },
      { q: 'How do I know my boiler is operating safely?', a: 'We test every boiler for proper operation, pressure, and combustion safety before completing the job.' },
    ],
  },

  'heating/heat-pumps': {
    title: 'Heat Pump Repair &\nInstallation',
    metaDescription:
      'Heat pump installation and service in the Washington Metro Area. Energy-efficient heating and cooling. All brands. Since 2004.',
    subtitle: 'Energy-efficient heat pump installation and service for year-round comfort in your home.',
    heroImg: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1400&h=700&fit=crop&auto=format',
    heroImgAlt: 'Outdoor residential heat pump unit',
    intro:
      'HVAC Innovation installs and services heat pumps across the Washington Metro Area, providing energy-efficient heating and cooling from a single system. We follow manufacturer specifications to install your heat pump, set up ductwork and vents, connect wiring and controls, and verify peak operation. Our careful refrigerant handling protects both your system and the environment.',
    benefits: [
      { title: 'Year-round efficiency', desc: 'One system heats and cools your home, cutting energy costs across all seasons.' },
      { title: 'Eco-friendly refrigerant handling', desc: 'We conserve, recover, and recycle refrigerants to prevent environmental harm.' },
      { title: 'All-brand service', desc: 'Expert installation and maintenance for heat pumps from every major manufacturer.' },
    ],
    faqs: [
      { q: 'Do heat pumps work in the DC area climate?', a: 'Yes. Modern heat pumps are highly effective for the Washington Metro Area climate, providing efficient heating and cooling year-round.' },
      { q: 'How do you handle refrigerants?', a: 'We are careful to conserve, recover, and recycle refrigerants. We ensure proper disposal to protect the environment.' },
      { q: 'Do you service all heat pump brands?', a: 'Yes, we provide installation, repair, and maintenance for all brands of heat pumps.' },
    ],
  },

  'heating/ductless-heating': {
    title: 'Ductless Heating &\nCooling Systems',
    metaDescription:
      'Ductless heating and cooling installation across the Washington Metro Area. Perfect for homes without ductwork. All brands. Since 2004.',
    subtitle: 'Ductless heating and cooling solutions for homes without existing ductwork or for targeted zone comfort.',
    heroImg: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=1400&h=700&fit=crop&auto=format',
    heroImgAlt: 'Wall-mounted ductless mini-split indoor unit',
    intro:
      'HVAC Innovation specializes in ductless heating and cooling systems for homes throughout Rockville, Silver Spring, DC, Alexandria, and beyond. Whether your home lacks ductwork or you need climate control for a specific room, we install ductless systems following manufacturer specifications, with proper electrical connections and full operational testing.',
    benefits: [
      { title: 'No ductwork needed', desc: 'Ideal for older homes, additions, or any space where installing ducts is impractical.' },
      { title: 'Zone-by-zone comfort', desc: 'Control the temperature in individual rooms instead of heating or cooling the entire house.' },
      { title: 'All-brand installation', desc: 'We install and service ductless systems from every major manufacturer.' },
    ],
    faqs: [
      { q: 'Can ductless systems both heat and cool?', a: 'Yes. Ductless mini-splits provide both heating and cooling, making them a versatile year-round solution.' },
      { q: 'Do I need ductwork for a ductless system?', a: 'No — ductless systems require only a small wall opening to connect the indoor and outdoor units, with no ductwork necessary.' },
      { q: 'What areas do you cover for ductless installation?', a: 'We install ductless systems throughout the Washington Metro Area, including Rockville, Silver Spring, DC, Alexandria, Herndon, Sterling, Fairfax, and Arlington.' },
    ],
  },

  'cooling/central-ac': {
    title: 'Central Air Conditioning\nInstallation & Repair',
    metaDescription:
      'Central AC installation and repair across the Washington Metro Area. All brands. Safe refrigerant handling. Upfront estimates. Since 2004.',
    subtitle: 'Complete central air conditioning installation and repair, with safe refrigerant recovery and recycling.',
    heroImg: 'https://images.unsplash.com/photo-1698479603408-1a66a6d9e80f?w=1400&h=700&fit=crop&auto=format',
    heroImgAlt: 'Central air conditioning condenser unit',
    intro:
      'HVAC Innovation installs and repairs central air conditioning systems throughout the Washington Metro Area. We follow blueprints and manufacturer specifications to place your equipment, install air ducts and vents, connect pumps and electrical wiring, and verify proper operation. We are careful to conserve, recover, and recycle refrigerants, ensuring environmentally responsible disposal on every job.',
    benefits: [
      { title: 'All-brand AC service', desc: 'We install and repair central air conditioning systems from every major manufacturer.' },
      { title: 'Eco-safe refrigerant handling', desc: 'We conserve, recover, and recycle refrigerants to prevent environmental harm.' },
      { title: 'Complete system installation', desc: 'From equipment placement to ductwork, wiring, and controls — we handle every component.' },
    ],
    faqs: [
      { q: 'Do you handle refrigerants safely?', a: 'Absolutely. We are careful to conserve, recover, and recycle refrigerants, ensuring they are properly disposed of to protect the environment.' },
      { q: 'What brands of central AC do you service?', a: 'We service all brands of central air conditioning systems.' },
      { q: 'How do I get an estimate for central AC installation?', a: 'Just give us a call or click — we are always just a phone call or click away for estimates, repairs, installations, and maintenance.' },
    ],
  },

  'cooling/ductless-mini-splits': {
    title: 'Ductless Mini-Split\nSystems',
    metaDescription:
      'Ductless mini-split AC installation across the Washington Metro Area. No ductwork required. All brands. Estimates & repairs. Since 2004.',
    subtitle: 'Ductless mini-split installation for targeted cooling in homes without existing ductwork.',
    heroImg: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=1400&h=700&fit=crop&auto=format',
    heroImgAlt: 'Ductless mini-split air conditioner indoor unit',
    intro:
      'When your home does not have ductwork or you need cooling for an addition, HVAC Innovation provides ductless mini-split installation across the Washington Metro Area. We follow manufacturer specifications to install your system, connect electrical wiring and controls, and ensure proper operation — all with the environmentally responsible refrigerant handling you can expect from our team.',
    benefits: [
      { title: 'No ducts necessary', desc: 'Perfect for homes without ductwork, additions, garages, and converted spaces.' },
      { title: 'Energy-efficient cooling', desc: 'Cool only the rooms you use, reducing energy waste compared to central systems.' },
      { title: 'All-brand expertise', desc: 'Installation and service for ductless mini-splits from every major manufacturer.' },
    ],
    faqs: [
      { q: 'Can a mini-split cool my entire home?', a: 'Multi-zone systems can cool several rooms from one outdoor unit. We will assess your home and recommend the right configuration.' },
      { q: 'Do you install all mini-split brands?', a: 'Yes, we install and service ductless mini-splits from all brands.' },
      { q: 'How quickly can you install a ductless system?', a: 'Most residential ductless installations are completed quickly, with minimal disruption. Contact us for a free estimate.' },
    ],
  },

  'cooling/air-handlers': {
    title: 'Air Handler\nInstallation & Service',
    metaDescription:
      'Air handler unit installation and service across the Washington Metro Area. All brands. Proper wiring and controls. Since 2004.',
    subtitle: 'Air handler unit installation and service for efficient air circulation and climate control.',
    heroImg: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1400&h=700&fit=crop&auto=format',
    heroImgAlt: 'HVAC air handler unit',
    intro:
      'HVAC Innovation installs and services air handlers throughout the Washington Metro Area. We place the equipment according to manufacturer specifications, install ducts and vents, connect pumps and electrical wiring, and check the unit for proper operation. Whether paired with a heat pump or AC system, your air handler is critical to efficient airflow — and we make sure it works right.',
    benefits: [
      { title: 'Complete installation', desc: 'We handle equipment placement, ductwork, wiring, controls, and operational testing.' },
      { title: 'All brands serviced', desc: 'Installation and maintenance for air handlers from every major manufacturer.' },
      { title: 'Optimized airflow', desc: 'Proper setup ensures efficient air circulation and peak system performance.' },
    ],
    faqs: [
      { q: 'What does an air handler do?', a: 'The air handler circulates conditioned air through your home. It works with your AC or heat pump to move heated or cooled air through the ductwork.' },
      { q: 'Do you service all air handler brands?', a: 'Yes, we install and maintain air handlers from all brands.' },
      { q: 'How do I know if my air handler needs repair?', a: 'Weak airflow, unusual noises, or inconsistent temperatures can indicate air handler issues. Give us a call for a diagnosis.' },
    ],
  },

  'water-heating/water-heaters': {
    title: 'Water Heater Repair &\nInstallation',
    metaDescription:
      'Water heater installation and repair across the Washington Metro Area. All brands. Traditional and tankless. Since 2004.',
    subtitle: 'Reliable water heater installation and maintenance for traditional and tankless systems.',
    heroImg: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=1400&h=700&fit=crop&auto=format',
    heroImgAlt: 'Residential water heater installation',
    intro:
      'HVAC Innovation provides water heater installation and repair throughout the Washington Metro Area. We follow manufacturer specifications to install your unit, connect all necessary components and controls, and verify safe, efficient operation. Whether you need a traditional tank water heater or a tankless upgrade, we are here for all your hot water needs — from estimates and repairs to installations and maintenance.',
    benefits: [
      { title: 'All-brand service', desc: 'We install and repair water heaters from every major manufacturer.' },
      { title: 'Traditional & tankless options', desc: 'Choose the right system for your home, with expert guidance on sizing and efficiency.' },
      { title: 'Safe, proper installation', desc: 'We connect wiring, controls, and components according to manufacturer blueprints.' },
    ],
    faqs: [
      { q: 'Do you install tankless water heaters?', a: 'Yes, we install both traditional tank and tankless water heaters from all brands.' },
      { q: 'How do I know what size water heater I need?', a: 'We assess your household size and hot water usage to recommend the right capacity or flow rate for your home.' },
      { q: 'What areas do you service for water heaters?', a: 'We serve Rockville, Silver Spring, DC, Alexandria, Herndon, Sterling, Fairfax, Arlington, and the entire Washington Metro Area.' },
    ],
  },

  'water-heating/solar-water-heating': {
    title: 'Solar Water\nHeating Systems',
    metaDescription:
      'Solar water heating installation in Maryland and the Washington Metro Area. Cut energy bills. Expert contractors. Since 2004.',
    subtitle: 'Solar water boiler installation and maintenance to harness renewable energy and reduce your electric bills.',
    heroImg: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&h=700&fit=crop&auto=format',
    heroImgAlt: 'Solar thermal water heating panels on a residential roof',
    intro:
      'Maryland is one of the few states that has incorporated solar energy into homes, and HVAC Innovation is proud to help our customers install and maintain solar water heating systems. Our expert contractors are trained and experienced in the installation and maintenance of solar water boilers. It is a great investment that can save you a lot on your electric bills while providing reliable hot water for your home.',
    benefits: [
      { title: 'Maryland solar expertise', desc: 'We specialize in solar water heating for Maryland homes, one of the leading states for residential solar adoption.' },
      { title: 'Significant energy savings', desc: 'Solar water heating can dramatically reduce your monthly electric bills.' },
      { title: 'Trained, experienced contractors', desc: 'Our team has specific training and experience in solar water boiler installation and maintenance.' },
    ],
    faqs: [
      { q: 'Does solar water heating work in Maryland?', a: 'Yes. Maryland is a leader in residential solar energy, and solar water heating is an excellent investment for homeowners here.' },
      { q: 'How much can I save with solar water heating?', a: 'Solar water heating can save you a significant amount on your electric bills. Contact us for a personalized estimate based on your home and usage.' },
      { q: 'Do you maintain solar water boilers?', a: 'Yes, we provide both installation and ongoing maintenance for solar water heating systems.' },
    ],
  },

  'indoor-air-quality/air-cleaners': {
    title: 'Air Cleaner\nInstallation & Service',
    metaDescription:
      'Air cleaner and air purification system installation across the Washington Metro Area. All brands. Breathe easier at home. Since 2004.',
    subtitle: 'Air cleaner installation to purify your home’s air and reduce allergens and pollutants.',
    heroImg: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&h=700&fit=crop&auto=format',
    heroImgAlt: 'Residential air purification system',
    intro:
      'HVAC Innovation installs and services air cleaners throughout the Washington Metro Area to help you breathe easier at home. We follow manufacturer specifications to integrate air cleaning systems with your HVAC equipment, ensuring proper airflow and filtration. Whether you need a standalone unit or a whole-home solution, we install and maintain systems from all brands.',
    benefits: [
      { title: 'Whole-home purification', desc: 'Integrate air cleaners directly with your HVAC system for comprehensive filtration.' },
      { title: 'All-brand service', desc: 'We install and maintain air cleaners from every major manufacturer.' },
      { title: 'Healthier indoor air', desc: 'Reduce allergens, dust, and pollutants for cleaner, healthier air in every room.' },
    ],
    faqs: [
      { q: 'Do air cleaners really improve indoor air quality?', a: 'Yes. Properly installed air cleaners significantly reduce airborne particles, allergens, and pollutants throughout your home.' },
      { q: 'Can you add an air cleaner to my existing HVAC system?', a: 'In most cases, yes. We can integrate air cleaning systems with your existing ductwork and HVAC equipment.' },
      { q: 'Do you service all brands of air cleaners?', a: 'Yes, we install and maintain air cleaners from all brands.' },
    ],
  },

  'indoor-air-quality/humidifiers': {
    title: 'Humidifier\nInstallation & Service',
    metaDescription:
      'Humidifier installation and service across the Washington Metro Area. All brands. Optimal home comfort. Since 2004.',
    subtitle: 'Humidifier installation and service to maintain optimal moisture levels in your home.',
    heroImg: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1400&h=700&fit=crop&auto=format',
    heroImgAlt: 'Whole-home humidifier installed on HVAC ductwork',
    intro:
      'HVAC Innovation installs and services humidifiers throughout the Washington Metro Area to keep your home comfortable during dry seasons. We follow manufacturer specifications to install your humidifier, connect it to your HVAC system and controls, and verify proper operation. Proper humidity levels protect your health, your home, and your heating system.',
    benefits: [
      { title: 'Whole-home humidity control', desc: 'Integrated humidifiers work with your HVAC system to maintain consistent moisture levels.' },
      { title: 'All-brand expertise', desc: 'Installation and maintenance for humidifiers from every major manufacturer.' },
      { title: 'Protects health & home', desc: 'Proper humidity reduces dry skin, respiratory irritation, and damage to wood furnishings.' },
    ],
    faqs: [
      { q: 'Do I need a humidifier in the DC area?', a: 'Winter air in the Washington Metro Area can be very dry. A whole-home humidifier improves comfort and protects your health and home.' },
      { q: 'Can you add a humidifier to my existing system?', a: 'Yes. We can integrate a humidifier with most existing forced-air heating and cooling systems.' },
      { q: 'Do you service all humidifier brands?', a: 'Yes, we install and maintain humidifiers from all brands.' },
    ],
  },

  'indoor-air-quality/thermostats-controls': {
    title: 'Thermostat & Control\nInstallation',
    metaDescription:
      'Thermostat installation and HVAC controls across the Washington Metro Area. All brands. Smart & programmable options. Since 2004.',
    subtitle: 'Smart thermostat and HVAC control installation for precise temperature management and energy savings.',
    heroImg: 'https://images.unsplash.com/photo-1563456020-531a7e5d0336?w=1400&h=700&fit=crop&auto=format',
    heroImgAlt: 'Smart thermostat installed on a wall',
    intro:
      'HVAC Innovation installs and services thermostats and HVAC controls throughout the Washington Metro Area. We connect wiring and controls according to manufacturer specifications, ensuring your thermostat communicates properly with your heating and cooling system. From basic programmable models to smart thermostats, we help you manage comfort and efficiency with the right controls.',
    benefits: [
      { title: 'Smart & programmable options', desc: 'Choose from basic programmable thermostats or advanced smart models with remote control and learning features.' },
      { title: 'Proper wiring & setup', desc: 'We connect electrical wiring and controls to ensure reliable communication between your thermostat and HVAC system.' },
      { title: 'All-brand compatibility', desc: 'We install and service thermostats and controls from all major manufacturers.' },
    ],
    faqs: [
      { q: 'Can a smart thermostat save me money?', a: 'Yes. Smart thermostats optimize heating and cooling schedules, which can significantly reduce energy usage and lower your bills.' },
      { q: 'Do you install thermostats for all HVAC systems?', a: 'Yes, we install thermostats compatible with furnaces, heat pumps, boilers, and central AC systems from all brands.' },
      { q: 'Will you show me how to use my new thermostat?', a: 'Absolutely. We ensure your thermostat is set up correctly and walk you through its features before we leave.' },
    ],
  },

  'commercial-hvac/roof-top-units': {
    title: 'Commercial Rooftop\nUnit Service & Install',
    metaDescription:
      'Rooftop HVAC unit installation and maintenance for businesses across the Washington Metro Area. All brands. Since 2004.',
    subtitle: 'Commercial rooftop HVAC unit installation and maintenance for reliable business climate control.',
    heroImg: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&h=700&fit=crop&auto=format',
    heroImgAlt: 'Commercial rooftop HVAC units',
    intro:
      'HVAC Innovation provides commercial rooftop unit installation and maintenance for businesses throughout the Washington Metro Area. We follow blueprints and manufacturer specifications to install RTU systems, connect electrical wiring and controls, and verify proper operation. From estimates and repairs to installations and maintenance, we keep your commercial space comfortable for employees and customers.',
    benefits: [
      { title: 'Commercial RTU expertise', desc: 'Installation and maintenance of rooftop units for offices, retail, and light commercial spaces.' },
      { title: 'All-brand service', desc: 'We service and install rooftop units from every major commercial HVAC manufacturer.' },
      { title: 'Minimized business disruption', desc: 'We work efficiently to complete installations and repairs with minimal impact on your operations.' },
    ],
    faqs: [
      { q: 'Do you service all commercial rooftop unit brands?', a: 'Yes, we install and maintain rooftop units from all major commercial HVAC brands.' },
      { q: 'What types of businesses do you work with?', a: 'We provide commercial HVAC services for offices, retail spaces, and light industrial buildings across the Washington Metro Area.' },
      { q: 'Do you offer maintenance contracts for commercial RTUs?', a: 'Yes. Regular maintenance prevents costly breakdowns. Contact us to discuss a maintenance plan tailored to your business.' },
    ],
  },

  'solar-solutions/solar-panel-systems': {
    title: 'Solar Panel System\nInstallation',
    metaDescription:
      'Solar panel installation for Maryland homes. Reduce electric bills. Expert contractors. HVAC Innovation. Since 2004.',
    subtitle: 'Solar panel installation and maintenance to power your home with clean, renewable energy.',
    heroImg: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1400&h=700&fit=crop&auto=format',
    heroImgAlt: 'Residential solar panels installed on a rooftop',
    intro:
      'Maryland is one of the few states that has incorporated solar energy into homes, and HVAC Innovation is proud to help our customers install and incorporate solar electricity. Our expert contractors provide maintenance and installation for your newly bought solar panels. It is a great investment and can save you a lot on your electric bills. We ensure your solar system is properly integrated and ready to power your home efficiently.',
    benefits: [
      { title: 'Maryland solar specialists', desc: 'We have deep experience with Maryland’s residential solar programs and incentives.' },
      { title: 'Significant bill savings', desc: 'Solar panels can dramatically reduce your monthly electric bills and increase your home value.' },
      { title: 'Expert installation & maintenance', desc: 'Our contractors are trained and experienced in both installing and maintaining solar panel systems.' },
    ],
    faqs: [
      { q: 'Is Maryland a good state for solar panels?', a: 'Yes. Maryland is one of the leading states for residential solar energy adoption, with programs that make it a great investment.' },
      { q: 'How much can solar panels save on electric bills?', a: 'Solar panel systems can save you a significant amount on your electric bills. The exact savings depend on your energy usage, roof orientation, and system size.' },
      { q: 'Do you maintain solar panels after installation?', a: 'Yes. HVAC Innovation provides ongoing maintenance to keep your solar panels operating at peak efficiency.' },
    ],
  },

  'home-improvement': {
    title: 'Home Improvement\nServices',
    metaDescription:
      'Home improvement services across the Washington Metro Area. HVAC Innovation. Estimates, repairs, installations. Since 2004.',
    subtitle: 'Comprehensive home improvement services to enhance your comfort and living space.',
    heroImg: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&h=700&fit=crop&auto=format',
    heroImgAlt: 'Home improvement and renovation project',
    intro:
      'Since 2004, HVAC Innovation has been proud to service the Washington Metro Area with more than just heating and cooling. Our home improvement services cover a range of upgrades and enhancements to make your home more comfortable, efficient, and valuable. Whenever you need our service, we are here for all your concerns — from estimates and repairs to installations and maintenance with a smile, we are always just a phone call or click away.',
    benefits: [
      { title: 'Full-service home improvements', desc: 'From HVAC-related upgrades to broader home enhancements, we handle projects with care and expertise.' },
      { title: 'Upfront estimates', desc: 'Clear, honest estimates before any work begins — no surprises, no hidden fees.' },
      { title: 'Metro Area expertise', desc: 'Serving Rockville, Silver Spring, DC, Alexandria, Herndon, Sterling, Fairfax, Arlington, and beyond since 2004.' },
    ],
    faqs: [
      { q: 'What home improvement services do you offer?', a: 'We offer a range of home improvement services related to HVAC efficiency, comfort upgrades, and general home enhancements. Contact us to discuss your specific project.' },
      { q: 'Do you provide free estimates?', a: 'Yes. We provide upfront estimates for all home improvement projects. Just give us a call or click to schedule.' },
      { q: 'How long have you been serving the Washington Metro Area?', a: 'HVAC Innovation has been proudly serving the Washington Metro Area since 2004.' },
    ],
  },
}

export function getServiceContent(categorySlug: string, serviceSlug?: string) {
  const key = serviceSlug ? `${categorySlug}/${serviceSlug}` : categorySlug
  const raw = RAW_CONTENT[key]
  if (!raw) return null
  return { ...raw, benefits: withIcons(raw.benefits) }
}