import useCategoryID from 'hooks/useCategoryID'
import useFormat from 'hooks/useFormat'
import Image from 'next/image'
import Link from 'next/link'

export default function SideNews({ data }) {
  return (
    <>
      {data.map((res) => {
        const titleUrl = useFormat(res.title)
        const category = useCategoryID(res.category_code)
        const categoryValue = category[0].value
        return (
          <Link
            href={'/[category]/[id]'}
            as={`/${categoryValue}/${titleUrl}_${res.id}`}
            key={res.id}
          >
            <a className="flex gap-1 bg-slate-200 p-1 rounded hover:underline">
              <div className="w-5/12 block">
                <Image
                  src={res.image}
                  width={170}
                  height={100}
                  layout="responsive"
                  objectFit="cover"
                ></Image>
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
