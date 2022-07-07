import Slider from 'react-slick/lib/slider'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
const settings = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
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
  /*

<div className="absolute z-10 w-full h-full bg-slider-black">
              <h4 className="absolute bottom-0 text-3xl text-white w-4/5 ml-5 mb-10">
                Esta es la Imagen {image.img} que aqui se colocaran los
                articulos mas destacados
              </h4>
            </div>

  */
  const images = [
    {
      id: 1,
      img: '/static/images/apertura-banner.jpg'
    },
    {
      id: 2,
      img: '/static/images/haz-tu-denuncia.jpg'
    }
  ]
  return (
    <>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="relative block">
            <Image
              src={image.img}
              alt={image.id}
              layout="responsive"
              objectFit="cover"
              width="640"
              height="360"
            ></Image>
          </div>
        ))}
      </Slider>
    </>
  )
}
