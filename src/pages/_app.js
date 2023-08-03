import '../styles/globals.css'
import '../components/Client/Slider/slick.css'
import axios from 'axios'

axios.defaults.baseURL = 'https://backend-nueva-letra.oscarcarranza.com/api/v1'
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export default MyApp
