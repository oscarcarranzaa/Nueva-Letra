import Footer from 'components/Footer'
import NextHeat from '../components/Head/NextHeat'
import PrimaryHome from '../components/Home'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <>
      <NextHeat />
      <NavBar />
      <main>
        <PrimaryHome />
      </main>
      <Footer />
    </>
  )
}
