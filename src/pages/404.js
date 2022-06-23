import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function NotFount() {
  useEffect(() => {
    document.title = '404 - Not Fount'
  }, [])
  return (
    <>
      <div className="grid md:grid-cols-2 w-11/12 m-auto mt-10">
        <picture className="w-6/12 m-auto md:w-8/12">
          <Image
            src="/404.png"
            width={400}
            height={400}
            objectFit="cover"
            layout="responsive"
          ></Image>
        </picture>
        <div className="md:flex justify-center flex-col">
          <h2 className="text-2xl font-bold text-center md:text-left">
            Ups! no lo hemos encontrado
          </h2>
          <p className="text-lg text-slate-500 text-center md:text-left">
            Lo sentimos, la página que intentas buscar no existe.
          </p>
        </div>
      </div>
      <div className="flex justify-center w-full mt-10">
        <Link href="/">
          <a className="text-sky-600 text-xl hover:underline">
            Ir a la página de inicio
          </a>
        </Link>
      </div>
    </>
  )
}
