import type { NextPage } from 'next'
import Head from 'next/head'
import { Nav } from "../components";

const Home: NextPage = () => {
  return (
    <div className={``}>
      <Head>
        <title>Rent4less</title>
        <meta name="description" content="rent4less website" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <p>This is rent4less 1.0.0</p>
      <Nav />
    </div>
  )
}

export default Home
