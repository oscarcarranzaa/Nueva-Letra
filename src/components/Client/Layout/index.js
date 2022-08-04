import Head from 'next/head'
import Footer from '../Footer'
import Navbar from '../NavBar'

export default function Layout({
  children,
  title,
  description,
  image,
  keywords
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        ></meta>
        <meta name="language" content="es"></meta>
        <meta name="title" content={title}></meta>
        <meta name="description" content={description}></meta>
        <meta name="keywords" content={keywords}></meta>
        <meta name="image" content={image}></meta>

        <meta property="og:title" content={title}></meta>
        <meta property="og:description" content={description}></meta>
        <meta property="og:image" content={image}></meta>
        <meta property="og:image:type" content="image/jpg"></meta>
        <meta property="og:url" content="https://www.nuevaletra.com"></meta>
        <meta property="og:locale" content="es_HN"></meta>
        <meta property="fb:app_id" content="fbid"></meta>
        <meta property="fb:pages" content="fbid"></meta>

        <meta itemProp="name" content={title}></meta>
        <meta itemProp="description" content={description}></meta>
        <meta itemProp="image" content={image}></meta>

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:creator" content="@cdm_noticias"></meta>
        <meta name="twitter:creator" content="@cdm_noticias"></meta>
        <meta name="twitter:title" content={title}></meta>
        <meta name="twitter:description" content={description}></meta>
        <meta name="twitter:image:src" content={image}></meta>
        <link rel="favicon" href="/static/images/NL-logo.svg" />
      </Head>
      <Navbar />
      <main className="p-3 md:p-5">{children}</main>
      <Footer />
    </>
  )
}
Layout.defaultProps = {
  title: 'Nueva letra - Noticias',
  description: 'Medio de noticias hondureñas',
  image: '/static/images/CDM_logo.png',
  keywords: 'Noticias Honduras, Nueva Letra, viral honduras, politica'
}
