import { useRef } from 'react'
export default function CopyLink({ id }) {
  const refInput = useRef()
  const refButton = useRef()
  const copy = () => {
    const copyCurrent = refInput.current
    copyCurrent.select()
    document.execCommand('copy')
    navigator.clipboard.writeText(copyCurrent.value)
    refButton.current.innerHTML = 'Copiado'
  }
  return (
    <>
      <div className="text-slate-300">
        <p>
          <strong>Enlace</strong>
        </p>
      </div>
      <div className="flex h-8 justify-between border border-zinc-500 rounded overflow-hidden">
        <div className="p-1 text-ellipsis overflow-hidden bg-black">
          <input
            type="text"
            value={id}
            readOnly
            disabled={true}
            className="hidden"
            ref={refInput}
          />
          <a href={id} target="_blank" rel="noreferrer" className="">
            {id}
          </a>
        </div>
        <div className="fill-slate-200 flex items-center bg-slate-900">
          <button
            type="button"
            className="p-2 w-20 hover:bg-slate-700 hover:cursor-pointer"
            onClick={copy}
            ref={refButton}
          >
            Copiar
          </button>
        </div>
      </div>
    </>
  )
}
