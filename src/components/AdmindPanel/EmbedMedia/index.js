import EmbedSVG from 'components/Icons/Embed'
import { useState, useEffect } from 'react'
import styles from 'styles/styles.module.css'
import EmbedAdd from './EmbedAdd'
import NoEmbed from './NoEmbed'

export default function EmbedMedia({ embedData }) {
  const [valueEmbed, setValueEmbed] = useState('')
  const [openEmbed, setOpenEmbed] = useState(false)
  useEffect(() => {
    const embedStr = embedData || ''
    setValueEmbed(embedStr)
  }, [embedData])

  const handleEmbedOpen = () => setOpenEmbed(!openEmbed)
  const handleEmbedData = (data) => {
    setValueEmbed(data)
  }
  const handleEmbedReset = () => {
    setValueEmbed('')
  }
  const isEmbed = openEmbed ? (
    <EmbedAdd embedOpen={handleEmbedOpen} embedData={handleEmbedData} />
  ) : null
  const noEmbed =
    valueEmbed === undefined || valueEmbed === '' ? <NoEmbed /> : null
  const innerEmbed = () => {
    return { __html: valueEmbed }
  }
  return (
    <>
      <div className="w-full mt-6 p-3">
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium">
            Código de inserción
            <span className="text-xs font-light"> (BETA).</span>
          </p>
        </div>
        <textarea name="embed" value={valueEmbed} className="hidden"></textarea>
        <div className="relative mt-5">
          {noEmbed}
          <div
            dangerouslySetInnerHTML={innerEmbed()}
            className={styles.responsiveIframe}
            style={{ paddingBottom: '56.25%' }}
          ></div>
        </div>
        <div className="flex justify-end mt-2">
          <button
            type="button"
            onClick={handleEmbedReset}
            className="flex items-center p-2 bg-slate-600 mr-5"
          >
            <p>Quitar</p>
          </button>
          <button
            type="button"
            onClick={handleEmbedOpen}
            className="flex items-center p-2 bg-sky-600"
          >
            <div>
              <EmbedSVG size={20} fill="#fff" />
            </div>
            <p className="ml-2">Nuevo</p>
          </button>
        </div>
      </div>
      {isEmbed}
    </>
  )
}
