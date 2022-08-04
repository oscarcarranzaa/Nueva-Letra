import useFormatDate from 'hooks/useFormatDate'
import { useState, useEffect } from 'react'
import CheckSVG from 'components/Icons/Check'
import styles from 'styles/styles.module.css'
import WarnSVG from 'components/Icons/Warn'

export default function DateInput({ action, dateValidation, valid }) {
  const [data, setData] = useState(true)
  const [utcDate, seUtcDate] = useState(false)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [dateComplete, setDateComplete] = useState(null)
  const [dateConvert, setDataConvert] = useState(null)
  const handleDate = (e) => {
    const dateValue = e.target.value
    setDate(dateValue)
  }
  const handleTime = (e) => {
    setTime(e.target.value)
  }
  const handleUTC = (e) => {
    seUtcDate(e.target.checked)
  }
  const dateTime = date + ' ' + time
  useEffect(() => {
    setDateComplete(dateTime)
  }, [date, time])

  useEffect(() => {
    setDataConvert(useFormatDate(dateComplete, utcDate, ''))
  }, [dateComplete, utcDate])

  useEffect(() => {
    const dateActive = data ? null : dateConvert
    dateValidation(dateActive)
  }, [dateConvert, data])

  const handleClickData = () => setData(!data)
  const dataDisabled = data ? styles.disabledDate : ''
  const isUTC = utcDate ? 'Local' : 'Estándar'
  const timeUTC = utcDate ? 'UTC' : 'Local'
  const warnValid = valid === true ? 'hidden' : ' '

  return (
    <>
      <div className="bg-zinc-900 rounded-md mt-1 ">
        <div className="w-10/12 m-auto">
          <div className="flex mb-1 justify-between pt-2 pb-2">
            <h4 className="text-lg font-medium mr-5">Fecha de {action}</h4>
            <label className={styles.checkDate}>
              <input type="checkbox" onChange={handleClickData} />
              <span className={styles.slider}></span>
            </label>
          </div>
          <div className={dataDisabled}>
            <div className="flex justify-between flex-wrap pt-5 pb-1">
              <div className="">
                <p className="text-slate-300">Fecha</p>
                <input
                  required="true"
                  disabled={data}
                  onChange={handleDate}
                  className="text-black hover:cursor-pointer rounded"
                  type="date"
                ></input>
              </div>
              <div className="">
                <p className="text-slate-300">Hora ({timeUTC})</p>
                <input
                  className="text-black rounded hover:cursor-pointer"
                  type="time"
                  onChange={handleTime}
                  disabled={data}
                ></input>
              </div>
              <div>
                <p className="text-slate-300">Fecha ({isUTC})</p>
                <span>{dateConvert}</span>
              </div>
            </div>
            <div className="h-6">
              <div className={`flex items-center fill-red-500 ${warnValid}`}>
                <WarnSVG width="15" height="15" />
                <p className="text-red-500 text-sm ml-1 font-medium">
                  No puedes eliminar antes de publicar
                </p>
              </div>
            </div>
            <div className="flex mt-5">
              <p className="mr-2 mb-3 text-base text-slate-300">
                Tiempo en UTC
              </p>
              <label className={styles.checkLabel}>
                <input type="checkbox" checked={utcDate} onChange={handleUTC} />
                <span className={styles.checkSpan}>
                  <CheckSVG width="15" height="15" />
                </span>
              </label>
            </div>
            <input
              type="hidden"
              Value={dateConvert}
              disabled={data}
              className="hidden"
              name={action}
            />
          </div>
        </div>
      </div>
    </>
  )
}
