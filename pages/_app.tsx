import { Header } from '@/components/Header'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Container } from 'react-bootstrap'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <title>OneBitFood V2</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />

        <Container className='mt-6'>
          <Component {...pageProps} />
        </Container>
      </main>
    </>
  )
}
