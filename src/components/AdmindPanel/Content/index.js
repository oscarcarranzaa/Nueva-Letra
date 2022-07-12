import dynamic from 'next/dynamic'
import TextArea from 'components/AdmindPanel/Input/TextArea'
import EmbedMedia from '../EmbedMedia'
import EditorLoader from '../TextEditor/EditorLoader'
import PinnedSVG from 'components/Icons/Pinned'
import PinnedSlash from 'components/Icons/PinnedSlash'
import { useState } from 'react'
import WarnSVG from 'components/Icons/Warn'
const DynamicTextEditor = dynamic(
  () => import('components/AdmindPanel/TextEditor'),
  {
    ssr: false,
    loading: () => <EditorLoader />
  }
)
export default function Content({ data }) {
  const [pinned, setPinned] = useState(data.pinned)
  const [sensitive, setSensitive] = useState(data.sensitive)
  const text = data.text !== undefined ? data.text : ''
  const checkText = text === undefined ? '' : text
  const textReady = checkText.replace(/\\/g, ' ')
  const TextEditorElement =
    data.length === 0 ? null : <DynamicTextEditor content={textReady} />
  const pinneStyle = pinned ? 'bg-sky-600' : 'bg-transparent'
  const sensitiveStyle = sensitive ? 'bg-yellow-500' : 'bg-transparent'
  return (
    <>
      <div className="col-span-3 p-5 pt-1 bg-zinc-800 rounded-lg overflow-hidden w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Cuadro de contenido</h3>
          <div className="flex">
            <label>
              <div
                className={`p-1 mr-2 border-2 border-sky-600 rounded-full cursor-pointer mb-1 ${pinneStyle}`}
              >
                <input
                  type="checkbox"
                  checked={pinned}
                  name="pinned"
                  onChange={() => setPinned(!pinned)}
                  className="hidden"
                />
                {pinned === true ? (
                  <PinnedSlash size={24} fill={'#fff'} />
                ) : (
                  <PinnedSVG size={24} fill={'#fff'} />
                )}
              </div>
            </label>
            <label>
              <div
                className={`p-1 border-2 border-yellow-500 rounded-full cursor-pointer mb-1 ${sensitiveStyle}`}
              >
                <input
                  type="checkbox"
                  checked={sensitive}
                  name="sensitive"
                  onChange={() => setSensitive(!sensitive)}
                  className="hidden"
                />
                {pinned === true ? (
                  <WarnSVG width={24} height={24} fill={'#fff'} />
                ) : (
                  <WarnSVG width={24} height={24} fill={'#fff'} />
                )}
              </div>
            </label>
          </div>
        </div>
        <hr />
        <h5 className="mt-3">Descripcion</h5>
        <div className="h-32 border border-sky-600 rounded mb-3">
          <TextArea dataText={data.description} name="description" />
        </div>
        {TextEditorElement}
        <EmbedMedia embedData={data.embed} />
      </div>
    </>
  )
}
