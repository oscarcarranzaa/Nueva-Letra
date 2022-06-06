import { useState, useEffect } from 'react'
import { isValid } from 'date-fns'
import DateInput from './DateInput'
import DeleteNews from './DeleteNews'

export default function AdvanceSettings() {
  const [publish, setPublish] = useState('')
  const [del, setDel] = useState('')
  const [validDates, setValidDates] = useState('')

  useEffect(() => {
    const publishDate = isValid(new Date(publish))
    const delDate = isValid(new Date(del))
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
      <DeleteNews />
    </>
  )
}
