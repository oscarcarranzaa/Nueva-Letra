import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Data from 'components/AdmindPanel/Data'
import InputTitle from 'components/AdmindPanel/Input/InputTitle'
import Arrow from 'components/Icons/Arrow'
import styles from 'styles/styles.module.css'
import Notification from 'components/AdmindPanel/Notification'
import Information from 'components/AdmindPanel/Information'
import Content from 'components/AdmindPanel/Content'
import useValidateDate from 'hooks/useValidateDate'
import Layout from 'components/AdmindPanel/Layout'

export default function EditPublish() {
  const ObtainID = useRouter()
  const ID = ObtainID.query.id
  console.log(ID)
  const [publishID, setPublishID] = useState([])
  const [save, setSave] = useState(false)
  useEffect(() => {
    if (ObtainID.asPath !== ObtainID.route) {
      fetch(`http://localhost:4000/api/v1/news/${ID}`).then((res) => {
        res.json().then((data) => {
          setPublishID(data)
        })
        const status = res.status
        if (status === 404 || status === 500) {
          ObtainID.push('/dash/404')
        }
      })
    }
  }, [ID, save])

  const publishArray = publishID[0] || []
  const back = () => ObtainID.back()
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
              onClick={back}
            >
              <Arrow fill="#fff" />
            </div>
            <InputTitle Value={publishArray.title} />
            <button
              type="submit"
              className={styles.buttonSave}
              ref={refElement}
            >
              Guardar
            </button>
          </div>
          <div className="grid grid-cols-1 mt-5 gap-y-3 gap-x-0 md:grid-cols-5 md:gap-x-3">
            <Content data={publishArray} />
            <div className="col-span-2">
              <Information idNews={publishArray} />
              <Data dataNews={publishArray} />
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
