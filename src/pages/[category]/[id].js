import axios from 'axios'
import CategoryTitle from 'components/Client/CategoryTitle'
import Layout from 'components/Client/Layout'
import ShareNews from 'components/Client/Share'
import SideNews from 'components/Client/SideNews'
import Tags from 'components/Client/Tags'
import PinnedSVG from 'components/Icons/Pinned'
import useCategoryID from 'hooks/useCategoryID'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from 'styles/styles.module.css'

export default function K({ data, id, pin }) {
  const News = data
  console.log(data.keywords)
  const category = useCategoryID(data.category_code)
  const categoryValue = category[0].value
  const categoryName = category[0].name
  const url = `http://localhost:3000/${categoryValue}/${id}`
  useEffect(() => {
    document.title = News.title
  }, [News])
  const text = () => {
    return { __html: News.text }
  }
  const embed = () => {
    return { __html: News.embed }
  }
  return (
    <>
      <Layout>
        <div className="grid-70-30">
          <div>
            <div className="flex justify-between">
              <CategoryTitle href={categoryValue} title={categoryName} />
            </div>
            <h1 className="text-3xl font-bold mb-2">{News.title}</h1>
            <h4 className="font-serif text-slate-800">{News.description}</h4>
            <ShareNews url={url} />
            <figure className="block">
              <Image
                src={News.image}
                width={400}
                height={250}
                objectFit="cover"
                layout="responsive"
                alt={News.title}
              ></Image>
            </figure>
            <hr className="mt-3" />
            <div className="mt-3 flex flex-col">
              <span dangerouslySetInnerHTML={text()}></span>
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
            <SideNews data={pin} />
            taboola ads
          </div>
        </div>
        <Tags tags={data.keywords} />
      </Layout>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const { id } = params
  const idNews = id.split('_').reverse()[0]
  const res = await fetch(`http://localhost:4000/api/v1/news/${idNews}`)
  const pinned = await axios.get('http://localhost:4000/api/v1/pinned?limit=5')
  const data = await res.json()
  if (data.length === 0) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    }
  }
  return {
    props: {
      data,
      id,
      pin: pinned.data
    }
  }
}
