export default function CategoryURL({ category }) {
  return (
    <>
      <div className="m-auto font-bold mt-12 border-b-2 border-sky-600">
        <p className="inline-block bg-sky-600 text-white pl-2 pr-2">
          {category}
        </p>
      </div>
    </>
  )
}
