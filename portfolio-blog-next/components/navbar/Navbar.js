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
        : <><Link href="/portfolio">
        <h3>
          PORTFOLIO
        </h3>
      </Link>
      <div className='dot'></div>
      <Link href="/services">
        <h3>
          USŁUGI
        </h3>
      </Link>
      <div className='dot'></div>
      <Link href="/blog">
        <h3>
          BLOG
        </h3>
      </Link>
      <div className='dot'></div>
      <Link href="/about">
        <h3>
          O MNIE
        </h3>
      </Link>
      <div className='dot'></div>
      <Link href="/contact">
        <h3>
          KONTAKT
        </h3>
      </Link>
      </>
        }
        
      </div>
    </div>
  )
}
