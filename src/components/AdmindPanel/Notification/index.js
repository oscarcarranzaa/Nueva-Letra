export default function Notification({ message }) {
  return (
    <>
      <div className=" bg-green-600 rounded flex justify-around items-center">
        <div className="text-sm font-medium p-5">{message}</div>
      </div>
    </>
  )
}
