import Image from 'next/image'
export default function NewsFixed() {
  const feedNews = [
    {
      id: 1,
      title: '¡Insolito! esta noticia te dejara impactado',
      imageUrl: '/pl.jpg',
      description: 'Tres policias fueron emboscados en la tarde de ayer...',
      date: '15 Abril 2022'
    },
    {
      id: 2,
      title: '¡Insolito! esta noticia te dejara impactado',
      imageUrl: '/a.jpg',
      description: 'Tres policias fueron emboscados en la tarde de ayer...',
      date: '15 Abril 2022'
    },
    {
      id: 3,
      title: '¡Insolito! esta noticia te dejara impactado',
      imageUrl: '/b.jpg',
      description: 'Tres policias fueron emboscados en la tarde de ayer...',
      date: '15 Abril 2022'
    },
    {
      id: 4,
      title: '¡Insolito! esta noticia te dejara impactado',
      imageUrl: '/c.jpg',
      description: 'Tres policias fueron emboscados en la tarde de ayer...',
      date: '15 Abril 2022'
    }
  ]
  return (
    <>
      <div>
        {feedNews.map((News) => (
          <div key={News.id} className="flex rounded-lg">
            <div className="p-1">
              <Image
                src={News.imageUrl}
                width={'120px'}
                height={'85px'}
                objectFit="cover"
              ></Image>
            </div>
            <div>
              <p className="text-sm font-medium">{News.title}</p>
              <p className="text-slate-600 text-xs">{News.date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
