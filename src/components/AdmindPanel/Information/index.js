import PublishMedia from '../PublishMedia'
import useFormat from 'hooks/useFormat'
import useFormatDate from 'hooks/useFormatDate'
import { format, isValid } from 'date-fns'

export default function Information({ idNews }) {
  const PathURL = idNews.title === undefined ? '' : useFormat(idNews.title)
  const URL = `http://localhost:3000/${idNews.category}/${PathURL}_${idNews.id}`
  const createDate = idNews.createdAt
  const dateFormat = useFormatDate(createDate, false)
  const created = isValid(new Date(dateFormat))
    ? format(new Date(dateFormat), 'dd/MM/yyyy HH:mm')
    : '---'
  return (
    <>
      <div className="w-full bg-zinc-800 rounded mb-3 p-5">
        <div className="flex items-center justify-between">
          <h1 className="font-medium text-lg mb-2 text-slate-300">
            Informacion
          </h1>
          <PublishMedia url={URL} />
        </div>
        <div className="flex justify-between">
          <div>
            <h3>ID</h3>
            <p className="pt-1 mt-2">{idNews.id}</p>
          </div>
          <div>
            <h3>Estado</h3>
            <p className="text-green-500 pt-1 mt-2">Publicado</p>
          </div>
          <div>
            <h3>Creado</h3>
            <p className=" pt-1 mt-2">{created}</p>
          </div>
        </div>
      </div>
    </>
  )
}
