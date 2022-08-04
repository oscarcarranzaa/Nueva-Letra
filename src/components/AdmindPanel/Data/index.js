import ImageData from '../UpdateImage'
import { useState } from 'react'
import CategoryData from './CategoryData'
import Tags from '../Tags'
import styles from 'styles/styles.module.css'
import AdvanceSettings from 'components/AdmindPanel/AdvancedSettigs'
import PinnedSVG from 'components/Icons/Pinned'
import PinnedSlash from 'components/Icons/PinnedSlash'
import WarnSVG from 'components/Icons/Warn'

export default function Data({ dataNews, act }) {
  const data = dataNews
  console.log(data.images)
  const [pinned, setPinned] = useState(dataNews.pinned)
  const [sensitive, setSensitive] = useState(dataNews.sensitive)
  const [config, setConfig] = useState(false)
  const configElemet = config ? styles.slideRight : styles.slideLeft
  const selectLeft = !config ? styles.slideBorder : ''
  const selectRight = config ? styles.slideBorder : ''
  const viewConfig = () => setConfig(true)
  const hiddeConfig = () => setConfig(false)
  const pinneStyle = pinned ? 'bg-sky-600' : 'bg-transparent hover:bg-blue-900'
  const sensitiveStyle = sensitive
    ? 'bg-yellow-500'
    : 'bg-transparent hover:bg-yellow-900'
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
              <ImageData img={dataNews.images} action={act} />
            </div>
            <div className="flex mt-2">
              <div className="flex flex-col items-center mr-3">
                <label>
                  <div
                    className={`p-1 border-2 border-sky-600 rounded-full cursor-pointer ${pinneStyle} hover:scale-105`}
                  >
                    <input
                      type="checkbox"
                      checked={pinned}
                      name="pinned"
                      onChange={() => setPinned(!pinned)}
                      className="hidden"
                    />
                    {pinned === true ? (
                      <PinnedSlash size={24} fill={'#fff'} />
                    ) : (
                      <PinnedSVG size={24} fill={'#fff'} />
                    )}
                  </div>
                </label>
                <small className="text-slate-200">Fijar</small>
              </div>
              <div className="flex flex-col items-center">
                <label>
                  <div
                    className={`p-1 border-2 border-yellow-500 rounded-full cursor-pointer ${sensitiveStyle} hover:scale-105`}
                  >
                    <input
                      type="checkbox"
                      checked={sensitive}
                      name="sensitive"
                      onChange={() => setSensitive(!sensitive)}
                      className="hidden"
                    />
                    {pinned === true ? (
                      <WarnSVG width={24} height={24} fill={'#fff'} />
                    ) : (
                      <WarnSVG width={24} height={24} fill={'#fff'} />
                    )}
                  </div>
                </label>
                <small className="text-slate-200">Sencible</small>
              </div>
            </div>
            <div className="mt-5">
              <CategoryData categoryData={data.category_code} />
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
