import type { NextPage } from 'next'
import Head from 'next/head'
import { Navbar, Hero } from '../components';
import { sanityClient } from "../sanity";
import {TJumbotron} from "../types/typings";

interface IHomeProps {
    jumbotron: [TJumbotron]
}

const Home = ({ jumbotron }: IHomeProps) => {
  
  return (
    <div className={`relative`}>
      <Head>
        <title>Rent4less</title>
        <meta name="description" content="rent4less website" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Hero jumbotron={jumbotron}/>
    </div>
  )
}

export const getServerSideProps =async () => {
  const query = `
    *[_type == 'jumbotron']{
      tag,
      title,
      description,
      image
    }
  `
  const res = await sanityClient.fetch(query);
  const jumbotron = await res;
  return {
    props: {
      jumbotron
    }
  }
}

export default Home
