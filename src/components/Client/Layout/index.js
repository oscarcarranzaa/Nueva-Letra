import Navbar from '../Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="p-2">{children}</main>
    </>
  )
}
