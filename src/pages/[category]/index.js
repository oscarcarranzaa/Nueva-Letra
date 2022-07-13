import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from 'components/Client/Layout'
import axios from 'axios'
import dynamic from 'next/dynamic'
import useCategoryID from 'hooks/useCategoryID'
import LoaderNews from 'components/Client/News/Loader'
import NewsData from 'components/Client/News'
import Empty from 'components/Client/Empty'

const DynamicPagination = dynamic(
  () => import('components/client/Pagination'),
  {
    ssr: false
  }
)
export default function categories() {
  const route = useRouter()
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const [empty, setEmpty] = useState(false)

  const { query, isReady } = useRouter()

  const category = query.category
  const page = query.p || 1
  const limit = 12
  const categoryID = useCategoryID(category)

  useEffect(() => {
    if (isReady) {
      setLoading(true)
      setEmpty(false)
      axios
        .get(`/client?c=${category}&limit=${limit}&p=${page}`)
        .then((res) => {
          setData(res.data)
          setLoading(false)
        })
        .catch(() => {
          if (typeof categoryID === 'object') {
            setEmpty(true)
          } else {
            route.push('/404')
          }
        })
    }
  }, [category])
  const PAGINATION = loading ? null : <DynamicPagination data={data} />
  return (
    <>
      <Layout>
        <h3 className="text-xl font-semibold mb-2">
          {!isReady ? null : `Resultados de ${categoryID[0].name}...`}
        </h3>
        {loading ? (
          empty ? (
            <Empty />
          ) : (
            <LoaderNews limits={4} />
          )
        ) : (
          <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
            <NewsData news={data.response.metadata} />
          </div>
        )}
        {PAGINATION}
      </Layout>
    </>
  )
}
