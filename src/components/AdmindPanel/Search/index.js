import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import SearchSvg from 'components/Icons/Search'
import styles from './search.module.css'
import Arrow from 'components/Icons/Arrow'

export default function Search() {
  const route = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [searchFull, setSearchFull] = useState(false)
  const sendSearch = (e) => {
    e.preventDefault()
    if (searchQuery !== '') {
      route.push(`/dash/search?q=${searchQuery}`)
    }
  }
  console.log(searchFull)
  const searchFullContent = searchFull ? styles.searchFullContent : ''
  const showOpen = searchFull ? 'block' : 'hidden'
  const showOpenForm = searchFull ? 'block' : styles.toggleFormSearch
  return (
    <>
      <button
        className={styles.searchButton}
        type="button"
        onClick={() => setSearchFull(true)}
      >
        <SearchSvg width={24} height={24} fill="#fff" />
      </button>
      <form
        onSubmit={sendSearch}
        className={`w-full bg-zinc-900 ${styles.searchForm} ${searchFullContent} ${showOpenForm}`}
      >
        <div className="inline-block h-10 w-full">
          <div className="flex justify-center w-full">
            <div className="bg-zinc-900 flex items-center">
              <button
                type="button"
                onClick={() => setSearchFull(false)}
                className={`ml-3 mr-1 rounded-lg p-2 bg-zinc-700 ${styles.searchClose} ${showOpen}`}
              >
                <Arrow width={24} height={24} fill="#fff" />
              </button>
            </div>
            <div className="flex items-center border border-slate-400 rounded overflow-hidden w-full h-full bg-zinc-900 ">
              <input
                type="text"
                className={`bg-zinc-900 h-full w-full p-1 pl-3 pr-3 ${styles.searchInput}`}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por ID o título"
              />
              <button
                type="submit"
                className="bg-zinc-600 p-2 hover:bg-zinc-700"
              >
                <SearchSvg width={24} height={24} fill="#fff" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
