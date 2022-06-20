import ShareSVG from 'components/Icons/Share'
import { useState } from 'react'
import Share from '../Share'

export default function PublishMedia({ url, short }) {
  const [openShare, setOpenShare] = useState(false)

  const handleShareOpen = () => setOpenShare(!openShare)
  const isShare = openShare ? (
    <Share url={url} shareOpen={handleShareOpen} />
  ) : null
  const isShort = short ? '' : 'Compartir'
  return (
    <>
      <div className="flex items-center justify-end">
        <button
          type="button"
          className="flex items-center p-2 mb-2 rounded hover:bg-slate-700"
          onClick={handleShareOpen}
        >
          <div className="pl-1 pr-1">
            <ShareSVG size={15} fill="#fff" />
          </div>
          <h5 className="pr-1">{isShort}</h5>
        </button>
        {isShare}
      </div>
    </>
  )
}
