import '../styles/globals.css'
import '../components/Client/Slider/slick.css'
import axios from 'axios'

axios.defaults.baseURL = process.env.BACKEND_API + '/api/v1'
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
