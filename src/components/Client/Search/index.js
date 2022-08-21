import { useEffect, useState } from 'react'
import SearchSvg from 'components/Icons/Search'
import Close from 'components/Icons/Close'
import styles from './search.module.css'
import { useRouter } from 'next/router'
import ResultSearch from './ResultSearch'
import algoliaSearch from 'services/algoliaSearch'
import NoResults from './NoResults'
import Spinner from 'components/Icons/Spinner'

export default function SearchClient() {
  const Router = useRouter()
  const path = Router.asPath.split('#')
  const [search, setSearch] = useState('')
  const [openSearch, setOpenSearch] = useState(false)
  useEffect(() => {
    const body = document.body
    openSearch
      ? body.classList.add('movilNoScroll')
      : body.classList.remove('movilNoScroll')
  }, [openSearch])

  const { resultSearch, loading } = algoliaSearch(search, 'NUEVA_LETRA_SEARCH')

  const closeMovilSearch = () => {
    const pathName = path[0]
    Router.push(pathName, undefined, { shallow: true })
    setOpenSearch(false)
  }
  return (
    <>
      <div className={`${openSearch ? styles.search : ''} relative`}>
        <label>
          <div>
            <div
              className={`${
                !openSearch ? 'flex' : 'hidden'
              } md:hidden hover:bg-slate-200 border border-transparent hover:border-[#0082F888] rounded-full`}
              onClick={() => setOpenSearch(!openSearch)}
            >
              <a href="#search" className="p-2">
                <SearchSvg width={28} height={28} fill={'#000'} />
              </a>
            </div>
            <div
              className={`${
                openSearch
                  ? 'w-full border-b border-slate-400 pb-4 pt-4 bg-slate-100 md:border-0 md:p-0 md:bg-transparent'
                  : 'p-0 bg-transparent border-0 hidden'
              } md:flex`}
            >
              <div className="w-11/12 md:w-full m-auto flex">
                <div className="flex items-center w-full bg-slate-200 rounded-lg border-2 border-[#0082F8] max-w-2xl">
                  <div className={`${loading ? 'animate-spin' : ''} p-1`}>
                    {!loading ? (
                      <SearchSvg width={20} height={20} fill={'#000'} />
                    ) : (
                      <Spinner
                        size={24}
                        secondFill={'#0082F8'}
                        primaryFill={'#555'}
                      />
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder="Buscar algo"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    className="bg-transparent w-full p-2 pl-1"
                  />
                  <button
                    onClick={() => setSearch('')}
                    className={`mr-2 ${
                      search.length === 0 ? 'hidden' : 'block'
                    }`}
                  >
                    <Close size={15} />
                  </button>
                </div>
                <button
                  onClick={closeMovilSearch}
                  className="md:hidden ml-3 text-[#0082F8] font-semibold"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </label>
        <div
          className={`${
            openSearch ? 'flex' : 'hidden md:flex'
          } w-full justify-center absolute md:bg-slate-100 rounded-lg`}
        >
          <div
            className={`${
              search.length > 0 && resultSearch.length > 0 ? 'flex' : 'hidden'
            } w-11/12 mt-3 flex-col`}
          >
            {resultSearch.length > 0
              ? resultSearch.map((result, index) => {
                  return <ResultSearch results={result} key={index} />
                })
              : null}
          </div>
          {resultSearch.length === 0 && search.length > 1 && !loading ? (
            <NoResults query={search} />
          ) : null}
        </div>
      </div>
    </>
  )
}
