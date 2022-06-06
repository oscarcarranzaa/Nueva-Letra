import LatestNews from './LatestNews'
import NewsFixed from './NewsFIxed'
import SliderNews from './sliderNews'
import Sucesos from './Sucesos'

export default function PrimaryHome() {
  return (
    <>
      <section className="grid-70-30 gap-5 mt-10 w-full max-w-7xl">
        <SliderNews />
        <NewsFixed />
      </section>
      <LatestNews />
      <Sucesos />
    </>
  )
}
