export default function CategoryData({ categoryData }) {
  const categoriesLinks = [
    {
      id: 1,
      name: 'Sucesos',
      href: 'sucesos'
    },
    {
      id: 2,
      name: 'Internacionales',
      href: 'internacionales'
    },
    {
      id: 3,
      name: 'Salud',
      href: 'salud'
    },
    {
      id: 4,
      name: 'Entretenimiento',
      href: 'entretenimiento'
    },
    {
      id: 5,
      name: 'Política',
      href: 'politica'
    },
    {
      id: 6,
      name: 'Economía',
      href: 'economia'
    },
    {
      id: 7,
      name: 'Tecnología',
      href: 'tecnologia'
    },
    {
      id: 8,
      name: 'Educación',
      href: 'educacion'
    },
    {
      id: 9,
      name: 'Deportes',
      href: 'deportes'
    },
    {
      id: 10,
      name: 'Comunicados',
      href: 'comunicados'
    },
    {
      id: 11,
      name: 'Notas',
      href: 'notas'
    }
  ]
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
            {categoriesLinks.map((category) => {
              const select = categoryData === category ? true : ''
              return (
                <option
                  key={category.id}
                  Value={category.href}
                  selected={select}
                >
                  {category.name}
                </option>
              )
            })}
          </select>
        </div>
      </div>
    </>
  )
}
