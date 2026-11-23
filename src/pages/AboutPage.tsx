import { Award, Check, Eye, ShieldCheck, Sparkles, Target, Users } from 'lucide-react'
import Certificates from '../components/sections/Certificates'
import SmartImage from '../components/ui/SmartImage'
import { photos } from '../data/photos'
import { commitments, stats } from '../data/team'

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
          <div className="mx-auto max-w-4xl text-center">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] text-beige uppercase">Welcome to Star Moon</span>
              <div className="mx-auto h-1 w-16 bg-beige mt-2 rounded-full mb-6" />
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
                    Star Moon began in 2014 as a small studio with a simple dream: a salon where women feel truly comfortable and
                    confident.
                  </p>
                  <p>
                    Word spread through happy brides and loyal regulars. Today we serve many clients every year, but we still treat every guest the way we did on our very first day: personally and with care.
                  </p>
                  <p>
                    We continue to train with leading brands and stay current with the latest techniques, so you always receive the best.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                <SmartImage 
                  src={photos.bridalFlowerJadai}
                  alt="Traditional bridal flower jadai" 
                  className="aspect-[3/4] w-full rounded-2xl object-cover shadow-lg" 
                />
                <SmartImage 
                  src={photos.receptionLook}
                  alt="Soft reception glam makeup"
                  style={{ objectPosition: '50% 15%' }} 
                  className="mt-10 aspect-[3/4] w-full rounded-2xl object-cover shadow-lg" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Certificates />

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
