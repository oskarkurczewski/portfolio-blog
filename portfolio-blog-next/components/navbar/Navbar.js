import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/dist/client/router';

export default function Navbar() {
  const {pathname} = useRouter()
  const isMainPage = pathname === "/"


  return (
    <div className='navbar'>
      <Link href="/"><h1>OSKAR KURCZEWSKI</h1></Link>
      <div className='line'/>
      <div className='menu'>
        {isMainPage
        ? <h3>fotografia koncertowa, eventowa, reporterska</h3>
        : <>
      <Link href="/portfolio">
        <h3 className={pathname === "/portfolio" ? "purple-highlight" : ""}>
          PORTFOLIO
        </h3>
      </Link>
      <div className='dot'></div>
      <Link href="/services">
        <h3 className={pathname === "/services" ? "purple-highlight" : ""}>
          USŁUGI
        </h3>
      </Link>
      <div className='dot'></div>
      <Link href="/blog">
        <h3 className={pathname === "/blog" ? "purple-highlight" : ""}>
          BLOG
        </h3>
      </Link>
      <div className='dot'></div>
      <Link href="/about">
        <h3 className={pathname === "/about" ? "purple-highlight" : ""}>
          O MNIE
        </h3>
      </Link>
      <div className='dot'></div>
      <Link href="/contact">
        <h3 className={pathname === "/contact" ? "purple-highlight" : ""}>
          KONTAKT
        </h3>
      </Link>
      </>
        }
        
      </div>
    </div>
  )
}
