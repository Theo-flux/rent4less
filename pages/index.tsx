import type { NextPage } from 'next'
import Head from 'next/head'
import { Navbar, Hero, Steps, Footer, Aboutus } from '../components';
import { sanityClient } from "../sanity";
import {TJumbotron, TAbout} from "../types/typings";

interface IHomeProps {
    jumbotron: [TJumbotron];
    about: [TAbout];
}

const Home = ({ jumbotron, about }: IHomeProps) => {
  console.log(about);
  return (
    <div className={`relative`}>
      <Head>
        <title>Rent4less</title>
        <meta name="description" content="rent4less website" />
        <link rel="icon" href="/favicon.png" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" rel="stylesheet"></link>
      </Head>
      <Navbar />
      <Hero jumbotron={jumbotron}/>
      <Steps />
      <Aboutus about={about}/>
      <Footer />
    </div>
  )
}

export const getServerSideProps =async () => {
  const jumbotronQuery = `
    *[_type == 'jumbotron']{
      tag,
      title,
      description,
      image
    }
  `

  const aboutQuery = `
    *[_type == 'about']{
      tag,
      title,
      description,
      image
    }
  `
  const jumbotron = await sanityClient.fetch(jumbotronQuery);
  const about = await sanityClient.fetch(aboutQuery);
  return {
    props: {
      about,
      jumbotron
    }
  }
}

export default Home
