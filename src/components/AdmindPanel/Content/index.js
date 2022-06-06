import dynamic from 'next/dynamic'
import TextArea from 'components/AdmindPanel/Input/TextArea'
import styles from 'styles/styles.module.css'
import { useState } from 'react'
const DynamicTextEditor = dynamic(
  () => import('components/AdmindPanel/TextEditor'),
  {
    ssr: false
  }
)
const DynamicAdvanceSettings = dynamic(
  () => import('components/AdmindPanel/AdvancedSettigs'),
  { ssr: false }
)
export default function Content({ data }) {
  const [config, setConfig] = useState(false)
  const text = data.text
  const checkText = text === undefined ? '' : text
  const textReady = checkText.replace(/\\/g, ' ')
  const TextEditorElement =
    data.length === 0 ? null : <DynamicTextEditor content={textReady} />
  const configElemet = config ? styles.slideRight : styles.slideLeft
  const selectLeft = !config ? styles.slideBorder : ''
  const selectRight = config ? styles.slideBorder : ''
  const viewConfig = () => setConfig(true)
  const hiddeConfig = () => setConfig(false)
  return (
    <>
      <div className="col-span-3 pt-0 bg-zinc-800 rounded-lg overflow-hidden">
        <div className="flex w-full justify-around">
          <button
            type="button"
            className={`w-full p-2 hover:bg-slate-700 border-2 border-sky-600 ${selectLeft}`}
            onClick={hiddeConfig}
          >
            General
          </button>
          <button
            type="button"
            className={`w-full p-2 hover:bg-slate-700 border-2 border-sky-600 ${selectRight}`}
            onClick={viewConfig}
          >
            Configuracion
          </button>
        </div>
        <div className={`${styles.slideContent} ${configElemet}`}>
          <div className={styles.slideGeneral}>
            <h5 className="mt-3">Descripcion</h5>
            <div className="h-32 border border-sky-600 rounded mb-3">
              <TextArea dataText={data.description} name="description" />
            </div>
            {TextEditorElement}
          </div>
          <div className={`mt-5 ${styles.slideConfig}`}>
            <DynamicAdvanceSettings />
          </div>
        </div>
      </div>
    </>
  )
}
