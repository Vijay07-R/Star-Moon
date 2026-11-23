import { Award, Gem, HeartHandshake, ShieldCheck, Sparkles, Users } from 'lucide-react'
import type { Feature } from '../types'

export const whyChooseUs: Feature[] = [
  { icon: Award, title: 'Certified Experts', description: 'Trained stylists, artists and therapists with years of salon experience.' },
  { icon: Gem, title: 'Premium Products', description: 'Salon-grade, dermatologically tested brands for every treatment.' },
  { icon: ShieldCheck, title: 'Hygiene First', description: 'Sterilised tools, single-use supplies and spotless treatment rooms.' },
  { icon: HeartHandshake, title: 'Personal Care', description: 'Every service starts with a consultation tailored to you.' },
]

export const stats = [
  { value: '12+', label: 'Years of Experience' },
  { value: '15k+', label: 'Happy Clients' },
  { value: '25+', label: 'Beauty Experts' },
  { value: '1,200+', label: 'Brides Styled' },
]

export const commitments: Feature[] = [
  { icon: Sparkles, title: 'Honest Advice', description: 'We recommend only what your hair and skin truly need — never unnecessary add-ons.' },
  { icon: Users, title: 'Women-Only Comfort', description: 'A private, welcoming space designed for women to relax and feel at ease.' },
  { icon: HeartHandshake, title: 'Satisfaction Promise', description: 'Not completely happy? Tell us within 7 days and we will make it right.' },
]
