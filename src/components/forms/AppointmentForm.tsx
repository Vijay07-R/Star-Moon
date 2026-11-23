import { useState } from 'react'
import type { FormEvent } from 'react'
import { CalendarCheck, CircleCheck } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { getPackageById, packages } from '../../data/packages'
import { getServiceById, services } from '../../data/services'
import { timeSlots } from '../../data/site'
import { submitAppointment } from '../../services/api'
import type { AppointmentFormData } from '../../types'
import { todayISO, validateAppointment } from '../../utils/validation'
import { Button } from '../ui/Button'
import FormField from './FormField'
import { inputProps } from './inputProps'
import { useForm } from './useForm'

const P = 'appt'
const initial: AppointmentFormData = { name: '', phone: '', email: '', service: '', date: '', time: '', message: '' }

const itemName = (id: string) => getServiceById(id)?.name ?? getPackageById(id)?.name ?? id

interface Confirmation {
  reference: string
  data: AppointmentFormData
}

export default function AppointmentForm() {
  const [params] = useSearchParams()
  const preselected = params.get('service') ?? ''
  const isKnownItem = Boolean(getServiceById(preselected) || getPackageById(preselected))
  // Pre-select a service/package when arriving from a "Book Now" button.
  const { values, errors, handleChange, runValidation, reset } = useForm(
    P,
    { ...initial, service: isKnownItem ? preselected : '' },
    validateAppointment,
  )
  const [submitting, setSubmitting] = useState(false)
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!runValidation()) return
    setSubmitting(true)
    const result = await submitAppointment(values)
    setSubmitting(false)
    setConfirmation({ reference: result.reference, data: values })
    reset(initial)
  }

  if (confirmation) {
    const { data, reference } = confirmation
    const formattedDate = new Date(`${data.date}T00:00:00`).toLocaleDateString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    return (
      <div role="status" className="rounded-xl border border-emerald-deep/20 bg-emerald-soft p-6 text-center md:p-10">
        <CircleCheck className="mx-auto h-14 w-14 text-emerald-deep" aria-hidden />
        <h3 className="mt-4 text-2xl font-semibold md:text-3xl">Appointment Request Received!</h3>
        <p className="mx-auto mt-2 max-w-md text-forest/75">
          Thank you, {data.name.trim().split(' ')[0]}. We will call you on {data.phone} shortly to confirm your booking.
        </p>
        <dl className="mx-auto mt-6 grid max-w-md gap-3 rounded-lg bg-white p-5 text-left text-[15px]">
          {[
            ['Reference', reference],
            ['Service', itemName(data.service)],
            ['Date', formattedDate],
            ['Time', data.time],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 border-b border-forest/5 pb-2 last:border-0 last:pb-0">
              <dt className="text-forest/60">{k}</dt>
              <dd className="text-right font-medium">{v}</dd>
            </div>
          ))}
        </dl>
        <Button variant="outline" className="mt-7" onClick={() => setConfirmation(null)}>
          Book another appointment
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <FormField id={`${P}-name`} label="Customer Name" required error={errors.name}>
        <input type="text" autoComplete="name" placeholder="Your full name" value={values.name} onChange={handleChange} {...inputProps(P, 'name', errors.name)} />
      </FormField>
      <FormField id={`${P}-phone`} label="Phone Number" required error={errors.phone}>
        <input type="tel" autoComplete="tel" placeholder="98765 43210" value={values.phone} onChange={handleChange} {...inputProps(P, 'phone', errors.phone)} />
      </FormField>
      <FormField id={`${P}-email`} label="Email Address" required error={errors.email}>
        <input type="email" autoComplete="email" placeholder="you@example.com" value={values.email} onChange={handleChange} {...inputProps(P, 'email', errors.email)} />
      </FormField>
      <FormField id={`${P}-service`} label="Select Service" required error={errors.service}>
        <select value={values.service} onChange={handleChange} {...inputProps(P, 'service', errors.service)}>
          <option value="">Choose a service or package</option>
          <optgroup label="Beauty Services">
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </optgroup>
          <optgroup label="Offers & Packages">
            {packages.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </optgroup>
        </select>
      </FormField>
      <FormField id={`${P}-date`} label="Preferred Date" required error={errors.date}>
        <input type="date" min={todayISO()} value={values.date} onChange={handleChange} {...inputProps(P, 'date', errors.date)} />
      </FormField>
      <FormField id={`${P}-time`} label="Preferred Time" required error={errors.time}>
        <select value={values.time} onChange={handleChange} {...inputProps(P, 'time', errors.time)}>
          <option value="">Choose a time slot</option>
          {timeSlots.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </FormField>
      <FormField id={`${P}-message`} label="Additional Message" error={errors.message} className="sm:col-span-2">
        <textarea
          rows={4}
          maxLength={500}
          placeholder="Any special requests, skin or hair concerns, or the number of people in your group"
          value={values.message}
          onChange={handleChange}
          {...inputProps(P, 'message', errors.message)}
        />
      </FormField>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-forest/60">
          Fields marked <span className="text-gold-dark">*</span> are required.
        </p>
        <Button type="submit" size="lg" disabled={submitting}>
          <CalendarCheck className="h-5 w-5" aria-hidden /> {submitting ? 'Submitting…' : 'Submit Appointment'}
        </Button>
      </div>
    </form>
  )
}
