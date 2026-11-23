/** Shared props for inputs so error state and aria wiring stay consistent. */
export const inputProps = (prefix: string, name: string, error?: string) => ({
  id: `${prefix}-${name}`,
  name,
  'aria-invalid': Boolean(error),
  'aria-describedby': error ? `${prefix}-${name}-error` : undefined,
  className: `form-input ${error ? 'form-input-error' : ''}`,
})
