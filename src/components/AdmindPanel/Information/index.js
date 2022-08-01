import PublishMedia from '../PublishMedia'
import slugify from 'slugify'
import useFormatDate from 'hooks/useFormatDate'
import useCategoryID from 'hooks/useCategoryID'

export default function Information({ idNews }) {
  const PathURL =
    idNews.title === undefined ? '' : slugify(idNews.title, { lower: true })
  const category = useCategoryID(idNews.category_code)
  const categoryValue = category ? category[0].value : 'category'
  const URL = `http://localhost:3000/${categoryValue}/${PathURL}_${idNews.id}`
  const createDate = idNews.createdAt
  const publishCreateDate = useFormatDate(
    createDate,
    false,
    'DD/MM/YYYY h:mm a'
  )
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
            <p className=" pt-1 mt-2">{publishCreateDate}</p>
          </div>
        </div>
      </div>
    </>
  )
}
