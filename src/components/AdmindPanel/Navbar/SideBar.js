import ClockSVG from 'components/Icons/Clock'
import HomeSvg from 'components/Icons/Home'
import Plus from 'components/Icons/plus'
import PublishedSVG from 'components/Icons/Published'
import RecycleSVG from 'components/Icons/Recycle'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './navbar.module.css'

export default function AdminSidebar({ open }) {
  const { pathname } = useRouter()
  console.log(pathname)
  const dataURL = [
    {
      id: 1,
      title: 'Inicio',
      href: '/dash',
      svg: <HomeSvg size={24} fill="#fff" />
    },
    {
      id: 2,
      title: 'Publicados',
      href: '/dash/published',
      svg: <PublishedSVG size={24} fill="#fff" />
    },
    {
      id: 3,
      title: 'Nuevo',
      href: '/dash/new',
      svg: <Plus size={24} fill="#fff" />
    },
    {
      id: 4,
      title: 'Postergados',
      href: '/dash/papelera',
      svg: <ClockSVG width={24} height={24} fill="#fff" />
    },
    {
      id: 5,
      title: 'Reciclaje',
      href: 'recycle',
      svg: <RecycleSVG size={24} fill="#fff" />
    }
  ]
  const isOpen = open ? '' : styles.navClosed
  return (
    <>
      <div className={`pt-20 pr-3 ${styles.displayMenu} ${isOpen}`}>
        <ul className={styles.menuList}>
          {dataURL.map((link) => {
            const borderCenter = link.id === 3 ? styles.borderCenterMenu : ''
            const hiddenCenter = link.id === 3 ? styles.noneMovil : ''
            const path = pathname === link.href ? styles.pathActive : ''
            return (
              <li key={link.id} className=" mb-1 rounded-r-md">
                <Link href={link.href}>
                  <a className={styles.menuLink}>
                    <div
                      className={`flex justify-center ${styles.menuIconsLink}`}
                    >
                      <div className="flex justify-center">
                        <div className={borderCenter}>{link.svg}</div>
                      </div>

                      <span
                        className={`w-full ${hiddenCenter} ${styles.menuName} ${path}`}
                      >
                        {link.title}
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
