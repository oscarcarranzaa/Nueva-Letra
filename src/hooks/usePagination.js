export default function usePagination(totalPaginates, thisPage, size) {
  const defaultPaginates = size || 7
  const pages =
    totalPaginates <= defaultPaginates ? totalPaginates : defaultPaginates
  const sidePaginate = Math.floor(pages / 2) + 1
  const pages2 = Math.floor(pages / 2)

  const pagesMap = Array(pages)
    .fill(1)
    .map((_, i) => {
      const prevPage = thisPage <= pages2 ? thisPage : sidePaginate
      const nextPage =
        thisPage >= totalPaginates - pages2
          ? thisPage - (totalPaginates - pages2)
          : 0
      console.log(prevPage, nextPage)
      const nextPageFix = totalPaginates === 2 ? 0 : nextPage
      return thisPage - prevPage + i + 1 - nextPageFix
    })
  return pagesMap
}
