import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome at Chlodna Street!" />
        <p className="description">
          Nothing here yet <code>work in progress...</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
