import { useState, useCallback } from 'react'
import { hasErrors } from '../assets/validators'

/**
 * useFormStep — manages local error state + field change handler for a form step
 *
 * @param {object}   data        - current field values from Zustand
 * @param {function} updater     - Zustand update action (e.g. updateEducational)
 * @param {function} validateFn  - validator function returning errors object
 */
const useFormStep = (data, updater, validateFn) => {
  const [errors, setErrors] = useState({})

  /** Call on "Next/Submit" — returns true if valid */
  const validate = useCallback(() => {
    const errs = validateFn(data)
    setErrors(errs)
    return !hasErrors(errs)
  }, [data, validateFn])

  /** Generic field change handler — clears that field's error */
  const handleChange = useCallback(
    (field) => (e) => {
      updater({ [field]: e.target.value })
      setErrors((prev) => {
        if (!prev[field]) return prev
        const next = { ...prev }
        delete next[field]
        return next
      })
    },
    [updater]
  )

  /** Manually clear a specific error (e.g. on checkbox toggle) */
  const clearError = useCallback((field) => {
    setErrors((prev) => {
      const next = { ...prev }
      delete next[field]
      return next
    })
  }, [])

  const clearAllErrors = useCallback(() => setErrors({}), [])

  return { errors, validate, handleChange, clearError, clearAllErrors }
}

export default useFormStep