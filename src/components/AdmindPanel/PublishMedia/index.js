import ShareSVG from 'components/Icons/Share'
import { useState } from 'react'
import Share from '../Share'

export default function PublishMedia({ url }) {
  const [openShare, setOpenShare] = useState(false)

  const handleShareOpen = () => setOpenShare(!openShare)
  const isShare = openShare ? (
    <Share url={url} shareOpen={handleShareOpen} />
  ) : null
  return (
    <>
      <div className="flex items-center justify-end">
        <button
          type="button"
          className="flex items-center p-2 mb-2 rounded hover:bg-slate-700"
          onClick={handleShareOpen}
        >
          <ShareSVG size={15} fill="#fff" />
          <h5 className="ml-2">Compartir</h5>
        </button>
        {isShare}
      </div>
    </>
  )
}
