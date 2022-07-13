import { useState, useEffect } from 'react'
import MinimalLoader from 'components/Loader'
import axios from 'axios'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Layout from 'components/AdmindPanel/Layout'
import LoaderNews from 'components/AdmindPanel/News/LoaderNews'

const limitNews = 12
const DynamicPublishItems = dynamic(
  () => import('components/AdmindPanel/News'),
  {
    ssr: false,
    loading: () => <LoaderNews limits={limitNews} />
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
      setQuerySuccess(false)
      axios
        .get(`/news?limit=12&p=${defaultQuery}`)
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
  ) : (
    <LoaderNews limits={limitNews} />
  )
  const pagination = querySuccess ? (
    <DynamicPagination data={feedPublish} />
  ) : null
  return (
    <Layout>
      <MinimalLoader succes={querySuccess} />
      {publishItems}
      {pagination}
    </Layout>
  )
}
