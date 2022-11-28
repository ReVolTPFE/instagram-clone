import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Instagram Clone App</title>
        <meta name="description" content="Instagram Clone App created for learning purposes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </>
  )
}
