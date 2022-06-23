import SettingsSVG from 'components/Icons/Settings'
import Search from 'components/Search'
import Image from 'next/image'
import Link from 'next/link'
import Categories from './categories'

export default function Navbar() {
  const categories = Categories()
  return (
    <header className="w-full">
      <div className="flex justify-between">
        <div>
          <p>35° Choluteca</p>
        </div>
        <div className="w-8/12">
          <div className="bg-slate-400 w-full h-10"></div>
        </div>
        <div>11:45 am</div>
      </div>
      <div className="relative w-full flex items-center justify-between">
        <div className="w-24">
          <Image
            src={'/CDM_logo.png'}
            width={100}
            height={55}
            layout="responsive"
          ></Image>
        </div>
        <div className="w-5/12">
          <Search />
        </div>
        <div>
          <SettingsSVG width={24} height={24} />
        </div>
      </div>
      <div className="flex">
        {categories.map((category) => {
          return (
            <div key={category.id} className="ml-5">
              <Link href={category.href}>
                <a className="font-semibold">{category.name}</a>
              </Link>
            </div>
          )
        })}
      </div>
    </header>
  )
}
