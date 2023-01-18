import Image from 'next/image'
import React from 'react'

export default function Card({category}) {
  return (
    <div className='card-container'>
      <div className='thumbnail-container'>
         <Image src="/kasiasienki.jpg" fill></Image>    
         <div className="category" id={category}>
            <p className='category-name'>{category}</p>
         </div>  
      </div>
      <div className='info-container'>
         <p className='title'>Candy Claws - Ceres & Calypso in the Deep Time Deep Time</p>
         <div className='bottom-info'>
          <div className='line'></div>
          <p className='date'>09.01.2023</p>
         </div>
      </div>
    </div>
  )
}
