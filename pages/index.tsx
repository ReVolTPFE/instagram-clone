import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Head>
        <title>Instagram Clone App</title>
        <meta name="description" content="Instagram Clone App created for learning purposes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Feed />
    </div>
  )
}
