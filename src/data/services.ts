import { Bath, Flower2, Hand, HeartPulse, Leaf, Palette, Scissors, Sparkles, Wand2 } from 'lucide-react'
import type { FilterOption, Service, ServiceCategory, Treatment } from '../types'
import { img } from './images'

export const serviceCategories: FilterOption<ServiceCategory>[] = [
  { value: 'all', label: 'All Services' },
  { value: 'hair', label: 'Hair' },
  { value: 'skin', label: 'Skin Care' },
  { value: 'makeup', label: 'Makeup' },
  { value: 'nails', label: 'Nails' },
  { value: 'spa', label: 'Spa & Body' },
  { value: 'wellness', label: 'Wellness' },
]

export const services: Service[] = [
  {
    id: 'hair-styling',
    name: 'Hair Styling',
    category: 'hair',
    image: img('1562322140-8baeececf3df'),
    icon: Scissors,
    shortDescription: 'Precision cuts, blow-dries and occasion styling tailored to your face shape.',
    description:
      'From a fresh everyday cut to an elegant updo for a special evening, our stylists study your hair texture, face shape and lifestyle to create a look that is easy to love and easy to maintain.',
    duration: '45 – 90 mins',
    startingPrice: 200,
    highlights: ['Consultation & face-shape analysis', 'Precision haircut & layering', 'Blow-dry, curls & waves', 'Updos and occasion styling'],
  },
  {
    id: 'hair-treatments',
    name: 'Hair Treatments',
    category: 'hair',
    image: img('1560869713-7d0a29430803'),
    icon: Sparkles,
    shortDescription: 'Keratin, hair spa and colour treatments for healthy, glossy hair.',
    description:
      'Restore strength and shine with professional treatments using salon-grade products. We offer smoothing, deep conditioning, scalp therapy and global or highlight colouring by trained colourists.',
    duration: '60 – 180 mins',
    startingPrice: 1200,
    highlights: ['Keratin & smoothing therapy', 'Deep-conditioning hair spa', 'Global colour & highlights', 'Anti-dandruff scalp treatment'],
  },
  {
    id: 'facial-skin-care',
    name: 'Facial & Skin Care',
    category: 'skin',
    image: img('1570172619644-dfd03ed5d881'),
    icon: Flower2,
    shortDescription: 'Customised facials and skin therapies for a clear, radiant complexion.',
    description:
      'Every facial begins with a skin analysis so we can choose the right products for your skin type. Choose from hydrating, brightening, anti-ageing and acne-care facials, plus clean-up and de-tan treatments.',
    duration: '45 – 90 mins',
    startingPrice: 500,
    highlights: ['Skin analysis before every facial', 'Hydra & brightening facials', 'Anti-ageing & acne care', 'De-tan and clean-up'],
  },
  {
    id: 'bridal-makeup',
    name: 'Bridal Makeup',
    category: 'makeup',
    image: img('1519741497674-611481863552'),
    icon: Wand2,
    shortDescription: 'Long-lasting HD and airbrush bridal looks for your most special day.',
    description:
      'Our senior bridal artists create timeless looks that photograph beautifully and last from ceremony to reception. Includes a pre-bridal consultation, hairstyling, draping and saree or lehenga setting.',
    duration: '3 – 4 hours',
    startingPrice: 8000,
    highlights: ['Trial & look consultation', 'HD or airbrush makeup', 'Bridal hairstyling & accessories', 'Saree / lehenga draping'],
  },
  {
    id: 'party-makeup',
    name: 'Party Makeup',
    category: 'makeup',
    image: img('1487412947147-5cebf100ffc2'),
    icon: Palette,
    shortDescription: 'Soft glam to bold evening looks for receptions, parties and events.',
    description:
      'Whether it is a festive gathering, engagement or corporate event, our artists create a polished look that complements your outfit and lasts all evening, using premium international products.',
    duration: '60 – 90 mins',
    startingPrice: 3500,
    highlights: ['Soft glam or bold evening looks', 'Premium long-wear products', 'Hairstyling add-on available', 'Lashes included'],
  },
  {
    id: 'manicure-pedicure',
    name: 'Manicure & Pedicure',
    category: 'nails',
    image: img('1604654894610-df63bc536371'),
    icon: Hand,
    shortDescription: 'Relaxing hand and foot care with gel polish and elegant nail art.',
    description:
      'Treat your hands and feet with a soothing soak, exfoliation, cuticle care and massage. Finish with classic polish, long-lasting gel or a delicate nail art design from our curated collection.',
    duration: '45 – 75 mins',
    startingPrice: 400,
    highlights: ['Classic & spa manicure', 'Pedicure with foot massage', 'Gel polish & extensions', 'Minimal and bridal nail art'],
  },
  {
    id: 'spa-treatments',
    name: 'Spa Treatments',
    category: 'spa',
    image: img('1544161515-4ab6ce6db874'),
    icon: Leaf,
    shortDescription: 'Aromatherapy and therapeutic massages to relax body and mind.',
    description:
      'Unwind in our private spa rooms with massages performed by certified therapists. Choose aromatherapy, Swedish, deep tissue or hot-stone therapy to release tension and restore balance.',
    duration: '60 – 90 mins',
    startingPrice: 2000,
    highlights: ['Aromatherapy massage', 'Swedish & deep tissue', 'Hot-stone therapy', 'Private, calming spa rooms'],
  },
  {
    id: 'body-care',
    name: 'Body Care',
    category: 'spa',
    image: img('1540555700478-4be289fbecef'),
    icon: Bath,
    shortDescription: 'Body polishing, scrubs, wraps and waxing for smooth, glowing skin.',
    description:
      'Reveal soft, even-toned skin with exfoliating scrubs, nourishing body wraps and full-body polishing. We also offer gentle waxing and threading using hygienic, single-use supplies.',
    duration: '30 – 120 mins',
    startingPrice: 250,
    highlights: ['Full-body polishing', 'Scrubs & nourishing wraps', 'Rica & chocolate waxing', 'Threading & bleach'],
  },
  {
    id: 'beauty-wellness',
    name: 'Beauty & Wellness',
    category: 'wellness',
    image: img('1515377905703-c4788e51af15'),
    icon: HeartPulse,
    shortDescription: 'Holistic rituals, head massages and self-care programmes for total well-being.',
    description:
      'Beauty begins with feeling well. Our wellness rituals combine head and shoulder massage, reflexology and calming skin rituals to reduce stress and help you look and feel your best.',
    duration: '45 – 120 mins',
    startingPrice: 500,
    highlights: ['Head, neck & shoulder massage', 'Foot reflexology', 'Stress-relief rituals', 'Personalised self-care plans'],
  },
]

export const popularTreatments: Treatment[] = [
  { name: 'Keratin Smoothing', description: 'Frizz-free, silky hair for up to 4 months', duration: '150 mins', price: 4500 },
  { name: 'Hydra Glow Facial', description: 'Deep hydration and instant radiance', duration: '75 mins', price: 2800 },
  { name: 'Global Hair Colour', description: 'Ammonia-free, rich long-lasting colour', duration: '120 mins', price: 3500 },
  { name: 'Gel Manicure & Nail Art', description: 'Chip-free shine for up to 3 weeks', duration: '60 mins', price: 1200 },
  { name: 'Aromatherapy Massage', description: 'Full-body relaxation with essential oils', duration: '60 mins', price: 2200 },
  { name: 'Full Body Polishing', description: 'Exfoliate, nourish and glow', duration: '90 mins', price: 3200 },
]

export const getServiceById = (id: string): Service | undefined => services.find((s) => s.id === id)
