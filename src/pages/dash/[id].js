import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
import dynamic from 'next/dynamic'
import axios from 'axios'
import Arrow from 'components/Icons/Arrow'
import styles from 'styles/styles.module.css'
import Notification from 'components/AdmindPanel/Notification'
import useValidateDate from 'hooks/useValidateDate'
import Layout from 'components/AdmindPanel/Layout'
import LoaderFull from 'components/AdmindPanel/LoaderFull'
import InputTitle from 'components/AdmindPanel/Input/InputTitle'
import useAuthDash from 'hooks/useAuthFetch'
import Content from 'components/AdmindPanel/Content'
import Information from 'components/AdmindPanel/Information'
import Data from 'components/AdmindPanel/Data'

export default function EditPublish() {
  const ObtainID = useRouter()
  const ID = ObtainID.query.id
  const [publishData, setPublishData] = useState([])
  const [querySucces, setQuerySucces] = useState(false)
  const [save, setSave] = useState(false)

  const { token } = useAuthDash()
  useEffect(() => {
    if (ObtainID.isReady && token) {
      fetch(`http://localhost:4000/api/v1/news/${ID}`).then((res) => {
        res.json().then((data) => {
          if (data.id === undefined) {
            ObtainID.push('/dash/404')
          } else {
            setPublishData(data)
            setQuerySucces(true)
          }
        })
        const status = res.status
        if (status === 404 || status === 500) {
          ObtainID.push('/dash/404')
        }
      })
    }
  }, [ID, save, token])

  const refElement = useRef()
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
      refElement.current.setAttribute('disabled', true)
      refElement.current.classList.add(styles.disabledButton)
      refElement.current.innerHTML = `<div class=${styles.loaderSave}></div>`
      axios
        .put(`/news/${ID}`, data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((res) => {
          refElement.current.removeAttribute('disabled')
          refElement.current.classList.remove(styles.disabledButton)
          refElement.current.innerHTML = 'Guardar'
          setSave(true)
          closeNotification()
        })
    }
  }
  const closeNotification = () => {
    const time = setTimeout(() => setSave(false), 3500)
    return () => clearTimeout(time)
  }
  const notification = save ? (
    <Notification message="Guardado correctamente" />
  ) : null
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
              onClick={() => ObtainID.back()}
            >
              <Arrow fill="#fff" />
            </div>
            <InputTitle Value={publishData.title} />
            <button
              type="submit"
              className={styles.buttonSave}
              ref={refElement}
            >
              Guardar
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
        <div className={`${styles.notificationClose} fixed bottom-5 right-5 `}>
          {notification}
        </div>
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
