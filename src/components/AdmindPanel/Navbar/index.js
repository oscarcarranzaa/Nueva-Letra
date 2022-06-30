import { useState } from 'react'
import dynamic from 'next/dynamic'
import styles from './navbar.module.css'
import ArrowTriangle from 'components/Icons/ArrowTriangle'
import Bars from 'components/Icons/Bars'
import Spinner from 'components/Icons/Spinner'
import Image from 'next/image'
import Search from '../../Search'
import AdminSidebar from './SideBar'
import Link from 'next/link'

const ProfileDynamic = dynamic(() => import('./AdminSettings'), {
  ssr: false,
  loading: () => (
    <div className="absolute top-12 bg-zinc-900 border border-white rounded-md w-52 right-0 z-10">
      <div className="flex items-center mt-3 flex-col">
        <div className="rounded-full overflow-hidden w-24 h-24 bg-slate-400"></div>
        <div className="mb-3 mt-3 animate-spin">
          <Spinner size={32} primaryFill={'#fff'} secondFill={'#ccc'} />
        </div>
      </div>
    </div>
  )
})
export default function AdminNavbar() {
  const [profileOpen, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(true)
  const toggleProfile = () => {
    setOpen(!profileOpen)
  }
  const ArrowDown = profileOpen ? 'rotate-180' : ''
  console.log(openMenu)
  return (
    <>
      <header
        className={`bg-zinc-900 text-white fixed right-0 left-0 z-20 p-2 pb-3 pt-3 border-b border-zinc-500 ${styles.headerNav}`}
      >
        <div className="relative w-full flex items-center justify-between">
          <div className="flex items-center">
            <button
              type="button"
              className={`ml-2 mr-5 p-1 ${styles.menuBarsButton}`}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <Bars color="#fff" />
            </button>
            <div className="w-24">
              <Link href="/dash">
                <a>
                  <Image
                    src="/static/images/CDM_logo.png"
                    width={100}
                    height={50}
                    layout="responsive"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="w-5/12">
            <Search />
          </div>
          <div className="flex justify-end">
            <div className={styles.navbarNick}>
              <p>
                <b>Oscar Andres</b>
              </p>
              <div className="flex ml-3 relative" onClick={toggleProfile}>
                <div className="rounded-full overflow-hidden block w-8 h-8 select-none">
                  <Image
                    src="/avatar.jpg"
                    width={32}
                    height={32}
                    objectFit="cover"
                  />
                </div>
                <div
                  className={`flex items-center ml-1 ${ArrowDown} transition-transform`}
                >
                  <ArrowTriangle width="15" height="15" fill="#fff" />
                </div>
                {profileOpen ? <ProfileDynamic /> : null}
              </div>
            </div>
          </div>
        </div>
      </header>
      <AdminSidebar open={openMenu} />
    </>
  )
}
