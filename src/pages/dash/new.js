import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import axios from 'axios'
import Data from 'components/AdmindPanel/Data'
import InputTitle from 'components/AdmindPanel/Input/InputTitle'
import AdminNavbar from 'components/AdmindPanel/Navbar'
import AdminSidebar from 'components/AdmindPanel/Navbar/SideBar'
import Arrow from 'components/Icons/Arrow'
import TextArea from 'components/AdmindPanel/Input/TextArea'

const DynamicTextEditor = dynamic(
  () => import('components/AdmindPanel/TextEditor'),
  {
    ssr: false
  }
)

export default function EditPublish() {
  const ObtainID = useRouter()
  const back = () => ObtainID.back()
  const send = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    axios
      .post('http://localhost:4000/api/v1/news', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((request) => {
        ObtainID.push(`/dash/${request.data.id}`)
      })
      .catch((err) => console.log(err))
  }
  return (
    <>
      <div className="grid grid-cols-4 lg:grid-cols-6">
        <div className="bg-zinc-800 pb-40">
          <AdminSidebar />
        </div>
        <div className="col-span-3 lg:col-span-5">
          <AdminNavbar />
          <main className="w-full mt-10 p-2 bg-zinc-700 pt-10 text-white">
            <form onSubmit={send}>
              <div className="flex items-center bg-zinc-800 rounded p-1">
                <div
                  className="mr-1 rounded-full p-2 hover:cursor-pointer hover:bg-slate-600"
                  onClick={back}
                >
                  <Arrow fill="#fff" />
                </div>
                <InputTitle />
              </div>
              <div className="grid grid-cols-1 mt-5 gap-y-3 gap-x-0 md:grid-cols-5 md:gap-x-3">
                <div className="col-span-3 p-4 bg-zinc-800 rounded-lg">
                  <h5 className="mt-3">Descripcion</h5>
                  <div className="h-32 border border-sky-600 rounded mb-3">
                    <TextArea name={'description'} />
                  </div>
                  <DynamicTextEditor />
                </div>
                <div className="col-span-2">
                  <Data act="new" dataNews={{}} />
                </div>
              </div>
              <button
                type="submit"
                className="bg-zinc-800 text-white rounded-lg p-2 mt-5"
              >
                send
              </button>
            </form>
          </main>
        </div>
      </div>
    </>
  )
}
