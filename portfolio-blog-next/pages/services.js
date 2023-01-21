import Head from 'next/head'
import React from 'react'
import Service from '../components/service/Service.js';

export default function Services({data}) {

  return (
    <div className='services-container'>
      <Head>
        <title>Oskar Kurczewski - usługi</title>
      </Head>
      {data.data.map(service => (
        <Service data={service}/>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://127.0.0.1:1337/api/services?populate=*`)
  const data = await res.json()

  return { props: { data } }
}