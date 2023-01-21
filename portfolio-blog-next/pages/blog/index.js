import Head from 'next/head'
import React from 'react'
import Card from '../../components/card/Card'

export default function Blog({data}) {

  return (
    <>
      <Head>
        <title>Oskar Kurczewski - blog</title>
      </Head>
      <div className='blog-container'>
        <div className='cards-container'>
          {data.data.map(post => (
            <Card data={post}/>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://127.0.0.1:1337/api/posts?populate=thumbnail`)
  const data = await res.json()

  return { props: { data } }
}