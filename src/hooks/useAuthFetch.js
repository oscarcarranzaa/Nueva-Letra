import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function useAuthDash() {
  const Router = useRouter()
  const [token, setToken] = useState(null)
  useEffect(() => {
    axios({
      method: 'GET',
      url: '/auth/update',
      withCredentials: true
    })
      .then((res) => {
        setToken(res.data.token)
      })
      .catch(() => {
        Router.push('/dash/login')
      })
  }, [])
  return { token }
}
