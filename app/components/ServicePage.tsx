'use client'

import { useState } from 'react'
import Link from 'next/link'
import { faqSchema, breadcrumbSchema, JsonLd } from '@/lib/schema'
import { ServiceCardGrid, type ServiceLinkCard } from './ServiceCardGrid'
import Image from 'next/image'
import { Minus, Plus } from 'lucide-react'

export interface ServicePageProps {
  badge: string
  title: string
  subtitle: string
  heroImg: string
  heroImgAlt: string
  intro: string
  signTitle: string
  signs: string[]
  signTitleDesc: string
  signDescription?: string
  signImg: string
  benefits: { icon: React.ReactNode; title: string; desc: string }[]
  process: { step: string; title: string; desc: string; image: string }[]
  faqs: { q: string; a: string }[]
  relatedLinks: { label: string; href: string }[]
  /** Optional: renders a "explore our X services" card grid linking to
   * sub-service leaf pages (the cluster pages under this pillar page). */
  subServices?: ServiceLinkCard[]
  subServicesHeading?: string
  /** Optional: Home > Category breadcrumb items for BreadcrumbList JSON-LD. */
  breadcrumbItems?: { name: string; url: string }[]
}

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

export function ServicePage({
  badge,
  title,
  subtitle,
  heroImg,
  heroImgAlt,
  intro,
  signTitle,
  signs,
  signTitleDesc,
  signDescription,
  signImg,
  benefits,
  process,
  faqs,
  relatedLinks,
  subServices,
  subServicesHeading = 'Explore Our Services',
  breadcrumbItems,
}: ServicePageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  return (
    <>
      {/* FAQ structured data: lets Google show rich FAQ results and gives
          AI answer engines (ChatGPT, Perplexity, AI Overviews) a clean,
          citable Q&A pair for GEO. */}
      <JsonLd data={faqSchema(faqs)} />
      {/* Breadcrumb structured data: makes the pillar/cluster hierarchy
          (Home > Category > Service) explicit to crawlers and AI answer
          engines, not just visually on the page. */}
      {breadcrumbItems && <JsonLd data={breadcrumbSchema(breadcrumbItems)} />}

      {/* ── HERO ── */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden bg-[#0a1e38]">
        <div className="absolute inset-0 overflow-hidden min-h-[50vh]">
          
          <img
            src={heroImg} alt={heroImgAlt}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#8A8F98]/10 via-[#8A8F98]/10 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 pb-16 pt-15 w-full z-10">
          <nav
            className="flex items-center gap-2 text-[#0a3b8a]/90 text-xs mb-6 bg-white/60 w-fit px-2 py-0.5 shadow-sm"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#0a3b8a] transition-colors">
              HOME
            </Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-[#0a3b8a] transition-colors">
              SERVICES
            </Link>
            <span>/</span>
            <span className="text-[#0a3b8a] font-bold">{badge.toUpperCase()}</span>
          </nav>
          
          {/* H1: single, keyword-forward — the primary on-page SEO signal */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-none mb-4 whitespace-pre-line" style={{ fontFamily: 'var(--font-display)' }}>
            Schedule your {title} Today
          </h1>
          <p className="text-white/90 text-xl max-w-2xl leading-relaxed">{subtitle}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#quote"
              className="bg-[#D91F26] hover:bg-[#b92127] text-white font-bold px-5 py-2.5 rounded-xl transition-colors"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
            >
              GET A FREE ESTIMATE
            </a>
            <a
              href="tel:+17035550192"
              className="border border-white/30 hover:border-white text-white font-semibold px-5 py-2.5 rounded-xl transition-colors flex items-center gap-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.43 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              (703) 555-0192
            </a>
          </div>
        </div>
      </section>

      {/* ── INTRO + QUICK QUOTE ── */}
      <section className="pt-20 bg-[#8A8F98]/15">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2">
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#062A63] mb-5" style={{ fontFamily: 'var(--font-display)' }}>
              Why homeowners choose ProAir HVAC
            </h2>
            <p className="text-[#2C3440] leading-relaxed text-lg">{intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              {['NATE-certified technicians', 'Upfront pricing', 'Satisfaction guarantee', 'Same-day service'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-[#2c3440]">
                  <svg className="w-4 h-4 text-[#f5a623] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div id="quote" className="bg-[#fff] border border-[#d4dbe6] rounded-2xl p-6">
            {sent ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#0f3460] mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                  Message Sent!
                </h3>
                <p className="text-[#2C3440] text-sm">We&apos;ll reach out within the hour.</p>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-bold text-[#0a3b8a] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Get a Free Fast Quote
                </h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                  }}
                  className="space-y-3"
                >
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-[#d4dbe6] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0f3460]"
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-[#d4dbe6] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0f3460]"
                  />
                  <textarea
                    rows={2}
                    placeholder="Tell us about your system..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-[#d4dbe6] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0f3460] resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#D91F26] hover:bg-[#b92127] text-white font-bold py-3 rounded-lg transition-colors text-sm"
                    style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
                  >
                    REQUEST ESTIMATE
                  </button>
                  <p className="text-center text-xs text-[#2C3440]">Response within 1 hour</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-20 bg-[#8A8F98]/15">
        <div className="max-w-screen-xl w-full px-10 md:px-20 mx-auto flex flex-col md:grid md:grid-cols-11 gap-10 md:gap-16">

          {/* Imagen */}
          <div className="col-span-4 w-full aspect-square min-w-0 rounded-xl overflow-hidden">
            <img
              src={signImg}
              alt="benefits image"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Contenido */}
          <div className="col-span-7 min-w-0 text-[#2C3440]">

            <p
              className="text-[#e31e24] text-xs font-bold tracking-widest mb-4 bg-white w-fit max-w-full px-2 py-0.5 shadow-sm uppercase"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Know the Signs
            </p>

            <h2
              className="text-3xl md:text-4xl font-bold text-[#062A63] mb-5 break-words"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {signTitle}:
            </h2>

            <ul className="py-3 pl-5 text-[#2C3440] flex flex-col gap-1.5 text-lg min-w-0">
              {signs?.map((s) => (
                <li key={s} className="break-words">
                  {s}
                </li>
              ))}
            </ul>

            <p className="text-lg text-[#2C3440] font-semibold py-2 break-words">
              {signTitleDesc}
            </p>

            <p className="break-words">
              {signDescription}
            </p>

            {/* Benefits */}
            <div className="flex gap-3 mt-5 flex-wrap min-w-0">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="bg-white border border-[#d4dbe6] rounded-xl py-1.5 px-2 flex gap-3 max-w-full min-w-0 group hover:border-[#0f3460]/40 hover:shadow-md transition-all"
                >
                  <p
                    className="text-[#0a3b8a] font-bold text-sm px-3 py-1 rounded-full break-words whitespace-normal"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {b.title}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── SUB-SERVICES (cluster pages under this pillar) ── */}
      {subServices && subServices.length > 0 && (
        <section className="py-20 bg-white border-t border-[#d4dbe6]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[#e31e24] text-xs font-bold tracking-widest mb-4 bg-white w-fit px-2 py-0.5 shadow-sm uppercase" style={{ fontFamily: 'var(--font-display)' }}>
                {badge.toUpperCase()} SERVICES
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f3460]" style={{ fontFamily: 'var(--font-display)' }}>
                {subServicesHeading}
              </h2>
            </div>
            <ServiceCardGrid items={subServices} />
          </div>
        </section>
      )}

      {/* ── PROCESS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-12">
            <p className="text-[#e31e24] text-xs font-bold tracking-widest mb-4 bg-white w-fit px-2 py-0.5 shadow-sm uppercase" style={{ fontFamily: 'var(--font-display)' }}>
              HOW WE WORK
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f3460] text-left" style={{ fontFamily: 'var(--font-display)' }}>
              Our Process
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4 max-w-screen-xl px-10">
            {process.map((p) => (
              
              <div key={p.step} className="relative flex flex-col items-center bg-center bg-cover py-19 rounded-xl bg-[#0a1e38] opacity-90" style={{
                backgroundImage: `url(${p.image})`,
                minHeight: "300px",
              }}>
                <div className="absolute inset-0 bg-linear-to-t from-[#0a1e38]/90 via-[#0a1e38]/60 to-transparent rounded-xl" />
                {/*i < process.length - 1 && 
                <div className="hidden md:block absolute top-6 left-[60%] w-full h-px bg-[#f5a623]/70"/>*/}
                
                <h4 className='text-white z-5 text-3xl font-bold text-shadow-black/10 text-shadow-sm'>0{p.step}</h4>
                <h3 className="text-white font-bold text-base mb-2 z-2 text-shadow-black/10 text-shadow-sm" style={{ fontFamily: 'var(--font-display)' }}>
                  {p.title}
                </h3>
                <p className="text-white/90 px-4 text-base leading-relaxed text-center z-2">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <StarRating count={5} />
          <blockquote className="mt-4 text-xl md:text-2xl font-medium text-[#0a3b8a] leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
            &ldquo;ProAir showed up the same day I called. The technician was professional, explained everything
            clearly, and the price matched the quote exactly. Highly recommended.&rdquo;
          </blockquote>
          <p className="mt-4 text-[#2C3440] text-sm">— Maria Rodriguez, Fairfax, VA</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-[#8A8F98]/15">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#e31e24] text-xs font-bold tracking-widest mb-4 bg-white w-fit px-2 py-0.5 shadow-sm uppercase mx-auto" style={{ fontFamily: 'var(--font-display)' }}>
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f3460]" style={{ fontFamily: 'var(--font-display)' }}>
              Quick answers
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-[#d4dbe6] rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-[#0a3b8a] text-lg pr-4" style={{ fontFamily: 'var(--font-display)' }}>
                    {faq.q}
                  </span>
                  {openFaq === i ? 
                    <Minus width={50} height={20} className='text-[#0a3b8a]'/>  
                    :
                    <Plus width={50} height={20} className='text-[#0a3b8a]'/>
                  }
                  
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-[#2C3440] text-base leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section className="py-12 bg-[#8A8F98]/15">
        <div className="max-w-7xl mx-auto px-10">
          <p className="text-[#2C3440] text-base font-bold tracking-widest mb-5" style={{ fontFamily: 'var(--font-display)' }}>
            OTHER SERVICES
          </p>
          <div className="flex flex-wrap gap-3">
            {relatedLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex items-center gap-2 border border-[#d4dbe6] hover:border-[#0a3b8a] text-[#0a3b8a] text-sm font-semibold px-5 py-2.5 rounded-full transition-colors group bg-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {l.label}
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-16 bg-[#D91F26]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to schedule your service?
          </h2>
          <p className="text-white/80 mb-8">Guaranteed response within one hour during business hours. 24/7 emergency service.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#quote"
              className="bg-white text-[#D91F26] font-bold px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
            >
              FREE ESTIMATE
            </a>
            <a href="tel:+17035550192" className="border-2 border-white text-white font-bold px-5 py-2.5 rounded-xl hover:bg-white/10 transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
              CALL NOW
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
