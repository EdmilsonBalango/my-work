import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import Sidebar from '../components/sidebar/sidebar'
import Board from '../components/board'

function MyApp({ Component, pageProps }: AppProps) {


  return (
  <div className={'flex flex-row'}>
    <Head>
        <title>Watch your work</title>
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" />
        <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></script>    </Head>
    <Sidebar />
    <Board>
      <Component {...pageProps} />
    </Board>
  </div>
  )
}

export default MyApp
