import style from './img.module.css'

export default function Img({ src, layout, width, height, alt }) {
  // const priority = priorityImg || false
  const size = height / width
  const rounded = size.toFixed(4) * 100
  if (layout === 'responsive') {
    const i = src.filter((w) => w.width === 480)[0]
    return (
      <>
        <span className={style._WrapperImage}>
          <span
            className={style._ContentImage}
            style={{ paddingBottom: rounded + '%' }}
          ></span>
          <img
            src={i.src}
            decoding="async"
            sizes="100vw"
            srcSet={src.map((i) => {
              return i.src + ' ' + i.width + 'w'
            })}
            loading="lazy"
            className={style._styledImage}
            alt={alt}
          />
        </span>
      </>
    )
  }
  if (layout === 'auto') {
    const autoImage = src.filter((w) => w.width >= width)[0]
    return (
      <span className={style._WrapperImage}>
        <span
          className={style._ContentImage}
          style={{ paddingBottom: rounded + '%' }}
        ></span>
        <img
          src={autoImage.src}
          decoding="async"
          loading="lazy"
          alt={alt}
          className={style._styledImage}
        />
      </span>
    )
  }
  return (
    <span className={style._WrapperImage}>
      <span
        className={style._ContentImage}
        style={{ paddingBottom: rounded + '%' }}
      ></span>
      <img
        src={src}
        decoding="async"
        loading="lazy"
        alt={alt}
        className={style._styledImage}
      />
    </span>
  )
}
