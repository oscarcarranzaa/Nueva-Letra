import { useState, useEffect } from 'react'
import axios from 'axios'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Layout from 'components/AdmindPanel/Layout'

const DynamicPublishItems = dynamic(
  () => import('components/AdmindPanel/News'),
  {
    ssr: false
  }
)
const DynamicPagination = dynamic(
  () => import('components/AdmindPanel/Pagination'),
  {
    ssr: false
  }
)
export default function published() {
  const [feedPublish, setFeedPublish] = useState()
  const [querySuccess, setQuerySuccess] = useState(false)
  const routerFeed = useRouter()
  const query = routerFeed.query.p
  useEffect(() => {
    document.title = 'CDM - Publicaciones'
    console.log(routerFeed.asPath, routerFeed.route, routerFeed.isReady)
    if (routerFeed.isReady) {
      const defaultQuery = query || 1
      axios
        .get(`http://localhost:4000/api/v1/news?limit=12&p=${defaultQuery}`)
        .then((res) => {
          setFeedPublish(res.data)
          setQuerySuccess(true)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [query])
  const publishItems = querySuccess ? (
    <DynamicPublishItems data={feedPublish} />
  ) : null
  const pagination = querySuccess ? (
    <DynamicPagination data={feedPublish} />
  ) : null
  return (
    <Layout>
      {publishItems}
      {pagination}
    </Layout>
  )
}
