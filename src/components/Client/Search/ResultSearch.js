import Img from 'components/Img'
import useFormatDate from 'hooks/useFormatDate'
import Link from 'next/link'
import slugify from 'slugify'

export default function ResultSearch({ results }) {
  console.log(results)
  const title = results._highlightResult.title.value
  const description = results._highlightResult.description.value
  console.log(title)
  const date = useFormatDate(
    results.createdAt,
    false,
    'D MMMM YYYY, h:mm a',
    true
  )
  const titleHTML = () => {
    return { __html: title }
  }
  const descriptionHTML = () => {
    return { __html: description }
  }
  const urlNews = slugify(results.title, { lower: true })
  return (
    <>
      <div className="mb-2 w-full">
        <Link
          href={'/[category]/[id]'}
          as={`/${results.category}/${urlNews}_${results.objectID}`}
        >
          <a className="flex flex-row items-start bg-slate-100 p-2 hover:bg-slate-200 border border-sky-300 rounded">
            <div className="w-32 min-w-[128px] rounded overflow-hidden mr-2 relative">
              <Img src={results.images} width={90} height={60} layout="auto" />
              <div className="absolute bottom-0 bg-slate-300 text-xs font-medium pl-2 pr-2">
                <span>{date}</span>
              </div>
            </div>
            <div className="">
              <h5
                className="text-base font-semibold line-clamp-2"
                dangerouslySetInnerHTML={titleHTML()}
              ></h5>
              <small
                className="line-clamp-2"
                dangerouslySetInnerHTML={descriptionHTML()}
              ></small>
            </div>
          </a>
        </Link>
      </div>
    </>
  )
}
