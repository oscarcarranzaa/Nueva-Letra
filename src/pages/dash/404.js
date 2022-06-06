import NotFount from 'components/AdmindPanel/404'
import AdminNavbar from 'components/AdmindPanel/Navbar'
import AdminSidebar from 'components/AdmindPanel/Navbar/SideBar'

export default function NotFountPage() {
  return (
    <>
      <div className="grid grid-cols-4 lg:grid-cols-6">
        <div className="bg-zinc-800 pb-40">
          <AdminSidebar />
        </div>
        <div className="col-span-3 lg:col-span-5">
          <AdminNavbar />
          <main className="w-full mt-10 p-2 bg-zinc-700 pt-10 text-white h-screen">
            <NotFount />
          </main>
        </div>
      </div>
    </>
  )
}
