export default function SectionTitle({ title }) {
  return (
    <>
      <div className="w-full flex justify-center border-b-2 border-sky-600 mt-10 mb-5">
        <div className="bg-sky-600">
          <h3 className="inline-block text-white p-1 pr-4 pl-4 text-lg">
            {title}
          </h3>
        </div>
      </div>
    </>
  )
}
