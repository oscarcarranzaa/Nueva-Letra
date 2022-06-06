import Close from 'components/Icons/Close'
import FacebookSVG from 'components/Icons/Facebook'
import InstagramSVG from 'components/Icons/Instagram'
import TwitterSVG from 'components/Icons/twitter'
import CopyLink from 'components/AdmindPanel/Share/CopyLink'

export default function LinkShare({ shareClose, url }) {
  const iconSize = 62
  return (
    <div className="bg-zinc-700 block z-30 absolute ">
      <div className="p-5">
        <div className="flex flex-wrap justify-between items-center mb-5">
          <h2 className="text-lg font-medium inline-block">Compartir</h2>
          <div className="flex items-center">
            <button
              type="button"
              onClick={shareClose}
              className="hover:bg-slate-600 p-3 rounded-full"
            >
              <Close size={18} fill={'#fff'} />
            </button>
          </div>
        </div>
        <div className="flex justify-center pr-10 pl-10">
          <a
            href="https://jwplayer.com/"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center flex-col hover:bg-slate-600 p-1 rounded mr-1 ml-1 w-24 h-28"
          >
            <div className="flex justify-center">
              <FacebookSVG height={iconSize} width={iconSize} />
            </div>
            <span className="p-1 font-normal text-center">Facebook</span>
          </a>
          <a
            href="https://jwplayer.com/"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center flex-col hover:bg-slate-600 p-1 rounded mr-1 ml-1 w-24 h-28"
          >
            <div className="flex justify-center">
              <InstagramSVG height={iconSize} width={iconSize} />
            </div>
            <span className="p-1 font-normal text-center">Instagram</span>
          </a>
          <a
            href="https://jwplayer.com/"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center flex-col hover:bg-slate-600 p-1 rounded mr-1 ml-1 w-24 h-28"
          >
            <div className="flex justify-center">
              <TwitterSVG height={iconSize} width={iconSize} />
            </div>
            <span className="p-1 font-normal text-center">Twitter</span>
          </a>
        </div>
        <div className="w-10/12 m-auto mb-5 mt-2 max-w-md">
          <CopyLink id={url} />
        </div>
      </div>
    </div>
  )
}
