import Image from 'next/image'
import Link from 'next/link'
import useCategoryID from 'hooks/useCategoryID'
import useFormatDate from 'hooks/useFormatDate'
import styles from './News.module.css'

export default function NewsData({ news }) {
  return (
    <>
      {news.map((res) => {
        const date = useFormatDate(
          res.createdAt,
          false,
          'D MMMM YYYY, h:mm a',
          true
        )
        const category = useCategoryID(res.category_code)
        const categoryValue = category[0].value
        const categoryName = category[0].name
        return (
          <Link
            href={'/[category]/[id]'}
            as={`/${categoryValue}/${res.id}`}
            key={res.id}
          >
            <a className={styles.linkNews}>
              <figure className={styles.figureImage}>
                <Image
                  src={res.image}
                  width={150}
                  height={100}
                  layout="responsive"
                  objectFit="cover"
                />
              </figure>
              <p className="text-sm md:text-base font-semibold line-clamp-2 ">
                {res.title}
              </p>
              <div className="flex text-xs font-semibold justify-between text-slate-800">
                <p>{date}</p>
                <p className="capitalize">{categoryName}</p>
              </div>
            </a>
          </Link>
        )
      })}
    </>
  )
}
