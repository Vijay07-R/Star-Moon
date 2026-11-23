import { useState } from 'react'
import { CalendarCheck, Menu, X } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'
import { navItems } from '../../data/site'
import { ButtonLink } from '../ui/Button'
import Logo from '../ui/Logo'

export default function Header() {
  const { pathname } = useLocation()
  // The menu is tied to the page it was opened on, so it closes automatically on navigation.
  const [openOn, setOpenOn] = useState<string | null>(null)
  const open = openOn === pathname

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative py-2 text-[15px] font-medium transition-colors ${
      isActive ? 'text-beige after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-beige' : 'text-white/85 hover:text-beige'
    }`

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Main navigation */}
      <div className="border-b border-beige/20 bg-burgundy">
        <div className="container-page flex h-[72px] items-center justify-between gap-4">
          <Logo />

          <nav aria-label="Main navigation" className="hidden items-center gap-6 xl:flex">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} end={item.path === '/'} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Wrapper does the hiding: ButtonLink's own inline-flex would override `hidden` */}
            <div className="hidden sm:block">
              <ButtonLink to="/contact#appointment" variant="beige" size="sm">
                <CalendarCheck className="h-4 w-4" aria-hidden />
                Book Appointment
              </ButtonLink>
            </div>
            <button
              type="button"
              onClick={() => setOpenOn(open ? null : pathname)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="rounded-md p-2 text-white hover:bg-white/10 xl:hidden"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav id="mobile-menu" aria-label="Mobile navigation" className="border-t border-white/10 bg-burgundy xl:hidden">
            <div className="container-page flex flex-col py-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `border-b border-white/5 py-3 text-base font-medium ${isActive ? 'text-beige' : 'text-white/90 hover:text-beige'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <ButtonLink to="/contact#appointment" variant="beige" className="mt-4 mb-2 sm:hidden">
                <CalendarCheck className="h-4 w-4" aria-hidden />
                Book Appointment
              </ButtonLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
