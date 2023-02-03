import React from 'react'
import Link from "next/link";
import error404 from "../public/404.svg"
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className='not-found-container'>
      <Image src={error404} alt="404 :("></Image>
      <h1>Nie znaleziono.</h1>
      <Link href='/'>
        <div className='button'>
          <h2>STRONA GŁÓWNA</h2>
        </div>
      </Link>
    </div>
  )
}
