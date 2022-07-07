import Layout from 'components/Client/Layout'
import ShareNews from 'components/Client/Share'
import useCategoryID from 'hooks/useCategoryID'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from 'styles/styles.module.css'

export default function K({ data, id }) {
  const News = data
  const category = useCategoryID(data.category_code)
  const categoryValue = category[0].value
  const categoryName = category[0].name
  const url = `http://localhost:3000/${categoryValue}/${id}`
  console.log(url)
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
        <p>{categoryName}</p>
        <div className="grid-70-30">
          <div>
            <h1 className="text-3xl font-bold mb-2">{News.title}</h1>
            <h4 className="mb-5 font-serif text-slate-800">
              {News.description}
            </h4>
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
            <ShareNews url={url} />
            <hr className="mt-3" />
            <div className="mt-3 flex flex-col">
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
  console.log(id)
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
      data,
      id
    }
  }
}
