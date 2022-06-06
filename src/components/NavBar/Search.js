import SearchSvg from '../Icons/Search'

export default function Search() {
  return (
    <>
      <form className="flex justify-center">
        <input
          name="search"
          type="text"
          autoComplete="off"
          placeholder="Buscar"
          className="h-10 p-2 pl-4 w-full"
        ></input>
        <button type="submit" className="pr-3 pl-3 bg-blue-400">
          <SearchSvg width={'24px'} height={'24px'} fill={'#fff'} />
        </button>
      </form>
    </>
  )
}
