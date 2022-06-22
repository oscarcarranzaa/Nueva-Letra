import styles from './loader.module.css'
export default function LoaderNews({ limits }) {
  const defaultLimits = limits || 4
  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array(defaultLimits)
        .fill(0)
        .map((_, i) => {
          return (
            <div className={styles.card} key={i}>
              <div className={styles.imageBox}></div>
              <div className={styles.titleBox}></div>
              <div className={styles.contentChilds}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )
        })}
    </div>
  )
}
