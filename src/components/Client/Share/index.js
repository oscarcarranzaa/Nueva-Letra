import { useRef, useState } from 'react'
import CopyLink from 'components/Icons/CopyLink'
import FacebookSolid from 'components/Icons/FacebookSolid'
import TwitterSolid from 'components/Icons/TwitterSolid'
import WhatsappSolid from 'components/Icons/WhatsappSolid'
import CheckSVG from 'components/Icons/Check'

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
    <CheckSVG width={24} height={24} fill="#fff" />
  ) : (
    <CopyLink size={24} fill="#fff" />
  )
  return (
    <>
      <div className="flex">
        <ul className="shareMedia">
          <li>
            <a href="/404" target="_blank" rel="noreferrer">
              <FacebookSolid size={24} fill="#fff" />
            </a>
            <p>Facebook</p>
          </li>
          <li>
            <a href="/404" target="_blank" rel="noreferrer">
              <TwitterSolid size={24} fill="#fff" />
            </a>
            <p>Twitter</p>
          </li>
          <li>
            <a href="/404" target="_blank" rel="noreferrer">
              <WhatsappSolid size={24} fill="#fff" />
            </a>
            <p>WhatsApp</p>
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
            <p>Enlace</p>
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
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .shareMedia > li > a,
        button {
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
        }
        .shareMedia > li > a:hover,
        button:hover {
          filter: brightness(1.1);
        }
        .shareMedia > li > p {
          font-size: 12px;
          text-align: center;
          display: none;
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
          background: rgb(81, 78, 255);
          background: radial-gradient(
            circle,
            rgba(81, 78, 255, 1) 23%,
            rgba(4, 26, 149, 1) 100%
          );
        }
      `}</style>
    </>
  )
}
