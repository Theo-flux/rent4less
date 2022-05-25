import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {} from '../slice'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rent4less</title>
        <meta name="description" content="Rent4less is your number one choice when it comes to finding landed properties"/>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <h1>Rentless</h1>
    </div>
  )
}

export default Home;