import AdminNavbar from '../Navbar'

export default function Layout({ children }) {
  return (
    <div className="flex w-full">
      <AdminNavbar />
      <div className="w-full bg-zinc-700">
        <main className="w-full p-2 pt-20 text-white min-h-screen pb-20 md:pb-0">
          {children}
        </main>
      </div>
    </div>
  )
}
