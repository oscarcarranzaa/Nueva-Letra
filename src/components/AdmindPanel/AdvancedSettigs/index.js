import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import DateInput from './DateInput'
import DeleteNews from './DeleteNews'

export default function AdvanceSettings({ action }) {
  const [publish, setPublish] = useState('')
  const [del, setDel] = useState('')
  const [validDates, setValidDates] = useState('')

  useEffect(() => {
    const publishDate = dayjs(new Date(publish)).isValid()
    const delDate = dayjs(new Date(del)).isValid()
    if (publishDate === true && delDate === true) {
      const datePublish = new Date(publish)
      const dateDel = new Date(del)
      const valid = dateDel > datePublish
      setValidDates(valid)
    } else {
      setValidDates(true)
    }
  }, [publish, del])
  const handlePublish = (value) => {
    const empty = value === null || value === '' ? '' : value
    setPublish(empty)
  }
  const handleDel = (value) => {
    const empty = value === null || value === '' ? '' : value
    setDel(empty)
  }
  const delAction = action === 'new' ? '' : <DeleteNews />
  return (
    <>
      <DateInput
        action={'publicar'}
        dateValidation={handlePublish}
        valid={validDates}
      />
      <DateInput
        action={'eliminar'}
        dateValidation={handleDel}
        valid={validDates}
      />
      {delAction}
    </>
  )
}
