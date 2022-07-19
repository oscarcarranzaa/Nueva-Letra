import dayjs from 'dayjs'

export default function useValidateDate(publicar, eliminar) {
  const publishDate = dayjs(new Date(publicar)).isValid()
  const delDate = dayjs(new Date(eliminar)).isValid()

  if (publishDate === true && delDate === true) {
    const datePublish = new Date(publicar)
    const dateDel = new Date(eliminar)
    const valid = dateDel > datePublish
    return valid
  }
  return true
}
