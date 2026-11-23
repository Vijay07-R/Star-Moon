import { CalendarCheck, Phone } from 'lucide-react'
import { siteInfo } from '../../data/site'
import { ButtonLink } from '../ui/Button'

interface CtaBannerProps {
  title?: string
  description?: string
  background?: 'cream' | 'white'
}

export default function CtaBanner({
  title = 'Ready for Your Beauty Makeover?',
  description = 'Book your appointment today and let our experts take care of you. Walk-ins welcome, but appointments are recommended.',
  background = 'cream',
}: CtaBannerProps) {
  return (
    <section className={`section ${background === 'white' ? 'bg-white' : 'bg-cream'}`}>
      <div className="container-page">
        <div className="relative overflow-hidden rounded-2xl bg-burgundy">
          <div className="relative flex flex-col items-center gap-6 px-6 py-14 text-center md:px-16 md:py-16">
            <p className="text-xs font-semibold tracking-[0.25em] text-beige uppercase">Book an Appointment</p>
            <h2 className="max-w-2xl text-3xl font-semibold text-white md:text-4xl">{title}</h2>
            <p className="max-w-xl text-white/80">{description}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact#appointment" variant="beige" size="lg">
                <CalendarCheck className="h-5 w-5" aria-hidden /> Book Appointment
              </ButtonLink>
              <a
                href={siteInfo.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/70 px-8 py-3.5 font-medium text-white transition-colors hover:bg-white hover:text-burgundy"
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
