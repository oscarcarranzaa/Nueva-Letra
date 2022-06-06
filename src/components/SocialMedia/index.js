import FacebookSVG from '../Icons/Facebook'
import InstagramSVG from '../Icons/Instagram'
import TwitterSVG from '../Icons/twitter'
import YoutubeSVG from '../Icons/Youtube'

export default function SocialMedia() {
  const Iconwidth = '28px'
  return (
    <>
      <ul className="flex justify-center socialMedia">
        <li>
          <FacebookSVG width={Iconwidth} height={Iconwidth} />
        </li>
        <li>
          <YoutubeSVG width={Iconwidth} height={Iconwidth} />
        </li>
        <li>
          <TwitterSVG width={Iconwidth} height={Iconwidth} />
        </li>
        <li>
          <InstagramSVG width={Iconwidth} height={Iconwidth} />
        </li>
      </ul>
    </>
  )
}
