import { useState, useEffect } from 'react'

export default function TextArea({ dataText, name }) {
  const [valueDescription, setValueDescription] = useState('')
  useEffect(() => {
    setValueDescription(dataText)
  }, [dataText])
  const handleChange = (e) => {
    setValueDescription(e.target.value)
  }
  return (
    <>
      <div className=" h-full">
        <textarea
          className="bg-zinc-50 text-black h-full w-full resize-none p-2"
          placeholder="Aqui la descripcion"
          onChange={handleChange}
          value={valueDescription}
          name={name}
        ></textarea>
      </div>
    </>
  )
}
