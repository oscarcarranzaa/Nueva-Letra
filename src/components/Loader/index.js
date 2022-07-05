import styles from './styles.module.css'

export default function MinimalLoader({ succes }) {
  const loaded = succes ? styles.loaderWidth : styles.loaderFinish
  return (
    <>
      <div className={styles.loaderConten}>
        <div className={loaded}></div>
      </div>
    </>
  )
}
