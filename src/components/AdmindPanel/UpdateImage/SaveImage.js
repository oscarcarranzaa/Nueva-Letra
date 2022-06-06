import Image from 'next/image'
import { useRef, useState } from 'react'

export default function SaveImage() {
  const [image, setImage] = useState('/upload-small.svg')
  const refElement = useRef()
  const handleClick = () => refElement.current.click()
  function handleChange(e) {
    const file = e.target.files
    if (file.length > 0) {
      const reader = new FileReader()
      reader.onload = function () {
        const dataURL = reader.result
        setImage(dataURL)
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }
  return (
    <>
      <div className="absolute top-0 z-5 w-full h-full bg-zinc-800 flex justify-center">
        <Image
          src={image}
          className="h-full w-full fill-sky-600"
          height={300}
          width={500}
          objectFit="contain"
        />
        <div
          className="absolute bottom-1 p-1 pl-2 pr-2 rounded-lg hover:cursor-pointer bg-sky-600 hover:bg-sky-700 text-normal"
          onClick={handleClick}
        >
          Seleccionar Imagen
        </div>
        <input
          onChange={handleChange}
          required={true}
          ref={refElement}
          type="file"
          className="hidden"
          accept="image/*"
          name="image"
          id="image"
        />
      </div>
    </>
  )
}
