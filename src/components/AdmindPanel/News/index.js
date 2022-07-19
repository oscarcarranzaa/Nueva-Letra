import useFormatDate from 'hooks/useFormatDate'

import Link from 'next/link'
import useFormat from 'hooks/useFormat'
import PublishMedia from '../PublishMedia'
import Image from 'next/image'
import useCategoryID from 'hooks/useCategoryID'

export default function News({ data }) {
  const news = data.response.metadata
  return (
    <>
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {news.map((publish) => {
          const formatTime = useFormatDate(publish.createdAt, false, '', true)
          const PathURL =
            publish.title === undefined ? '' : useFormat(publish.title)
          const URL = `http://localhost:3000/${publish.category}/${PathURL}_${publish.id}`
          const category = useCategoryID(publish.category_code)
          const categoryName = category[0].name
          return (
            <div
              key={publish.id}
              className="bg-zinc-900 rounded text-white border-2 border-transparent hover:border-sky-600 relative"
            >
              <Link href="/dash/[id]" as={`/dash/${publish.id}`}>
                <a className="h-full block p-2">
                  <figure className="w-full">
                    <Image
                      width={300}
                      height={200}
                      objectFit="cover"
                      layout="responsive"
                      lazyRoot={false}
                      src={publish.image}
                      className="w-full bg-gray-400 aspect-video object-cover"
                    />
                  </figure>

                  <h5 className="line-clamp-2 font-semibold">
                    {publish.title}
                  </h5>
                  <div className="flex text-xs font-medium text-slate-300">
                    <p>{categoryName}</p>
                    <span className="ml-1 mr-1">•</span>
                    <p> Published</p>
                    <span className="ml-1 mr-1">•</span>
                    <p>{formatTime}</p>
                  </div>
                </a>
              </Link>
              <div
                type="button"
                className="absolute top-0 right-0 mt-2 mr-2"
                onClick={() => {}}
              >
                <PublishMedia url={URL} short={true} />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
