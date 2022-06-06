import { useState, useEffect } from 'react'

export default function InputTitle({ name, Value }) {
  const [valueData, setValue] = useState('')
  useEffect(() => {
    setValue(Value)
  }, [Value])

  return (
    <>
      <div className="border-2  rounded border-transparent hover:border-sky-600 w-full">
        <input
          type="text"
          placeholder="Agregue el título"
          name="title"
          className="text-white p-1 bg-transparent w-full  text-xl text-ellipsis font-medium"
          autoComplete="off"
          required={true}
          maxLength={200}
          Value={valueData}
        />
      </div>
    </>
  )
}
