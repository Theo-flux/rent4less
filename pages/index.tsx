import type { NextPage } from 'next'
import Head from 'next/head'
import { Navbar, Hero, Steps, Footer, Aboutus, Download, Statistics, Sales } from '../components';
import { sanityClient } from "../sanity";
import {TJumbotron, TAbout, TDownload, TSales} from "../types/typings";

interface IHomeProps {
    about: [TAbout];
    download: [TDownload];
    jumbotron: [TJumbotron];
    sales: [TSales];
}

const Home = ({ about, download, jumbotron, sales }: IHomeProps) => {
  
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
      <Sales sales={sales}/>
      <Aboutus about={about}/>
      <Statistics/>
      <Download download={download}/>
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

  const downloadQuery = `
    *[_type == 'download']{
      tag,
      title,
      image
    }
  `

  const salesQuery = `
    *[_type == 'sales']{
      tag,
      title,
      image
    }
  `
  const jumbotron = await sanityClient.fetch(jumbotronQuery);
  const about = await sanityClient.fetch(aboutQuery);
  const download = await sanityClient.fetch(downloadQuery);
  const sales = await sanityClient.fetch(salesQuery);
  
  return {
    props: {
      about,
      download,
      jumbotron,
      sales
    }
  }
}

export default Home
