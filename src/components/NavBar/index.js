import Image from 'next/image'
import Link from 'next/link'
import LinksTop from './Links'
import Search from './Search'
import Settings from './Settings'

export default function NavBar() {
  return (
    <>
      <header className="bg-zinc-800">
        <div className="w-32">
          <Image
            src="/CDM_logo.png"
            width={180}
            height={100}
            layout="responsive"
            objectFit="cover"
          ></Image>
        </div>
      </header>
    </>
  )
}
