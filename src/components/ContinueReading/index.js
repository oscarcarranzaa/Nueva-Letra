import News from 'components/News'
import { useState, useEffect } from 'react'

export function ContinueReading({ keyword }) {
  const [reading, setReading] = useState([])
  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/news?limit=5&keyword=${keyword}`).then(
      (res) => {
        res.json().then((data) => {
          setReading(data)
        })
      }
    )
  }, [keyword])
  return (
    <>
      <News dataNews={reading} />
    </>
  )
}
