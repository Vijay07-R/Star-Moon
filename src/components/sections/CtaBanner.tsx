import { CalendarCheck, Phone } from 'lucide-react'
import { img } from '../../data/images'
import { siteInfo } from '../../data/site'
import { ButtonLink } from '../ui/Button'

interface CtaBannerProps {
  title?: string
  description?: string
  background?: 'ivory' | 'white'
}

export default function CtaBanner({
  title = 'Ready for Your Beauty Makeover?',
  description = 'Book your appointment today and let our experts take care of you. Walk-ins welcome, but appointments are recommended.',
  background = 'ivory',
}: CtaBannerProps) {
  return (
    <section className={`section ${background === 'white' ? 'bg-white' : 'bg-ivory'}`}>
      <div className="container-page">
        <div className="relative overflow-hidden rounded-2xl bg-emerald-deep">
          <img
            src={img('1560066984-138dadb4c035', 1600)}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-15"
          />
          <div className="relative flex flex-col items-center gap-6 px-6 py-14 text-center md:px-16 md:py-16">
            <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">Book an Appointment</p>
            <h2 className="max-w-2xl text-3xl font-semibold text-white md:text-4xl">{title}</h2>
            <p className="max-w-xl text-white/80">{description}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact#appointment" variant="gold" size="lg">
                <CalendarCheck className="h-5 w-5" aria-hidden /> Book Appointment
              </ButtonLink>
              <a
                href={siteInfo.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/70 px-8 py-3.5 font-medium text-white transition-colors hover:bg-white hover:text-emerald-deep"
              >
                <Phone className="h-5 w-5" aria-hidden /> Call {siteInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
