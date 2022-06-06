import SocialMedia from 'components/SocialMedia'

export default function Footer() {
  return (
    <footer className="bg-gray-200 pt-4 font-sans text-sm text-center mt-10">
      <div className="grid md:grid-cols-3 mt-5">
        <div className="mt-5 md:mt-0">
          <h1 className="text-5xl font-bold text-sky-600">CDM</h1>
          <div>
            <p>Anunciate con nosotros</p>
          </div>
        </div>
        <div>
          <div>
            <h4 className="font-semibold text-3xl mt-5 md:mt-0">CDM DIARIO</h4>
            <p className="text-lg max-w-md m-auto text-gray-800">
              CDM diario es la plataforma que te mantiene al dia con lo que
              sucede en el pais
            </p>
          </div>
        </div>
        <div className="text-lg font-semibold mt-5 md:mt-0">
          <h4>Redes Sociales</h4>
          <SocialMedia />
        </div>
      </div>
      <div className="bg-sky-600 mt-10">
        <p className="text-white text-xs">© 2022 - Diario CDM</p>
      </div>
    </footer>
  )
}
