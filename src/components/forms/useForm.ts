import { useState } from 'react'
import type { ChangeEvent } from 'react'
import type { FormErrors } from '../../types'

/** Minimal form-state hook: values, per-field errors and change handling. */
export function useForm<T extends object>(idPrefix: string, initial: T, validate: (values: T) => FormErrors<T>) {
  const [values, setValues] = useState<T>(initial)
  const [errors, setErrors] = useState<FormErrors<T>>({})

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    // Clear a field's error as soon as the user edits it.
    if (errors[name as keyof T]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const runValidation = (): boolean => {
    const result = validate(values)
    setErrors(result)
    const firstInvalid = Object.keys(result)[0]
    if (firstInvalid) document.getElementById(`${idPrefix}-${firstInvalid}`)?.focus()
    return Object.keys(result).length === 0
  }

  const reset = (next: T = initial) => {
    setValues(next)
    setErrors({})
  }

  return { values, errors, handleChange, runValidation, reset }
}
