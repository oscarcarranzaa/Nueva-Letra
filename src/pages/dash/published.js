import { useState, useEffect } from 'react'
import MinimalLoader from 'components/Loader'
import axios from 'axios'
import { useRouter } from 'next/router'
import Layout from 'components/AdmindPanel/Layout'
import LoaderNews from 'components/AdmindPanel/News/LoaderNews'
import useAuthDash from 'hooks/useAuthFetch'
import News from 'components/AdmindPanel/News'
import Pagination from 'components/AdmindPanel/Pagination'

export default function published() {
  const [feedPublish, setFeedPublish] = useState()
  const [querySuccess, setQuerySuccess] = useState(false)
  const routerFeed = useRouter()
  const query = routerFeed.query.p

  const limitNews = 12
  const { token } = useAuthDash()
  useEffect(() => {
    document.title = 'CDM - Publicaciones'
    if (routerFeed.isReady && token) {
      const defaultQuery = query || 1
      setQuerySuccess(false)
      axios({
        method: 'GET',
        url: `/news?limit=${limitNews}&p=${defaultQuery}`,
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
        .then((res) => {
          setFeedPublish(res.data)
          setQuerySuccess(true)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [query, token])
  return (
    <Layout>
      <MinimalLoader succes={querySuccess} />
      {!querySuccess && <LoaderNews limits={limitNews} />}
      {feedPublish && <News data={feedPublish} />}
      {feedPublish && <Pagination data={feedPublish} />}
    </Layout>
  )
}
export async function getServerSideProps(context) {
  const token = context.req.cookies.updateToken
  if (!token) {
    return {
      redirect: {
        destination: '/dash/login',
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}
