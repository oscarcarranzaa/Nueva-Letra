import useFetch from 'hooks/useFetch'
import NewsHome from '../NewsHome'
import SectionTitle from '../SectionTitle'

export default function Empty() {
  const { data, loading } = useFetch('/client?limit=5')
  return (
    <>
      <div>
        <div className="flex justify-center">
          <div className="mt-3">
            <h3 className="text-2xl font-semibold">
              Pronto agregaremos contenido para esta categoría
            </h3>
            <div className="flex justify-center mt-2">
              <img
                src={'https://i.ibb.co/1ZWVy16/this-is-fine.gif'}
                alt="Todo está bien"
              />
            </div>
            <h4 className="text-sm font-semibold text-center mt-5">
              Pero acá te presentamos las publicaciones mas recientes...
            </h4>
          </div>
        </div>
      </div>
      <SectionTitle title={'Últimas noticias'} />
      {loading && null}
      {data && <NewsHome data={data.response.metadata} />}
    </>
  )
}
