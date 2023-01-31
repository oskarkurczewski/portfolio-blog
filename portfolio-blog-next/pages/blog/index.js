import Head from 'next/head'
import React from 'react'
import Card from '../../components/card/Card'
import { useState } from 'react';
import Router from "next/router";

export default function Blog({data, page}) {

  // const [currentPage, setCurrentPage] = useState(1);
  // const pageSize = data.meta.pagination.pageSize;

  // const onPageChange = (page) => {
  //   setCurrentPage(page);
  // }

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
      <div className='pagination-container'>
        <p>Strona: {page} z {data.meta.pagination.pageCount}</p>
        <div className='pagination-buttons'>
          <button onClick={() => Router.push(`/blog?page=${page - 1}`)} disabled={page <= 1}>Poprzednia</button>
          <button onClick={() => Router.push(`/blog?page=${page + 1}`)} disabled={page >= data.meta.pagination.pageCount}>Następna</button>
        </div>
      </div>
      
        
    </>
  )
}

export async function getServerSideProps({query: {page = 1}}) {
  const res = await fetch(`${process.env.API_URL}/api/posts?populate=thumbnail,comments&sort=publishedAt:desc&pagination[page]=${page}&pagination[pageSize]=6`)
  const data = await res.json()

  return { 
    props: { 
      data: data,
      page: +page
    }
  }
}