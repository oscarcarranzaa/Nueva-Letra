import Image from 'next/image'
import Link from 'next/link'
import LinksTop from './Links'
import Search from './Search'
import Settings from './Settings'

export default function NavBar() {
  return (
    <>
      <header>
        <div className="pt-6 pb-6 flex justify-between items-center pl-5 pr-5">
          <div>
            <Link href="/">
              <a className="hover:cursor-pointer">
                <Image
                  src="/CDM_logo.png"
                  alt="logo"
                  width={175}
                  height={100}
                  objectFit="cover"
                />
              </a>
            </Link>
          </div>
          <div className="w-6/12 max-w-lg">
            <div className="border-black rounded-md border overflow-hidden shadow-md">
              <Search />
            </div>
          </div>
          <div>
            <Settings />
          </div>
        </div>
        <div className="w-full hidden md:flex justify-between">
          <LinksTop />
        </div>
      </header>
    </>
  )
}
