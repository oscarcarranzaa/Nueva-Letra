import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/es'

dayjs().locale('es').format()
dayjs.extend(timezone)
dayjs.extend(utc)
dayjs.extend(customParseFormat)
dayjs.extend(relativeTime)
export default function useFormatDate(date, utcBool, formatString, relative) {
  const dateIsValid = dayjs(new Date(date)).isValid()
  const strFormatDate = formatString || 'D MMMM YYYY, h:mm a'
  const isRelative = relative || false
  dayjs.locale('es')

  if (dateIsValid && utcBool) {
    // este bloque covierte la UTC a la zona horaria
    const dateUTC = new Date(date)
    const dateTime = new Date(dateUTC + 'UTC')
    const timeZone = dayjs.tz.guess()
    const zonedDate = dayjs(dateTime).tz(timeZone)
    const ZoneDate = dayjs(zonedDate).locale('es').format(strFormatDate)
    const relativeDate = dayjs(zonedDate).locale('es').fromNow()
    const resultDate = isRelative ? relativeDate : ZoneDate
    return resultDate
  }

  if (dateIsValid && utcBool === false) {
    const dateNoUTC = new Date(date)
    const strinDate = dayjs(dateNoUTC).locale('es').format(strFormatDate)
    const relativeDate = dayjs(dateNoUTC).locale('es').fromNow()
    const resultDate = isRelative ? relativeDate : strinDate
    return resultDate
  }
}
