import Head from 'next/head';
import React, { useState } from 'react';
import ImageModal from '../../components/imagemodal/ImageModal';

export default function Project({data}) {
   const [isOpen, setIsOpen] = useState(false);
   const [modalUrl, setModalUrl] = useState('');
   const url = "http://localhost:1337";

  return (
    <div className='project-container'>
      <ImageModal open={isOpen} onClose={() => {
         setIsOpen(false);
         setModalUrl('');
      }} imageUrl={modalUrl}/>
      <Head>
         <title>Oskar Kurczewski - portfolio</title>
      </Head>
      <div className='project-header'>
         <h2>{data.data.attributes.title}</h2>
         <h3>{data.data.attributes.description}</h3>
      </div>
      <div className='portfolio-masonry-container'>
         <div className='portfolio-masonry'>
            {data.data.attributes.photos.data.map(photo => (
               <img onClick={(e) => {
               setIsOpen(true);
               setModalUrl(e.target.src)
            }} src={url +  photo.attributes.url} />
            ))}
         </div>
      </div>
    </div>
  )
}

export async function getServerSideProps({params}) {
   const res = await fetch(`${process.env.API_URL}/api/projects/${params.slug}`)
  
   if (res.status === 404) {
      return {
         notFound: true,
      }
   }

   const data = await res.json()
   return { props: { data } }
 }