'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { BUSINESS_EMAIL, BUSINESS_PHONE, BUSINESS_PHONE_DISPLAY, BUSINESS_SCHEDULE_WEEK, BUSINESS_SCHEDULE_WEEKEND } from '@/lib/schema'
import { CATEGORIES } from '@/lib/navigation'

const NAV_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Contact', href: '/#contact' },
]
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
      {/* ── TOP BAR ── */}
      <div
        className="bg-[#0f3460] text-white text-xs py-2 px-6 text-center font-medium"
        style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
      >
        <span className='text-[#f5a623]'>🔥 24/7 EMERGENCY SERVICE · {BUSINESS_PHONE_DISPLAY}</span> · Serving the Washington Metro Area
      </div>

      {/* ── NAV ── */}
      <header
        className={`sticky top-0 z-50 transition-shadow ${scrolled ? 'shadow-lg' : ''} bg-[#0f3460]/97 bg-white backdrop-blur-sm border-b border-white/10 py-1 ${mobileOpen && 'pb-0'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/logotest.png"
              height={10}
              width={350}
              alt='logo HVAC Innovation LLC'
              className="w-60 md:w-[350px] h-auto"
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

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 text-[#0f3460]/90 hover:text-[#0f3460] text-sm font-medium px-4 py-5 transition-colors"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
              >
                SERVICES
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-xl border border-[#d4dbe6] overflow-hidden">
                  {CATEGORIES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${s.slug}`}
                      className="block px-5 py-3 text-sm text-[#0d1b2e] hover:bg-[#eef1f6] hover:text-[#D91F26] transition-colors border-b border-[#eef1f6] last:border-0"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[#0f3460]/80 hover:text-[#0f3460] text-sm font-medium px-4 py-5 transition-colors"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
              >
                {l.label.toUpperCase()}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            {/*
            <Link
              href={BUSINESS_PHONE}
              className="bg-[#D91F26] hover:bg-[#b92127] text-white text-sm font-bold px-3 gap-1 py-2.5 rounded shadow-md transform transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl flex"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.03em' }}
            >
              
              <p>{BUSINESS_PHONE_DISPLAY}</p>
            </Link>
            */}
            <Link
              href="/#contact"
              className="bg-[#0F3460] hover:bg-[#0A2548] text-white text-sm font-bold px-3 gap-1 py-2.5 rounded shadow-md transform transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl flex"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.03em' }}
            >
              <svg _ngcontent-ng-c3131081220="" xmlns="https://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" role="presentation" className="me-1"><path _ngcontent-ng-c3131081220="" fill="white" d="M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"></path></svg>
              <p>SCHEDULE</p>
            </Link>
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

            {CATEGORIES.map((s) => (
              <Link
                key={s.slug}
                href={s.slug}
                className="text-white/80 hover:text-white text-sm py-2 pl-3 border-l-2 border-white/40 hover:border-[#D91F26]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {s.label}
              </Link>
            ))}

            <div className="h-px bg-white/10 my-2" />

            {NAV_LINKS.map((l) => (
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
            ))}

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
              <div className='bg-white rounded-xs'>
                <Image 
                  src="/logotest.png"
                  height={10}
                  width={350}
                  alt='logo HVAC Innovation LLC'
                  className="w-60 md:w-[350px] h-auto p-1"
                /> 
              </div>
                           
            </Link>
            {/* Descriptive sentence written for both human readers and AI answer engines (GEO):
               a clear, self-contained "who/what/where/since when" statement. */}
            <p className="text-sm leading-relaxed">
              HVAC Innovation LLC is a family-owned, licensed, bonded, and insured heating, ventilation, air conditioning, solar, and home remodeling company serving the Washington Metro Area since 2004.
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
          <p>© {new Date().getFullYear()} HVAC Innovation. All rights reserved. License #VA-4582931.</p>
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
