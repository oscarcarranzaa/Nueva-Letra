import axios from 'axios'
import Close from 'components/Icons/Close'
import EyeSVG from 'components/Icons/Eye'
import EyeInvisibleSVG from 'components/Icons/EyeInvisible'
import isValidEmail from 'hooks/useValidEmail'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from 'styles/login.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(true)
  const [pass, setPass] = useState('')
  const [validPass, setValidPass] = useState(true)
  const [watchPass, setWatchPass] = useState(false)
  const Router = useRouter()
  const validateEmail = (email) => {
    const validate = isValidEmail(email)
    setValidEmail(validate)
  }
  const sendLogin = (e) => {
    e.preventDefault()
    const validateEmail = isValidEmail(email)
    console.log(validEmail)
    if (validateEmail && pass.length > 4) {
      const credentials = { email, password: pass }
      axios({
        method: 'POST',
        url: '/auth/login',
        data: credentials,
        withCredentials: true
      })
        .then((res) => {
          console.log(res.data)
          Router.push('/dash')
        })
        .catch((err) => {
          console.log(err)
        })
      console.log(credentials)
    } else {
      console.log('aliña bien eso boludo')
    }

    const data = { email, password: pass }
    console.log(data)
    // axios
    //   .post('auth/login', data)
    //   .then((res) => {
    //     console.log(res)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  }
  const emailSucces = validEmail ? null : 'Correo no válido'
  const passSucces = validPass ? null : 'Contraseña muy corta'
  const inputPass = watchPass ? 'text' : 'password'
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen bg-zinc-800">
        <form onSubmit={sendLogin} className={styles.form}>
          <h2 className="text-lg font-semibold mb-5 pl-2 pr-2">
            Iniciar sesión en CDM - Panel
          </h2>
          <div className={styles.inputCont}>
            <p>Correo electrónico</p>
            <div
              className={`${styles.inputLogin} ${
                !validEmail ? styles.inputFailed : ''
              }`}
            >
              <input
                type="text"
                value={email}
                autoComplete="false"
                autoCapitalize="false"
                autoCorrect="false"
                placeholder="Escribe tu correo"
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => validateEmail(email)}
              />
              <button
                type="button"
                className={`${styles.buttonInput} ${
                  email.length === 0 ? 'hidden' : ''
                }`}
                onClick={() => setEmail('')}
              >
                <Close size={13} fill="#000" />
              </button>
            </div>
            <div className={styles.msgError}>
              <p>{emailSucces}</p>
            </div>
          </div>
          <div className={styles.inputCont}>
            <p>Contraseña</p>
            <div
              className={`${styles.inputLogin} ${
                !validPass ? styles.inputFailed : ''
              }`}
            >
              <input
                type={inputPass}
                value={pass}
                autoComplete="false"
                autoCapitalize="false"
                autoCorrect="false"
                placeholder="Y aquí la contraseña"
                onChange={(e) => setPass(e.target.value)}
                onBlur={() => {
                  pass.length > 4 ? setValidPass(true) : setValidPass(false)
                }}
              />
              <button
                type="button"
                className={styles.buttonInput}
                onClick={() => setWatchPass(!watchPass)}
              >
                {watchPass ? (
                  <EyeSVG size={20} fill="#000" />
                ) : (
                  <EyeInvisibleSVG size={20} fill="#000" />
                )}
              </button>
            </div>
            <div className={styles.msgError}>
              <p>{passSucces}</p>
            </div>
          </div>
          <button className={styles.buttonSend}>Vamos</button>
        </form>
      </div>
    </>
  )
}
