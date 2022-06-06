import AdminNavbar from 'components/AdmindPanel/Navbar'
import AdminSidebar from 'components/AdmindPanel/Navbar/SideBar'
import AdminNews from 'components/AdmindPanel/News'
import { useEffect, useState } from 'react'

export default function Dash() {
  const [newsData, setNewsData] = useState([])
  useEffect(() => {
    document.title = 'CDM - Dashboard'
    fetch('http://localhost:4000/api/v1/news?limit=4').then((res) => {
      res.json().then((data) => {
        setNewsData(data)
      })
    })
  }, [])
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
            <AdminNews data={newsData} />
          </main>
        </div>
      </div>
    </>
  )
}
