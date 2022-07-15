import axios from 'axios'
import isValidEmail from 'hooks/useValidEmail'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(true)
  const [pass, setPass] = useState('')
  const [validPass, setValidPass] = useState(true)
  const [watchPass, setWatchPass] = useState(false)

  const validateEmail = (email) => {
    const validate = isValidEmail(email)
    setValidEmail(validate)
  }
  const sendLogin = (e) => {
    e.preventDefault()
    const validateEmail = isValidEmail(email)
    console.log(validEmail)
    if (validateEmail && pass.length > 4) {
      console.log('enviando datos...')
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
  const passSucces = validPass ? null : 'Contraseña corta'
  const inputPass = watchPass ? 'text' : 'password'
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <form onSubmit={sendLogin}>
          <h2>Iniciar sesión en CDM - Panel</h2>
          <div>
            <p>Correo electrónico</p>
            <input
              type="text"
              value={email}
              autoComplete="false"
              autoCapitalize="false"
              autoCorrect="false"
              placeholder="Ponga su correo"
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => validateEmail(email)}
            />
          </div>
          <p>{emailSucces}</p>
          <div>
            <p>Contraseña</p>
            <input
              type={inputPass}
              value={pass}
              autoComplete="false"
              autoCapitalize="false"
              autoCorrect="false"
              placeholder="Y acá la contra"
              onChange={(e) => setPass(e.target.value)}
              onBlur={() => {
                pass.length > 4 ? setValidPass(true) : setValidPass(false)
              }}
            />
          </div>
          <p>{passSucces}</p>
          <button type="button" onClick={() => setWatchPass(!watchPass)}>
            Pesquizar
          </button>
          <button>Vamos</button>
        </form>
      </div>
    </>
  )
}
