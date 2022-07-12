import dynamic from 'next/dynamic'
import TextArea from 'components/AdmindPanel/Input/TextArea'
import EmbedMedia from '../EmbedMedia'
import EditorLoader from '../TextEditor/EditorLoader'
const DynamicTextEditor = dynamic(
  () => import('components/AdmindPanel/TextEditor'),
  {
    ssr: false,
    loading: () => <EditorLoader />
  }
)
export default function Content({ data }) {
  const text = data.text !== undefined ? data.text : ''
  const checkText = text === undefined ? '' : text
  const textReady = checkText.replace(/\\/g, ' ')
  const TextEditorElement =
    data.length === 0 ? null : <DynamicTextEditor content={textReady} />
  return (
    <>
      <div className="col-span-3 p-5 pt-1 bg-zinc-800 rounded-lg overflow-hidden w-full">
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
