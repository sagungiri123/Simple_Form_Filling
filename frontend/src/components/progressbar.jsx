import useFormStore from '../store/useFormStore'
import styles from './modules/progressbar.module.css'

const ProgressBar = () => {
  const { getProgressPercent } = useFormStore()
  const percent = getProgressPercent()

  return (
    <div className={styles.wrap}>
      <div className={styles.meta}>
        <span>Overall Progress</span>
        <span className={styles.percent}>{percent}% complete</span>
      </div>
      <div className={styles.track}>
        <div
          className={styles.fill}
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  )
}

export default ProgressBar