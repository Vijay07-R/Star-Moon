import type { AppointmentFormData, ContactFormData } from '../types'

/**
 * Frontend-only submission handlers.
 * Replace the bodies with real HTTP calls (e.g. fetch('/api/appointments', ...))
 * once a backend is available — the components will not need to change.
 */
export interface SubmitResult {
  success: boolean
  reference: string
}

const simulate = (prefix: string): Promise<SubmitResult> =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ success: true, reference: `${prefix}-${Date.now().toString().slice(-6)}` }), 700),
  )

export const submitAppointment = (data: AppointmentFormData): Promise<SubmitResult> => {
  void data
  return simulate('SM')
}

export const submitContactMessage = (data: ContactFormData): Promise<SubmitResult> => {
  void data
  return simulate('MSG')
}
