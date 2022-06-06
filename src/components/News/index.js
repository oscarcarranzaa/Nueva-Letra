import Image from 'next/image'
import Link from 'next/link'
import useFormat from 'hooks/useFormat'

export default function News({ dataNews, title }) {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold mt-14">Resultados de {title}...</h1>
      </div>
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-5">
        {dataNews.map((news) => {
          const titleURL = useFormat(news.title)
          return (
            <div key={news.id} className="hover:text-sky-600 hover:underline">
              <Link href={`/${news.category}/${titleURL}_${news.id}`}>
                <a>
                  <div className="relative">
                    <Image
                      src={news.image}
                      width={400}
                      height={250}
                      layout="responsive"
                      objectFit="cover"
                    ></Image>
                    <p className="absolute bottom-0 text-sm bg-sky-600 text-white pr-5 pl-2">
                      {news.category}
                    </p>
                  </div>

                  <h1 className="text-sm md:text-lg font-medium line-clamp-3">
                    {news.title}
                  </h1>
                </a>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}
