import AdvertisingSVG from 'components/Icons/Advertising'
import CallTelephone from 'components/Icons/CallTelephone'
import FacebookSVG from 'components/Icons/Facebook'
import InstagramSVG from 'components/Icons/Instagram'
import LocationSVG from 'components/Icons/Location'
import TwitterSVG from 'components/Icons/Twitter'
import YoutubeSVG from 'components/Icons/Youtube'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer>
      <div className="bg-slate-200 pt-8">
        <div className={styles.FooterData}>
          <div>
            <h2 className={styles.FooterTitle}>Contactos</h2>
            <div className="flex justify-center">
              <ul className={styles.Contacs}>
                <li>
                  <LocationSVG size={20} />
                  <p>Concepción de María, Choluteca, HN</p>
                </li>
                <li>
                  <CallTelephone size={20} />
                  <p>+(504) 98158066</p>
                </li>
                <li>
                  <div className={styles.AdsCont}>
                    <a
                      href="https://wa.me/32319828?text=holaaa"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.AdsContac}
                    >
                      <div className="mr-2">
                        <AdvertisingSVG size={24} fill={'#fff'} />
                      </div>
                      Anunciate aquí
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className={styles.Newsletter}>
              <h3 className={styles.FooterTitle}>
                ¡Suscríbete a la newsletter!
              </h3>
              <small>
                <p className={styles.NewsletterInfo}>
                  Recibirás correos para que siempre estés informado lo más
                  rápido posible sobre noticias de tu interés.
                  <strong> ¡NADA DE SPAM!</strong>
                </p>
              </small>
              <form>
                <div className={styles.NewsletterInput}>
                  <input type="email" required={true} placeholder="Tú correo" />
                  <button type="submit">Suscribirme</button>
                </div>
              </form>
            </div>
          </div>
          <div className="">
            <h3 className={styles.FooterTitle}>Redes sociales</h3>
            <div className={styles.socialMedia}>
              <a href="#" target="_blank" rel="noreferrer">
                <FacebookSVG size={24} />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <YoutubeSVG size={24} />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <InstagramSVG size={24} />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <TwitterSVG size={24} />
              </a>
            </div>
          </div>
        </div>
        <p className="w-full text-center text-sm font-semibold mt-3">
          Hecho con mucho ♥ - © 2022
        </p>
      </div>
    </footer>
  )
}
