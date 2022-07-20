import { useRouter } from 'next/router'
import { useState } from 'react'
import useValidateDate from 'hooks/useValidateDate'
import styles from 'styles/styles.module.css'
import dynamic from 'next/dynamic'
import axios from 'axios'
import Data from 'components/AdmindPanel/Data'
import InputTitle from 'components/AdmindPanel/Input/InputTitle'
import Arrow from 'components/Icons/Arrow'
import TextArea from 'components/AdmindPanel/Input/TextArea'
import EmbedMedia from 'components/AdmindPanel/EmbedMedia'
import Layout from 'components/AdmindPanel/Layout'
import EditorLoader from 'components/AdmindPanel/TextEditor/EditorLoader'
import useAuthDash from 'hooks/useAuthFetch'

const DynamicTextEditor = dynamic(
  () => import('components/AdmindPanel/TextEditor'),
  {
    ssr: false,
    loading: () => <EditorLoader />
  }
)

export default function EditPublish() {
  const [save, setSave] = useState(false)
  const ObtainID = useRouter()
  const back = () => ObtainID.back()
  const { token } = useAuthDash()
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
        method: 'POST',
        url: '/news',
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
        <form onSubmit={send}>
          <div className="flex items-center bg-zinc-800 rounded p-1">
            <div
              className="mr-1 rounded-full p-2 hover:cursor-pointer hover:bg-slate-600"
              onClick={back}
            >
              <Arrow fill="#fff" />
            </div>
            <InputTitle />
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
            <div
              className={`${styles.inputMonitor} bg-zinc-800 p-3 rounded-lg mb-5`}
            >
              <h5 className="mt-3">Descripcion</h5>
              <div className="h-32 border border-sky-600 rounded mb-3">
                <TextArea name={'description'} />
              </div>
              <DynamicTextEditor />
              <EmbedMedia />
            </div>
            <div className={styles.dataMonitor}>
              <Data act="new" dataNews={{}} />
            </div>
          </div>
        </form>
        <div
          className={`${styles.notificationClose} fixed bottom-5 right-5 `}
        ></div>
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
