import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import usePagination from 'hooks/usePagination'
import Link from 'next/link'
import ArrowAngle from 'components/Icons/ArrowAngle'

export default function Pagination({ data }) {
  const [pages, setPages] = useState([1])
  const [prev, setPrev] = useState(false)
  const [next, setNext] = useState(false)
  const route = useRouter()
  const pageQuery = Math.abs(route.query.p) || 1
  const totalPages = data.response.details.results
  const limit = data.response.details.limit
  const totalPaginates = Math.ceil(totalPages / limit)
  const thisPage = parseInt(pageQuery) || 1
  useEffect(() => {
    const paginates = usePagination(totalPaginates, thisPage, 5)
    setPages(paginates)
    if (thisPage <= 1) {
      setPrev(true)
    } else {
      setPrev(false)
    }
    if (thisPage >= totalPaginates) {
      setNext(true)
    } else {
      setNext(false)
    }
  }, [thisPage])
  const disablebtn = 'text-gray-200 pointer-events-none'
  const isPrev = prev ? disablebtn : ''
  const isNext = next ? disablebtn : ''
  return (
    <>
      <div className="mb-10 mt-5 flex justify-center">
        <div className="flex">
          <div
            className={`${
              prev
                ? 'cursor-not-allowed bg-slate-300'
                : 'cursor-pointer hover:bg-zinc-600'
            } w-10 h-10 flex justify-center items-center mr-1 bg-zinc-800 rounded-full`}
          >
            <Link
              href={`/${route.query.category}?p=${
                thisPage <= 1 ? 1 : thisPage - 1
              }`}
            >
              <a
                className={`${isPrev} -rotate-90 w-full h-full flex justify-center items-center`}
              >
                <ArrowAngle
                  width="20"
                  height="20"
                  fill={prev ? '#999' : '#fff'}
                />
              </a>
            </Link>
          </div>
          <div className="flex">
            {pages.map((page) => {
              return (
                <div
                  key={page}
                  className={`${
                    thisPage === page
                      ? 'bg-zinc-400 hover:bg-zinc-400 pointer-events-none'
                      : ' hover:bg-zinc-200'
                  }  ml-1 mr-1 rounded-full flex w-10 h-10 border border-zinc-700`}
                >
                  <Link href={`/${route.query.category}?p=${page}`}>
                    <a className="text-slate-800 w-full flex justify-center items-center font-bold">
                      {page}
                    </a>
                  </Link>
                </div>
              )
            })}
          </div>
          <div
            className={`${
              next
                ? 'cursor-not-allowed bg-slate-300'
                : 'cursor-pointer hover:bg-zinc-600'
            } w-10 h-10 flex justify-center items-center ml-1 bg-zinc-800 rounded-full`}
          >
            <Link
              href={`/${route.query.category}?p=${
                thisPage === totalPages ? totalPages : thisPage + 1
              }`}
            >
              <a
                className={`${isNext} rotate-90 w-full h-full flex justify-center items-center`}
              >
                <ArrowAngle
                  width="20"
                  height="20"
                  fill={next ? '#999' : '#fff'}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
