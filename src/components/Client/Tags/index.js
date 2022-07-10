export default function Tags({ tags }) {
  return (
    <div>
      {tags.map((data, index) => {
        return (
          <div key={index}>
            <p>{data}</p>
          </div>
        )
      })}
    </div>
  )
}
