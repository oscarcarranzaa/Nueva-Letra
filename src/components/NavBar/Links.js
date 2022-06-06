import Link from 'next/link'

const Sourcelinks = [
  {
    id: 1,
    name: 'Deportes',
    href: 'Deportes'
  },
  {
    id: 2,
    name: 'Noticias',
    href: 'Sucesos'
  },
  {
    id: 3,
    name: 'Tecnlogia',
    href: 'Tecnologia'
  },
  {
    id: 4,
    name: 'Recientes',
    href: 'politica'
  },
  {
    id: 5,
    name: 'Dash',
    href: 'dash'
  }
]
export default function LinksTop() {
  return (
    <>
      {Sourcelinks.map((links) => (
        <Link key={links.id} href={`/${links.href}`}>
          <a>{links.name}</a>
        </Link>
      ))}
    </>
  )
}
