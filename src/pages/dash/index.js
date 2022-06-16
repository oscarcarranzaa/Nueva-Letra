import axios from 'axios'
import AdminNavbar from 'components/AdmindPanel/Navbar'
import AdminSidebar from 'components/AdmindPanel/Navbar/SideBar'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const DynamicPublishItems = dynamic(
  () => import('components/AdmindPanel/News'),
  {
    ssr: false
  }
)

export default function Dash() {
  const [feedPublish, setFeedPublish] = useState()
  const [querySuccess, setQuerySuccess] = useState(false)
  console.log(feedPublish)
  useEffect(() => {
    document.title = 'CDM - Dashboard'
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
  const publishItems = querySuccess ? (
    <DynamicPublishItems data={feedPublish} />
  ) : null
  return (
    <>
      <div className="grid grid-cols-4 lg:grid-cols-6">
        <div className="bg-zinc-800 pb-40">
          <AdminSidebar />
        </div>
        <div className="col-span-3 lg:col-span-5">
          <AdminNavbar />
          <main className="w-full mt-10 p-2 bg-zinc-700 pt-10 text-white h-screen">
            <div className="border-b border-white mb-3 mt-10 flex items-center">
              <h4 className="font-base text-slate-300 hover:text-white text-xl">
                Publicaciones Recientes
              </h4>
            </div>
            {publishItems}
          </main>
        </div>
      </div>
    </>
  )
}
