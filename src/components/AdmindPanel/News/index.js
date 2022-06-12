import useFormatDate from 'hooks/useFormatDate'
import Link from 'next/link'

export default function AdminNews({ data }) {
  const news = data
  return (
    <>
      <div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4">
        {news.map((publish) => {
          const dateFormat = useFormatDate(publish.createdAt, 'yyy')
          console.log(dateFormat)
          return (
            <div
              key={publish.id}
              className="bg-zinc-900 text-white border-2 rounded border-transparent hover:border-sky-600"
            >
              <Link href="/dash/[id]" as={`/dash/${publish.id}`}>
                <a className="h-full block p-3">
                  <figure className="w-full h-40">
                    <img
                      src={publish.image}
                      objectFit={'cover'}
                      className="w-full bg-gray-400 h-full object-cover"
                    />
                  </figure>

                  <h5 className="line-clamp-2 text-sm font-medium">
                    {publish.title}
                  </h5>
                  <p className="text-xs">{publish.createdAt}</p>
                  <div className="flex justify-between">
                    <p>{publish.category}</p>
                    <p>Published</p>
                  </div>
                </a>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}
