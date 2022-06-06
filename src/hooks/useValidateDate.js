import { isValid } from 'date-fns'

export default function useValidateDate(publicar, eliminar) {
  const publishDate = isValid(new Date(publicar))
  const delDate = isValid(new Date(eliminar))

  if (publishDate === true && delDate === true) {
    console.log(publishDate, delDate)
    const datePublish = new Date(publicar)
    const dateDel = new Date(eliminar)
    const valid = dateDel > datePublish
    return valid
  }
  return true
}
