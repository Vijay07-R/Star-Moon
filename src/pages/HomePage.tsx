import { ArrowRight, Award, CalendarCheck, Check, GraduationCap, Sparkles } from 'lucide-react'
import CtaBanner from '../components/sections/CtaBanner'
import GalleryGrid from '../components/sections/GalleryGrid'
import ServiceGrid from '../components/sections/ServiceGrid'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import { ButtonLink } from '../components/ui/Button'
import SmartImage from '../components/ui/SmartImage'
import { galleryImages } from '../data/gallery'
import { img } from '../data/images'
import { services } from '../data/services'
import { stats } from '../data/team'

const featuredServices = services.filter((s) =>
  ['hair-styling', 'facial-skin-care', 'bridal-makeup', 'manicure-pedicure', 'spa-treatments', 'hair-treatments'].includes(s.id),
)
const galleryPreview = [1, 3, 4, 2, 5, 7].map((id) => galleryImages.find((g) => g.id === id)!)

const academyHighlights = [
  { icon: Award, title: 'Industry-Recognized Certification', text: 'Get certified and boost your career' },
  { icon: GraduationCap, title: 'Expert Trainers', text: '10+ years of salon experience' },
  { icon: Check, title: 'Placement Assistance', text: 'Job support after completion' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream via-cream to-blush">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwNjRlM2IiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDEzNGg3MnYxNkgzNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
        <div className="container-page relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-16 lg:py-32">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-beige/60 bg-white px-5 py-2 shadow-sm">
              <Sparkles className="h-4 w-4 text-beige" aria-hidden />
              <span className="text-xs font-bold tracking-[0.2em] text-burgundy uppercase">Premium Women's Salon</span>
            </div>
            <h1 className="mt-8 text-5xl leading-[1.1] font-bold sm:text-6xl lg:text-7xl">
              Your Beauty, <span className="text-burgundy italic block mt-2">Our Passion</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-espresso/80 mx-auto lg:mx-0">
              Expert stylists, premium products and a luxurious atmosphere dedicated to bringing out your natural radiance. From everyday care to your wedding day.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <ButtonLink to="/contact#appointment" size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                <CalendarCheck className="h-5 w-5" aria-hidden /> Book Appointment
              </ButtonLink>
              <ButtonLink to="/services" variant="outline" size="lg" className="border-2">
                Explore Services <ArrowRight className="h-5 w-5" aria-hidden />
              </ButtonLink>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-8 justify-center lg:justify-start">
              <div className="text-center">
                <p className="font-serif text-4xl font-bold text-burgundy">12+</p>
                <p className="text-sm text-espresso/70 mt-1">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-4xl font-bold text-burgundy">500+</p>
                <p className="text-sm text-espresso/70 mt-1">Students Trained</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-4xl font-bold text-burgundy">15K+</p>
                <p className="text-sm text-espresso/70 mt-1">Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="absolute -top-6 -right-6 h-full w-full rounded-3xl border-4 border-beige/40 hidden sm:block" aria-hidden />
            <div className="absolute -bottom-6 -left-6 h-full w-full rounded-3xl bg-burgundy/10 hidden sm:block" aria-hidden />
            <SmartImage
              src={img('1487412947147-5cebf100ffc2', 1100, 1300)}
              alt="Beauty model with flawless professional makeup"
              loading="eager"
              className="relative aspect-[5/6] w-full rounded-3xl object-cover shadow-2xl ring-4 ring-white"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="grid grid-cols-2 gap-4">
            <SmartImage 
              src={img('1560066984-138dadb4c035', 700, 900)} 
              alt="Star Moon salon interior" 
              className="aspect-[3/4] w-full rounded-2xl object-cover shadow-lg hover:shadow-xl transition-shadow" 
            />
            <SmartImage 
              src={img('1522337360788-8b13dee7a37e', 700, 900)} 
              alt="Stylist styling a client's hair" 
              className="mt-10 aspect-[3/4] w-full rounded-2xl object-cover shadow-lg hover:shadow-xl transition-shadow" 
            />
          </div>
          <div>
            <div className="inline-block">
              <span className="text-xs font-bold tracking-[0.25em] text-beige uppercase">About Star Moon</span>
              <div className="h-1 w-16 bg-beige mt-2 rounded-full" />
            </div>
            <h2 className="mt-6 text-4xl font-bold lg:text-5xl">A Sanctuary of Beauty & Self-Care</h2>
            <p className="mt-6 leading-relaxed text-espresso/80 text-lg">
              Founded in 2014, Star Moon Beauty Salon was created with one simple belief: every woman deserves to feel confident,
              cared for and beautiful. Our team of certified stylists, makeup artists and therapists brings skill and warmth to every
              appointment.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {['Certified beauty professionals', 'Premium, skin-safe products', 'Hygienic, women-only space', 'Personalised consultations'].map(
                (item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px]">
                    <Check className="h-5 w-5 text-beige shrink-0 mt-0.5" aria-hidden /> 
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 border-t border-espresso/10 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-3xl font-bold text-burgundy">{s.value}</p>
                  <p className="text-xs text-espresso/60 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
            <ButtonLink to="/about" className="mt-10">
              Learn More About Us <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Beauty Services */}
      <section className="section bg-gradient-to-b from-cream to-blush/30">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-beige uppercase">Our Services</span>
            <div className="h-1 w-16 bg-beige mt-2 rounded-full mx-auto" />
            <h2 className="mt-6 text-4xl font-bold lg:text-5xl">Beauty Services</h2>
            <p className="mt-4 text-lg text-espresso/75">Complete beauty care delivered by experienced professionals</p>
          </div>
          <ServiceGrid services={featuredServices} />
          <div className="mt-12 text-center">
            <ButtonLink to="/services" variant="outline" size="lg" className="border-2">
              View All Services <ArrowRight className="h-5 w-5" aria-hidden />
            </ButtonLink>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Gallery */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-beige uppercase">Our Gallery</span>
            <div className="h-1 w-16 bg-beige mt-2 rounded-full mx-auto" />
            <h2 className="mt-6 text-4xl font-bold lg:text-5xl">A Glimpse of Our Work</h2>
            <p className="mt-4 text-lg text-espresso/75">Bridal looks, transformations, and salon spaces</p>
          </div>
          <GalleryGrid images={galleryPreview} />
          <div className="mt-12 text-center">
            <ButtonLink to="/gallery" variant="outline" size="lg" className="border-2">
              View Full Gallery <ArrowRight className="h-5 w-5" aria-hidden />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Beauty Academy */}
      <section className="section bg-gradient-to-br from-burgundy to-burgundy-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3MnYxNkgzNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        <div className="container-page relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-beige uppercase">Professional Training</span>
            <div className="h-1 w-16 bg-beige mt-2 rounded-full mx-auto" />
            <h2 className="mt-6 text-4xl font-bold lg:text-5xl text-white">Star Moon Beauty Academy</h2>
            <p className="mt-4 text-lg text-white/90">Launch your beauty career with certified courses</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {academyHighlights.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-colors">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-beige/20 mb-6">
                  <Icon className="h-8 w-8 text-beige" aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-white/80">{text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <ButtonLink to="/academy" variant="beige" size="lg" className="shadow-lg">
              Explore Academy Courses <ArrowRight className="h-5 w-5" aria-hidden />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <CtaBanner background="white" />
    </>
  )
}
