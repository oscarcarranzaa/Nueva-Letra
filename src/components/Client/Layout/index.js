import Footer from '../Footer'
import Navbar from '../Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="p-3 md:p-5">{children}</main>
      <Footer />
    </>
  )
}
