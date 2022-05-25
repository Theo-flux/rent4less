import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rent4less</title>
        <meta name="description" content="rent4less website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>This is rent4less 1.0.0</p>
    </div>
  )
}

export default Home
