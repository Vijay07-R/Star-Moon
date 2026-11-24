import { Award, BookOpen, Calendar, Check, Clock, GraduationCap, Users, Star } from 'lucide-react'
import { ButtonLink } from '../components/ui/Button'
import { siteInfo } from '../data/site'

const courses = [
  {
    id: 1,
    title: 'Professional Hair Styling & Cutting',
    duration: '3 Months',
    fee: '₹45,000',
    modules: ['Basic & Advanced Hair Cutting', 'Hair Styling Techniques', 'Blow Drying & Ironing', 'Hair Treatment & Care'],
    popular: true,
  },
  {
    id: 2,
    title: 'Bridal Makeup Artist Course',
    duration: '2 Months',
    fee: '₹35,000',
    modules: ['Bridal Makeup Techniques', 'HD & Airbrush Makeup', 'Draping & Accessories', 'Pre-Bridal Treatments'],
    popular: true,
  },
  {
    id: 3,
    title: 'Advanced Skin Care & Facial',
    duration: '2 Months',
    fee: '₹30,000',
    modules: ['Skin Analysis & Types', 'Facial Techniques', 'Anti-Aging Treatments', 'Product Knowledge'],
  },
  {
    id: 4,
    title: 'Nail Art & Extensions',
    duration: '1 Month',
    fee: '₹20,000',
    modules: ['Manicure & Pedicure', 'Nail Art Designs', 'Gel & Acrylic Extensions', 'Nail Health & Hygiene'],
  },
  {
    id: 5,
    title: 'Complete Beauty Therapy',
    duration: '6 Months',
    fee: '₹85,000',
    modules: ['Hair, Skin & Makeup', 'Spa Treatments', 'Salon Management', 'Client Consultation Skills'],
    featured: true,
  },
  {
    id: 6,
    title: 'Spa & Wellness Therapy',
    duration: '2 Months',
    fee: '₹28,000',
    modules: ['Body Massage Techniques', 'Aromatherapy', 'Body Treatments', 'Spa Etiquette'],
  },
]

const benefits = [
  { icon: Award, title: 'Industry-Recognized Certification', text: 'Get certified and boost your career prospects' },
  { icon: Users, title: 'Expert Trainers', text: 'Learn from experienced professionals with 10+ years in the industry' },
  { icon: BookOpen, title: 'Hands-On Training', text: 'Practice on live models and real salon scenarios' },
  { icon: GraduationCap, title: 'Placement Assistance', text: 'Job placement support and career guidance after course completion' },
]

const features = [
  'Small batch sizes for personalized attention',
  'State-of-the-art training facilities',
  'Premium products for training',
  'Flexible weekday and weekend batches',
  'Free starter kit included',
  'Lifetime course material access',
]

export default function AcademyPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-burgundy to-burgundy-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3MnYxNkgzNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        <div className="container-page relative py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-beige/60 bg-white/10 backdrop-blur-sm px-5 py-2 mb-8">
              <GraduationCap className="h-5 w-5 text-beige" aria-hidden />
              <span className="text-xs font-bold tracking-[0.2em] text-white uppercase">Professional Training</span>
            </div>
            <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl">Beauty Academy</h1>
            <p className="mt-6 text-xl text-white/90 leading-relaxed">
              Launch your beauty career with industry-recognized certification and expert training
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink to="/contact" variant="beige" size="lg">
                <Calendar className="h-5 w-5" /> Enquire Now
              </ButtonLink>
              <a 
                href="#courses" 
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/70 px-8 py-3.5 font-medium text-white transition-colors hover:bg-white hover:text-burgundy"
              >
                View Courses
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-bold tracking-[0.25em] text-beige uppercase">Professional Training</span>
            <div className="h-1 w-16 bg-beige mt-2 rounded-full" />
            <h2 className="mt-6 text-4xl font-bold lg:text-5xl">Transform Your Passion into a Profession</h2>
            <p className="mt-6 leading-relaxed text-espresso/80 text-lg">
              Star Moon Beauty Academy offers comprehensive beauty training courses designed to transform beginners into confident,
              skilled beauty professionals. With over 12 years of salon experience, we know exactly what the industry needs.
            </p>
            <p className="mt-4 leading-relaxed text-espresso/75">
              Whether you want to start your own salon, work as a freelance artist, or join an established beauty brand, our
              certified courses will equip you with the technical skills and business knowledge you need to succeed.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 text-beige mt-0.5" aria-hidden /> 
                  <span className="text-espresso/75">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="section bg-gradient-to-b from-cream to-blush/30">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-beige uppercase">Our Courses</span>
            <div className="h-1 w-16 bg-beige mt-2 rounded-full mx-auto" />
            <h2 className="mt-6 text-4xl font-bold lg:text-5xl">Professional Beauty Training Courses</h2>
            <p className="mt-4 text-lg text-espresso/75">Choose from our range of specialized courses and master the skills that matter</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <article key={course.id} data-tilt className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1">
                {course.popular && (
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1 rounded-full bg-beige px-3 py-1 text-xs font-bold text-white">
                    <Star className="h-3 w-3" /> Popular
                  </div>
                )}
                {course.featured && (
                  <div className="absolute top-4 right-4 z-10 rounded-full bg-burgundy px-3 py-1 text-xs font-bold text-white">
                    Featured
                  </div>
                )}
                <div className="flex h-24 items-center bg-gradient-to-br from-burgundy to-burgundy-dark px-6">
                  <GraduationCap className="h-10 w-10 text-beige" aria-hidden />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                  <div className="flex items-center gap-4 mb-4 text-sm text-espresso/65">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-beige" aria-hidden />
                      {course.duration}
                    </span>
                    <span className="font-bold text-lg text-burgundy">{course.fee}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {course.modules.map((module) => (
                      <li key={module} className="flex items-start gap-2 text-sm text-espresso/75">
                        <Check className="h-4 w-4 shrink-0 text-beige mt-0.5" aria-hidden />
                        {module}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink to="/contact" className="w-full">
                    <Calendar className="h-4 w-4" aria-hidden />
                    Enquire Now
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-beige uppercase">Why Choose Us</span>
            <div className="h-1 w-16 bg-beige mt-2 rounded-full mx-auto" />
            <h2 className="mt-6 text-4xl font-bold lg:text-5xl">Why Train at Star Moon Academy?</h2>
            <p className="mt-4 text-lg text-espresso/75">More than just technical training — we prepare you for a successful beauty career</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title} data-tilt className="group rounded-2xl border-2 border-beige/20 bg-gradient-to-br from-cream to-white p-8 text-center transition-all hover:border-beige hover:shadow-xl">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-burgundy mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-8 w-8 text-beige" aria-hidden />
                </div>
                <h3 className="text-lg font-bold mb-3">{title}</h3>
                <p className="text-[15px] leading-relaxed text-espresso/75">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-burgundy to-burgundy-dark">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3MnYxNkgzNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
            <div className="relative flex flex-col items-center gap-6 px-6 py-16 text-center md:px-16 md:py-20">
              <GraduationCap className="h-16 w-16 text-beige" />
              <h2 className="max-w-2xl text-4xl font-bold text-white md:text-5xl">
                Ready to Turn Your Passion into a Profession?
              </h2>
              <p className="max-w-xl text-lg text-white/90">
                Join Star Moon Beauty Academy and learn from the best. Limited seats available. Enroll now!
              </p>
              <div className="flex flex-col gap-4 sm:flex-row mt-4">
                <ButtonLink to="/contact" variant="beige" size="lg" className="shadow-lg">
                  <Calendar className="h-5 w-5" aria-hidden /> Contact for Admission
                </ButtonLink>
                <a 
                  href={siteInfo.phoneHref} 
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/70 px-8 py-3.5 font-medium text-white transition-colors hover:bg-white hover:text-burgundy"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
