import type { Testimonial } from '../types'
import { img } from './images'

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Ramesh',
    photo: img('1494790108377-be9c29b29330', 200, 200),
    rating: 5,
    service: 'Royal Bridal Package',
    review:
      'The team made me feel like a queen on my wedding day. My makeup lasted from the morning ceremony to the late reception and looked flawless in every photo. Thank you, Star Moon!',
    date: 'October 2026',
  },
  {
    id: 2,
    name: 'Ananya Krishnan',
    photo: img('1438761681033-6461ffad8d80', 200, 200),
    rating: 5,
    service: 'Keratin Smoothing',
    review:
      'My frizzy hair is finally manageable! The stylist explained every step, and the salon was spotless. It has been two months and my hair still feels silky.',
    date: 'September 2026',
  },
  {
    id: 3,
    name: 'Divya Suresh',
    photo: img('1544005313-94ddf0286df2', 200, 200),
    rating: 5,
    service: 'Hydra Glow Facial',
    review:
      'A truly relaxing experience. They analysed my skin first and recommended the right facial. My skin was glowing for days. Already booked my next visit.',
    date: 'September 2026',
  },
  {
    id: 4,
    name: 'Meera Lakshmi',
    photo: img('1534528741775-53994a69daeb', 200, 200),
    rating: 4,
    service: 'Party Makeup',
    review:
      'Beautiful, natural makeup for my sister’s engagement. The artist listened to exactly what I wanted. Only wish I had booked hairstyling too!',
    date: 'August 2026',
  },
  {
    id: 5,
    name: 'Kavya Nair',
    photo: img('1517841905240-472988babdf9', 200, 200),
    rating: 5,
    service: 'Pamper Day Combo',
    review:
      'Best self-care day ever. The massage, facial and pedicure were all wonderful, and the staff were warm and professional. Great value for money.',
    date: 'August 2026',
  },
  {
    id: 6,
    name: 'Sneha Iyer',
    photo: img('1580489944761-15a19d654956', 200, 200),
    rating: 5,
    service: 'Gel Manicure & Nail Art',
    review:
      'Gorgeous, neat nail art that lasted over three weeks without chipping. Hygiene standards are excellent — they open fresh tools in front of you.',
    date: 'July 2026',
  },
  {
    id: 7,
    name: 'Revathi Mohan',
    photo: img('1573496359142-b8d87734a5a2', 200, 200),
    rating: 5,
    service: 'Global Hair Colour',
    review:
      'I was nervous about colouring my hair, but the colourist suggested the perfect shade for my skin tone. I have received so many compliments!',
    date: 'June 2026',
  },
  {
    id: 8,
    name: 'Harini Prakash',
    photo: img('1531746020798-e6953c6e8e04', 200, 200),
    rating: 4,
    service: 'Aromatherapy Massage',
    review:
      'Peaceful ambience and a skilled therapist. I walked out completely relaxed. Booking online through WhatsApp was quick and easy.',
    date: 'June 2026',
  },
  {
    id: 9,
    name: 'Lavanya Shankar',
    photo: img('1509967419530-da38b4704bc6', 200, 200),
    rating: 5,
    service: 'Radiant Skin Programme',
    review:
      'After three sessions my pigmentation has reduced noticeably. The therapist also gave me a simple home-care routine. Highly recommended.',
    date: 'May 2026',
  },
]

export const averageRating = (): number =>
  Math.round((testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length) * 10) / 10
