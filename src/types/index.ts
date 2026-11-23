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

export interface PriceItem {
  name: string
  /** Display string, e.g. '₹500', '₹3,500 – ₹5,000' */
  price: string
  note?: string
}

export interface PriceCategory {
  id: string
  title: string
  items: PriceItem[]
  footnote?: string
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

export type GalleryCategory = 'bridal' | 'hair' | 'transformations'

export interface GalleryImage {
  id: number
  src: string
  title: string
  category: GalleryCategory
  /** CSS object-position for the square thumbnail crop, e.g. '50% 20%' to keep faces in frame */
  position?: string
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
