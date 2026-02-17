import useFormStore from '../store/useFormStore'
import { STEPS } from '../assets/constants'
import styles from './modules/stepper.module.css'

const Stepper = () => {
  const { currentStep, completedSteps, setStep } = useFormStore()

  const handleStepClick = (stepId) => {
    if (completedSteps.includes(stepId)) {
      setStep(stepId)
    }
  }

  return (
    <div className={styles.stepper}>
      {STEPS.map((step, i) => {
        const isActive    = currentStep === step.id
        const isCompleted = completedSteps.includes(step.id) && !isActive
        const isClickable = completedSteps.includes(step.id)

        return (
          <div className={styles.stepItem} key={step.id}>
            <button
              className={`${styles.stepBtn} ${isClickable ? styles.clickable : ''}`}
              onClick={() => handleStepClick(step.id)}
              title={isClickable ? `Go back to ${step.label}` : step.label}
            >
              <div
                className={`
                  ${styles.stepCircle}
                  ${isActive    ? styles.active    : ''}
                  ${isCompleted ? styles.completed : ''}
                `}
              >
                {isCompleted ? '✓' : step.id + 1}
              </div>
              <span
                className={`
                  ${styles.stepLabel}
                  ${isActive    ? styles.labelActive    : ''}
                  ${isCompleted ? styles.labelCompleted : ''}
                `}
              >
                {step.label}
              </span>
            </button>

            {i < STEPS.length - 1 && (
              <div
                className={`
                  ${styles.stepLine}
                  ${isCompleted ? styles.lineDone : ''}
                `}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Stepper