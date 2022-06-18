import AdminSidebar from '../Navbar/SideBar'
import AdminNavbar from '../Navbar'

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-6">
      <div className="bg-zinc-800">
        <AdminSidebar />
      </div>
      <div className="col-span-3 lg:col-span-5">
        <AdminNavbar />
        <main className="w-full mt-10 p-2 bg-zinc-700 pt-10 text-white min-h-screen">
          {children}
        </main>
      </div>
    </div>
  )
}
