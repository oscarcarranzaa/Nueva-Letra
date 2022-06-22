import Spinner from 'components/Icons/Spinner'
import styles from './loaderFull.module.css'
export default function LoaderFull() {
  return (
    <div className={styles.ContainerLoader}>
      <div className="w-full h-full flex justify-center relative pointer-events-none">
        <div className="fixed h-screen flex justify-center items-center">
          <div className="animate-spin">
            <Spinner size={32} primaryFill={'#fff'} secondFill={'#ccc'} />
          </div>
        </div>
      </div>
    </div>
  )
}
