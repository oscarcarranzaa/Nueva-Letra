import { useRef, useState } from 'react'
import CopyLink from 'components/Icons/CopyLink'
import FacebookSolid from 'components/Icons/FacebookSolid'
import TwitterSolid from 'components/Icons/TwitterSolid'
import WhatsappSolid from 'components/Icons/WhatsappSolid'
import CheckSVG from 'components/icons/Check'

export default function ShareNews({ url }) {
  const refInput = useRef()
  const [copied, setCopied] = useState(false)
  const refButton = useRef()
  const copy = () => {
    const copyCurrent = refInput.current
    copyCurrent.select()
    document.execCommand('copy')
    navigator.clipboard.writeText(copyCurrent.value)
    setCopied(true)
  }
  const isCopy = copied ? (
    <CheckSVG width={28} height={28} fill="#fff" />
  ) : (
    <CopyLink size={28} fill="#fff" />
  )
  return (
    <>
      <div>
        <ul className="shareMedia">
          <li>
            <a href="/404" target="_blank" rel="noreferrer">
              <FacebookSolid size={28} fill="#fff" />
            </a>
          </li>
          <li>
            <a href="/404" target="_blank" rel="noreferrer">
              <TwitterSolid size={28} fill="#fff" />
            </a>
          </li>
          <li>
            <a href="/404" target="_blank" rel="noreferrer">
              <WhatsappSolid size={28} fill="#fff" />
            </a>
          </li>
          <li>
            <input
              aria-hidden="true"
              type="hidden"
              value={url}
              ref={refInput}
            />
            <button type="button" onClick={copy} ref={refButton}>
              {isCopy}
            </button>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .shareMedia {
          display: flex;
        }
        .shareMedia > li {
          margin-lef: 5px;
          margin-right: 10px;
        }
        .shareMedia > li > a,
        button {
          padding: 10px 10px;
          border-radius: 50%;
          display: inline-block;
        }

        .shareMedia > li:nth-child(1) > a {
          background: #1771e6;
        }
        .shareMedia > li:nth-child(2) > a {
          background: #1c93e4;
        }
        .shareMedia > li:nth-child(3) > a {
          background: #36b445;
        }
        .shareMedia > li:nth-child(4) > button {
          background: #18181b;
        }
      `}</style>
    </>
  )
}
