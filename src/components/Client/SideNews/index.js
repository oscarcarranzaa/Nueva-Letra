import useCategoryID from 'hooks/useCategoryID'
import slugify from 'slugify'
import Link from 'next/link'
import Img from 'components/Img'

export default function SideNews({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 md:gap-1 gap-2">
      {data.map((res) => {
        const titleUrl = slugify(res.title, { lower: true })
        const category = useCategoryID(res.category_code)
        const categoryValue = category[0].value
        return (
          <Link
            href={'/[category]/[id]'}
            as={`/${categoryValue}/${titleUrl}_${res.id}`}
            key={res.id}
          >
            <a className="flex gap-1 bg-slate-200 p-1 rounded hover:underline hover:text-sky-700">
              <div className="w-5/12 block">
                <Img
                  src={res.images}
                  decoding="async"
                  width={350}
                  height={200}
                />
              </div>
              <div className="w-7/12">
                <p className="text-sm font-bold line-clamp-2">{res.title}</p>
                <p className="text-xs line-clamp-2 font-semibold lg:text-sm">
                  {res.description}
                </p>
              </div>
            </a>
          </Link>
        )
      })}
    </div>
  )
}
