import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <title>OneBitFood V2</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}
