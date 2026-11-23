import type { AppointmentFormData, ContactFormData, FormErrors } from '../types'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^[+]?[\d\s-]{10,15}$/

const validateName = (v: string) => {
  if (!v.trim()) return 'Please enter your name.'
  if (v.trim().length < 2) return 'Name must be at least 2 characters.'
  if (!/^[a-zA-Z\s.'-]+$/.test(v.trim())) return 'Name can only contain letters and spaces.'
  return undefined
}

const validatePhone = (v: string) => {
  if (!v.trim()) return 'Please enter your phone number.'
  const digits = v.replace(/\D/g, '')
  if (!PHONE_RE.test(v.trim()) || digits.length < 10 || digits.length > 13) return 'Please enter a valid 10-digit phone number.'
  return undefined
}

const validateEmail = (v: string) => {
  if (!v.trim()) return 'Please enter your email address.'
  if (!EMAIL_RE.test(v.trim())) return 'Please enter a valid email address.'
  return undefined
}

/** Returns today's date as YYYY-MM-DD in local time. */
export const todayISO = (): string => {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

const clean = <T,>(errors: FormErrors<T>): FormErrors<T> =>
  Object.fromEntries(Object.entries(errors).filter(([, v]) => Boolean(v))) as FormErrors<T>

export const validateContact = (data: ContactFormData): FormErrors<ContactFormData> =>
  clean({
    name: validateName(data.name),
    phone: validatePhone(data.phone),
    email: validateEmail(data.email),
    message: !data.message.trim()
      ? 'Please enter your message.'
      : data.message.trim().length < 10
        ? 'Message must be at least 10 characters.'
        : undefined,
  })

export const validateAppointment = (data: AppointmentFormData): FormErrors<AppointmentFormData> =>
  clean({
    name: validateName(data.name),
    phone: validatePhone(data.phone),
    email: validateEmail(data.email),
    service: !data.service ? 'Please select a service or package.' : undefined,
    date: !data.date ? 'Please choose a preferred date.' : data.date < todayISO() ? 'Date cannot be in the past.' : undefined,
    time: !data.time ? 'Please choose a preferred time.' : undefined,
    message: data.message.length > 500 ? 'Message must be under 500 characters.' : undefined,
  })
