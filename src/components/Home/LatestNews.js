import axios from 'axios'
import useFormat from 'hooks/useFormat'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function lastNews() {
  const [notice, setNotice] = useState([])
  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/news?limit=6').then((res) => {
      setNotice(res.data.response.metadata)
    })
  }, [])
  return (
    <>
      <section className="w-full max-w-7xl">
        <div className="m-auto font-bold mt-12 border-b-2 border-sky-600">
          <p className="inline-block bg-sky-600 text-white pl-2 pr-2">
            Ultimas Noticias
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-2 gap-y-2 max-w-7xl pt-3 m-auto global-grid-layout sm:grid-cols-2 md:grid-cols-3">
          {notice.map((i, index) => {
            const gridSpan = index === 0 ? 'md:col-span-2 md:row-span-2' : ''
            const textSpan = index === 0 ? 'md:text-4xl' : ''
            const titleURL = useFormat(i.title)
            return (
              <div
                key={i.id}
                className={`${gridSpan} w-full h-full bg-slate-100`}
              >
                <div className="w-full ">
                  <Link href={`/${i.category}/${titleURL}_${i.id}`}>
                    <a className="hover:text-sky-600 hover:underline">
                      <Image
                        src={i.image}
                        width={'500px'}
                        height={'300px'}
                        objectFit={'cover'}
                        layout="responsive"
                        className="w-full bg-gray-400"
                      ></Image>

                      <p className={`${textSpan} font-bold line-clamp-3`}>
                        {i.title}
                      </p>
                    </a>
                  </Link>
                  <div className="flex content-center items-center justify-between">
                    <p className="text-slate-600 text-xs">{i.createdAt}</p>
                    <Link href={i.category}>
                      <a className="pl-2 pr-2 rounded border border-sky-600 text-sky-600 mr-2">
                        {i.category}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
