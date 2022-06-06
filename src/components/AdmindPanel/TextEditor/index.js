import { useState, useEffect } from 'react'
import SunEditor from 'suneditor-react'
import 'suneditor/dist/css/suneditor.min.css'

export default function TextEditor(content) {
  const [appendContent, setAppendContent] = useState(content.content)
  useEffect(() => {
    setAppendContent(content.content)
  }, [content])
  return (
    <>
      <SunEditor
        lang="es"
        height="300px"
        placeholder="Escriba el contenido..."
        onChange={setAppendContent}
        setContents={appendContent}
        defaultValue={appendContent}
        fullpage={true}
        setOptions={{
          buttonList: [
            ['undo', 'redo'],
            ['font'],
            [
              'bold',
              'underline',
              'italic',
              'strike',
              'subscript',
              'superscript'
            ],
            ['removeFormat'],
            '/',
            ['fontColor'],
            ['outdent', 'indent'],
            ['align', 'horizontalRule', 'list'],
            ['link', 'image'],
            ['fullScreen', 'showBlocks', 'codeView']
          ]
        }}
      />
      <textarea
        value={appendContent}
        className="text-black hidden"
        name="text"
      ></textarea>
    </>
  )
}
