import Image from 'next/image'
export default function AdminSetting() {
  return (
    <>
      <div className="absolute top-12 bg-zinc-900 border border-white rounded-md w-52 right-0 z-10">
        <div className="flex items-center mt-3 flex-col">
          <div className="rounded-full overflow-hidden w-24 h-24 bg-slate-400">
            <Image src="/avatar.jpg" width={96} height={96} objectFit="cover" />
          </div>
          <p className="text-center">
            <b>Oscar Andres</b>
          </p>
          <p className="text-xs text-slate-300">Admin</p>
        </div>
        <ul className=" mt-5 mb-5">
          <li className="p-1 pl-3 hover:bg-sky-600">Perfil</li>
          <li className="p-1 pl-3 hover:bg-sky-600">Propiedades</li>
          <li className="p-1 pl-3 hover:bg-sky-600">Cerrar sesion</li>
        </ul>
      </div>
    </>
  )
}
