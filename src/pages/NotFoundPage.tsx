import { MoonStar } from 'lucide-react'
import { ButtonLink } from '../components/ui/Button'

export default function NotFoundPage() {
  return (
    <section className="section bg-ivory">
      <div className="container-page flex flex-col items-center text-center">
        <MoonStar className="h-14 w-14 text-gold" aria-hidden />
        <h1 className="mt-6 text-4xl font-semibold md:text-5xl">Page Not Found</h1>
        <p className="mt-4 max-w-md text-forest/70">The page you are looking for does not exist or has been moved.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/">Back to Home</ButtonLink>
          <ButtonLink to="/services" variant="outline">
            Explore Services
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
