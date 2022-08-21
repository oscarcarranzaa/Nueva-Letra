import { useEffect } from 'react'
import axios from 'axios'
import CategoryTitle from 'components/Client/CategoryTitle'
import Layout from 'components/Client/Layout'
import NewsData from 'components/Client/News'
import LoaderNews from 'components/Client/News/Loader'
import Sensitive from 'components/Client/Sensitive'
import ShareNews from 'components/Client/Share'
import SideNews from 'components/Client/SideNews'
import Tags from 'components/Client/Tags'
import PinnedSVG from 'components/Icons/Pinned'
import Img from 'components/Img'
import useCategoryID from 'hooks/useCategoryID'
import useFetch from 'hooks/useFetch'

export default function K({ data, id, pin }) {
  const News = data
  const category = useCategoryID(data.category_code)
  const categoryValue = category[0].value
  const categoryName = category[0].name
  const url = `https://nuevaletra.oscarcarranza.cf/${categoryValue}/${id}`
  const { data: categoryData, loading: categoryLoad } = useFetch(
    `/client?c=${categoryValue}&limit=4`
  )
  useEffect(() => {
    document.title = News.title
  }, [News])
  const text = () => {
    return { __html: News.text }
  }
  return (
    <>
      <Layout
        title={data.title}
        description={data.description}
        image={data.image}
      >
        <div className="grid-70-30">
          <div>
            <div className="flex justify-between">
              <CategoryTitle href={categoryValue} title={categoryName} />
            </div>
            {data.sensitive && <Sensitive />}
            <h1 className="text-3xl font-bold mb-2">{News.title}</h1>
            <h4 className="font-serif text-slate-800">{News.description}</h4>
            <ShareNews url={url} />
            <figure className="block">
              <Img
                src={data.images}
                layout="responsive"
                width={1280}
                height={720}
                alt={data.title}
              ></Img>
            </figure>
            <hr className="mt-3" />
            <div className="mt-3 flex flex-col">
              <span dangerouslySetInnerHTML={text()}></span>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold mb-2">Tags</h3>
              <Tags tags={data.keywords} />
            </div>
          </div>
          <div>
            ads
            <div className="flex">
              <div className="mr-1">
                <PinnedSVG size={18} fill={'#000'} />
              </div>
              <p className="text-sm font-semibold">ANCLADOS</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 md:gap-1 gap-2">
              <SideNews data={pin} />
            </div>
            taboola ads
          </div>
        </div>
        <div className="mt-8 mb-2">
          <h3 className="text-lg font-semibold">Más de {categoryName}</h3>
        </div>
        {categoryLoad && <LoaderNews limits={4} />}
        <div className="w-full grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-3 mb-8">
          {categoryData && <NewsData news={categoryData.response.metadata} />}
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const { id } = params
  const SERVER_URL = process.env.BACKEND_API
  const idNews = id.split('_').pop()
  const res = await fetch(`${SERVER_URL}/api/v1/news/${idNews}`)
  const resData = await res.json()
  const pinned = await axios.get('http://localhost:4000/api/v1/pinned?limit=4')

  console.log(pinned)
  if (res.status > 400) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    }
  }
  return {
    props: {
      id,
      data: resData,
      pin: pinned.data
    }
  }
}
