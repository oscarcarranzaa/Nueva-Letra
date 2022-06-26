import Image from 'next/image'
import Link from 'next/link'

export default function SideNews() {
  const data = [
    {
      id: 1,
      topic: 'Clima Hoy',
      title: 'Hola como estas',
      href: '/clima-hoy'
    },
    {
      id: 2,
      topic: 'Lectura Hoy',
      title: 'Lectura del dia de hoy',
      href: '/lectura-hoy'
    }
  ]
  return (
    <>
      {data.map((res) => {
        return (
          <Link href={'/[category]'} as={res.href} key={res.id}>
            <a className="flex gap-1 bg-slate-200 p-1 mb-1 rounded hover:underline">
              <div className="w-5/12 aspect-video">
                <Image
                  src={'http://localhost:4000/upload/7e2k-5LYC-images.jfif'}
                  width={150}
                  height={100}
                  layout="responsive"
                  objectFit="cover"
                ></Image>
              </div>
              <div className="w-7/12">
                <p className="text-sm font-bold underline">{res.topic}</p>
                <p className="text-xs line-clamp-2 font-semibold lg:text-sm">
                  {res.title}
                </p>
              </div>
            </a>
          </Link>
        )
      })}
      <div>ads</div>
    </>
  )
}
