import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import NavBar from 'components/NavBar'
import Footer from 'components/Footer'
import News from 'components/News'

export default function categories() {
  const ruta = useRouter()
  const title = ruta.query.category
  const [categoryData, setCategory] = useState([])
  useEffect(() => {
    if (ruta.asPath !== ruta.route) {
      document.title = `CDM - ${title}`
      fetch(
        `http://localhost:4000/api/v1/news?limit=20&category=${title}`
      ).then((res) => {
        res.json().then((data) => setCategory(data))
        const status = res.status
        if (status === 404) {
          ruta.push('/404')
        }
      })
    }
  }, [ruta])
  return (
    <>
      <NavBar />
      <main>
        <News dataNews={categoryData} title={title} />
      </main>
      <Footer />
    </>
  )
}
