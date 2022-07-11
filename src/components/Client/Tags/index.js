import Link from 'next/link'

export default function Tags({ tags }) {
  return (
    <div className="flex mt-2">
      {tags.map((data, index) => {
        return (
          <div key={index} className="mr-2">
            <Link href={`/search?q=${data}`}>
              <a className="border-2 border-slate-300 p-1 pr-3 pl-3 rounded-lg font-semibold hover:border-sky-500 cursor-pointer">
                {data}
              </a>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
