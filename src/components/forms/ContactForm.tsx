import { useState } from 'react'
import type { FormEvent } from 'react'
import { CircleCheck, Send } from 'lucide-react'
import { submitContactMessage } from '../../services/api'
import type { ContactFormData } from '../../types'
import { validateContact } from '../../utils/validation'
import { Button } from '../ui/Button'
import FormField from './FormField'
import { inputProps } from './inputProps'
import { useForm } from './useForm'

const P = 'contact'
const initial: ContactFormData = { name: '', phone: '', email: '', message: '' }

export default function ContactForm() {
  const { values, errors, handleChange, runValidation, reset } = useForm(P, initial, validateContact)
  const [submitting, setSubmitting] = useState(false)
  const [sentTo, setSentTo] = useState<string | null>(null)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!runValidation()) return
    setSubmitting(true)
    await submitContactMessage(values)
    setSubmitting(false)
    setSentTo(values.name.trim().split(' ')[0])
    reset()
  }

  if (sentTo) {
    return (
      <div role="status" className="flex flex-col items-center rounded-xl border border-burgundy/20 bg-blush p-8 text-center">
        <CircleCheck className="h-12 w-12 text-burgundy" aria-hidden />
        <h3 className="mt-4 text-2xl font-semibold">Thank you, {sentTo}!</h3>
        <p className="mt-2 max-w-sm text-espresso/75">Your message has been received. Our team will get back to you within 24 hours.</p>
        <Button variant="outline" className="mt-6" onClick={() => setSentTo(null)}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <FormField id={`${P}-name`} label="Name" required error={errors.name}>
        <input type="text" autoComplete="name" placeholder="Your full name" value={values.name} onChange={handleChange} {...inputProps(P, 'name', errors.name)} />
      </FormField>
      <FormField id={`${P}-phone`} label="Phone Number" required error={errors.phone}>
        <input type="tel" autoComplete="tel" placeholder="98765 43210" value={values.phone} onChange={handleChange} {...inputProps(P, 'phone', errors.phone)} />
      </FormField>
      <FormField id={`${P}-email`} label="Email" required error={errors.email} className="sm:col-span-2">
        <input type="email" autoComplete="email" placeholder="you@example.com" value={values.email} onChange={handleChange} {...inputProps(P, 'email', errors.email)} />
      </FormField>
      <FormField id={`${P}-message`} label="Message" required error={errors.message} className="sm:col-span-2">
        <textarea rows={5} placeholder="How can we help you?" value={values.message} onChange={handleChange} {...inputProps(P, 'message', errors.message)} />
      </FormField>
      <div className="sm:col-span-2">
        <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
          <Send className="h-4 w-4" aria-hidden /> {submitting ? 'Sending…' : 'Send Message'}
        </Button>
      </div>
    </form>
  )
}
