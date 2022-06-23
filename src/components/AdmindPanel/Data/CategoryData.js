export default function CategoryData({ categoryData }) {
  return (
    <>
      <div className="flex flex-wrap">
        <p className="mr-3">Categoría:</p>
        <div className="hover:cursor-pointer inline-block border-2 border-slate-500 rounded hover:border-sky-600">
          <select
            className="text-white bg-gray-900 hover:cursor-pointer pl-1 pr-2 "
            name="category"
            required={true}
          >
            {[
              'Relevancias',
              'Denuncias',
              'Sucesos',
              'Internacionales',
              'Salud',
              'Entretenimiento',
              'Política',
              'Economía',
              'Tecnología',
              'Educación',
              'Deportes',
              'Agricultura',
              'Comunicados',
              'Notas',
              'Opiniones'
            ].map((category, index) => {
              const select = categoryData === category ? true : ''
              return (
                <option key={index} Value={category} selected={select}>
                  {category}
                </option>
              )
            })}
          </select>
        </div>
      </div>
    </>
  )
}
