export default function Information({ idNews }) {
  return (
    <>
      <div className="w-full bg-zinc-800 rounded mb-3 p-5">
        <h1 className="font-medium text-lg mb-2 text-slate-300">Informacion</h1>
        <div className="flex justify-between">
          <div>
            <h3>ID</h3>
            <p className="pt-1 mt-2">{idNews}</p>
          </div>
          <div>
            <h3>Estado</h3>
            <p className="text-green-500 pt-1 mt-2">Publicado</p>
          </div>
          <div>
            <h3>Detalles</h3>
            <button className="bg-blue-700 p-1 mt-2 rounded" type="button">
              Mas detalles
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
