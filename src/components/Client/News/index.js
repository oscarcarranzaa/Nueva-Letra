import useFormatDate from 'hooks/useFormatDate'
import Image from 'next/image'
import Link from 'next/link'
import styles from './News.module.css'

export default function NewsData({ news }) {
  return (
    <>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {news.map((res) => {
          const date = useFormatDate(
            res.createdAt,
            false,
            'D MMMM YYYY, h:mm a',
            true
          )
          return (
            <Link
              href={'/[category]/[id]'}
              as={`/${res.category}/${res.id}`}
              key={res.id}
            >
              <a className={styles.linkNews}>
                <figure className={styles.figureImage}>
                  <Image
                    src={res.image}
                    width={200}
                    height={150}
                    layout="responsive"
                    objectFit="cover"
                  />
                  <div className={styles.imageOpacity}></div>
                  <p className="text-sm font-semibold line-clamp-3 absolute bottom-0 ">
                    {res.title}
                  </p>
                </figure>
                <p className="text-xs font-semibold">{date}</p>
              </a>
            </Link>
          )
        })}
      </div>
    </>
  )
}
