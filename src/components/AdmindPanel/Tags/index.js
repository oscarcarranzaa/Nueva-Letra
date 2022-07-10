import useTags from 'hooks/useTags'
import { useState, useEffect } from 'react'
export default function TagsInput({ symbol, use, name, required, dataTags }) {
  const [tags, setTags] = useState('')
  useEffect(() => {
    const tagsStr = dataTags || []
    setTags(tagsStr.toString())
  }, [dataTags])
  const handleChange = (e) => {
    setTags(e.target.value)
  }

  const tagsArray = useTags(tags)
  return (
    <>
      <div className="mt-5">
        <hr className="mb-5 border-sky-600" />
        <h1 className="text-lg font-medium">{use}</h1>
        <div className="border border-sky-600 rounded p-2">
          <textarea
            name={name}
            className="bg-transparent resize-none w-full text-sm"
            placeholder="Separalos por una coma sin espacios ejem:( hola,buenos dias,etc)"
            onChange={handleChange}
            value={tags}
            required={required}
          ></textarea>
        </div>
        <div className="flex flex-wrap mb-3 mt-3 text-sm">
          {tagsArray.map((tag, index) => {
            return (
              <div
                key={index}
                className="ml-2 bg-white text-black pr-2 pl-2 rounded mb-2"
              >
                <p>
                  {symbol}
                  {tag}
                </p>
              </div>
            )
          })}
          {tagsArray.length === 0 ? (
            <p className="text-slate-400 pr-2 pl-2 cursor-default">
              Aún no has agregado nada
            </p>
          ) : null}
        </div>
      </div>
    </>
  )
}
