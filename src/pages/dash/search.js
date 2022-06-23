import axios from 'axios'
import Layout from 'components/AdmindPanel/Layout'
import { useEffect, useState } from 'react'
import FilterNews from 'components/Search/filter'
import { useRouter } from 'next/router'
import News from 'components/AdmindPanel/News'

export default function published() {
  const route = useRouter()
  const [data, setData] = useState()
  const id = route.query.q
  useEffect(() => {
    if (route.isReady) {
      axios.get(`http://localhost:4000/api/v1/search?q=${id}`).then((res) => {
        setData(res.data)
      })
    }
  }, [id])
  return (
    <Layout>
      <FilterNews />
      <h1>{route.query.q}</h1>
      {data !== undefined ? <News data={data} /> : null}
    </Layout>
  )
}
