import React from 'react'

export default function ProjectThumbnail({data}) {
   const url = "http://localhost:1337";

  return (
    <div className='project-thumbnail'>
      <img src={url + data.attributes.thumbnail.data.attributes.url}/>
      <div className='project-info-container'>
         <div className='left'>
            <p>{data.attributes.title}</p>
            <p>{data.attributes.description}</p>
         </div>
         <div className='right'>
            <a href={`/portfolio/${data.attributes.slug}`}>
               <p>więcej zdjęć</p>
            </a>
         </div>
      </div>
    </div>
  )
}
