import NoResultsSVG from 'components/Icons/NoResults'

export default function NoResults({ query }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center pb-10 pt-10">
        <div className="mb-5">
          <NoResultsSVG size={50} />
        </div>
        <p className="text-center">
          No se encontraron resultados de
          <b> &quot;{query}&quot;</b>
        </p>
      </div>
    </>
  )
}
