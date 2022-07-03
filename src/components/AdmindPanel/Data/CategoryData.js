import categoryID from 'pages/category.json'
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
            {categoryID.map((category) => {
              const select = categoryData === category ? true : ''
              return (
                <option
                  key={category.id}
                  Value={category.name}
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
