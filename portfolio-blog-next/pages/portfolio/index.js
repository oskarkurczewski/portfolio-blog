import Head from 'next/head'
import React from 'react'
import ProjectThumbnail from '../../components/project-thumbnail/ProjectThumbnail'

export default function Portfolio({data}) {

  return (
    <div className='portfolio-container'>
      <Head>
        <title>Oskar Kurczewski - portfolio</title>
      </Head>
      {data.data.map(service => (
        <ProjectThumbnail data={service}/>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/api/projects?populate=*`)
  const data = await res.json()

  return { props: { data } }
}