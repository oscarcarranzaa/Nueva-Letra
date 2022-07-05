import Layout from 'components/Client/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from 'styles/styles.module.css'

export default function K({ data }) {
  const News = data
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
        <div className="grid-70-30 mt-10 p-3">
          <div>
            <h1 className="text-3xl font-bold mb-2">{News.title}</h1>
            <h4 className="mb-5 font-serif text-slate-600">
              {News.description}
            </h4>
            <Image
              src={News.image}
              width={400}
              height={250}
              objectFit="cover"
              layout="responsive"
              alt={News.title}
            ></Image>
            <div></div>

            <div className="mt-5 flex flex-col">
              <span dangerouslySetInnerHTML={text()}></span>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const { id } = params
  const idNews = id.split('_').reverse()[0]
  const res = await fetch(`http://localhost:4000/api/v1/news/${idNews}`)
  const data = await res.json()
  if (!data) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    }
  }
  return {
    props: {
      data
    }
  }
}
