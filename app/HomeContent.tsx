'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion";
import { BUSINESS_PHONE_DISPLAY, BUSINESS_EMAIL, FOUNDING_YEAR, BUSINESS_PHONE, BUSINESS_SCHEDULE_WEEK, BUSINESS_SCHEDULE_WEEKEND, SERVICE_AREA, ADDRESS, SERVICE_AREA_CITIES } from '@/lib/schema'
import { CATEGORIES } from '@/lib/navigation'
import { DatePicker } from "@/app/components/forms/DatePicker"
import { PROMOTIONS } from '@/lib/promotions'
import { PromoCard } from './components/PromoCard'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

import {
  Snowflake,
  Flame,
  Building2,
  Wind,
  Bolt,
  Wrench,
} from "lucide-react";


// NOTE: metadata can't be exported from a 'use client' file. It's exported
// separately from a small server wrapper — see app/page.tsx setup note in
// MIGRATION-README.md. If you want it inline instead, split this component
// into a client child imported by a server page.tsx (pattern shown below).


// Motion
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const SERVICES = [
  {
    icon: <Snowflake className="w-9 h-9" />,
    title: "Air Conditioning",
    desc: "Central AC, ductless mini-splits, and air handlers. Safe refrigerant handling, wiring, and controls for peak summer efficiency.",
    href: "/air-conditioning",
    image: "/images/ac.webp",
  },
  {
    icon: <Flame className="w-9 h-9" />,
    title: "Heating & Furnaces",
    desc: "Furnaces, boilers, heat pumps, and ductless heating. Installation, repair, and maintenance for all brands with combustion safety testing.",
    href: "/heating",
    image: "/images/heating.webp",
  },
  {
    icon: <Building2 className="w-9 h-9" />,
    title: "Commercial HVAC",
    desc: "Rooftop units and commercial climate systems for offices and retail. Minimized downtime with professional installation and service.",
    href: "/commercial-hvac",
    image: "/images/comercial.webp",
  },
  {
    icon: <Wind className="w-9 h-9" />,
    title: "Duct Work",
    desc: "Comprehensive home upgrades from estimates to completion. Enhance your living space with the same trusted service since 2004.",
    href: "/duct-work",
    image: "/images/duct.webp",
  },
];

const STATS = [
  { value: '25+', label: 'Years of Experience' },
  { value: '12,000+', label: 'Homes Served' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '24/7', label: 'Emergency Service' },
]
const brands= [
    { id: "carrier", name: "Carrier", tier: "authorized-dealer", image: "/images/brand5.png" },
    { id: "trane", name: "Trane", tier: "partner", image: "/images/brand4.png" },
    { id: "lennox", name: "Lennox", tier: "partner", image: "/images/brand7.png" },
    { id: "goodman", name: "Goodman", tier: "partner", image: "/images/brand3.png" },
  ]

const TESTIMONIALS = [
  {
    name: 'Patricia M.',
    location: 'Arlington, VA',
    rating: 5,
    text: 'Our AC broke on the hottest day of the year. Repair It Raccoon had a technician at our door within two hours. They diagnosed the problem, had the part on the truck, and we were cool again before dinner. Absolutely outstanding.',
    image: '/images/review01.jpg',
  },
  {
    name: 'David & Rosa K.',
    location: 'Fairfax, VA',
    rating: 5,
    text: "We've been on Repair It Raccoon's maintenance plan for six years. They always show up on time, explain everything clearly, and never try to sell us things we don't need. Honest, reliable people.",
    image: '/images/review00.jpg',
  },
  {
    name: 'James T.',
    location: 'Bethesda, MD',
    rating: 5,
    text: 'We replaced our 20-year-old furnace with a new heat pump system. The crew was professional, cleaned up completely, and walked us through the new thermostat. The price matched the quote exactly.',
    image: '/images/review02.avif',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

const serviceOptions = CATEGORIES.flatMap((category) =>
  category.services.length
    ? category.services.map((service) => ({
        value: `${category.slug}:${service.slug}`,
        label: service.label,
        category: category.label,
      }))
    : [
        {
          value: category.slug,
          label: category.label,
          category: category.label,
        },
      ]
)

export default function HomePage() {
  const [formData, setFormData] = useState({ name: '', phone: '', addres: '', zip: '', email: '', service: '', requestType: '', message: '', preferredDate: '' })
  const [submitted, setSubmitted] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [now] = useState(() => Date.now())

  const activePromotions = PROMOTIONS.filter(
    (p) => new Date(p.validThrough).getTime() >= now
  )

  const [currentPromo, setCurrentPromo] = useState(0)

  useEffect(() => {
    if (activePromotions.length <= 1) return

    const interval = setInterval(() => {
      setCurrentPromo((prev) =>
        prev === activePromotions.length - 1 ? 0 : prev + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [activePromotions.length])

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-auto flex flex-col items-center bg-[#0a1e38]">
        <div
          className="inline-flex items-center gap-2 bg-white/65 text-[#0f3460] text-xs font-bold px-4 py-1.5 mb-6 tracking-widest w-full z-2 text-center justify-center"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          
          LICENSED · BONDED · INSURED · FRISCO TEXAS
        </div>
        <div className="absolute inset-0 overflow-hidden min-h-[60vh]">
          
          <img
            src="/images/suburbio3.webp"
            alt="HVAC technicians working on a rooftop unit"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#8A8F98]/10 via-[#8A8F98]/10 to-transparent" />
        </div>

        <div className="slide-in-right absolute bg-[url('/images/bus1.webp')] aspect-3/2 w-[60vw] bottom-22 md:w-[50vw] bg-cover sm:bottom-0 lg:-bottom-10 right-0"
          />

        

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-11 gap-12 items-center w-full min-h-[60vh]">
          <div className='col-span-6'>
            

            {/* H1: primary keyword + geo modifier, matches homepage <title>/<meta description> intent */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none mb-6"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}
            >
              Leave It
              <br />
              to the <span className="text-[#D91F26]">Raccoon</span>
            </h1>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              HVAC service, installation & maintenance for all brands, plus solar water heating and home improvements. Proudly serving in Frisco, Texas since {FOUNDING_YEAR}.
            </p>

            <div className="my-8 flex flex-col gap-3 sm:flex-row sm:gap-8 ">
              {[ 'Emergency Servcie', 'Home Remodeling', 'Solar'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-white/90">
                  <svg className="w-4 h-4 text-[#f5a623]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-display)' }}>
                    {badge}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-[#D91F26] hover:bg-[#b92127] text-white font-bold px-8 py-4 rounded-xl text-base active:scale-[0.98] shadow-md transform transition duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
              >
                FREE ESTIMATE
              </a>
              
              
              <a
                href="tel:+17035550192"
                className="border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-base flex items-center gap-3 shadow-md transform transition duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.43 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {BUSINESS_PHONE_DISPLAY}
              </a>
               
            </div>

            
          </div>


          {/*<div className="hidden md:block col-span-5">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <p className="text-white/60 text-xs font-bold tracking-widest mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                EMERGENCY? WE&apos;RE ON CALL
              </p>
              <div className="flex items-center gap-2 lg:gap-4 mb-6">
                <a href={BUSINESS_PHONE} className="w-12 h-12 bg-[#D91F26] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.43 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </a>
                <div>
                  <p className="text-white/60 text-xs" style={{ fontFamily: 'var(--font-display)' }}>CALL NOW</p>
                  <p className="text-white text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>{BUSINESS_PHONE_DISPLAY}</p>
                  <span className='text-sm text-white/90'>Free Line For You</span>
                </div>
              </div>
              <div className="space-y-3 text-sm text-white/70 border-t border-white/10 pt-6">
                {[
                  'Same-day appointments available',
                  'No weekend overtime charges',
                  '100% satisfaction guarantee',
                  'Upfront pricing, no surprises',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#D91F26] rounded-full" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>*/}
          
          
          

        </div>

        {/* Stats bar 
        <div className="mt-auto w-full bg-[#0f3460]/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white/90" style={{ fontFamily: 'var(--font-display)' }}>
                  {stat.value}
                </div>
                <div className="text-white text-xs mt-0.5" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.06em' }}>
                  {stat.label.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
         Stats bar */}
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 bg-[#8A8F98]/15">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left mb-16 mx-auto max-w-screen-lg">
            <p className="text-[#E31E24] text-xs font-bold tracking-widest mb-3 bg-white w-fit px-2 py-0.5 shadow-sm" style={{ fontFamily: 'var(--font-display)' }}>
              
              WHAT WE DO
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#062A63] leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              HVAC, Solar & Home Improvement
            </h2>
            <p className="text-[#2C3440] mt-4 text-lg mx-auto leading-relaxed">
              From estimates and repairs to expert installations and ongoing maintenance, we service all major HVAC brands. Our services include furnaces, air conditioning, heat pumps, boilers, water heaters, rooftop units, ductless systems, humidifiers, thermostats, air cleaners, solar water heating, and home improvement solutions—all delivered with a smile.
            </p>
          </div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            
            {SERVICES.map((s) => (
              <motion.div key={s.title} variants={item}>
              <Link
                key={s.title}
                href={s.href}
                className="bg-white border border-[#d4dbe6] rounded-xl hover:border-[#0f3460]/40 hover:shadow-lg transition-all group cursor-pointer block"
              >
                <div
                  className="h-50 w-full bg-cover bg-center rounded-t-xl"
                  style={{ backgroundImage: `url(${s.image})` }}
                />
                <div className='flex gap-3 items-center mb-3 p-3 justify-center'>
                  <div className="w-7 h-7 rounded-xl flex items-center justify-center transition-colors duration-300 text-[#0A3B8A]">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A3B8A]" style={{ fontFamily: 'var(--font-display)' }}>
                    {s.title}
                  </h3>
                </div>
                <p className="text-[#2C3440] text-base leading-relaxed px-3">{s.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-[#D91F26] text-sm font-semibold px-3 pb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  LEARN MORE
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY US BAND ── */}
      <section className="py-16 bg-[#0f3460]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {[
              { icon: '🛡️', title: '100% Satisfaction Guarantee', desc: "If you're not completely satisfied with our work, we'll make it right — no questions asked." },
              { icon: '💰', title: 'No Hidden Fees', desc: 'Detailed, transparent quotes before any work begins. What we quote is what you pay.' },
              { icon: '⚡', title: 'Fast Response', desc: 'Average response time under 90 minutes for emergency calls in our service area.' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col md:flex-row gap-5 items-center md:items-start">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 bg-[#8A8F98]/15">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className='md:col-span-2'>
            <p className="text-[#E31E24] text-xs font-bold tracking-widest mb-3 bg-white w-fit px-2 py-0.5 shadow-sm" style={{ fontFamily: 'var(--font-display)' }}>
              ABOUT Repair It Raccoon
            </p>
            {/* Written as a clear, citable "founded/who/where" statement — useful for
                both human readers and GEO (AI answer engines quoting company facts). */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f3460] leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Professional HVAC Services Backed by Quality and Care
            </h2>
          </div>
          <div>
            
            <p className="text-[#2C3440] text-lg leading-relaxed mb-6">
              Repair-It Raccoon is your trusted local HVAC expert for heating, cooling, repair, and comfort. Whether you need a new AC installation, emergency repair, seasonal tune-up, or complete system replacement, our skilled technicians are ready to help. We pride ourselves on honest service, upfront pricing, and quality workmanship that keeps your home comfortable year-round.
              <br />
              <span className='font-bold'>Don't sweat it. Don't freeze. Call Repair-It Raccoon!</span>
            </p>
            <p className="text-[#2C3440] mb-8">
              Explore the locations we serve and discover why homeowners and businesses trust Repair-It Raccoon for fast, reliable HVAC service.
            </p>
            <div className="flex mb-8 gap-2 flex-wrap">
              {SERVICE_AREA_CITIES.map((s) => (
                <div key={s} className="bg-white border border-[#d4dbe6] rounded-xl py-1.5 px-2.5 w-fit">
                  <p className="text-[#0A3B8A] font-nomal text-sm mb-1 whitespace-nowrap" style={{ fontFamily: 'var(--font-display)' }}>
                    {s}
                  </p>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#0A3B8A] hover:bg-[#0b2f5d] text-white font-bold px-7 py-4 rounded-xl transition-colors"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
            >
              SCHEDULE A CALL
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              
              <div className="relative rounded-2xl aspect-[4/3] bg-[url('/images/aboutus.webp')] w-full h-full bg-contain bg-center bg-no-repeat">
                
                
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#D91F26] text-white rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>20+</div>
                <div className="text-xs font-bold tracking-widest mt-1" style={{ fontFamily: 'var(--font-display)' }}>
                  YEARS OF
                  <br />
                  EXCELLENCE
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
      </section>

      

      {/* ── TESTIMONIALS ── */}
      <section id="reviews" className="py-24 bg-[#8A8F98]/15">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#e31e24] text-xs font-bold tracking-widest mb-3 bg-white w-fit px-2 py-0.5 shadow-sm mx-auto" style={{ fontFamily: 'var(--font-display)' }}>
              CUSTOMER TESTIMONIALS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f3460]" style={{ fontFamily: 'var(--font-display)' }}>
              What Customers Are Saying About Repair It Raccon
            </h2>
          </div>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            {TESTIMONIALS.map((t) => (
              <motion.div
                key={t.name}
                variants={item}
                className="bg-white border border-[#d4dbe6] rounded-xl p-7 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <Image 
                    src={t.image}
                    height={100}
                    width={100}
                    alt='reviewerporfile photo'
                    className="w-10 h-auto rounded-full"
                  />
                  <div>
                    <p className="text-[#0f3460] font-bold text-base" style={{ fontFamily: 'var(--font-display)' }}>
                      {t.name}
                    </p>
                    <p className="text-[#2C3440] text-sm">{t.location}</p>
                  </div>
                  
                </div>
                <StarRating count={t.rating} />
                <p className="text-[#0d1b2e] text-base leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { platform: 'Google', rating: '4.9', count: '847 reviews' },
              { platform: 'Yelp', rating: '4.8', count: '312 reviews' },
              { platform: 'Angi', rating: '4.9', count: 'Top Rated Pro' },
            ].map((p) => (
              <div key={p.platform} className="flex items-center gap-3 bg-white border border-[#d4dbe6] rounded-full px-5 py-3">
                <StarRating count={5} />
                <span className="text-[#0f3460] font-bold text-base" style={{ fontFamily: 'var(--font-display)' }}>
                  {p.rating}
                </span>
                <span className="text-[#2C3440] text-sm">
                  {p.platform} · {p.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAINTENANCE PLAN CTA ── */}
      <section className="py-20 bg-[#041D45] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#e31e24] text-xs font-bold tracking-widest mb-4 bg-white w-fit px-2 py-0.5 shadow-sm mx-auto" style={{ fontFamily: 'var(--font-display)' }}>
            Repair It Raccoon Promotions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Save Money With Our
            <br />
            <span className="text-[#D91F26]">Special Promotions</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Two tune-ups a year, priority scheduling, 15% off all repairs, and no overtime charges. Starting at just
            $149/year.
          </p>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentPromo * 100}%)`,
              }}
            >
              {activePromotions.map((p) => (
                <div
                  key={p.id}
                  className="w-full flex-shrink-0 flex justify-center"
                >
                  <PromoCard {...p} home='home' />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 pt-5">
            <Link
              href="/promotions"
              className="bg-[#D91F26] hover:bg-[#b92127] text-white font-bold px-8 py-4 rounded-xl shadow-md transform transition duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
            >
              VIEW ALL OFFERS
            </Link>
            {/*<Link
              href="/promotions"
              className="border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded shadow-md transform transition duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              VIEW ALL OFFERS
            </Link>*/}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 bg-[#8A8F98]/15">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#D91F26] text-xs font-bold tracking-widest mb-3 bg-white w-fit px-2 py-0.5 shadow-sm" style={{ fontFamily: 'var(--font-display)' }}>
              GET IN TOUCH
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f3460] leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Ready to Get Started?
            </h2>
            <p className="text-[#2C3440] text-lg leading-relaxed mb-10">
              Request a free estimate or schedule a visit. We respond to every message within an hour during
              business hours.
            </p>
            <div className="space-y-5 text-base">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="#0A3B8A" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.43 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ),
                  label: 'Phone',
                  value: BUSINESS_PHONE_DISPLAY,
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="#0A3B8A" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: 'Email',
                  value: BUSINESS_EMAIL,
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="#0A3B8A" strokeWidth={2} viewBox="0 0 24 24">
                      <circle cx="12" cy="10" r="3" />
                      <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7.05 11.5 7.35 11.76a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8z" />
                    </svg>
                  ),
                  label: 'Service Area',
                  value: `${SERVICE_AREA.join(' · ')}`,
                  href: 'https://google.com/maps?cid=17678288938487285518&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=US&source=embed',
                  extra: `${Object.values(ADDRESS).join(' ')}`
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="#0A3B8A" strokeWidth={2} viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                  label: 'Hours',
                  value: `${BUSINESS_SCHEDULE_WEEK} · ${BUSINESS_SCHEDULE_WEEKEND} · 24/7 Emergency Service'`,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  {item.href ? 
                    <a 
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#eef1f6] rounded-lg flex items-center justify-center flex-shrink-0 text-[#0f3460] hover:bg-[#0f3460] hover:text-[#eef1f6]"
                      >
                      {item.icon}
                    </a>
                    :
                    <div className="w-10 h-10 bg-[#eef1f6] rounded-lg flex items-center justify-center flex-shrink-0 text-[#0f3460]">
                      {item.icon}
                    </div>
                  }
                  
                  <div>
                    <p className="text-[#2C3440] text-sm font-bold tracking-widest" style={{ fontFamily: 'var(--font-display)' }}>
                      {item.label.toUpperCase()}
                    </p>
                    <p className="text-[#0d1b2e] font-medium text-sm mt-0.5">{item.value}</p>
                    <p className="text-[#0d1b2e]/90 font-medium text-sm mt-0.5">{item.extra}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex rounded-xl overflow-hidden mt-8 justify-center'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.727462268584!2d-77.0832844!3d39.0534653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7ce8a45a95555%3A0xf555e6203f40870e!2sHVAC%20Innovation%20llc!5e1!3m2!1sen!2sus!4v1785857648002!5m2!1sen!2sus"
                width="90%"
                height="370"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className='rounded-xl'
                
              />
            </div>
            

          </div>

          <div className="bg-[#ffffff] border border-[#d4dbe6] rounded-2xl p-8 mt-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0f3460] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  Message Sent!
                </h3>
                <p className="text-[#2C3440]">We&apos;ll reach out within the hour.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-[#0A3B8A] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Request Your Free Estimate
                </h3>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();

                    try {
                      const response = await fetch("/api/contact", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formData),
                      });

                      const data = await response.json();

                      if (data.success) {
                        setSubmitted(true);

                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          addres: "",
                          zip: "",
                          service: "",
                          requestType: "",
                          preferredDate: "",
                          message: "",
                        });

                        setSelectedDate(undefined);
                      }
                    } catch (error) {
                      console.error(error);
                      alert("Failed to send request.");
                    }
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#2C3440] tracking-wider mb-1.5" style={{ fontFamily: 'var(--font-display)' }}>
                        NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-[#d4dbe6] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0f3460] transition-colors"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#2C3440] tracking-wider mb-1.5" style={{ fontFamily: 'var(--font-display)' }}>
                        PHONE
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-[#d4dbe6] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0f3460] transition-colors"
                        placeholder="(703) 000-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#2C3440] tracking-wider mb-1.5" style={{ fontFamily: 'var(--font-display)' }}>
                      EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-[#d4dbe6] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0f3460] transition-colors"
                      placeholder="jane@email.com"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#2C3440] tracking-wider mb-1.5" style={{ fontFamily: 'var(--font-display)' }}>
                        ADDRES
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.addres}
                        onChange={(e) => setFormData({ ...formData, addres: e.target.value })}
                        className="w-full bg-white border border-[#d4dbe6] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0f3460] transition-colors"
                        placeholder="4121 Sampson Rd Silver Spring"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#2C3440] tracking-wider mb-1.5" style={{ fontFamily: 'var(--font-display)' }}>
                        ZIP CODE
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.zip}
                        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                        className="w-full bg-white border border-[#d4dbe6] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0f3460] transition-colors"
                        placeholder="20906"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-xs font-bold text-[#2C3440] tracking-wider mb-1.5"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      SERVICE NEEDED
                    </label>

                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData({
                          ...formData,
                          service: value ?? "",
                        })
                      }
                    >
                      <SelectTrigger
                        className="
                          w-full
                          bg-white
                          border-[#d4dbe6]
                          rounded-lg
                          h-12
                          text-sm
                        "
                      >
                        <SelectValue placeholder="Select a service..." />
                      </SelectTrigger>

                      <SelectContent
                        className="
                          rounded-xl
                          border-[#d4dbe6]
                          shadow-xl
                        "
                      >
                        {serviceOptions.map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.label}
                            className="
                              cursor-pointer
                              text-sm
                            "
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {[
                      { value: 'installation', label: 'Installation' },
                      { value: 'maintenance', label: 'Maintenance' },
                      { value: 'repair', label: 'Repair' },
                      { value: 'free-estimate', label: 'Free Estimate' },
                    ].map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            requestType: item.value,
                          })
                        }
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          formData.requestType === item.value
                            ? 'bg-[#0A3B8A] text-white border-[#0A3B8A]'
                            : 'bg-white text-[#0A3B8A] border-[#d4dbe6]'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>

                  <div className="mt-3">
                    <label
                      className="block text-xs font-bold text-[#2C3440] tracking-wider mb-1.5"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      PREFERRED DATE
                    </label>

                    <DatePicker
                      
                      value={selectedDate}
                      onChange={(date) => {
                        setSelectedDate(date)

                        setFormData({
                          ...formData,
                          preferredDate: date
                            ? date.toISOString()
                            : "",
                        })
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#2C3440] tracking-wider mb-1.5" style={{ fontFamily: 'var(--font-display)' }}>
                      MESSAGE
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-[#d4dbe6] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0f3460] transition-colors resize-none"
                      placeholder="Tell us about your system or issue..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#D91F26] hover:bg-[#b92127] text-white font-bold py-4 rounded-lg shadow-md transform transition duration-300 ease-out hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                    style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.06em', fontSize: '0.9rem' }}
                  >
                    SEND REQUEST
                  </button>
                  <p className="text-center text-xs text-[#2C3440]">
                    Or call us: <a href="tel:+17035550192" className="text-[#0f3460] font-semibold hover:underline">{BUSINESS_PHONE_DISPLAY}</a>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

    </>
  )
}
