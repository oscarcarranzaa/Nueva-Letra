import { ContinueReading } from 'components/ContinueReading'
import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import Recomended from 'components/Recomended'
import SocialMedia from 'components/SocialMedia'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function K({ data }) {
  const News = data[0]
  useEffect(() => {
    document.title = News.title
  }, [News])
  const text = () => {
    return { __html: News.text }
  }
  return (
    <>
      <NavBar />
      <main>
        <div className="grid-70-30 mt-10">
          <div>
            <div>
              <Link href={`/${News.category}`}>
                <a className="pl-2 pr-2 pb-1 pt-1 bg-sky-600 text-white hover:underline">
                  {News.category}
                </a>
              </Link>
            </div>
            <h3 className="text-3xl font-bold mb-2">{News.title}</h3>
            <p className="mb-5 font-serif text-slate-600">{News.description}</p>
            <Image
              src={News.image}
              width={400}
              height={250}
              objectFit="cover"
              layout="responsive"
              alt={News.title}
            ></Image>
            <div>
              <SocialMedia />
            </div>

            <div className="mt-5 flex flex-col">
              <span dangerouslySetInnerHTML={text()}></span>
            </div>
          </div>

          <div>
            <Recomended />
          </div>
        </div>
        <ContinueReading keyword={News.keywords} />
      </main>
      <Footer />
    </>
  )
}

export async function getServerSideProps({ params }) {
  const { id } = params
  const idNews = id.split('_').reverse()[0]
  const res = await fetch(`http://localhost:4000/api/v1/news/${idNews}`)
  const data = await res.json()
  if (!data.length) {
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
