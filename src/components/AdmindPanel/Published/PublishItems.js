import Link from 'next/link'

export default function PublishItems({ dataPublished }) {
  return (
    <div className="w-full">
      {dataPublished.map((item) => {
        return (
          <div key={item.id} className="w-full">
            <Link href={`/dash/${item.id}`}>
              <a className="text-white flex">
                <div className="w-32 aspect-video">
                  <img src={item.image} />
                </div>
                <p>{item.id}</p>
                <div>
                  <p>{item.title}</p>
                </div>
              </a>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
