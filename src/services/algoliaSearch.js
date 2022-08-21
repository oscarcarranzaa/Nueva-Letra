import { useState, useEffect } from 'react'
import algoliasearch from 'algoliasearch'

export default function algoliaSearch(search, indexName) {
  const [resultSearch, setResultSearch] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (search.length > 0) {
      setLoading(true)
      const client = algoliasearch(
        'DQO9OK23U1',
        '974c8a98c22d318c97c33924eb2035ba'
      )
      const index = client.initIndex(indexName)
      index.search(search, { hitsPerPage: 3 }).then(({ hits }) => {
        // console.log(hits[)
        hits.length > 0 ? setResultSearch(true) : setResultSearch(false)
        setResultSearch(hits)
        setLoading(false)
      })
    }
  }, [search])
  console.log(resultSearch)
  return { resultSearch, loading }
}
