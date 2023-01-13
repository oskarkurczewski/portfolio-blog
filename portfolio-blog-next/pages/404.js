import React from 'react'
import Link from "next/link";

export default function NotFound() {
  return (
    <div className='notFoundContainer'>
      <h1>Nie znaleziono.</h1>
      <Link href='/'><h1>STRONA GŁÓWNA</h1></Link>
    </div>
  )
}
