import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from 'components/Client/Layout'
import axios from 'axios'
import dynamic from 'next/dynamic'
import useCategoryID from 'hooks/useCategoryID'

const DynamicNewsData = dynamic(() => import('components/Client/News'), {
  ssr: false
})
const DynamicPagination = dynamic(
  () => import('components/client/Pagination'),
  {
    ssr: false
  }
)
export default function categories() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const route = useRouter()
  const { query, isReady } = useRouter()
  const category = query.category
  const page = query.p || 1
  const limit = 12
  useEffect(() => {
    if (isReady) {
      setLoading(true)
      axios
        .get(
          `http://localhost:4000/api/v1/client?c=${category}&limit=${limit}&p=${page}`
        )
        .then((res) => {
          setData(res.data)
          setLoading(false)
        })
        .catch(() => {
          route.push('/404')
        })
    }
  }, [query])
  const DATA_NEWS = loading ? null : (
    <DynamicNewsData news={data.response.metadata} />
  )
  const PAGINATION = loading ? null : <DynamicPagination data={data} />
  return (
    <>
      <Layout>
        <h2 className="text-2xl">
          Resultados de <span>{category}</span>...
        </h2>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-5">
          {DATA_NEWS}
        </div>
        {PAGINATION}
      </Layout>
    </>
  )
}
