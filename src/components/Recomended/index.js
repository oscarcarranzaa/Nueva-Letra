import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import useFormat from 'hooks/useFormat'
import CategoryURL from 'components/CategoryURL'

export default function Recomended() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4000/api/v1/news?limit=5')
      const json = await response.json()
      setData(json)
    }
    fetchData()
  }, [])
  return (
    <>
      <div className="mt-52">
        <CategoryURL category="Lo mas nuevo" />
        {data.map((news) => {
          const titleURL = news.title
          const title = useFormat(titleURL)
          const URL = `/${news.category}/${title}_${news.id}`
          return (
            <Link key={news.id} href={URL}>
              <a>
                <div className="grid grid-cols-2 mb-5 gap-1 max-w-lg m-auto hover:underline hover:text-sky-600">
                  <div>
                    <Image
                      src={news.image}
                      width={350}
                      height={180}
                      objectFit="cover"
                      layout="responsive"
                      alt={news.title}
                    ></Image>
                  </div>
                  <div className="font-medium ">
                    <p className="line-clamp-3">{news.title}</p>
                  </div>
                </div>
              </a>
            </Link>
          )
        })}
      </div>
    </>
  )
}
