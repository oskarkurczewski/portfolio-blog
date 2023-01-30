import React from 'react'
import Head from 'next/head'
import Image from 'next/image';

export default function About({data}) {
  const url = "http://localhost:1337";

  return (
    <>
      <Head>
          <title>Oskar Kurczewski - o mnie</title>
      </Head>
      <div className='about-container'>
        <div className='image-container'>
          <Image src={url + data.data.attributes.portrait.data.attributes.url} fill alt={data.data.attributes.portrait.data.attributes.name}/>
        </div>
        <div>
          <div className='text'>
          <h1>{data.data.attributes.headline}</h1>    
            <p>
              {data.data.attributes.paragraph1}
            </p>
            <p>
              {data.data.attributes.paragraph2}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/api/aboutpage?populate=*`)
  const data = await res.json()

  return { props: { data } }
}
