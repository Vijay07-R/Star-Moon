import { Award, Check, Eye, ShieldCheck, Sparkles, Target, Users } from 'lucide-react'
import SmartImage from '../components/ui/SmartImage'
import { img } from '../data/images'
import { commitments, stats, team } from '../data/team'

const interiorPhotos = [
  { src: img('1560066984-138dadb4c035', 900, 700), alt: 'Main styling lounge' },
  { src: img('1600948836101-f9ffda59d250', 900, 700), alt: 'Reception and waiting area' },
  { src: img('1521590832167-7bcbfaa6381f', 900, 700), alt: 'Hair styling stations' },
  { src: img('1633681926022-84c23e8cb2d6', 900, 700), alt: 'Private treatment suite' },
]

// Professional Certificates
const certificates = [
  { id: 1, image: img('1487412947147-5cebf100ffc2', 600, 800), title: 'Professional Beauty Certification', year: '2014' },
  { id: 2, image: img('1522337360788-8b13dee7a37e', 600, 800), title: 'Bridal Makeup Specialist', year: '2016' },
  { id: 3, image: img('1560066984-138dadb4c035', 600, 800), title: 'Advanced Hair Styling', year: '2017' },
  { id: 4, image: img('1512496015851-a90fb38ba796', 600, 800), title: 'Skin Care Specialist', year: '2018' },
  { id: 5, image: img('1570172619644-dfd03ed5d881', 600, 800), title: 'Spa & Wellness Therapy', year: '2019' },
  { id: 6, image: img('1516975080664-ed2fc6a32937', 600, 800), title: 'Business Excellence Award', year: '2022' },
]

const expertiseAreas = [
  { icon: Sparkles, title: 'Hair Styling & Treatments', description: 'Expert cutting, coloring, styling and hair care treatments' },
  { icon: Award, title: 'Bridal Makeup & Beauty', description: 'Specialized bridal packages and pre-wedding treatments' },
  { icon: ShieldCheck, title: 'Skin Care & Facials', description: 'Advanced skin analysis and personalized facial treatments' },
  { icon: Users, title: 'Spa & Wellness', description: 'Relaxing spa services and body treatments' },
]

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-burgundy to-burgundy-dark overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3MnYxNkgzNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        <div className="container-page relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white sm:text-6xl">About Us</h1>
          </div>
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <div className="absolute -top-6 -right-6 h-full w-full rounded-3xl border-4 border-beige/30 hidden sm:block" aria-hidden />
              <SmartImage 
                src={img('1522337360788-8b13dee7a37e', 1000, 1100)} 
                alt="Stylist with a client at Star Moon" 
                className="relative aspect-[10/11] w-full rounded-3xl object-cover shadow-2xl" 
              />
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-2xl">
                <div className="flex items-center gap-3">
                  <Award className="h-10 w-10 text-beige" />
                  <div>
                    <p className="font-serif text-3xl font-bold text-burgundy">Since 2014</p>
                    <p className="text-sm text-espresso/70">Serving women with care</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="text-xs font-bold tracking-[0.25em] text-beige uppercase">Welcome to Star Moon</span>
              <div className="h-1 w-16 bg-beige mt-2 rounded-full mb-6" />
              <h2 className="text-4xl font-bold lg:text-5xl mb-6">Where Beauty Meets Comfort & Care</h2>
              <div className="space-y-4 leading-relaxed text-espresso/80 text-lg">
                <p>
                  Star Moon Beauty Salon is a premium, women-only salon offering complete hair, skin, makeup, nail and spa services under
                  one roof. We believe beauty is personal — so every visit begins with listening to you.
                </p>
                <p>
                  Our calm, elegant space, highly trained professionals and carefully selected products make every appointment a moment
                  of genuine self-care, whether you are here for a quick trim or a complete bridal transformation.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="font-serif text-3xl font-bold text-burgundy">{s.value}</p>
                    <p className="text-xs text-espresso/70 mt-2">{s.label}</p>
                    <div className="h-1 w-12 bg-beige/30 mt-2 rounded-full mx-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="section bg-gradient-to-b from-cream to-blush/30">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-beige uppercase">Our Expertise</span>
            <div className="h-1 w-16 bg-beige mt-2 rounded-full mx-auto mb-6" />
            <h2 className="text-4xl font-bold lg:text-5xl">Professional Beauty Services Since 2014</h2>
            <p className="mt-4 text-lg text-espresso/75">
              Over a decade of experience delivering exceptional beauty care to thousands of satisfied clients
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {expertiseAreas.map(({ icon: Icon, title, description }) => (
              <div key={title} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-burgundy mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-7 w-7 text-beige" aria-hidden />
                </div>
                <h3 className="text-lg font-bold mb-3">{title}</h3>
                <p className="text-sm leading-relaxed text-espresso/75">{description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <span className="text-xs font-bold tracking-[0.25em] text-beige uppercase">Our Story</span>
                <div className="h-1 w-16 bg-beige mt-2 rounded-full mb-6" />
                <h3 className="text-3xl font-bold mb-6">From a Small Studio to a Trusted Name</h3>
                <div className="space-y-4 leading-relaxed text-espresso/75">
                  <p>
                    Star Moon began in 2014 as a two-chair studio founded by Shalini Varma, a makeup artist with a dream of creating a salon
                    where women felt truly comfortable and confident.
                  </p>
                  <p>
                    Word spread through happy brides and loyal regulars. Today, our team of more than 25 beauty experts serves thousands
                    of clients each year — but we still treat every guest the way we did on our very first day: personally and with care.
                  </p>
                  <p>
                    We continue to train with leading brands and stay current with the latest techniques, so you always receive the best.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                <SmartImage 
                  src={img('1512496015851-a90fb38ba796', 700, 900)} 
                  alt="Professional makeup products" 
                  className="aspect-[3/4] w-full rounded-2xl object-cover shadow-lg" 
                />
                <SmartImage 
                  src={img('1570172619644-dfd03ed5d881', 700, 900)} 
                  alt="Client enjoying a facial" 
                  className="mt-10 aspect-[3/4] w-full rounded-2xl object-cover shadow-lg" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates & Qualifications */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-beige uppercase">Certified Excellence</span>
            <div className="h-1 w-16 bg-beige mt-2 rounded-full mx-auto mb-6" />
            <h2 className="text-4xl font-bold lg:text-5xl">Professional Certifications & Qualifications</h2>
            <p className="mt-4 text-lg text-espresso/75">
              Our team holds industry-recognized certifications and continuously updates their skills
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert) => (
              <div 
                key={cert.id} 
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-cream shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  <SmartImage 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                    <div className="text-center text-white">
                      <Award className="h-12 w-12 mx-auto mb-3" />
                      <p className="font-bold text-lg">View Certificate</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
                  <p className="text-sm text-espresso/60">Certified {cert.year}</p>
                </div>
                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1.5 shadow-lg">
                  <Award className="h-4 w-4 text-beige" />
                  <span className="text-xs font-bold text-burgundy">Certified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-cream">
        <div className="container-page">
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                text: 'To provide every woman with exceptional, personalised beauty care in a safe, hygienic and welcoming environment — helping her look and feel her best.',
              },
              {
                icon: Eye,
                title: 'Our Vision',
                text: 'To be the most trusted women\'s beauty destination, known for skilled artistry, honest advice and an experience that clients look forward to.',
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="group rounded-2xl border-2 border-beige/30 bg-white p-10 hover:border-beige transition-all hover:shadow-xl">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-burgundy mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-8 w-8 text-beige" aria-hidden />
                </div>
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <p className="text-lg leading-relaxed text-espresso/75">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-beige uppercase">Our Team</span>
            <div className="h-1 w-16 bg-beige mt-2 rounded-full mx-auto mb-6" />
            <h2 className="text-4xl font-bold lg:text-5xl">Meet Our Beauty Professionals</h2>
            <p className="mt-4 text-lg text-espresso/75">
              Experienced, certified and passionate about helping you shine
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <article key={member.name} className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <SmartImage 
                    src={member.photo} 
                    alt={member.name} 
                    className="aspect-[5/6] w-full object-cover transition-transform group-hover:scale-110" 
                  />
                </div>
                <div className="border-t-4 border-beige p-6 text-center bg-gradient-to-b from-white to-cream">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-burgundy">{member.role}</p>
                  <p className="mt-1 text-sm text-espresso/60">{member.experience} experience</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Salon Interior */}
      <section className="section bg-gradient-to-b from-cream to-blush/30">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-beige uppercase">Our Salon</span>
            <div className="h-1 w-16 bg-beige mt-2 rounded-full mx-auto mb-6" />
            <h2 className="text-4xl font-bold lg:text-5xl">Step Inside Star Moon</h2>
            <p className="mt-4 text-lg text-espresso/75">
              Elegant, spacious and spotless — designed for your comfort and relaxation
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {interiorPhotos.map((photo) => (
              <div key={photo.alt} className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <SmartImage 
                    src={photo.src} 
                    alt={photo.alt} 
                    className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-110" 
                  />
                </div>
                <div className="bg-gradient-to-b from-white to-cream px-4 py-4 text-center">
                  <p className="font-semibold text-burgundy">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] text-beige uppercase">Our Commitment</span>
              <div className="h-1 w-16 bg-beige mt-2 rounded-full mb-6" />
              <h2 className="text-4xl font-bold mb-6">Your Satisfaction Is Our Priority</h2>
              <p className="text-lg leading-relaxed text-espresso/75 mb-8">
                We measure our success by how you feel when you leave our salon. That is why we follow strict standards for quality,
                hygiene and service at every step.
              </p>
              <ul className="space-y-4">
                {[
                  'Sterilised tools and fresh linen for every client',
                  'Patch tests before colour and chemical treatments',
                  'Transparent pricing with no hidden charges',
                  'Follow-up care advice after every service'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-beige mt-1" aria-hidden />
                    <span className="text-espresso/75">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-6">
              {commitments.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-5 rounded-2xl bg-gradient-to-br from-cream to-white border-2 border-beige/20 p-6 hover:border-beige transition-all hover:shadow-lg">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-burgundy">
                    <Icon className="h-6 w-6 text-beige" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{title}</h3>
                    <p className="text-sm leading-relaxed text-espresso/75">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
