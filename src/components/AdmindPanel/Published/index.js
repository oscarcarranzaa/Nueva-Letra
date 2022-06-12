import { useState, useEffect } from 'react'
import axios from 'axios'
import dynamic from 'next/dynamic'

const DynamicPublishItems = dynamic(() => import('../News'), {
  ssr: false
})

export default function PublishedData() {
  const [feedPublish, setFeedPublish] = useState()
  const [querySuccess, setQuerySuccess] = useState(false)
  useEffect(() => {
    document.title = 'CDM - Publicaciones'
    axios
      .get('http://localhost:4000/api/v1/news?limit=4')
      .then((res) => {
        setFeedPublish(res.data)
        setQuerySuccess(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  console.log(feedPublish)
  const publishItems = querySuccess ? (
    <DynamicPublishItems data={feedPublish} />
  ) : null
  return <>{publishItems}</>
}
