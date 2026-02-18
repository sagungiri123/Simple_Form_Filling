import useFormStore from './store/useFormStore'
import Stepper from './components/stepper'
import ProgressBar from './components/progressbar'
import EducationalPage from './pages/Educationalpage'
import ParentsPage from './pages/ParentsPage'
import TempAddressPage from './pages/TempAddressPage'
import PermanentAddressPage from './pages/PermanentAddressPage'
import SuccessPage from './pages/SuccessPage'
import styles from './components/modules/App.module.css'



const PAGES = [
  <EducationalPage />,
  <ParentsPage />,
  <TempAddressPage />,
  <PermanentAddressPage />,
  <SuccessPage />,
]

const App = () => {
  const { currentStep } = useFormStore()
  const showNav = currentStep < 4

  return (
    <div className={styles.app}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.badge}>🎓 Student Portal</div>
        <h1 className={styles.title}>Registration Form</h1>
        <p className={styles.sub}>
          Complete all four sections to submit your application
        </p>
      </header>

      {/* Navigation — hidden on success */}
      {showNav && (
        <>
          <ProgressBar />
          <Stepper />
        </>
      )}

      {/* Active Page */}
      <main className={styles.main} key={currentStep}>
        {PAGES[currentStep]}
      </main>
    </div>
  )
}

export default App