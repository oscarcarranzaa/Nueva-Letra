import { useEffect, useState } from 'react'
import styles from './nav.module.css'
import useFormatDate from 'hooks/useFormatDate'

export default function TimeGet({ timeData }) {
  const [time, setTime] = useState(timeData)
  useEffect(() => {
    const updateTime = setInterval(() => {
      const timeObject = useFormatDate('getObjectLocalTime')
      setTime(timeObject)
    }, 1000)
    return () => clearInterval(updateTime)
  }, [])
  const nanData = Object.keys(time).length === 0 ? '' : ''
  return (
    <div className={nanData}>
      <div className="flex text-4xl font-bold">
        <p>{time.hour}</p>
        <div className={styles.clockAnimation}>:</div>
        <p>{time.minutes}</p>
        <span className="text-base">{time.timeHour}</span>
      </div>
      <div className="text-xs font-bold">{`${time.day} de ${time.month} del ${time.year}`}</div>
    </div>
  )
}
