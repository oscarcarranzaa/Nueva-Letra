import { useState, useEffect } from 'react'
import axios from 'axios'
import dynamic from 'next/dynamic'
import AdminNavbar from 'components/AdmindPanel/Navbar'
import AdminSidebar from 'components/AdmindPanel/Navbar/SideBar'
import Search from 'components/AdmindPanel/Search'
import { useRouter } from 'next/router'

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
    <div className="grid grid-cols-4 lg:grid-cols-6">
      <div className="bg-zinc-800">
        <AdminSidebar />
      </div>
      <div className="col-span-3 lg:col-span-5">
        <AdminNavbar />
        <main className="w-full mt-10 p-2 bg-zinc-700 pt-10 text-white min-h-screen">
          <Search />
          {publishItems}
          {pagination}
        </main>
      </div>
    </div>
  )
}
