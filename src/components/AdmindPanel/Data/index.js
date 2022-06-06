import ImageData from '../UpdateImage'
import { useState, useEffect } from 'react'
import CategoryData from './CategoryData'
import Tags from '../Tags'
import PublishMedia from '../PublishMedia'
import useFormat from 'hooks/useFormat'

export default function Data({ dataNews, act }) {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(dataNews)
  }, [dataNews])
  const img = data.image || '/'
  const PathURL = data.title === undefined ? '' : useFormat(data.title)
  const URL = `http://localhost:3000/${data.category}/${PathURL}_${data.id}`
  return (
    <>
      <div className="p-4 bg-gray-900 rounded-lg">
        <PublishMedia url={URL} />
        <div className="bg-gray-400 w-full">
          <ImageData img={img} action={act} />
        </div>
        <div className="mt-10">
          <CategoryData categoryData={data.category} />
          <Tags
            use={'PALABRAS CLAVES'}
            name="keyword"
            required={true}
            dataTags={data.keywords}
          />
          <Tags
            use={'#HASTAGS (OPCIONAL)'}
            symbol="#"
            name="hashtag"
            required={false}
            dataTags={data.hashtag}
          />
        </div>
      </div>
    </>
  )
}
