import Image from 'next/image';
import React from 'react';
import Link from "next/link";

export default function Card({data}) {
  const url = "http://localhost:1337";
  function formatDate(date, locale = 'pl-PL') {
    return new Date(date).toLocaleDateString(locale);
  }

  console.log(data.attributes.comments.data.length)
  
  return (
    <Link href={`/blog/${data.attributes.slug}`}>
      <div className='card-container'>
          <div className='thumbnail-container'>
            <Image src={url + data.attributes.thumbnail.data.attributes.url} fill></Image>    
            <div className="category">
                <p className='category-name'>{data.attributes.category}</p>
            </div>  
          </div>
          <div className='info-container'>
            <p className='title'>{data.attributes.title}</p>
            <div className='bottom-info'>
              <div className='line'></div>
              <p className='date'>
                {formatDate(data.attributes.publishedAt)} 
              </p>
            </div>
          </div>
      </div>
    </Link>
  )
}
