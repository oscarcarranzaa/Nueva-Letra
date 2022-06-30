import dynamic from 'next/dynamic'
import Layout from 'components/Client/Layout'
import SideNews from 'components/Client/SideNews'
import SliderNews from 'components/Client/Slider'
import useFetch from 'hooks/useFetch'
import CategoryTitle from 'components/Client/CategoryTitle'
import useCategoryID from 'hooks/useCategoryID'

const DynamicNews = dynamic(() => import('../components/Client/News'), {
  ssr: false
})

export default function Home() {
  const { data, loading, error } = useFetch(
    'http://localhost:4000/api/v1/home?limit=5'
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
        {loading
          ? null
          : Object.keys(data.category).map((key, index) => {
              const keyData = data.category[key]
              const mapKey = keyData.map((keyCat) => {
                const category = useCategoryID(keyCat.category_code)
                console.log(category)
                const categoryName = category[0].name
                return categoryName
              })
              return (
                <div key={key}>
                  <CategoryTitle title={mapKey[0]} />
                  <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    <DynamicNews news={keyData} />
                  </div>
                </div>
              )
            })}
      </Layout>
    </>
  )
}
