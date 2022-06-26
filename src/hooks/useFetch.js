import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useFetch(url) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()
  const [error, setError] = useState(false)
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
      })
  }, [url])
  return { data, error, loading }
}
