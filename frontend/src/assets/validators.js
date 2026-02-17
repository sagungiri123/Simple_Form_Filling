// ── Validation Rules ──────────────────────────────────────────────────────────

export const validateEducational = (data) => {
  const errors = {}

  if (!data.fullName?.trim())
    errors.fullName = 'Full name is required'

  if (!data.dob)
    errors.dob = 'Date of birth is required'

  if (!data.gender)
    errors.gender = 'Please select a gender'

  if (!data.institution?.trim())
    errors.institution = 'Institution name is required'

  if (!data.degree)
    errors.degree = 'Please select a degree'

  if (!data.branch?.trim())
    errors.branch = 'Branch / Specialization is required'

  if (!data.year)
    errors.year = 'Please select current year'

  if (data.cgpa && (isNaN(data.cgpa) || data.cgpa < 0 || data.cgpa > 10))
    errors.cgpa = 'CGPA must be between 0 and 10'

  if (data.passYear && (data.passYear < 1990 || data.passYear > new Date().getFullYear()))
    errors.passYear = 'Enter a valid passing year'

  return errors
}

export const validateParents = (data) => {
  const errors = {}

  if (!data.fatherName?.trim())
    errors.fatherName = "Father's name is required"

  if (!data.motherName?.trim())
    errors.motherName = "Mother's name is required"

  if (data.fatherContact && !/^\d{10}$/.test(data.fatherContact))
    errors.fatherContact = 'Enter a valid 10-digit number'

  if (data.motherContact && !/^\d{10}$/.test(data.motherContact))
    errors.motherContact = 'Enter a valid 10-digit number'

  if (data.fatherEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.fatherEmail))
    errors.fatherEmail = 'Enter a valid email address'

  if (data.motherEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.motherEmail))
    errors.motherEmail = 'Enter a valid email address'

  return errors
}

export const validateAddress = (data) => {
  const errors = {}

  if (!data.line1?.trim())
    errors.line1 = 'Address line 1 is required'

  if (!data.city?.trim())
    errors.city = 'City is required'

  if (!data.state)
    errors.state = 'Please select a state'

  if (!data.pincode || !/^\d{6}$/.test(data.pincode))
    errors.pincode = 'Enter a valid 6-digit PIN code'

  return errors
}

// ── Helper ────────────────────────────────────────────────────────────────────
export const hasErrors = (errors) => Object.keys(errors).length > 0