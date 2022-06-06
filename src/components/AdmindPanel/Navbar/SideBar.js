import Bars from 'components/Icons/Bars'
import Links from './Links'

export default function AdminSidebar() {
  return (
    <>
      <div className="flex mt-5">
        <div className="ml-2 mr-8">
          <Bars color={'#fff'} />
        </div>
        <h1 className="text-white">
          <b>CDM </b>- panel
        </h1>
      </div>
      <div className="mt-10">
        <Links />
      </div>
    </>
  )
}
