import '../styles/globals.css'
import Head from 'next/head'
import "swiper/css/bundle";

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200&family=Raleway:ital,wght@0,100;0,200;0,300;1,100&family=Varela+Round&display=swap" rel="stylesheet"/>
  <meta name="description" content='Front-End Developer. Francisco Santana. HTML | CSS | JAVASCRIPT | TAILWIND.CSS | REACT.JS | NEXT.JS. Always Learning.'/>
  </Head>
  <Component {...pageProps} />

  </>
  )
}

export default MyApp
