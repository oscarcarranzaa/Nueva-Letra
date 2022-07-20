import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Arrow from 'components/Icons/Arrow'
import styles from 'styles/styles.module.css'
import useValidateDate from 'hooks/useValidateDate'
import Layout from 'components/AdmindPanel/Layout'
import LoaderFull from 'components/AdmindPanel/LoaderFull'
import InputTitle from 'components/AdmindPanel/Input/InputTitle'
import useAuthDash from 'hooks/useAuthFetch'
import Content from 'components/AdmindPanel/Content'
import Information from 'components/AdmindPanel/Information'
import Data from 'components/AdmindPanel/Data'

export default function EditPublish() {
  const Router = useRouter()
  const ID = Router.query.id
  const [publishData, setPublishData] = useState([])
  const [querySucces, setQuerySucces] = useState(false)
  const [save, setSave] = useState(false)

  const { token } = useAuthDash()
  useEffect(() => {
    if (Router.isReady && token) {
      axios({
        method: 'GET',
        url: `/news/${ID}`,
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
        .then((res) => {
          setPublishData(res.data)
          setQuerySucces(true)
        })
        .catch((err) => {
          console.log(err)
          Router.push('/dash/404')
        })
    }
  }, [ID, save, token])

  const send = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    const { publicar, eliminar } = data
    const isValidDates = useValidateDate(publicar, eliminar)
    if (
      publicar === undefined ||
      eliminar === undefined ||
      isValidDates === true
    ) {
      setSave(true)
      axios({
        method: 'PUT',
        url: `/news/${ID}`,
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'multipart/form-data'
        },
        data
      }).then((res) => {
        setSave(false)
      })
    }
  }
  return (
    <>
      <Layout>
        <form onSubmit={send} className="relative">
          <button
            type="submit"
            className="hidden"
            disabled
            aria-hidden="true"
          />
          <div className="flex items-center bg-zinc-800 rounded p-1">
            <div
              className="mr-1 rounded-full p-2 hover:cursor-pointer hover:bg-slate-600"
              onClick={() => Router.back()}
            >
              <Arrow fill="#fff" />
            </div>
            <InputTitle Value={publishData.title} />
            <button
              type="submit"
              className={`${styles.buttonSave} ${
                save ? 'cursor-not-allowed' : ''
              }`}
              disabled={save}
            >
              <div className={save ? styles.loaderSave : ''}>
                {save ? '' : 'Guardar'}
              </div>
            </button>
          </div>
          <div className={styles.monitorDash}>
            {publishData && <Content data={publishData} />}
            <div className={styles.dataMonitor}>
              {!querySucces && <LoaderFull />}
              {publishData && <Information idNews={publishData} />}
              {publishData && <Data dataNews={publishData} />}
            </div>
          </div>
        </form>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const token = context.req.cookies.updateToken
  if (!token) {
    return {
      redirect: {
        destination: '/dash/login',
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}
