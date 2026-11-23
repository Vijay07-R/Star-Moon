import { Calendar, Mail, MapPin, Phone } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import AppointmentForm from '../components/forms/AppointmentForm'
import { siteInfo } from '../data/site'

const contactCards = [
  { 
    icon: MapPin, 
    title: 'Visit Our Salon', 
    info: siteInfo.address,
    action: 'Get Directions',
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteInfo.mapQuery)}` 
  },
  { 
    icon: Phone, 
    title: 'Call Us', 
    info: siteInfo.phone,
    action: 'Call Now',
    href: siteInfo.phoneHref 
  },
  { 
    icon: Mail, 
    title: 'Email Us', 
    info: siteInfo.email,
    action: 'Send Email',
    href: `mailto:${siteInfo.email}` 
  },
]

export default function ContactPage() {
  const [params] = useSearchParams()
  
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-burgundy to-burgundy-dark overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3MnYxNkgzNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        <div className="container-page relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white sm:text-6xl">Contact Us</h1>
            <p className="mt-4 text-xl text-white/90">We'd love to hear from you</p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="section bg-gradient-to-b from-white to-cream">
        <div className="container-page">
          <div className="grid gap-8 md:grid-cols-3">
            {contactCards.map(({ icon: Icon, title, info, action, href }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="p-8 text-center">
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-burgundy to-burgundy-dark mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-10 w-10 text-beige" aria-hidden />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{title}</h2>
                  <p className="text-espresso/75 leading-relaxed mb-6 min-h-[3rem]">{info}</p>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 rounded-lg border-2 border-burgundy px-6 py-3 font-semibold text-burgundy transition-all hover:bg-burgundy hover:text-white"
                  >
                    {action}
                  </a>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-beige via-beige-light to-beige" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold tracking-[0.25em] text-beige uppercase">Location</span>
              <div className="h-1 w-16 bg-beige mt-2 rounded-full mx-auto mb-6" />
              <h2 className="text-4xl font-bold">Find Us On Map</h2>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-2xl border-4 border-beige/20">
              <iframe
                title="Star Moon Beauty Salon location map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(siteInfo.mapQuery)}&z=15&output=embed`}
                className="h-[450px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-6 text-center">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteInfo.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-burgundy hover:text-beige transition-colors font-semibold"
              >
                <MapPin className="h-5 w-5" aria-hidden />
                {siteInfo.address}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking */}
      <section id="appointment" className="section scroll-mt-24 bg-gradient-to-b from-cream to-blush/30">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold tracking-[0.25em] text-beige uppercase">Book Appointment</span>
              <div className="h-1 w-16 bg-beige mt-2 rounded-full mx-auto mb-6" />
              <h2 className="text-4xl font-bold lg:text-5xl">Schedule Your Visit</h2>
              <p className="mt-4 text-lg text-espresso/75">Fill in your details and we'll call you to confirm your slot</p>
            </div>
            <div className="rounded-3xl bg-white p-8 md:p-12 shadow-2xl border-2 border-beige/20">
              <div className="flex items-start gap-4 mb-8 p-5 rounded-xl bg-gradient-to-br from-blush to-cream border-l-4 border-beige">
                <Calendar className="h-6 w-6 text-beige shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-burgundy mb-1">Appointment Confirmation</p>
                  <p className="text-sm text-espresso/75">
                    We'll contact you within 1 hour to confirm your preferred date and time slot
                  </p>
                </div>
              </div>
              <AppointmentForm key={params.get('service') ?? 'none'} />
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold tracking-[0.25em] text-beige uppercase">Visit Us</span>
              <div className="h-1 w-16 bg-beige mt-2 rounded-full mx-auto mb-6" />
              <h2 className="text-4xl font-bold">Business Hours</h2>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-burgundy to-burgundy-dark p-8 md:p-10 shadow-2xl">
              <ul className="divide-y divide-white/10 space-y-6">
                {siteInfo.hours.map((h, index) => (
                  <li key={h.days} className={`flex justify-between gap-4 ${index === 0 ? '' : 'pt-6'}`}>
                    <span className="text-lg font-semibold text-white">{h.days}</span>
                    <span className="text-lg font-bold text-beige">{h.time}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-white/20 text-center">
                <p className="text-white/90 mb-4">Walk-ins welcome, but appointments are recommended</p>
                <a
                  href={siteInfo.phoneHref}
                  className="inline-flex items-center gap-2 rounded-lg bg-beige px-8 py-3 font-bold text-burgundy transition-all hover:bg-beige-light hover:scale-105"
                >
                  <Phone className="h-5 w-5" aria-hidden />
                  Call {siteInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
