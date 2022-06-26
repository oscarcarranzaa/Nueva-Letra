import Link from 'next/link'

export default function NewsData({ news }) {
  return (
    <>
      <div>
        {news.map((res) => {
          return (
            <Link
              href={'/[category]/[id]'}
              as={`/${res.category}/${res.id}`}
              key={res.id}
            >
              <a>
                <img src={res.image} key={res.id} />
              </a>
            </Link>
          )
        })}
      </div>
    </>
  )
}
