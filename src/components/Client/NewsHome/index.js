import Image from 'next/image'
import Link from 'next/link'
import useCategoryID from 'hooks/useCategoryID'
import useFormat from 'hooks/useFormat'

export default function NewsHome({ data }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {data.map((news, index) => {
          const lastNewsBig =
            index === 0
              ? 'col-span-2 row-span-2'
              : 'col-span-1 col-row-2 md:col-span-1 md:col-row-1'
          const category = useCategoryID(news.category_code)
          const categoryValue = category[0].value
          const urlNews = useFormat(news.title)
          return (
            <Link
              key={news.id}
              href={'/[category]/[id]'}
              as={`/${categoryValue}/${urlNews}_${news.id}`}
            >
              <a className={`${lastNewsBig} hover:text-sky-600`}>
                <figure className="aspect-video block">
                  <Image
                    src={news.image}
                    width={160}
                    height={100}
                    layout="responsive"
                    objectFit="cover"
                    alt={news.title}
                  />
                </figure>
                <h3
                  className={`${
                    index === 0 ? 'text-lg font-bold' : 'text-sm font-medium'
                  } line-clamp-2`}
                >
                  {news.title}
                </h3>
              </a>
            </Link>
          )
        })}
      </div>
    </>
  )
}
