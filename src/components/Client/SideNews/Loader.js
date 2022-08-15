import styles from './side.module.css'

export default function LoaderSide({ limits }) {
  const defaultLimits = limits || 4
  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-1">
      {Array(defaultLimits)
        .fill(0)
        .map((_, i) => {
          return (
            <div className={styles.card} key={i}>
              <div className={styles.imageBox}></div>
              <div>
                <div className={styles.titleBox}></div>
                <div className={styles.titleBox}></div>
              </div>
            </div>
          )
        })}
    </div>
  )
}
