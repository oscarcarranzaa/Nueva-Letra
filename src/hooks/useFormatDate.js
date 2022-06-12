import { isValid } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

export default function useFormatDate(date, utcBool, formatString) {
  const dateIsValid = isValid(new Date(date))
  if (dateIsValid && utcBool) {
    // este bloque covierte la UTC a la zona horaria
    const dateUTC = new Date(date)
    const dateTime = new Date(dateUTC + 'UTC')
    const timeZone = 'America/Tegucigalpa'
    const zonedDate = utcToZonedTime(dateTime, timeZone)
    const stringZoneDate = zonedDate.toISOString()
    return stringZoneDate
  }
  if (dateIsValid && utcBool === false) {
    const dateNoUTC = new Date(date)
    const strinDate = dateNoUTC.toISOString()
    return strinDate
  }
}
