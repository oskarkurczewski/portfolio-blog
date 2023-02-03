import React from 'react'
import Link from "next/link";
import Head from "next/head";
import Image from 'next/image'

function Home({data}) {
  const url = "http://localhost:1337";

  return (
    <div className='mainpage-container'>
      <Head>
        <title>Oskar Kurczewski</title>
      </Head>
      <div className='mainpage-content'>
        <div className='photos-container'>
          <div className='square-images'>
            <div className='square-image'>
              <Image src={url +  data.data.attributes.squarephotos.data[0].attributes.url} fill alt={data.data.attributes.squarephotos.data[0].attributes.alternativeText}/>
            </div>
            <div className='square-image'>
              <Image src={url +  data.data.attributes.squarephotos.data[1].attributes.url} fill alt={data.data.attributes.squarephotos.data[1].attributes.alternativeText}/>
            </div>
          </div>
          <div className='tall-image'>
            <Image src={url +  data.data.attributes.verticalphoto.data.attributes.url} fill alt={data.data.attributes.verticalphoto.data.attributes.alternativeText}/>
          </div>
        </div>
        <div className='menu-container'>
          <Link href="/portfolio">
            <h3>
              PORTFOLIO
            </h3>
            <img src="/arrow-left-long-solid.svg" alt="arrow"/>
          </Link>
          <div className='dot'></div>
          <Link href="/services">
            <h3>
              USŁUGI
            </h3>
            <img src="/arrow-left-long-solid.svg" alt="arrow"/>
          </Link>
          <div className='dot'></div>
          <Link href="/blog">
            <h3>
              BLOG
            </h3>
            <img src="/arrow-left-long-solid.svg" alt="arrow" />
          </Link>
          <div className='dot'></div>
          <Link href="/about">
            <h3>
              O MNIE
            </h3>
            <img src="/arrow-left-long-solid.svg" alt="arrow"/>
          </Link>
          <div className='dot'></div>
          <Link href="/contact">
            <h3>
              KONTAKT
            </h3>
            <img src="/arrow-left-long-solid.svg" alt="arrow"/>
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/api/mainpage?populate=*`)
  const data = await res.json()

  return { props: { data } }
}

export default Home