import type { NextPage } from 'next'

import Head from 'next/head'
import { Navbar, Hero, Steps, Footer, Aboutus, Download, Statistics, Sales, Testimony, Property } from '../components';
import { sanityClient } from "../sanity";
import { TJumbotron, TAbout, TDownload, TSales, TStats, TTestimony, TProperty } from "../types/typings";

interface IHomeProps {
    about: [TAbout];
    download: [TDownload];
    jumbotron: [TJumbotron];
    sales: [TSales];
    stats: [TStats];
    testimony: [TTestimony];
    property: [TProperty];
}

const Home = ({ 
  about, 
  download, 
  jumbotron, 
  sales, 
  stats, 
  testimony,
  property
}: IHomeProps) => {
  
  return (
    <div className={`relative`}>
      <Head>
        <title>Rent4less</title>
        <meta name="description" content="rent4less website" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Hero jumbotron={jumbotron}/>
      <Steps />
      <Property property={property} />
      <Sales sales={sales}/>
      <Aboutus about={about}/>
      <Statistics stats={stats}/>
      <Download download={download}/>
      <Testimony testimony={testimony} />
      <Footer />
    </div>
  )
}


export const getServerSideProps = async() => {
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

  const statsQuery = `
    *[_type == 'stats']{
      tag,
      figure,
      image
    }
  `

  const testimonyQuery = `
    *[_type == 'testimony']{
      image,
      name,
      role,
      description
    }
  `

  const propertyQuery = `
    *[_type == 'property']{
      availability,
      image,
      title,
      location,
      price
    }
  `

  const jumbotron = await sanityClient.fetch(jumbotronQuery);
  const about = await sanityClient.fetch(aboutQuery);
  const download = await sanityClient.fetch(downloadQuery);
  const sales = await sanityClient.fetch(salesQuery);
  const stats = await sanityClient.fetch(statsQuery);
  const testimony = await sanityClient.fetch(testimonyQuery);
  const property = await sanityClient.fetch(propertyQuery);

  return {
    props: {
      about,
      download,
      jumbotron,
      sales,
      stats,
      testimony,
      property
    }
  }
}

export default Home
