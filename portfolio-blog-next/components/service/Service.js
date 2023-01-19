import Image from 'next/image';
import React from 'react'

export default function Service({data}) {
   const url = "http://localhost:1337";
   console.log(data);

  return (
   <div className='service'>
      <div className='information'>
         <Image src={url + data.attributes.cover.data.attributes.url} fill alt={data.attributes.cover.data.attributes.alt}/>
         <p>{data.attributes.desc}</p>
         <div className='prices'>
            <h2>Ceny:<br/> {data.attributes.prices}</h2>
         </div>
      </div>
      <h2>{data.attributes.name}</h2>
   </div>
  )
}
