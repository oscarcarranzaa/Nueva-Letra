import Link from 'next/link'

export default function CategoryTitle({ title, href }) {
  return (
    <>
      <div className="w-full mb-2">
        <Link href={'/[category]'} as={`/${href}`}>
          <a className="text-lg font-semibold bg-slate-200 p-1 pl-2 pr-2 rounded hover:bg-slate-300 ">
            {title}
          </a>
        </Link>
      </div>
    </>
  )
}
