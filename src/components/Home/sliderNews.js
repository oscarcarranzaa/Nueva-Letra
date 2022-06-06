import Slider from 'react-slick/lib/slider'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
const settings = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 10000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  speed: 500,
  arrows: false,
  adaptiveHeight: false,
  dotsClass: 'button__bar'
}
export default function SliderNews() {
  const images = [
    {
      id: 1,
      img: '/1.jpg'
    },
    {
      id: 2,
      img: '/2.jpg'
    },
    {
      id: 3,
      img: '/3.jpg'
    },
    {
      id: 4,
      img: '/4.jpg'
    },
    {
      id: 5,
      img: '/5.jpg'
    }
  ]
  return (
    <>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="relative">
            <div className="absolute z-10 w-full h-full bg-slider-black">
              <h4 className="absolute bottom-0 text-3xl text-white w-4/5 ml-5 mb-10">
                Esta es la Imagen {image.img} que aqui se colocaran los
                articulos mas destacados
              </h4>
            </div>

            <Image
              src={image.img}
              alt={image.id}
              layout="responsive"
              objectFit="cover"
              width="640"
              height="375"
            ></Image>
          </div>
        ))}
      </Slider>
    </>
  )
}
