import React from 'react'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import muchy from "../public/muchy-graja.jpg";
import kasiaspiewa from "../public/kasia-spiewa.jpg";
import wdowikowski from "../public/wdowikowski.jpg";
import alexandra from "../public/alexandra.png";
import Image from 'next/image';

export default function About({data}) {
  const url = "http://localhost:1337"
 
  const images = data.data.attributes.bottomimages.data

  return (
    <>
      <Head>
          <title>Oskar Kurczewski - o mnie</title>
      </Head>
      <div className='about-container'>
        <div className='description'>
          <Image src={url + data.data.attributes.portrait.data.attributes.url} width='320' height='320' alt={data.data.attributes.portrait.data.attributes.name}></Image>
          <div className='text'>
          <h2>{data.data.attributes.headline}</h2>  
          <p>
            {data.data.attributes.paragraph1}
          <br/>
          <br/>
            {data.data.attributes.paragraph2}
          </p>
          </div>
          
        </div>
        <div className='photos'>
          {images.map(image => (
            <Image src={url + image.attributes.url} width='250' height='250' alt={image.attributes.name}></Image>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://127.0.0.1:1337/api/aboutpage?populate=*`)
  const data = await res.json()

  return { props: { data } }
}
