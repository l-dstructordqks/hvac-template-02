import Link from 'next/link'
import Image from 'next/image'
import { SERVICE_AREA_CITIES } from '@/lib/schema'

type Props = {
  intro?: string
}

export default function ServiceAreas({
  intro = '',
}: Props) {
  return (
    <>
    <section className="bg-[#0f3460] py-15" id="service-areas">
      <div className="max-w-7xl mx-auto px-6">
        <div className="md:grid md:grid-cols-10 md:gap-8 items-center">
          <div className="col-span-7">
            <h2
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Service Areas
            </h2>

            <p className="text-white/70 text-lg md:text-xl max-w-3xl leading-relaxed">
              {intro}
            </p>
          </div>

          <div className="col-span-3 flex flex-wrap gap-4 mt-8 md:mt-0">
            <a
              href="#contact"
              className="bg-[#D91F26] hover:bg-[#cf3508] rounded-xl text-white font-bold px-5 py-2.5 transition-colors whitespace-nowrap"
              style={{
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.04em',
              }}
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
        </div>
      
    </section>
    <section className='py-15 bg-[#8A8F98]/15'>
      <div className='grid mt-14 mx-auto grid-cols-10 max-w-screen-lg gap-15 items-start'>
        <div className="bg-[url('/images/map.webp')] col-span-4 h-auto bg-cover bg-center aspect-square rounded-xl shadow-lg">

        </div>


        <div className="col-span-6 flex flex-wrap gap-3">
          <p className='text-[#2C3440] text-base mb-10'><span className='font-semibold text-lg'>Repair It Raccoon provides top-quality HVAC solutions throughout North Dallas and surrounding communities.</span> <br /> Specializing in heating and cooling systems, our experienced team delivers reliable installation, repair, and maintenance services to keep your home or business comfortable and energy-efficient year-round. Trust ASAP HVAC for all your residential and commercial HVAC needs.</p>
          {SERVICE_AREA_CITIES.map((city) => (
            <div
              key={city}
              className="rounded-xl border bg-white border-white/10 px-2.5 py-1.5 text-[#0a3b8a] hover:shadow-xs transition-colors w-fit h-fit"
            >
              {city}
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}