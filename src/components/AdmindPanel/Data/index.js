import ImageData from '../UpdateImage'
import { useState, useEffect } from 'react'
import CategoryData from './CategoryData'
import Tags from '../Tags'
import styles from 'styles/styles.module.css'
import AdvanceSettings from 'components/AdmindPanel/AdvancedSettigs'

export default function Data({ dataNews, act }) {
  const [data, setData] = useState([])
  const [config, setConfig] = useState(false)
  const configElemet = config ? styles.slideRight : styles.slideLeft
  const selectLeft = !config ? styles.slideBorder : ''
  const selectRight = config ? styles.slideBorder : ''
  const viewConfig = () => setConfig(true)
  const hiddeConfig = () => setConfig(false)
  useEffect(() => {
    setData(dataNews)
  }, [dataNews])

  const img = data.image || '/'
  return (
    <>
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <div className="flex w-full justify-around">
          <button
            type="button"
            className={`w-full p-2 hover:bg-slate-700  ${selectLeft}`}
            onClick={hiddeConfig}
          >
            General
          </button>
          <button
            type="button"
            className={`w-full p-2 hover:bg-slate-700  ${selectRight}`}
            onClick={viewConfig}
          >
            Configuracion
          </button>
        </div>
        <div className={`${styles.slideContent} ${configElemet} mt-5`}>
          <div className={styles.slideGeneral}>
            <div className="bg-gray-400 w-full">
              <ImageData img={img} action={act} />
            </div>
            <div className="mt-10">
              <CategoryData categoryData={data.category} />
              <Tags
                use={'PALABRAS CLAVES'}
                name="keywords"
                required={true}
                dataTags={data.keywords}
              />
              <Tags
                use={'#HASTAGS (OPCIONAL)'}
                symbol="#"
                name="hashtag"
                required={false}
                dataTags={data.hashtag}
              />
            </div>
          </div>
          <div className={`mt-5 ${styles.slideConfig}`}>
            <AdvanceSettings action={act} />
          </div>
        </div>
      </div>
    </>
  )
}
