import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
import objectSupport from 'dayjs/plugin/objectSupport'
import 'dayjs/locale/es'

dayjs().locale('es').format()
dayjs.extend(timezone)
dayjs.extend(utc)
dayjs.extend(customParseFormat)
dayjs.extend(relativeTime)
dayjs.extend(objectSupport)
export default function useFormatDate(date, utcBool, formatString, relative) {
  const dateIsValid = dayjs(new Date(date)).isValid()
  const strFormatDate = formatString || 'D MMMM YYYY, h:mm a'
  const isRelative = relative || false
  dayjs.locale('es')
  if (date === 'getObjectTime') {
    const getDate = new Date().toISOString()
    const timeObject = {}
    timeObject.seconds = dayjs(getDate).format('s')
    timeObject.minutes = dayjs(getDate).format('mm')
    timeObject.timeHour = dayjs(getDate).format('a')
    timeObject.hour = dayjs(getDate).format('h')
    timeObject.day = dayjs(getDate).format('D')
    timeObject.month = dayjs(getDate).format('MMMM')
    timeObject.year = dayjs(getDate).format('YYYY')
    return timeObject
  }
  if (date === 'getObjectLocalTime') {
    const getDateUTC = dayjs.utc().format()
    const timeZone = 'America/Tegucigalpa'
    const getLocalDate = dayjs(getDateUTC).tz(timeZone)
    const localTimeObject = {}
    localTimeObject.seconds = dayjs(getLocalDate).format('s')
    localTimeObject.minutes = dayjs(getLocalDate).format('mm')
    localTimeObject.timeHour = dayjs(getLocalDate).format('a')
    localTimeObject.hour = dayjs(getLocalDate).format('h')
    localTimeObject.day = dayjs(getLocalDate).format('D')
    localTimeObject.month = dayjs(getLocalDate).format('MMMM')
    localTimeObject.year = dayjs(getLocalDate).format('YYYY')
    console.log(getDateUTC)
    return localTimeObject
  }
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
