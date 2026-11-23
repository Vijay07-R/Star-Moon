import { Award, Gem, HeartHandshake, ShieldCheck, Sparkles, Users } from 'lucide-react'
import type { Feature, TeamMember } from '../types'
import { img } from './images'

export const team: TeamMember[] = [
  { name: 'Shalini Varma', role: 'Founder & Creative Director', experience: '15+ years', photo: img('1580489944761-15a19d654956', 600, 720) },
  { name: 'Nithya Rajan', role: 'Senior Bridal Makeup Artist', experience: '10+ years', photo: img('1573496359142-b8d87734a5a2', 600, 720) },
  { name: 'Aishwarya Menon', role: 'Hair Stylist & Colourist', experience: '8+ years', photo: img('1534528741775-53994a69daeb', 600, 720) },
  { name: 'Deepa Kannan', role: 'Skin & Spa Therapist', experience: '9+ years', photo: img('1544005313-94ddf0286df2', 600, 720) },
]

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
