import Head from 'next/head'
import React from 'react'
import Card from '../../components/card/Card'

export default function Blog() {
  return (
    <>
      <Head>
        <title>Oskar Kurczewski - blog</title>
      </Head>
      <div className='blog-container'>
        <div className='cards-container'>
          <Card category="Recenzja"></Card>
          <Card category="Relacja"></Card>
          <Card category="Relacja"></Card>
          <Card category="Recenzja"></Card>
          <Card category="Felieton"></Card>
          <Card category="Recenzja"></Card>
          <Card category="Recenzja"></Card>
          <Card category="Relacja"></Card>
          <Card category="Recenzja"></Card>
          <Card category="Recenzja"></Card>
          <Card category="Relacja"></Card>
          <Card category="Recenzja"></Card>
          <Card category="Recenzja"></Card>
          <Card category="Relacja"></Card>
        </div>
      </div>
    </>
  )
}
