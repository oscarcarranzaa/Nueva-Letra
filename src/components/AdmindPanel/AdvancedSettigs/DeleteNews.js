import axios from 'axios'
import { useRouter } from 'next/router'
import styles from 'styles/styles.module.css'
export default function DeleteNews() {
  const Router = useRouter()
  const ID = Router.query.id
  const del = () => {
    axios
      .delete(`http://localhost:4000/api/v1/news/${ID}`)
      .then((succes) => Router.push('/dash'))
  }
  return (
    <>
      <div className="border-2 border-red-600 rounded p-2 mt-5">
        <h3 className="text-red-500 text-xl font-bold">Zona de peligro</h3>
        <p className="text-sm mt-2">
          Estás cerca de eliminar esta publicación, pero no te preocupes...
          Podrás recuperarla en la papelera dentro del tiempo de 30 días.
        </p>
        <div className="w-full flex justify-between items-center mt-8 p-2">
          <p>ID: {ID}</p>
          <button type="button" onClick={del} className={styles.buttonDelete}>
            Eliminar
          </button>
        </div>
      </div>
    </>
  )
}
