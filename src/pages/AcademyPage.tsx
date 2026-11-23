import { Award, BookOpen, Calendar, Check, Clock, GraduationCap, Users, Star } from 'lucide-react'
import { ButtonLink } from '../components/ui/Button'
import SmartImage from '../components/ui/SmartImage'
import { img } from '../data/images'

const courses = [
  {
    id: 1,
    title: 'Professional Hair Styling & Cutting',
    duration: '3 Months',
    fee: '₹45,000',
    modules: ['Basic & Advanced Hair Cutting', 'Hair Styling Techniques', 'Blow Drying & Ironing', 'Hair Treatment & Care'],
    image: img('1522338242946-49764fe50622', 800, 600),
    popular: true,
  },
  {
    id: 2,
    title: 'Bridal Makeup Artist Course',
    duration: '2 Months',
    fee: '₹35,000',
    modules: ['Bridal Makeup Techniques', 'HD & Airbrush Makeup', 'Draping & Accessories', 'Pre-Bridal Treatments'],
    image: img('1487412947147-5cebf100ffc2', 800, 600),
    popular: true,
  },
  {
    id: 3,
    title: 'Advanced Skin Care & Facial',
    duration: '2 Months',
    fee: '₹30,000',
    modules: ['Skin Analysis & Types', 'Facial Techniques', 'Anti-Aging Treatments', 'Product Knowledge'],
    image: img('1570172619644-dfd03ed5d881', 800, 600),
  },
  {
    id: 4,
    title: 'Nail Art & Extensions',
    duration: '1 Month',
    fee: '₹20,000',
    modules: ['Manicure & Pedicure', 'Nail Art Designs', 'Gel & Acrylic Extensions', 'Nail Health & Hygiene'],
    image: img('1604654894610-df63bc536371', 800, 600),
  },
  {
    id: 5,
    title: 'Complete Beauty Therapy',
    duration: '6 Months',
    fee: '₹85,000',
    modules: ['Hair, Skin & Makeup', 'Spa Treatments', 'Salon Management', 'Client Consultation Skills'],
    image: img('1560066984-138dadb4c035', 800, 600),
    featured: true,
  },
  {
    id: 6,
    title: 'Spa & Wellness Therapy',
    duration: '2 Months',
    fee: '₹28,000',
    modules: ['Body Massage Techniques', 'Aromatherapy', 'Body Treatments', 'Spa Etiquette'],
    image: img('1544161515-4ab6ce6db874', 800, 600),
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

// Certificate showcase images
const certificates = [
  { id: 1, image: img('1522337360788-8b13dee7a37e', 600, 800), alt: 'Student achievement certificate' },
  { id: 2, image: img('1560066984-138dadb4c035', 600, 800), alt: 'Course completion certificate' },
  { id: 3, image: img('1487412947147-5cebf100ffc2', 600, 800), alt: 'Professional certification' },
  { id: 4, image: img('1516975080664-ed2fc6a32937', 600, 800), alt: 'Beauty therapy certificate' },
  { id: 5, image: img('1570172619644-dfd03ed5d881', 600, 800), alt: 'Hair styling certificate' },
  { id: 6, image: img('1512496015851-a90fb38ba796', 600, 800), alt: 'Makeup artistry certificate' },
]

export default function AcademyPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-emerald-deep to-emerald-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3MnYxNkgzNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        <div className="container-page relative py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-gold/60 bg-white/10 backdrop-blur-sm px-5 py-2 mb-8">
              <GraduationCap className="h-5 w-5 text-gold" aria-hidden />
              <span className="text-xs font-bold tracking-[0.2em] text-white uppercase">Professional Training</span>
            </div>
            <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl">Beauty Academy</h1>
            <p className="mt-6 text-xl text-white/90 leading-relaxed">
              Launch your beauty career with industry-recognized certification and expert training
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink to="/contact" variant="gold" size="lg">
                <Calendar className="h-5 w-5" /> Enquire Now
              </ButtonLink>
              <a 
                href="#courses" 
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/70 px-8 py-3.5 font-medium text-white transition-colors hover:bg-white hover:text-emerald-deep"
              >
                View Courses
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase">Professional Training</span>
            <div className="h-1 w-16 bg-gold mt-2 rounded-full" />
            <h2 className="mt-6 text-4xl font-bold lg:text-5xl">Transform Your Passion into a Profession</h2>
            <p className="mt-6 leading-relaxed text-forest/80 text-lg">
              Star Moon Beauty Academy offers comprehensive beauty training courses designed to transform beginners into confident,
              skilled beauty professionals. With over 12 years of salon experience, we know exactly what the industry needs.
            </p>
            <p className="mt-4 leading-relaxed text-forest/75">
              Whether you want to start your own salon, work as a freelance artist, or join an established beauty brand, our
              certified courses will equip you with the technical skills and business knowledge you need to succeed.
            </p>
            <ul className="mt-8 space-y-3">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="h-5 w-5 shrink-0 text-gold mt-0.5" aria-hidden /> 
                  <span className="text-forest/75">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -right-6 h-full w-full rounded-3xl border-4 border-gold/30 hidden sm:block" aria-hidden />
            <SmartImage
              src={img('1522337360788-8b13dee7a37e', 1000, 1100)}
              alt="Beauty training at Star Moon Academy"
              className="relative aspect-[10/11] w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-2xl max-w-xs">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-deep">
                  <GraduationCap className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-emerald-deep">500+</p>
                  <p className="text-sm text-forest/70">Students Trained</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="section bg-gradient-to-b from-ivory to-emerald-soft/30">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase">Our Courses</span>
            <div className="h-1 w-16 bg-gold mt-2 rounded-full mx-auto" />
            <h2 className="mt-6 text-4xl font-bold lg:text-5xl">Professional Beauty Training Courses</h2>
            <p className="mt-4 text-lg text-forest/75">Choose from our range of specialized courses and master the skills that matter</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <article key={course.id} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1">
                {course.popular && (
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-bold text-white">
                    <Star className="h-3 w-3" /> Popular
                  </div>
                )}
                {course.featured && (
                  <div className="absolute top-4 right-4 z-10 rounded-full bg-emerald-deep px-3 py-1 text-xs font-bold text-white">
                    Featured
                  </div>
                )}
                <div className="relative overflow-hidden">
                  <SmartImage src={course.image} alt={course.title} className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                  <div className="flex items-center gap-4 mb-4 text-sm text-forest/65">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-gold" aria-hidden />
                      {course.duration}
                    </span>
                    <span className="font-bold text-lg text-emerald-deep">{course.fee}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {course.modules.map((module) => (
                      <li key={module} className="flex items-start gap-2 text-sm text-forest/75">
                        <Check className="h-4 w-4 shrink-0 text-gold mt-0.5" aria-hidden />
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
            <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase">Why Choose Us</span>
            <div className="h-1 w-16 bg-gold mt-2 rounded-full mx-auto" />
            <h2 className="mt-6 text-4xl font-bold lg:text-5xl">Why Train at Star Moon Academy?</h2>
            <p className="mt-4 text-lg text-forest/75">More than just technical training — we prepare you for a successful beauty career</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title} className="group rounded-2xl border-2 border-gold/20 bg-gradient-to-br from-ivory to-white p-8 text-center transition-all hover:border-gold hover:shadow-xl">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald-deep mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-8 w-8 text-gold" aria-hidden />
                </div>
                <h3 className="text-lg font-bold mb-3">{title}</h3>
                <p className="text-[15px] leading-relaxed text-forest/75">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Achievement & Certificate Gallery */}
      <section className="section bg-gradient-to-b from-emerald-soft/50 to-ivory">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase">Student Success</span>
            <div className="h-1 w-16 bg-gold mt-2 rounded-full mx-auto" />
            <h2 className="mt-6 text-4xl font-bold lg:text-5xl">Our Certified Graduates</h2>
            <p className="mt-4 text-lg text-forest/75">
              Celebrating the achievements of students who completed their professional beauty training
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert) => (
              <div 
                key={cert.id} 
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  <SmartImage 
                    src={cert.image} 
                    alt={cert.alt}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/80 via-emerald-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <Award className="h-12 w-12 mx-auto mb-3" />
                      <p className="font-bold text-lg">View Certificate</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1.5 shadow-lg">
                  <Award className="h-4 w-4 text-gold" />
                  <span className="text-xs font-bold text-emerald-deep">Certified</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-8 bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <p className="font-serif text-4xl font-bold text-emerald-deep">500+</p>
                <p className="text-sm text-forest/70 mt-1">Students Certified</p>
              </div>
              <div className="h-12 w-px bg-forest/20" />
              <div className="text-center">
                <p className="font-serif text-4xl font-bold text-emerald-deep">95%</p>
                <p className="text-sm text-forest/70 mt-1">Placement Rate</p>
              </div>
              <div className="h-12 w-px bg-forest/20" />
              <div className="text-center">
                <p className="font-serif text-4xl font-bold text-emerald-deep">12+</p>
                <p className="text-sm text-forest/70 mt-1">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-deep to-emerald-dark">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3MnYxNkgzNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
            <SmartImage
              src={img('1522337360788-8b13dee7a37e', 1600, 600)}
              alt=""
              aria-hidden
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-10"
            />
            <div className="relative flex flex-col items-center gap-6 px-6 py-16 text-center md:px-16 md:py-20">
              <GraduationCap className="h-16 w-16 text-gold" />
              <h2 className="max-w-2xl text-4xl font-bold text-white md:text-5xl">
                Ready to Turn Your Passion into a Profession?
              </h2>
              <p className="max-w-xl text-lg text-white/90">
                Join Star Moon Beauty Academy and learn from the best. Limited seats available. Enroll now!
              </p>
              <div className="flex flex-col gap-4 sm:flex-row mt-4">
                <ButtonLink to="/contact" variant="gold" size="lg" className="shadow-lg">
                  <Calendar className="h-5 w-5" aria-hidden /> Contact for Admission
                </ButtonLink>
                <a 
                  href="tel:+919876543210" 
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/70 px-8 py-3.5 font-medium text-white transition-colors hover:bg-white hover:text-emerald-deep"
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
