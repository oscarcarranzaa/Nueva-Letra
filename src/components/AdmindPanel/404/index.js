import Image from 'next/image'
import Link from 'next/link'

export default function NotFount() {
  return (
    <>
      <div className="w-10/12 m-auto mt-10 flex items-center flex-col">
        <Image src="/404.svg" width={250} height={250}></Image>
        <h1 className="text-2xl text-center">
          <b>&ldquo;Perdido en el espacio&ldquo;</b> <br /> No se puede
          encontrar la página que está buscando.
        </h1>
        <Link href={'/dash'}>
          <a className="mt-5 border-2 border-sky-600 font-medium p-1 rounded hover:bg-sky-600">
            LLévame de vuelta
          </a>
        </Link>
      </div>
    </>
  )
}
