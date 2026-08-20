import Link from 'next/link'
import { CATEGORIES, type CategoryNavItem } from '@/lib/navigation'

export function CategoryHub({ category }: { category: CategoryNavItem }) {
  const otherCategories = CATEGORIES.filter((c) => c.slug !== category.slug)
  return (
    <>
      <section className="bg-[#0f3460] py-20">
        <div className="max-w-7xl md:grid md:grid-cols-10 md:gap-4 mx-auto px-6 items-center">
          <div className='grid col-span-7'>
            <nav
              className="flex items-center gap-2 text-[#0a3b8a]/90 text-xs mb-6 bg-white/60 w-fit px-2 py-0.5 shadow-sm"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-[#0a3b8a] transition-colors">
                HOME
              </Link>
              <span>/</span>
              <span className="text-[#0a3b8a] font-bold">{category.label.toUpperCase()}</span>
            </nav>
            {/*<nav
              className="flex items-center gap-2 text-white/50 text-xs mb-6"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-white transition-colors">
                HOME
              </Link>
              <span>/</span>
              <span className="text-[#D91F26]">{category.label.toUpperCase()}</span>
            </nav>*/}

            {/* Single H1 per category page — the primary keyword this page should rank for */}
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              {category.label}
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-3xl leading-relaxed">{category.heroIntro}</p>
          </div>

          <div className="col-span-3 flex flex-wrap gap-4 mt-8">
            <a
              href="#contact"
              className="bg-[#D91F26] hover:bg-[#cf3508] rounded-xl text-white font-bold px-5 py-2.5 transition-colors whitespace-nowrap"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
            >
              GET A FREE ESTIMATE
            </a>
            <a
              href="tel:+17035550192"
              className="border border-white/30 hover:border-white text-white font-semibold px-5 py-2.5 rounded-xl transition-colors"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              (703) 555-0192
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      {category.services.length !== 0 &&
      
      <section className="py-20 bg-[#8A8F98]/15">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#E31E24] text-xs font-bold tracking-widest mb-3 bg-white w-fit px-2 py-0.5 shadow-sm mx-auto" style={{ fontFamily: 'var(--font-display)' }}>
              {category.label.toUpperCase()} SERVICES
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f3460]" style={{ fontFamily: 'var(--font-display)' }}>
              Choose the service you need
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {category.services.map((s) => (
              <Link
                key={s.slug}
                href={`/${category.slug}/${s.slug}`}
                className="bg-white border border-[#d4dbe6] rounded-xl p-7 hover:border-[#0f3460]/40 hover:shadow-lg transition-all group flex flex-col"
              >
                <h3 className="text-xl font-bold text-[#0a3b8a] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {s.label}
                </h3>
                <p className="text-[#2C3440] text-base leading-relaxed flex-1">{s.cardBlurb}</p>
                <div className="mt-5 flex items-center gap-2 text-[#E31E24] text-sm font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                  LEARN MORE
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      }
      

      {/* ── OTHER CATEGORIES ── */}
      <section className="py-12 bg-[#8A8F98]/15">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#2C3440] text-base font-bold tracking-widest mb-5" style={{ fontFamily: 'var(--font-display)' }}>
            EXPLORE OTHER SERVICES
          </p>
          <div className="flex flex-wrap gap-3">
            {otherCategories.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="inline-flex items-center gap-2 border border-[#d4dbe6] hover:border-[#0a3b8a] text-[#0a3b8a] text-sm font-semibold px-5 py-2.5 rounded-full transition-colors bg-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {c.label}
              </Link>
            ))}
            <Link
              href="/promotions"
              className="inline-flex items-center gap-2 border border-[#d4dbe6] hover:border-[#0a3b8a] text-[#0a3b8a] text-sm font-semibold px-5 py-2.5 rounded-full transition-colors bg-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Current Coupons &amp; Specials
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
