'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { faqSchema, JsonLd } from '@/lib/schema'

export interface ServicePageProps {
  badge: string
  title: string
  subtitle: string
  heroImg: string
  heroImgAlt: string
  intro: string
  benefits: { icon: React.ReactNode; title: string; desc: string }[]
  process: { step: string; title: string; desc: string }[]
  faqs: { q: string; a: string }[]
  relatedLinks: { label: string; href: string }[]
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
  benefits,
  process,
  faqs,
  relatedLinks,
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

      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-end bg-[#0a1e38] overflow-hidden">
        <img
          src={heroImg}
          width={500}
          height={500}
          alt={heroImgAlt}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        {/*<img src={heroImg} alt={heroImgAlt} className="absolute inset-0 w-full h-full object-cover opacity-35" />*/}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e38] via-[#0a1e38]/60 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 pb-16 pt-32 w-full">
          <nav
            className="flex items-center gap-2 text-white/50 text-xs mb-6"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">
              HOME
            </Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-white transition-colors">
              SERVICES
            </Link>
            <span>/</span>
            <span className="text-[#e8420a]">{badge.toUpperCase()}</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 bg-[#e8420a]/20 border border-[#e8420a]/40 text-[#f97c56] text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="w-1.5 h-1.5 bg-[#e8420a] rounded-full" />
            {badge}
          </div>
          {/* H1: single, keyword-forward — the primary on-page SEO signal */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-none mb-4 whitespace-pre-line" style={{ fontFamily: 'var(--font-display)' }}>
            {title}
          </h1>
          <p className="text-white/70 text-xl max-w-2xl leading-relaxed">{subtitle}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#quote"
              className="bg-[#e8420a] hover:bg-[#cf3508] text-white font-bold px-7 py-3.5 rounded transition-colors"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
            >
              GET A FREE ESTIMATE
            </a>
            <a
              href="tel:+17035550192"
              className="border border-white/30 hover:border-white text-white font-semibold px-7 py-3.5 rounded transition-colors flex items-center gap-2"
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
      <section className="pt-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <p className="text-[#e8420a] text-xs font-bold tracking-widest mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              SERVICE OVERVIEW
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f3460] mb-5" style={{ fontFamily: 'var(--font-display)' }}>
              Why homeowners choose HVAC Innovation
            </h2>
            <p className="text-[#2C3440] leading-relaxed text-base">{intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              {['NATE-certified technicians', 'Upfront pricing', 'Satisfaction guarantee', 'Same-day service'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-[#0d1b2e]">
                  <svg className="w-4 h-4 text-[#e8420a] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

          <div id="quote" className="bg-[#f8f9fc] border border-[#d4dbe6] rounded-2xl p-6">
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
                <h3 className="text-lg font-bold text-[#0f3460] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
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
                    className="w-full bg-[#e8420a] hover:bg-[#cf3508] text-white font-bold py-3 rounded-lg transition-colors text-sm"
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
      <section className="py-20 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#e8420a] text-xs font-bold tracking-widest mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              WHAT&apos;S INCLUDED
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f3460]" style={{ fontFamily: 'var(--font-display)' }}>
              Everything you need, in one place
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white border border-[#d4dbe6] rounded-xl p-6 flex gap-4 group hover:border-[#0f3460]/40 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-[#eef1f6] group-hover:bg-[#0f3460] rounded-xl flex items-center justify-center flex-shrink-0 text-[#0f3460] group-hover:text-white transition-colors">
                  {b.icon}
                </div>
                <div>
                  <h3 className="text-[#0f3460] font-bold text-base mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                    {b.title}
                  </h3>
                  <p className="text-[#2C3440] text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 bg-[#0f3460]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#e8420a] text-xs font-bold tracking-widest mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              HOW WE WORK
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Our Process
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={p.step} className="relative">
                {i < process.length - 1 && <div className="hidden md:block absolute top-6 left-[60%] w-full h-px bg-white/20" />}
                <div
                  className="w-12 h-12 bg-[#e8420a] rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 relative z-10"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {p.step}
                </div>
                <h3 className="text-white font-bold text-base mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {p.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-16 bg-white border-y border-[#d4dbe6]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <StarRating count={5} />
          <blockquote className="mt-4 text-xl md:text-2xl font-medium text-[#0f3460] leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
            &ldquo;HVAC Innovation showed up the same day I called. The technician was professional, explained everything
            clearly, and the price matched the quote exactly. Highly recommended.&rdquo;
          </blockquote>
          <p className="mt-4 text-[#2C3440] text-sm">— Maria Rodriguez, Fairfax, VA</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-[#f8f9fc]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#e8420a] text-xs font-bold tracking-widest mb-3" style={{ fontFamily: 'var(--font-display)' }}>
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
                  <span className="font-semibold text-[#0f3460] text-sm pr-4" style={{ fontFamily: 'var(--font-display)' }}>
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#e8420a] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-[#2C3440] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section className="py-12 bg-white border-t border-[#d4dbe6]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#2C3440] text-xs font-bold tracking-widest mb-5" style={{ fontFamily: 'var(--font-display)' }}>
            OTHER SERVICES
          </p>
          <div className="flex flex-wrap gap-3">
            {relatedLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex items-center gap-2 border border-[#d4dbe6] hover:border-[#0f3460] text-[#0f3460] text-sm font-semibold px-5 py-2.5 rounded-full transition-colors group"
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
      <section className="py-16 bg-[#e8420a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to schedule your service?
          </h2>
          <p className="text-white/80 mb-8">Guaranteed response within one hour during business hours. 24/7 emergency service.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#quote"
              className="bg-white text-[#e8420a] font-bold px-8 py-4 rounded hover:bg-white/90 transition-colors"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
            >
              FREE ESTIMATE
            </a>
            <a href={"tel:+17035550192"} className="border-2 border-white text-white font-bold px-8 py-4 rounded hover:bg-white/10 transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
              CALL NOW
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
