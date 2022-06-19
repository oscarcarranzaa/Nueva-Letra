import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
import dynamic from 'next/dynamic'
import axios from 'axios'
import Arrow from 'components/Icons/Arrow'
import styles from 'styles/styles.module.css'
import Notification from 'components/AdmindPanel/Notification'
import useValidateDate from 'hooks/useValidateDate'
import Layout from 'components/AdmindPanel/Layout'

const DynamicTitle = dynamic(
  () => import('components/AdmindPanel/Input/InputTitle'),
  {
    ssr: false
  }
)
const DynamicContent = dynamic(() => import('components/AdmindPanel/Content'), {
  ssr: false
})
const DynamicInformation = dynamic(
  () => import('components/AdmindPanel/Information'),
  { ssr: false }
)
const DynamicData = dynamic(() => import('components/AdmindPanel/Data'), {
  ssr: false
})
export default function EditPublish() {
  const ObtainID = useRouter()
  const ID = ObtainID.query.id
  const [publishData, setPublishData] = useState([])
  const [querySucces, setQuerySucces] = useState(false)
  const [save, setSave] = useState(false)
  useEffect(() => {
    if (ObtainID.isReady) {
      fetch(`http://localhost:4000/api/v1/news/${ID}`).then((res) => {
        res.json().then((data) => {
          if (data.id === undefined) {
            ObtainID.push('/dash/404')
          } else {
            setPublishData(data)
            console.log(data.id)
            setQuerySucces(true)
          }
        })
        const status = res.status
        if (status === 404 || status === 500) {
          ObtainID.push('/dash/404')
        }
      })
    }
  }, [ID, save])

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
        .put(`http://localhost:4000/api/v1/news/${ID}`, data, {
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
        .catch((err) => {
          console.log(err)
        })
    }
  }
  const inputTitle = querySucces ? (
    <DynamicTitle Value={publishData.title} />
  ) : null
  const content = querySucces ? <DynamicContent data={publishData} /> : null
  const Information = querySucces ? (
    <DynamicInformation idNews={publishData} />
  ) : null
  const Data = querySucces ? <DynamicData dataNews={publishData} /> : null
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
        <form onSubmit={send}>
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
            {inputTitle}
            <button
              type="submit"
              className={styles.buttonSave}
              ref={refElement}
            >
              Guardar
            </button>
          </div>
          <div className="grid grid-cols-1 mt-5 gap-y-3 gap-x-0 md:grid-cols-5 md:gap-x-3">
            {content}
            <div className="col-span-2">
              {Information}
              {Data}
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
