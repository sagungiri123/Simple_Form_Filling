import useFormStore from '../store/useFormStore'
import styles from '../components/modules/SuccessPage.module.css'

const SuccessPage = () => {
  const { educational, parents, temporary, permanent, resetForm } = useFormStore()

  const finalCity = permanent.sameAsTemp ? temporary.city : permanent.city

  const summary = [
    { label: 'Student Name',   value: educational.fullName   || '—' },
    { label: 'Degree',         value: educational.degree     || '—' },
    { label: 'Branch',         value: educational.branch     || '—' },
    { label: 'Institution',    value: educational.institution || '—' },
    { label: "Father's Name",  value: parents.fatherName     || '—' },
    { label: "Mother's Name",  value: parents.motherName     || '—' },
    { label: 'Temp. City',     value: temporary.city         || '—' },
    { label: 'Perm. City',     value: finalCity              || '—' },
    { label: 'Annual Income',  value: parents.annualIncome   || '—' },
    { label: 'Current Year',   value: educational.year       || '—' },
  ]

  return (
    <div className={styles.wrapper}>
      <div className={styles.successIcon}>🎉</div>
      <h2 className={styles.title}>Application Submitted!</h2>
      <p className={styles.subtitle}>
        Your details have been successfully recorded. Here's a summary of your submission.
      </p>

      <div className={styles.summaryGrid}>
        {summary.map(({ label, value }) => (
          <div key={label} className={styles.chip}>
            <div className={styles.chipLabel}>{label}</div>
            <div className={styles.chipValue}>{value}</div>
          </div>
        ))}
      </div>

      <button className={styles.resetBtn} onClick={resetForm}>
        ↩ Start New Application
      </button>
    </div>
  )
}

export default SuccessPage