import dynamic from 'next/dynamic'
import Layout from 'components/Client/Layout'
import SideNews from 'components/Client/SideNews'
import SliderNews from 'components/Client/Slider'
import useFetch from 'hooks/useFetch'

const DynamicNews = dynamic(() => import('../components/Client/News'), {
  ssr: false
})

export default function Home() {
  const hostProduction = 'http://localhost:4000'
  const { data: latestData, loading: loadingLatest } = useFetch(
    `${hostProduction}/client/v1/news?limit=10`
  )
  const latestNews = loadingLatest ? (
    'cargando'
  ) : (
    <DynamicNews news={latestData} />
  )
  return (
    <>
      <Layout>
        <div className="grid grid-cols-6 gap-2">
          <div className="col-span-4">
            <SliderNews />
          </div>
          <div className="col-span-2">
            <SideNews />
          </div>
        </div>
        {latestNews}
      </Layout>
    </>
  )
}
