import FacebookSVG from 'components/Icons/Facebook'
import InstagramSVG from 'components/Icons/Instagram'
import SettingsSVG from 'components/Icons/Settings'
import TwitterSVG from 'components/Icons/twitter'
import YoutubeSVG from 'components/Icons/Youtube'
import Search from 'components/Search'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Categories from './categories'
import styles from './nav.module.css'
import useFormatDate from 'hooks/useFormatDate'
import dayjs from 'dayjs'
import toObject from 'dayjs/plugin/toObject'

export default function Navbar() {
  dayjs.extend(toObject)
  const [time, setTime] = useState({})
  const categories = Categories()
  useEffect(() => {
    const updateTime = setInterval(() => {
      const timeObject = useFormatDate('getObjectLocalTime')
      setTime(timeObject)
    }, 1000)
    return () => clearInterval(updateTime)
  }, [])
  const nanData = Object.keys(time).length === 0 ? 'hidden' : ''
  return (
    <>
      <div className="hidden justify-between md:flex">
        <div>
          <div className="flex items-end">
            <img src="/116.webp" alt="wheater" className="w-12" />
            <p className="text-5xl font-bold">36</p>
            <span className="text-base">°C</span>
          </div>
          <p className="text-sm text-center">Choluteca, HN</p>
        </div>
        <div className="w-8/12">
          <div className="bg-slate-400 w-full h-10"></div>
        </div>
        <div>
          <div className={nanData}>
            <div className="flex text-4xl font-bold">
              <p>{time.hour}</p>
              <div className={styles.clockAnimation}>:</div>
              <p>{time.minutes}</p>
              <span className="text-base">{time.timeHour}</span>
            </div>
            <div className="text-xs font-bold">{`${time.day} de ${time.month} del ${time.year}`}</div>
          </div>
          <p className="text-xs font-medium">Hora central Hondureña</p>
        </div>
      </div>
      <header className={styles.Navbar}>
        <div className="relative w-full flex items-center justify-between p-2">
          <div className="w-24">
            <Link href={'/'}>
              <a>
                <Image
                  src={'/CDM_logo.png'}
                  width={100}
                  height={55}
                  layout="intrinsic"
                ></Image>
              </a>
            </Link>
          </div>
          <div className="w-5/12">
            <Search />
          </div>
          <div>
            <SettingsSVG width={24} height={24} />
          </div>
        </div>
      </header>
      <div className="flex items-center mb-5 p-2 bg-slate-200">
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
        <div className="w-1 h-8 bg-slate-500 ml-3 mr-1 rounded opacity-80">
          <span className="opacity-0">|</span>
        </div>
        <div className="flex flex-wrap  mt-1 ">
          {categories.map((category) => {
            return (
              <div key={category.id} className={styles.categoryLinks}>
                <Link href={'/[category]'} as={`/${category.href}`}>
                  <a className="font-semibold p-1 text-sm">{category.name}</a>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
