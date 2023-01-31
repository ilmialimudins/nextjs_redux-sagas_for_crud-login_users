import { Html, Head, Main, NextScript } from 'next/document'
import NavBar from './component/NavBar'
import Footer from './component/Footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className=''>
      <NavBar/>
      <div className='mt-5 pt-5'>
        <Main />
        <NextScript />
      </div>
      <Footer/>
      </body>
    </Html>
  )
}
