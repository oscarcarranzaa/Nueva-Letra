import Layout from 'components/Client/Layout'
import SideNews from 'components/Client/SideNews'
import SliderNews from 'components/Client/Slider'
import useFetch from 'hooks/useFetch'
import CategoryTitle from 'components/Client/CategoryTitle'
import useCategoryID from 'hooks/useCategoryID'
import LoaderNews from 'components/Client/News/Loader'
import NewsHome from 'components/Client/NewsHome'
import NewsData from '../components/Client/News'
import SectionTitle from 'components/Client/SectionTitle'
import PinnedSVG from 'components/Icons/Pinned'
import LoaderSide from '@/components/Client/SideNews/Loader'

export default function Home() {
  const { data, loading } = useFetch('/home?limit=4')
  const { data: dataLast, loadingLast } = useFetch('/client?limit=5')
  const { data: pinned, loading: pinnedLoading } = useFetch('/pinned?limit=4')
  return (
    <>
      <Layout>
        <section className="grid grid-cols-1 md:grid-cols-6 gap-2">
          <div className="col-span-4">
            <SliderNews />
          </div>
          <div className="col-span-2">
            <div className="flex">
              <div className="mr-1">
                <PinnedSVG size={18} fill={'#000'} />
              </div>
              <p className="text-sm font-semibold">ANCLADOS</p>
            </div>
            {pinnedLoading && <LoaderSide limits={4} />}
            {pinned && <SideNews data={pinned} />}
          </div>
        </section>
        <section>
          <SectionTitle title="Últimas noticias" />
          {loadingLast && null}
          {dataLast && <NewsHome data={dataLast.response.metadata} />}
        </section>
        <div>Ads</div>
        <section>
          <SectionTitle title="Noticias por categorías" />
          {loading ? (
            <LoaderNews limits={4} />
          ) : (
            Object.keys(data.category).map((key, index) => {
              const keyData = data.category[key]
              const mapKey = keyData.map((keyCat) => {
                const category = useCategoryID(keyCat.category_code)
                return category[0]
              })
              const isCategory = data.category[key].length
              if (isCategory >= 1) {
                const categoryName = mapKey[0].name
                const categoryValue = mapKey[0].value
                return (
                  <div key={key} className="mb-5">
                    <CategoryTitle title={categoryName} href={categoryValue} />
                    <section className="w-full grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-3 mb-8">
                      <NewsData news={keyData} />
                    </section>
                  </div>
                )
              }
              return null
            })
          )}
        </section>
        <div>ads</div>
      </Layout>
    </>
  )
}
