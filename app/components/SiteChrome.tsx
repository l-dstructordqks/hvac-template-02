'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { BUSINESS_EMAIL, BUSINESS_PHONE, BUSINESS_PHONE_DISPLAY, BUSINESS_SCHEDULE_WEEK, BUSINESS_SCHEDULE_WEEKEND } from '@/lib/schema'
import { CATEGORIES } from '@/lib/navigation'
import { ChevronDown } from 'lucide-react'

const NAV_LINKS = [
  {
    label: "Air Conditioning",
    href: "/air-conditioning",
    sublinks: [
      {
        label: "AC Repair",
        href: "/air-conditioning/repair",
      },
      {
        label: "AC Installation",
        href: "/air-conditioning/installation",
      },
      {
        label: "AC Maintenance",
        href: "/air-conditioning/maintenance",
      },
    ],
  },

  {
    label: "Heating & Furnaces",
    href: "/heating",
    sublinks: [
      {
        label: "Furnace Repair",
        href: "/heating/furnace-repair",
      },
      {
        label: "Furnace Installation",
        href: "/heating/furnace-installation",
      },
      {
        label: "Furnace Maintenance",
        href: "/heating/furnace-maintenance",
      },
      {
        label: "Heating Repair",
        href: "/heating/repair",
      },
      {
        label: "Heat Pumps",
        href: "/heating/heat-pumps",
      },
    ],
  },
  {
    label: "HVAC Services",
    href: "/hvac-services/commercial-hvac",
    sublinks: [
      {
        label: "Commercial HVAC",
        href: "/hvac-services/commercial-hvac",
      },
      {
        label: "Duct Work",
        href: "/hvac-services/duct-work",
      },
    ],
  },
  /*{
    label: "Financing",
    href: "/financing",
  },*/

  {
    label: "About",
    href: "/about",
    sublinks: [
      {
        label: "Maintenance Plans",
        href: "/maintenance-plans",
      },/*
      {
        label: "Blog",
        href: "/blog",
      },*/
      {
        label: "Service Areas",
        href: "/service-areas",
      },
    ],
  },

  {
    label: "Contact",
    href: "/#contact",
  },
];
/*
const SERVICES_MENU = [
  { label: 'Air Conditioning', href: '/air-conditioning' },
  { label: 'Heating', href: '/heating' },
  { label: 'Indoor Air Quality', href: '/indoor-air-quality' },
  { label: 'Maintenance', href: '/maintenance' },
  { label: 'New Construction', href: '/new-construction' },
  { label: '24/7 Emergency Service', href: '/emergency-service' },
]*/

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const previousPathname = useRef(pathname)

  useEffect(() => {
  if (previousPathname.current !== pathname) {
      setMobileOpen(false)
      setServicesOpen(false)
      previousPathname.current = pathname
    }
  }, [pathname])

  return (
    <>

      {/* ── NAV ── */}
      <header
        className={`sticky top-0 z-50 transition-shadow ${scrolled ? 'shadow-lg' : ''} bg-[#0f3460]/97 bg-white backdrop-blur-sm border-b border-white/10 ${mobileOpen && 'pb-0'}`}
      >
        {/** LABEL INFO EMERGENCY AND SERVICE AREA */}
        <div
          className="bg-[#0f3460] text-white text-xs py-2 px-6 text-center font-medium"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
        >
          <span className='text-[#f5a623]'>🔥 24/7 EMERGENCY SERVICE · {BUSINESS_PHONE_DISPLAY}</span> · Serving in Frisco Texas
        </div>

        {/** NAVABAR */}
        <div className="max-w-7xl mx-auto px-4 flex items-center md:justify-between lg:justify-between justify-between h-29 lg:pl-2">
          <Link href="/" className="md:flex items-center">
            <Image 
              src="/logotest.png"
              height={8}
              width={250}
              alt='logo Repair It Raccoon LLC'
              className="w-60 h-auto bg-none"
            />
            {/*<div className="w-9 h-9 bg-[#e8420a] rounded flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.2} className="w-5 h-5">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            </div>
            <span className="text-white font-bold text-xl tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              ProAir <span className="text-[#e8420a]">HVAC</span>
            </span>*/}
          </Link>

          <div className='flex flex-col'>
              <div className="hidden md:flex items-center gap-2 justify-between md:justify-end">
                <Link href="/" className="sm:hidden items-center hidden lg:hidden">
                  <Image 
                    src="/logotest.png"
                    height={8}
                    width={250}
                    alt='logo Repair It Raccoon LLC'
                    className="w-31 h-auto bg-none"
                  />
                  
                </Link>
                {/*
                <Link
                  href={BUSINESS_PHONE}
                  className="bg-[#D91F26] hover:bg-[#b92127] text-white text-sm font-bold px-3 gap-1 py-2.5 rounded shadow-md transform transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl flex"
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.03em' }}
                >
                  
                  <p>{BUSINESS_PHONE_DISPLAY}</p>
                </Link>
                */}

                <div className='flex gap-2'>
                  <Link
                    href={BUSINESS_PHONE}
                    className="text-[#0f3460] text-sm font-bold px-3 gap-1 py-2.5 flex"
                    style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.03em' }}
                  >
                    <p>{BUSINESS_PHONE_DISPLAY}</p>
                  </Link>
                  <Link
                    href="/#contact"
                    className="bg-[#0F3460] hover:bg-[#0A2548] text-white text-sm font-bold px-3 gap-1 py-2.5 rounded-lg shadow-md transform transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl flex"
                    style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.03em' }}
                  >
                    <svg _ngcontent-ng-c3131081220="" xmlns="https://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" role="presentation" className="me-1"><path _ngcontent-ng-c3131081220="" fill="white" d="M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"></path></svg>
                    <p>SCHEDULE</p>
                  </Link>
                </div>
                
              </div>

              {/* Desktop nav */}
              <nav className="hidden md:flex items-center">
                
                {NAV_LINKS.map((item) => (
                  item.sublinks ? (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setOpenMenu(item.label)}
                      onMouseLeave={() => setOpenMenu(null)}
                    >
                      <button
                        className="flex items-center uppercase gap-1 text-[#0f3460]/90 hover:text-[#0f3460] text-sm font-bold pl-3 pr-1 py-5 transition-colors whitespace-nowrap"
                        style={{
                          fontFamily: 'var(--font-display)',
                        }}
                      >
                        {item.label}

                        <svg
                          className={`w-3.5 h-3.5 transition-transform ${
                            openMenu === item.label ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>

                      {openMenu === item.label && (
                        <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-xl border border-[#d4dbe6] overflow-hidden z-50 uppercase">
                          {item.sublinks.map((subLink) => (
                            <Link
                              key={subLink.label}
                              href={subLink.href}
                              className="block px-4 py-3 text-sm text-[#0d1b2e] hover:bg-[#eef1f6] hover:text-[#D91F26] transition-colors border-b border-[#eef1f6] last:border-0 whitespace-nowrap"
                              style={{ fontFamily: 'var(--font-display)' }}
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-[#0f3460]/90 hover:text-[#0f3460] text-sm font-bold pl-3 pr-1 py-5 transition-colors uppercase whitespace-nowrap"
                      style={{
                        fontFamily: 'var(--font-display)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </nav>
          </div>

          

          

          <button className="md:hidden text-[#0f3460] p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {mobileOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`
            md:hidden
            overflow-hidden
            bg-[#0f3460]
            border-t border-white/10
            transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              mobileOpen
                ? "max-h-[700px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className={`
              px-6 py-4 flex flex-col gap-1
              transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${mobileOpen ? "translate-y-0" : "-translate-y-4"}
            `}
          >
            <p
              className="text-white/60 text-xs font-bold tracking-widest py-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              SERVICES
            </p>

            {/*CATEGORIES.map((s) => (
              <Link
                key={s.slug}
                href={s.slug}
                className="text-white/80 hover:text-white text-sm py-2 pl-3 border-l-2 border-white/40 hover:border-[#D91F26]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {s.label}
              </Link>
            ))*/}

            <div className="h-px bg-white/10 my-2" />

            {/*NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white/80 hover:text-white font-semibold text-sm py-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '0.05em',
                }}
              >
                {l.label.toUpperCase()}
              </Link>
            ))*/}
            {[
  {
    label: "Air Conditioning",
    sublinks: [
      { label: "AC Repair", href: "/air-conditioning/repair" },
      { label: "AC Installation", href: "/air-conditioning/installation" },
      { label: "AC Maintenance", href: "/air-conditioning/maintenance" },
    ],
  },

  {
    label: "Heating & Furnaces",
    sublinks: [
      { label: "Furnace Repair", href: "/heating/furnace-repair" },
      { label: "Furnace Installation", href: "/heating/furnace-installation" },
      { label: "Furnace Maintenance", href: "/heating/furnace-maintenance" },
      { label: "Heating Repair", href: "/heating/repair" },
      { label: "Heat Pumps", href: "/heating/heat-pumps" },
    ],
  },

  {
    label: "HVAC Services",
    sublinks: [
      {
        label: "Commercial HVAC",
        href: "/hvac-services/commercial-hvac",
      },
      {
        label: "Duct Work",
        href: "/hvac-services/duct-work",
      },
    ],
  },

  {
    label: "About",
    sublinks: [
      {
        label: "Maintenance Plans",
        href: "/maintenance-plans",
      },
      {
        label: "Service Areas",
        href: "/service-areas",
      },
    ],
  },
].map((item) => (
  <div key={item.label}>
    <button
      type="button"
      onClick={() =>
        setMobileDropdown(
          mobileDropdown === item.label ? null : item.label
        )
      }
      className="w-full flex items-center justify-between text-white/80 hover:text-white font-semibold text-sm py-2"
      style={{
        fontFamily: "var(--font-display)",
        letterSpacing: "0.05em",
      }}
    >
      <span>{item.label.toUpperCase()}</span>

      <ChevronDown
        className={`h-4 w-4 transition-transform ${
          mobileDropdown === item.label ? "rotate-180" : ""
        }`}
      />
    </button>

    <div
      className={`overflow-hidden transition-all duration-300 ${
        mobileDropdown === item.label
          ? "max-h-96 opacity-100"
          : "max-h-0 opacity-0"
      }`}
    >
      <div className="ml-4 border-l border-white/15 pl-4 py-1 flex flex-col">
        {item.sublinks.map((sub) => (
          <Link
            key={sub.href}
            href={sub.href}
            onClick={() => setMobileOpen(false)}
            className="text-white/70 hover:text-white text-sm py-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {sub.label}
          </Link>
        ))}
      </div>
    </div>
  </div>
))}

<Link
  href="/#contact"
  onClick={() => setMobileOpen(false)}
  className="text-white/80 hover:text-white font-semibold text-sm py-2"
  style={{
    fontFamily: "var(--font-display)",
    letterSpacing: "0.05em",
  }}
>
  CONTACT
</Link>

            <Link
              href="/#contact"
              className="mt-3 bg-[#D91F26] text-white text-center font-bold px-5 py-3 rounded"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              FREE ESTIMATE
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-[#0a1e38] text-white/60 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className='rounded-xs'>
                <Image 
                  src="/logotest.png"
                  height={10}
                  width={350}
                  alt='logo Repair It Raccoon LLC'
                  className="w-60 md:w-[350px] h-auto p-1"
                /> 
              </div>
                           
            </Link>
            {/* Descriptive sentence written for both human readers and AI answer engines (GEO):
               a clear, self-contained "who/what/where/since when" statement. */}
            <p className="text-sm leading-relaxed">
              Repair It Raccoon LLC is a family-owned, licensed, bonded, and insured heating, ventilation, air conditioning, solar, and home remodeling company serving in Frisco Texas since 2008.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-widest" style={{ fontFamily: 'var(--font-display)' }}>
              SERVICES
            </h4>
            <ul className="space-y-2 text-sm">
              {CATEGORIES.map((s) => (
                <li key={s.slug}>
                    {s.label}
                  <Link href={s.slug} className="hover:text-white transition-colors">
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-widest" style={{ fontFamily: 'var(--font-display)' }}>
              COMPANY
            </h4>
            <ul className="space-y-2 text-sm">
              {/*['About Us', 'Reviews', 'Services', 'Promotions'].map((s) => (
                <li key={s}>
                  <Link href="/#about" className="hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))*/}
              <li>
                  <Link href="/#about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#reviews" className="hover:text-white transition-colors">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#promotions" className="hover:text-white transition-colors">
                    Cupons
                  </Link>
                </li>
                
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-widest" style={{ fontFamily: 'var(--font-display)' }}>
              CONTACT
            </h4>
            <div className="space-y-2 text-sm">
              <p>{BUSINESS_PHONE_DISPLAY}</p>
              <p>{BUSINESS_EMAIL}</p>
              <p>{BUSINESS_SCHEDULE_WEEK}</p>
              <p>{BUSINESS_SCHEDULE_WEEKEND}</p>
              <p className="text-[#e8420a] font-semibold">24/7 Emergency Line</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Repair It Raccoon. All rights reserved. License #VA-4582931.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
