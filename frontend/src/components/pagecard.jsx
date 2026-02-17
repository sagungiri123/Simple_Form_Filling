import styles from './modules/pagecard.module.css'

const PageCard = ({ icon, bgColor, title, subtitle, children }) => (
  <div className={styles.card}>
    <div className={styles.header}>
      <h2 className={styles.title}>
        <span className={styles.icon} style={{ background: bgColor }}>
          {icon}
        </span>
        {title}
      </h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
    {children}
  </div>
)

export default PageCard