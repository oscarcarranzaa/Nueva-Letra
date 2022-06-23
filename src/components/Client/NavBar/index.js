import FacebookSVG from 'components/Icons/Facebook'
import SettingsSVG from 'components/Icons/Settings'
import Search from 'components/Search'
import Image from 'next/image'
import Link from 'next/link'
import Categories from './categories'
import styles from './nav.module.css'

export default function Navbar() {
  const categories = Categories()
  return (
    <>
      <div className="flex justify-between">
        <div>
          <p>35° Choluteca</p>
        </div>
        <div className="w-8/12">
          <div className="bg-slate-400 w-full h-10"></div>
        </div>
        <div>11:45 am</div>
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
      <div className="flex justify-between">
        <div>
          <FacebookSVG width={42} height={42} />
        </div>
        <div className="flex flex-wrap  mt-1">
          {categories.map((category) => {
            return (
              <div key={category.id} className={styles.categoryLinks}>
                <Link href={category.href}>
                  <a className="font-semibold p-1">{category.name}</a>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
