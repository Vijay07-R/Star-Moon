import type { NavItem } from '../types'

export const siteInfo = {
  name: 'Star Moon',
  tagline: 'Beauty Salon',
  address: 'No. 24, 2nd Avenue, Anna Nagar, Chennai, Tamil Nadu 600040',
  mapQuery: 'Anna Nagar 2nd Avenue, Chennai',
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  whatsapp: '919876543210',
  email: 'hello@starmoonsalon.com',
  hours: [
    { days: 'Monday – Friday', time: '10:00 AM – 8:00 PM' },
    { days: 'Saturday', time: '9:00 AM – 9:00 PM' },
    { days: 'Sunday', time: '10:00 AM – 6:00 PM' },
  ],
  social: {
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
  },
}

export const whatsappLink = (text = 'Hello Star Moon Beauty Salon, I would like to know more about your services.') =>
  `https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent(text)}`

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Beauty Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Beauty Academy', path: '/academy' },
  { label: 'Contact Us', path: '/contact' },
]

export const timeSlots: string[] = [
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
  '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM',
]

export const formatPrice = (value: number): string => `₹${value.toLocaleString('en-IN')}`
