import WarnSVG from 'components/Icons/Warn'

export default function Sensitive() {
  return (
    <>
      <div className="pt-2 pb-2 flex items-center">
        <div>
          <WarnSVG width={15} height={15} fill={'#ffcc00'} />
        </div>
        <div className="flex ml-1">
          <small>
            Esta publicación se ha marcado como contenido sensible, se
            recomienda discrepción.
            <a className="text-sky-600"> más información</a>
          </small>
        </div>
      </div>
    </>
  )
}
