import Layout from 'components/Client/Layout'
import SideNews from 'components/Client/SideNews'
import SliderNews from 'components/Client/Slider'

export default function Home() {
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
      </Layout>
    </>
  )
}
