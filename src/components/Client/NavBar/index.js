import FacebookSVG from 'components/Icons/Facebook'
import InstagramSVG from 'components/Icons/Instagram'
import TwitterSVG from 'components/Icons/Twitter'
import YoutubeSVG from 'components/Icons/Youtube'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Categories from './categories'
import styles from './nav.module.css'
import useFormatDate from 'hooks/useFormatDate'
import TimeGet from './getTime'
import { useRouter } from 'next/router'
import BellSVG from 'components/Icons/Bell'
import axios from 'axios'
import SearchClient from '../Search'

export default function Navbar() {
  const { query, pathname } = useRouter()
  const categoryQuery = query.category
  const [openMenu, setOpenMenu] = useState(false)
  const [weather, setWeather] = useState(false)
  const [weatherLoading, setWeatherLoading] = useState(true)
  useEffect(() => {
    const body = document.body
    openMenu
      ? body.classList.add('movilNoScroll')
      : body.classList.remove('movilNoScroll')
  }, [openMenu])

  useEffect(() => {
    setWeatherLoading(true)
    axios
      .get(
        'https://api.weatherapi.com/v1/current.json?key=c717be88b1ac4840950215143220306&q=Choluteca&aqi=no'
      )
      .then((res) => {
        setWeather(res.data)
        setWeatherLoading(false)
      })
  }, [])
  const dateTime = useFormatDate('getObjectLocalTime')
  const categories = Categories()
  const menuToggle = openMenu ? styles.menuOpen : styles.menuClose
  return (
    <>
      <div className="hidden justify-between md:flex">
        <div className={weatherLoading ? 'opacity-0' : 'opacity-100'}>
          <div className="flex items-end">
            {weather && (
              <img
                src={weather.current.condition.icon}
                alt="wheater"
                className="w-12"
              />
            )}
            <p className="text-5xl font-bold">
              {weather && weather.current.temp_c}
            </p>
            <span className="text-base">°C</span>
          </div>
          <p className="text-sm text-center">Choluteca, HN</p>
        </div>
        <div className="w-8/12">
          <div className="bg-slate-400 w-full h-10"></div>
        </div>
        <div>
          <TimeGet timeData={dateTime} />
          <p className="text-xs font-medium">Hora central Hondureña</p>
        </div>
      </div>
      <header className={styles.Navbar}>
        <div className="relative w-full flex items-center justify-between p-2">
          <div className="w-24">
            <Link href={'/'}>
              <a>
                <Image
                  src={'/logo.svg'}
                  width={90}
                  height={60}
                  layout="intrinsic"
                  alt="Nueva letra logo"
                ></Image>
              </a>
            </Link>
          </div>
          <div className="w-full mr-4 flex justify-end md:block md:mr-0 md:w-6/12">
            <SearchClient />
          </div>
          <div className="flex items-center">
            <div className="mr-6 md:mr-0">
              <BellSVG size={32} fill="#000" />
            </div>
            <div className="md:hidden flex">
              <button type="button" onClick={() => setOpenMenu(!openMenu)}>
                <div
                  className={`${styles.buttonBar} ${
                    openMenu ? styles.buttonClose : ''
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>
      </header>
      <nav className={`${menuToggle} ${styles.menuTop}`}>
        <div className={styles.menuLinks}>
          <p className={styles.menuCategory}>Categorías</p>
          {categories.map((category) => {
            const active =
              categoryQuery === category.href && pathname === '/[category]'
                ? styles.categoryActive
                : ''
            return (
              <div
                key={category.id}
                className={`${styles.categoryLinks} ${active}`}
                onClick={() => setOpenMenu(false)}
              >
                <Link href={'/[category]'} as={`/${category.href}`}>
                  <a className="text-sm">{category.name}</a>
                </Link>
              </div>
            )
          })}
        </div>
        <div className="w-1 h-8 bg-slate-500 ml-3 mr-1 rounded opacity-80 hidden md:block">
          <span className="opacity-0">|</span>
        </div>
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
        <p className={styles.menuFollow}>Siguenos en las redes sociales</p>
      </nav>
    </>
  )
}
