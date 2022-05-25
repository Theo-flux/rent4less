import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from "../components";

const Home: NextPage = () => {
  return (
    <div className={``}>
      <Head>
        <title>Rent4less</title>
        <meta name="description" content="rent4less website" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
    </div>
  )
}

export default Home
