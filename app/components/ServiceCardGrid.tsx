import Link from 'next/link'

export interface ServiceLinkCard {
  title: string
  desc: string
  href: string
}

export function ServiceCardGrid({ items }: { items: ServiceLinkCard[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {items.map((s) => (
        <Link
          key={s.href}
          href={s.href}
          className="bg-white border border-[#d4dbe6] rounded-xl p-7 hover:border-[#0f3460]/40 hover:shadow-lg transition-all group flex flex-col"
        >
          <h3 className="text-xl font-bold text-[#0f3460] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            {s.title}
          </h3>
          <p className="text-[#5a6778] text-sm leading-relaxed flex-1">{s.desc}</p>
          <div className="mt-5 flex items-center gap-2 text-[#e8420a] text-sm font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
            LEARN MORE
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      ))}
    </div>
  )
}
