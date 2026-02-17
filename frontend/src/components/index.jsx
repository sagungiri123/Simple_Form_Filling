import styles from './modules/ui.module.css'

// ── Field Wrapper ─────────────────────────────────────────────────────────────
export const Field = ({ label, required, error, children, className = '' }) => (
  <div className={`${styles.field} ${className}`}>
    {label && (
      <label className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
    )}
    {children}
    {error && <span className={styles.errorMsg}>⚠ {error}</span>}
  </div>
)

// ── Input ─────────────────────────────────────────────────────────────────────
export const Input = ({ error, className = '', ...props }) => (
  <input
    className={`${styles.input} ${error ? styles.inputError : ''} ${className}`}
    {...props}
  />
)

// ── Select ────────────────────────────────────────────────────────────────────
export const Select = ({ error, children, className = '', ...props }) => (
  <select
    className={`${styles.select} ${error ? styles.inputError : ''} ${className}`}
    {...props}
  >
    {children}
  </select>
)

// ── Toggle Checkbox Row ───────────────────────────────────────────────────────
export const ToggleRow = ({ checked, onChange, label }) => (
  <label className={styles.toggleRow} onClick={onChange}>
    <div className={`${styles.toggleBox} ${checked ? styles.toggleBoxChecked : ''}`}>
      {checked && <span className={styles.checkmark}>✓</span>}
    </div>
    <span className={styles.toggleText}>{label}</span>
  </label>
)

// ── Section Label Divider ─────────────────────────────────────────────────────
export const SectionLabel = ({ children }) => (
  <div className={styles.sectionLabel}>{children}</div>
)

// ── Button Row ────────────────────────────────────────────────────────────────
export const ButtonRow = ({ children }) => (
  <div className={styles.btnRow}>{children}</div>
)

// ── Buttons ───────────────────────────────────────────────────────────────────
export const Button = ({ variant = 'primary', className = '', children, ...props }) => {
  const variantClass = {
    primary: styles.btnPrimary,
    ghost:   styles.btnGhost,
    success: styles.btnSuccess,
  }[variant] || styles.btnPrimary

  return (
    <button className={`${styles.btn} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  )
}