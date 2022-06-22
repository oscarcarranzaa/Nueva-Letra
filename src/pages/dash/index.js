import axios from 'axios'
import Layout from 'components/AdmindPanel/Layout'
import LoaderNews from 'components/AdmindPanel/News/LoaderNews'
import MinimalLoader from 'components/Loader'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const limitNews = 4
const DynamicPublishItems = dynamic(
  () => import('components/AdmindPanel/News'),
  {
    ssr: false,
    loading: () => <LoaderNews limits={limitNews} />
  }
)
export default function Dash() {
  const [feedPublish, setFeedPublish] = useState()
  const [querySuccess, setQuerySuccess] = useState(false)
  console.log(feedPublish)
  useEffect(() => {
    document.title = 'CDM - Dashboard'
    axios
      .get(`http://localhost:4000/api/v1/news?limit=${limitNews}`)
      .then((res) => {
        setFeedPublish(res.data)
        setQuerySuccess(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  const publishItems = querySuccess ? (
    <DynamicPublishItems data={feedPublish} />
  ) : (
    <LoaderNews limits={limitNews} />
  )
  return (
    <>
      <Layout>
        <MinimalLoader succes={querySuccess} />
        <div>
          <h1 className="text-3xl text-slate-100 font-semibold">
            Bienvenido, Oscar Andres
          </h1>
        </div>
        <div className="border-b border-white mb-3 mt-10 flex items-center">
          <h4 className="font-base text-slate-300 hover:text-white text-xl">
            Publicaciones Recientes
          </h4>
        </div>
        {publishItems}
      </Layout>
    </>
  )
}
