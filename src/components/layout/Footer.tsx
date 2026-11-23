import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../../data/services'
import { navItems, siteInfo } from '../../data/site'
import Logo from '../ui/Logo'
import SocialIcons from '../ui/SocialIcons'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-espresso text-white/75">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-16">
        <div>
          <Logo />
          <p className="mt-5 text-sm leading-relaxed">
            A premium women&apos;s beauty salon offering expert hair, skin, makeup, nail and spa services in a calm, hygienic and
            welcoming space.
          </p>
          <div className="mt-6">
            <SocialIcons />
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-serif text-lg text-white">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="hover:text-beige">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-serif text-lg text-white">Our Services</h3>
          <ul className="space-y-2.5 text-sm">
            {services.slice(0, 7).map((s) => (
              <li key={s.id}>
                <Link to={`/services?category=${s.category}`} className="hover:text-beige">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-serif text-lg text-white">Visit Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-beige" aria-hidden />
              <span>{siteInfo.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-beige" aria-hidden />
              <a href={siteInfo.phoneHref} className="hover:text-beige">
                {siteInfo.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-beige" aria-hidden />
              <a href={`mailto:${siteInfo.email}`} className="break-all hover:text-beige">
                {siteInfo.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-beige" aria-hidden />
              <span>
                {siteInfo.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-center text-xs sm:flex-row sm:text-left">
          <p>© {year} Star Moon Beauty Salon. All rights reserved.</p>
          <p>
            <Link to="/contact#appointment" className="text-beige hover:underline">
              Book your appointment today
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
