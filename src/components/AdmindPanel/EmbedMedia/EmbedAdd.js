import dynamic from 'next/dynamic'
import Spinner from 'components/Icons/Spinner'

const DynamicEmbed = dynamic(
  () => import('components/AdmindPanel/EmbedMedia/EmbedInput'),
  {
    ssr: false,
    loading: () => (
      <div className="bg-zinc-600 w-5/12 h-3/6 flex justify-center items-center max-h-96 absolute z-20">
        <div className="mb-3 mt-3 animate-spin">
          <Spinner size={32} primaryFill={'#fff'} secondFill={'#ccc'} />
        </div>
      </div>
    )
  }
)
export default function EmbedAdd({ embedOpen, embedData }) {
  const sendEmbed = (data) => {
    embedData(data)
    console.log(data)
  }
  return (
    <>
      <div className="fixed w-full h-full left-0 top-0 flex justify-center items-center z-10">
        <DynamicEmbed embedClose={embedOpen} embedData={sendEmbed} />
        <div
          className=" z-10 w-full h-full left-0 top-0 "
          style={{ background: 'rgba(0,0,0,.5)' }}
          onClick={embedOpen}
        ></div>
      </div>
    </>
  )
}
