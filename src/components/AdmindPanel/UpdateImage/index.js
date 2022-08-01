import Edit from 'components/Icons/Edit'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import Close from 'components/Icons/Close'
import Img from 'components/Img'

const DynamicInputImage = dynamic(() => import('./SaveImage'), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-gray-400"></div>
})

export default function ImageData({ img, action }) {
  const [openImageSave, setOpenImageSave] = useState(false)
  const handleClick = () => setOpenImageSave(!openImageSave)
  const openInput =
    openImageSave || action === 'new' ? (
      <DynamicInputImage action={action} />
    ) : null
  const showClose = !openImageSave ? 'hidden' : null

  return (
    <>
      <div className="relative">
        <div className="bg-gray-400 object-contain w-full h-full">
          {img && <Img src={img} width={400} height={250} layout="auto" />}
        </div>
        <div
          className={`absolute top-0 h-full w-full bg-black-5 md:opacity-0 md:hover:opacity-100 flex justify-center items-center ${
            action === 'new' ? 'hidden' : ''
          }`}
        >
          <div
            className="p-2 rounded-full border border-white fill-white hover:fill-black hover:cursor-pointer hover:bg-white"
            onClick={handleClick}
          >
            <Edit />
          </div>
        </div>
        <div
          className={`absolute z-10 top-1 right-1 fill-white cursor-pointer bg-black-5 p-2 rounded-full ${showClose}`}
          onClick={handleClick}
        >
          <Close size={'15px'} />
        </div>

        {openInput}
      </div>
    </>
  )
}
