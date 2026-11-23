import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  label: string
  path: string
}

export type ServiceCategory = 'hair' | 'skin' | 'makeup' | 'nails' | 'spa' | 'wellness'

export interface FilterOption<T extends string> {
  value: T | 'all'
  label: string
}

export interface Service {
  id: string
  name: string
  category: ServiceCategory
  image: string
  shortDescription: string
  description: string
  duration: string
  startingPrice: number
  highlights: string[]
  icon: LucideIcon
}

export interface Treatment {
  name: string
  description: string
  duration: string
  price: number
}

export type PackageCategory = 'bridal' | 'hair' | 'skincare' | 'facial' | 'combo' | 'seasonal'

export interface BeautyPackage {
  id: string
  name: string
  category: PackageCategory
  originalPrice: number
  offerPrice: number
  description: string
  includes: string[]
  duration: string
  tag?: string
}

export interface Testimonial {
  id: number
  name: string
  photo: string
  rating: number
  service: string
  review: string
  date: string
}

export type GalleryCategory = 'bridal' | 'hair' | 'skincare' | 'interior' | 'transformations'

export interface GalleryImage {
  id: number
  src: string
  title: string
  category: GalleryCategory
}

export interface TeamMember {
  name: string
  role: string
  experience: string
  photo: string
}

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export interface ContactFormData {
  name: string
  phone: string
  email: string
  message: string
}

export interface AppointmentFormData {
  name: string
  phone: string
  email: string
  service: string
  date: string
  time: string
  message: string
}

export type FormErrors<T> = Partial<Record<keyof T, string>>
