import Slider from 'react-slick/lib/slider'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
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
      img: 'https://i.ibb.co/DQsF2vD/1659907057440.jpg'
    },
    {
      id: 2,
      img: 'https://i.ibb.co/55VRHdt/1659907098694.jpg'
    }
  ]
  return (
    <>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="relative block">
            <img src={image.img} alt={image.id} />
          </div>
        ))}
      </Slider>
    </>
  )
}
