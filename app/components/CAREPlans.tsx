"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  Droplets,
  Gauge,
  Minus,
  Plus,
  ShieldCheck,
  Snowflake,
  Thermometer,
  Wrench,
  Zap,
} from "lucide-react";
import { BUSINESS_NAME, BUSINESS_PHONE, BUSINESS_PHONE_DISPLAY, BUSINESS_URL, faqSchema, JsonLd, offerSchema, serviceSchema } from "@/lib/schema";
import { useState } from "react";




// ============================================================
// TYPES
// ============================================================

type CarePlan = {
  id: string;
  name: string;
  subtitle: string;
  systems: number;
  price: string;
  frequency: string;
  activationFee: string;
  duration: string;
  description: string;
  featured?: boolean;
  badge?: string;
};

type CareProgram = {
  brand: {
    name: string;
    phone: string;
    phoneHref: string;
  };

  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    primaryCta: string;
    primaryHref: string;
    secondaryCta: string;
    secondaryHref: string;
  };

  intro: {
    eyebrow: string;
    title: string;
    description: string;
  };

  acronym: {
    letter: string;
    title: string;
    description: string;
  }[];

  benefits: {
    icon: "priority" | "discount" | "seasonal" | "efficiency";
    title: string;
    description: string;
  }[];

  included: string[];

  seasonal: {
    season: string;
    title: string;
    description: string;
    icon: "cooling" | "heating";
    items: string[];
  }[];

  plans: CarePlan[];

  faq: {
    question: string;
    answer: string;
  }[];

  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
    button: string;
    href: string;
  };
};


// ============================================================
// DATA
// ============================================================

const CARE_PROGRAM: CareProgram = {
  brand: {
    name: BUSINESS_NAME,
    phone: BUSINESS_PHONE_DISPLAY,
    phoneHref: BUSINESS_PHONE,
  },

  hero: {
    eyebrow: "PREVENTATIVE HVAC MAINTENANCE",
    title: "Protect Your Comfort.",
    highlight: "Prevent Costly Repairs.",
    description:
      "Keep your heating and cooling system running efficiently year-round with our C.A.R.E. Maintenance Program. Enjoy priority service, seasonal system checks, and exclusive savings on repairs.",

    primaryCta: "VIEW MAINTENANCE PLANS",
    primaryHref: "#plans",

    secondaryCta: "CALL NOW",
    secondaryHref: BUSINESS_PHONE,
  },

  intro: {
    eyebrow: "WHY HVAC MAINTENANCE MATTERS",
    title: "A Little Maintenance Can Go a Long Way",
    description:
      "Regular HVAC maintenance helps improve system efficiency, extend equipment life, and identify potential problems before they become expensive repairs. Our certified technicians provide seasonal inspections designed to keep your heating and cooling equipment operating at its best.",
  },

  acronym: [
    {
      letter: "C",
      title: "Comprehensive Maintenance",
      description:
        "A complete maintenance schedule designed to keep your HVAC system operating reliably.",
    },
    {
      letter: "A",
      title: "Assured Comfort",
      description:
        "Keep your home comfortable through the hottest summers and coldest winter days.",
    },
    {
      letter: "R",
      title: "Reduced Costs",
      description:
        "Catch small problems early and receive 10% off eligible repairs as a member.",
    },
    {
      letter: "E",
      title: "Energy Efficiency",
      description:
        "Optimize your system so it can operate efficiently while maintaining consistent comfort.",
    },
  ],

  benefits: [
    {
      icon: "priority",
      title: "Priority Service",
      description:
        "C.A.R.E. members receive priority scheduling over non-members.",
    },
    {
      icon: "discount",
      title: "10% Off Repairs",
      description:
        "Automatically receive 10% off eligible HVAC repairs as a C.A.R.E. member.",
    },
    {
      icon: "seasonal",
      title: "Seasonal System Checks",
      description:
        "Complete cooling analysis in spring and heating analysis in fall.",
    },
    {
      icon: "efficiency",
      title: "Better Efficiency",
      description:
        "Routine maintenance helps your system operate efficiently and reliably.",
    },
  ],

  included: [
    "Thermostat calibration",
    "Condensing unit cleaning",
    "Indoor evaporator coil cleaning",
    "Visual refrigerant leak inspection",
    "Electrical connection inspection",
    "Condensate drain line flushing",
    "Filter inspection and replacement",
    "Moving component lubrication",
    "System safety checks",
    "Refrigerant level inspection",
    "Complete system performance analysis",
    "Additional maintenance as needed",
  ],

  seasonal: [
    {
      season: "SPRING",
      title: "Cooling System Analysis",
      description:
        "Get your air conditioning system ready before Texas summer temperatures arrive.",
      icon: "cooling",
      items: [
        "Clean coils",
        "Check refrigerant levels",
        "Inspect electrical components",
        "Test thermostat operation",
        "Check condensate drainage",
      ],
    },
    {
      season: "FALL",
      title: "Heating System Analysis",
      description:
        "Prepare your heating system before cooler temperatures arrive.",
      icon: "heating",
      items: [
        "Inspect heating components",
        "Check system safety",
        "Inspect electrical connections",
        "Test thermostat operation",
        "Check overall system performance",
      ],
    },
  ],

  plans: [
    {
      id: "single-system",
      name: "C.A.R.E. Program",
      subtitle: "Single System",
      systems: 1,
      price: "18.18",
      frequency: "Every month",
      activationFee: "$49",
      duration: "11 months",
      description:
        "Maintenance coverage for homes with one HVAC system.",
    },

    {
      id: "two-systems",
      name: "C.A.R.E. Program",
      subtitle: "2 Systems",
      systems: 2,
      price: "31.81",
      frequency: "Every month",
      activationFee: "$99",
      duration: "11 months",
      description:
        "Our most popular option for homes with two HVAC systems.",
      featured: true,
      badge: "MOST POPULAR",
    },

    {
      id: "three-systems",
      name: "C.A.R.E. Program",
      subtitle: "3 Systems",
      systems: 3,
      price: "45.45",
      frequency: "Every month",
      activationFee: "$149",
      duration: "11 months",
      description:
        "Extended maintenance coverage for larger homes.",
    },

    {
      id: "four-systems",
      name: "C.A.R.E. Program",
      subtitle: "4 Systems",
      systems: 4,
      price: "59.59",
      frequency: "Every month",
      activationFee: "$199",
      duration: "11 months",
      description:
        "Complete maintenance coverage for homes with four systems.",
    },
  ],

  faq: [
    {
      question: "What is the C.A.R.E. Maintenance Program?",
      answer:
        "The C.A.R.E. Program is our preventative HVAC maintenance membership designed to help keep your heating and cooling systems operating efficiently and reliably throughout the year.",
    },
    {
      question: "How often will my HVAC system be serviced?",
      answer:
        "C.A.R.E. members receive seasonal maintenance, including a complete cooling analysis in the spring and a heating analysis in the fall.",
    },
    {
      question: "Do C.A.R.E. members receive discounts on repairs?",
      answer:
        "Yes. C.A.R.E. members automatically receive a 10% discount on eligible repairs.",
    },
    {
      question: "Do members receive priority service?",
      answer:
        "Yes. C.A.R.E. members receive priority scheduling over non-members when requesting service.",
    },
    {
      question: "Which plan should I choose?",
      answer:
        "Choose the plan based on the number of HVAC systems in your home. If you have two systems, our 2-System plan is the most popular option.",
    },
  ],

  finalCta: {
    eyebrow: "KEEP YOUR SYSTEM RUNNING STRONG",
    title: "Your HVAC Deserves a C.A.R.E. Plan.",
    description:
      "Protect your comfort, reduce unexpected repairs, and keep your heating and cooling system performing at its best.",
    button: "JOIN THE C.A.R.E. PROGRAM",
    href: "#plans",
  },
};


// ============================================================
// ANIMATION
// ============================================================

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
    },
  },
};


// ============================================================
// ICONS
// ============================================================

function BenefitIcon({
  type,
}: {
  type: CareProgram["benefits"][number]["icon"];
}) {
  const icons = {
    priority: ShieldCheck,
    discount: Check,
    seasonal: Clock,
    efficiency: Zap,
  };

  const Icon = icons[type];

  return <Icon className="h-6 w-6 text-[#d91f26]" />;
}


// ============================================================
// FAQ
// ============================================================

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group border-b border-[#d4dbe6]">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left">
        <span
          className="text-lg font-bold text-[#0A3B8A]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {question}
        </span>

        <Plus className="h-5 w-5 flex-shrink-0 text-[#0A3B8A] transition-transform group-open:rotate-180" />
      </summary>

      <p className="pb-6 pr-8 leading-relaxed text-[#2C3440]">
        {answer}
      </p>
    </details>
  );
}


// ============================================================
// PAGE
// ============================================================

export default function MaintenancePage() {
  const data = CARE_PROGRAM;
  const maintenanceUrl = `${BUSINESS_URL}/maintenance`;
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        data={[
          serviceSchema({
            name: "HVAC Maintenance",
            description:
              "Preventative HVAC maintenance designed to improve system reliability, efficiency, and comfort throughout the year.",
            url: maintenanceUrl,
          }),

          faqSchema(
            data.faq.map((faq) => ({
              q: faq.question,
              a: faq.answer,
            }))
          ),

          ...data.plans.map((plan) =>
            offerSchema({
              name: `${plan.name} - ${plan.subtitle}`,
              description: plan.description,
              price: plan.price,
              priceCurrency: "USD",
              url: `${maintenanceUrl}#plans`,
              serviceName: "HVAC Maintenance",
            })
          ),
        ]}
      />

      {/* ======================================================
          TOP BAR
      ====================================================== */}



      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#0a1e38]">

        <div className="absolute inset-0 overflow-hidden min-h-[60vh]">
          
          <img
            src="/images/bgmaintenance.jfif"
            alt="HVAC technicians working on a rooftop unit"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#8A8F98]/10 via-[#8A8F98]/10 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-15 md:py-20">

          <div className="max-w-4xl">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >

              <p
                className="mb-5 w-fit bg-white/50 px-3 py-1.5 text-xs font-bold tracking-widest text-[#0a3b8a]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {data.hero.eyebrow}
              </p>

              <h1
                className="max-w-4xl text-4xl font-bold text-white md:text-6xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {data.hero.title}
                <br />

                <span className="text-[#fff]">
                  {data.hero.highlight}
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl">
                {data.hero.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <a
                  href={data.hero.primaryHref}
                  className="inline-flex items-center gap-3 rounded-xl bg-[#D91F26] px-7 py-4 font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#b92127] hover:shadow-xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {data.hero.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </a>

                {/*}
                <a
                  href={data.hero.secondaryHref}
                  className="inline-flex items-center gap-3 rounded-xl border border-white/25 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {data.hero.secondaryCta}
                </a>
                {*/}
              </div>

            </motion.div>

          </div>
        </div>
      </section>


      {/* ======================================================
          INTRO
      ====================================================== */}

      <section className="bg-[#8A8F98]/15 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 md:grid-cols-2">

            <div>

              <p
                className="mb-3 w-fit bg-white px-2 py-0.5 text-xs font-bold tracking-widest text-[#D91F26] shadow-sm"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {data.intro.eyebrow}
              </p>

              <h2
                className="text-4xl font-bold leading-tight text-[#0f3460] md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {data.intro.title}
              </h2>

            </div>

            <p className="text-lg leading-relaxed text-[#2C3440]">
              {data.intro.description}
            </p>

          </div>


          {/* C.A.R.E. */}

          <motion.div
            className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >

            {data.acronym.map((value) => (
              <motion.div
                key={value.letter}
                variants={item}
                className="rounded-2xl border border-[#d4dbe6] bg-white p-3 shadow-sm"
              >
                <div className="flex gap-3 items-center mb-3">

                  <div className="flex h-12 w-12 px-6 items-center justify-center rounded-xl bg-[#0A3B8A] text-3xl font-bold text-white">
                    {value.letter}
                  </div>

                  <h3
                    className="text-xl font-bold text-[#0A3B8A]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {value.title}
                  </h3>

                </div>
                

                <p className="text-sm leading-relaxed text-[#2C3440]">
                  {value.description}
                </p>

              </motion.div>
            ))}

          </motion.div>

        </div>
        <div className="max-w-screen-lg mx-auto mt-10 flex flex-col md:grid md:grid-cols-10 items-center px-10">
            <motion.div
                className="col-span-5 mt-14 flex flex-wrap w-full"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
            >
                {data.benefits.map((benefit) => (
                <motion.div
                    key={benefit.title}
                    variants={item}
                    className="rounded-2xl p-3 w-full sm:w-1/2"
                >
                    <div className="flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center shrink-0">
                        <BenefitIcon type={benefit.icon} />
                    </div>

                    <h3
                        className="text-xl font-bold text-[#0A3B8A]"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        {benefit.title}
                    </h3>
                    </div>

                    <p className="text-sm leading-relaxed text-[#2C3440] text-center">
                    {benefit.description}
                    </p>
                </motion.div>
                ))}
            </motion.div>

            <motion.div
                className="col-span-5 relative min-h-[320px] mt-10 mx-5 min-w-[70%] aspect-square"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >
                <div
                className="
                    absolute inset-0
                    overflow-hidden
                    rounded-3xl
                    bg-cover
                    bg-center
                    shadow-xl
                "
                style={{
                    backgroundImage: "url('/images/maintenance.jpg')",
                }}
                >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#041D45]/80 via-[#041D45]/10 to-transparent" />
                </div>

                {/* Floating badge */}
                <div
                className="
                    absolute
                    -bottom-5
                    left-3
                    sm:-left-5
                    flex
                    items-center gap-3
                    rounded-2xl
                    bg-[#D91F26]
                    px-5 py-4
                    text-white
                    shadow-xl
                "
                >
                <div className="text-2xl font-bold">10%</div>

                <div
                    className="text-xs font-semibold leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    MEMBER
                    <br />
                    REPAIR DISCOUNT
                </div>
                </div>
            </motion.div>
        </div>
        
        
      </section>


      {/* ======================================================
          BENEFITS
      ====================================================== */}


      {/*<section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <p
              className="mx-auto mb-3 w-fit bg-white shadow-lg px-2 py-0.5 text-xs font-bold tracking-widest text-[#D91F26]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              MEMBERSHIP BENEFITS
            </p>

            <h2
              className="text-4xl font-bold text-[#0f3460] md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              More Protection. More Savings.
            </h2>

          </div>


          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >

            {data.benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={item}
                className="rounded-2xl border border-[#d4dbe6] bg-[#8A8F98]/10 p-7"
              >

                <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center">
                        <BenefitIcon type={benefit.icon} />
                    </div>

                    <h3
                    className="text-xl font-bold text-[#0A3B8A]"
                    style={{ fontFamily: "var(--font-display)" }}
                    >
                        {benefit.title}
                    </h3>
                </div>
                 

                <p className="text-sm leading-relaxed text-[#2C3440]">
                  {benefit.description}
                </p>

              </motion.div>
            ))}

          </motion.div>

        </div>
      </section>*/}


      {/* ======================================================
          WHAT'S INCLUDED
      ====================================================== */}

      <section className="bg-[#0f3460] py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p
                className="mb-3 w-fit bg-white px-2 py-0.5 text-xs font-bold tracking-widest text-[#D91F26]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                WHAT'S INCLUDED
              </p>

              <h2
                className="text-4xl font-bold leading-tight text-white md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Complete Maintenance From Top to Bottom
              </h2>

              <p className="mt-5 text-lg text-white/60">
                Our technicians perform a comprehensive inspection and
                maintenance of your HVAC system, helping identify potential
                problems before they become expensive repairs.
              </p>

            </div>


            <motion.div
              className="grid gap-x-10 gap-y-4 sm:grid-cols-2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >

              {data.included.map((value) => (
                <motion.div
                  key={value}
                  variants={item}
                  className="flex items-center gap-3"
                >

                  
                  <span className="text-base leading-relaxed text-white/90">
                    {value}
                  </span>

                </motion.div>
              ))}

            </motion.div>

          </div>

        </div>
      </section>


      {/* ======================================================
          SEASONAL MAINTENANCE
      ====================================================== */}

      <section className="bg-[#8A8F98]/15 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <p
              className="mx-auto mb-3 w-fit bg-white px-2 py-0.5 text-xs font-bold tracking-widest text-[#D91F26] shadow-sm"
              style={{ fontFamily: "var(--font-display)" }}
            >
              SEASONAL SERVICE
            </p>

            <h2
              className="text-4xl font-bold text-[#0f3460] md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready for Every Texas Season
            </h2>

          </div>


          <div className="mt-14 grid gap-8 md:grid-cols-2">

            {data.seasonal.map((season) => {

              const Icon =
                season.icon === "cooling"
                  ? Snowflake
                  : Thermometer;

              return (
                <motion.div
                  key={season.season}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="rounded-2xl border border-[#d4dbe6] bg-white p-8 shadow-sm"
                >

                  <div className="flex items-center gap-6">

                    
                    <Icon className="h-6 w-6 text-[#0A3B8A]" />

                    <div>

                      <p
                        className="text-xs font-bold tracking-widest text-[#0f3460]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {season.season}
                      </p>

                      <h3
                        className="mt-2 text-2xl font-bold text-[#0A3B8A]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {season.title}
                      </h3>

                    </div>
                    
                  </div>

                  <p className="mt-5 text-base font-semibold leading-relaxed text-[#2C3440]">
                    {season.description}
                  </p>

                  <div className="mt-4 space-y-3">

                    {season.items.map((value) => (
                      <div
                        key={value}
                        className="flex items-center pl-3 gap-2 text-base text-[#2C3440]"
                      >
                        {/*<Check className="h-4 w-4 text-[#D91F26]" />*/}
                        {value}
                      </div>
                    ))}

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>


      {/* ======================================================
          PLANS
      ====================================================== */}

      <section
        id="plans"
        className="bg-[#8A8F98]/15 py-20"
      >

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <p
              className="mx-auto mb-3 w-fit bg-white px-2 py-0.5 text-xs font-bold tracking-widest text-[#D91F26]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              C.A.R.E. MEMBERSHIP
            </p>

            <h2
              className="text-4xl font-bold text-[#0f3460] md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Choose Your Maintenance Plan
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-[#2C3440]">
              Select your plan based on the number of HVAC systems in your
              home.
            </p>

          </div>


          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >

            {data.plans.map((plan) => (
              <motion.div
                key={plan.id}
                variants={item}
                className={`relative flex flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  plan.featured
                    ? "border-[#d4dbe6] shadow-sm"
                    : "border-[#d4dbe6]"
                }`}
              >

                {plan.featured && (
                  <div
                    className="absolute left-0 right-0 top-0 bg-[#D91F26] py-2 text-center text-[10px] font-bold tracking-widest text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {plan.badge}
                  </div>
                )}

                <div
                  className={`flex flex-1 flex-col p-7 ${
                    plan.featured ? "pt-14" : ""
                  }`}
                >
                    <div className="flex justify-between">
                        
                        <div>
                            <p
                                className="text-xs font-bold tracking-widest text-left text-[#D91F26]"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                {plan.name}
                            </p>

                            <h3
                                className="mt-1 text-2xl font-bold text-[#0A3B8A]"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                {plan.subtitle}
                            </h3>
                        </div>
                        {/*<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl ">
                            <Wrench className="h-8 w-8 text-[#0A3B8A] scale-x-[-1]" />
                        </div>*/}
                    </div>
                  

                  <p className="mt-3 min-h-[48px] text-sm leading-relaxed text-[#2C3440]870">
                    {plan.description}
                  </p>


                  {/* PRICE */}

                  <div className="my-5 border-y border-[#d4dbe6] py-5">

                    <div className="flex items-end">

                      <span
                        className="text-4xl font-bold text-[#0A3B8A]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        $ {plan.price}
                      </span>

                      <span className="mb-1 ml-1 text-sm text-[#2C3440]/80">
                        / month
                      </span>

                    </div>

                    <p className="mt-2 text-xs font-semibold text-[#2C3440]/90">
                      + {plan.activationFee} activation payment
                    </p>

                  </div>


                  {/* DETAILS */}

                  <div className="space-y-2">

                    <div className="flex items-center gap-2 text-sm text-[#2C3440]">
                      <svg className="w-4 h-4 text-[#f5a623]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                      {plan.systems}{" "}
                      {plan.systems === 1 ? "HVAC system" : "HVAC systems"}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-[#2C3440]">
                      <svg className="w-4 h-4 text-[#f5a623]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                      {plan.duration} program
                    </div>

                    <div className="flex items-center gap-2 text-sm text-[#2C3440]">
                      <svg className="w-4 h-4 text-[#f5a623]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                      Priority member service
                    </div>

                    <div className="flex items-center gap-2 text-sm text-[#2C3440]">
                      <svg className="w-4 h-4 text-[#f5a623]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                      10% off eligible repairs
                    </div>

                  </div>


                  {/* CTA */}

                  <a
                    href="#contact"
                    className={`mt-8 flex items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-bold transition-all ${
                      plan.featured
                        ? "bg-[#D91F26] text-white hover:bg-[#b92127]"
                        : "bg-[#0A3B8A] text-white hover:bg-[#082e69]"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    GET STARTED
                    <ArrowRight className="h-4 w-4" />
                  </a>

                </div>

              </motion.div>
            ))}

          </motion.div>


          <p className="mt-6 text-center text-xs text-[#2C3440]/60">
            Membership activation payment applies in addition to the monthly
            program fee.
          </p>

        </div>
      </section>


      {/* ======================================================
          FAQ
      ====================================================== */}

      <section className="bg-[#8A8F98]/15 py-20">

        <div className="mx-auto max-w-3xl px-6">

          <div className="mb-12 text-center">

            <p
              className="mx-auto mb-3 w-fit bg-white px-2 py-0.5 text-xs font-bold tracking-widest text-[#D91F26] shadow-sm"
              style={{ fontFamily: "var(--font-display)" }}
            >
              QUESTIONS
            </p>

            <h2
              className="text-4xl font-bold text-[#0f3460] md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              C.A.R.E. Program FAQ
            </h2>

          </div>


          

            

            {/*data.faq.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))*/}

            <div className="space-y-3">
              {data.faq.map((faq, i) => (
                <div key={i} className="bg-white border border-[#d4dbe6] rounded-xl overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-semibold text-[#0a3b8a] text-lg pr-4" style={{ fontFamily: 'var(--font-display)' }}>
                      {faq.question}
                    </span>
                    {openFaq === i ? 
                      <Minus width={50} height={20} className='text-[#0a3b8a]'/>  
                      :
                      <Plus width={50} height={20} className='text-[#0a3b8a]'/>
                    }
                    
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <p className="text-[#2C3440] text-base leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

          

        </div>
      </section>


      {/* ======================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#041D45] py-20">

        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-6 text-center">

          <p
            className="mx-auto mb-4 w-fit bg-white px-3 py-1 text-xs font-bold tracking-widest text-[#D91F26]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {data.finalCta.eyebrow}
          </p>

          <h2
            className="text-4xl font-bold text-white md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {data.finalCta.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            {data.finalCta.description}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <a
              href={data.finalCta.href}
              className="inline-flex items-center gap-3 rounded-xl bg-[#D91F26] px-8 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#b92127] hover:shadow-xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {data.finalCta.button}
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={data.brand.phoneHref}
              className="inline-flex items-center gap-3 rounded-xl border border-white/25 px-8 py-4 font-semibold text-white transition duration-300 hover:border-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              CALL {data.brand.phone}
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}