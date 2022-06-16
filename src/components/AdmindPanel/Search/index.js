import { useState } from 'react'
import { useRouter } from 'next/router'
import SearchSvg from 'components/Icons/Search'

export default function Search() {
  const route = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const sendSearch = (e) => {
    e.preventDefault()
    if (searchQuery !== '') {
      route.push(`/dash/search?q=${searchQuery}`)
    }
  }
  return (
    <div className="mb-10">
      <form onSubmit={sendSearch} className="flex justify-center">
        <div className="inline-block h-10 w-3/5">
          <div className="flex items-center border border-white rounded overflow-hidden h-full">
            <input
              type="text"
              className=" bg-zinc-900 h-full w-full p-1 pl-3 pr-3"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por ID o título"
            />
            <button type="submit" className="bg-zinc-600 p-2 hover:bg-zinc-700">
              <SearchSvg width={24} height={24} fill="#fff" />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
