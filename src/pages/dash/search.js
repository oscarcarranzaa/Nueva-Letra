import { useRouter } from 'next/router'

export default function Search() {
  const route = useRouter()
  const query = route.query.q
  return (
    <>
      <h1>{query}</h1>
    </>
  )
}
