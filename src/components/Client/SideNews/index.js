import useCategoryID from 'hooks/useCategoryID'
import useFormat from 'hooks/useFormat'
import Link from 'next/link'

export default function SideNews({ data }) {
  return (
    <>
      {data.map((res) => {
        const titleUrl = useFormat(res.title)
        const category = useCategoryID(res.category_code)
        const categoryValue = category[0].value
        const image = res.images.filter((w) => w.width === 320)[0]
        return (
          <Link
            href={'/[category]/[id]'}
            as={`/${categoryValue}/${titleUrl}_${res.id}`}
            key={res.id}
          >
            <a className="flex gap-1 bg-slate-200 p-1 rounded hover:underline">
              <div className="w-5/12 block">
                <img src={image.src} decoding="async" />
              </div>
              <div className="w-7/12">
                <p className="text-sm font-bold underline">{res.id}</p>
                <p className="text-xs line-clamp-2 font-semibold lg:text-sm">
                  {res.title}
                </p>
              </div>
            </a>
          </Link>
        )
      })}
    </>
  )
}
