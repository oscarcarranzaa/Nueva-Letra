import Close from 'components/Icons/Close'
import WarnSVG from 'components/Icons/Warn'
import { useState } from 'react'

export default function EmbedInput({ embedClose, embedData }) {
  const [dataEmbed, setDataEmbed] = useState()
  const addEmbed = (e) => {
    setDataEmbed(e.target.value)
  }
  const sendEmbed = () => {
    embedData(dataEmbed)
    embedClose()
  }
  return (
    <>
      <div className="absolute z-20 bg-slate-700 p-5 mr-2 ml-2">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-medium">Insertar elemento</h4>
          <button
            className="hover:bg-slate-600 rounded-full p-3"
            type="button"
            onClick={embedClose}
          >
            <Close size={18} fill="#fff" />
          </button>
        </div>
        <div className="w-full flex justify-center mt-5">
          <textarea
            className="bg-slate-800 w-11/12  p-3"
            placeholder="Inserte un iframe"
            rows={5}
            onChange={addEmbed}
            autoCapitalize="off"
            autoCorrect="off"
            autoComplete="off"
          ></textarea>
        </div>
        <div className="p-5 flex fill-yellow-600">
          <WarnSVG width="18" height="18" />
          <p className="text-sm ml-2 text-yellow-500 font-medium">
            Inserta un elemento iframe cuidadosamente, revisa la sintaxis antes
            de insertarlo
          </p>
        </div>
        <div className="flex justify-end mr-5">
          <button
            type="button"
            className="bg-slate-600 pl-3 pr-3 p-2"
            onClick={sendEmbed}
          >
            Insertar
          </button>
        </div>
      </div>
    </>
  )
}
