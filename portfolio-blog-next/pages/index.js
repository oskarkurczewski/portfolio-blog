import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import alexandra from '../public/alexandra.png'
import kook from '../public/kook.jpg'
import kasiasienki from '../public/kasiasienki.jpg'

export default function Home() {
  return (
    <div className='mainpage-container'>
      <div className='photos-container'>
        <div className='square-images'>
          <Image src={alexandra} width={300} height={300} alt="alexandra savior"/>
          <Image src={kasiasienki} width={300} height={300} alt="alexandra savior"/>
        </div>
        <Image src={kook} height={610} alt="alexandra savior"/>
      </div>
      <div className='menu-container'>
        <Link href="/portfolio">
          <h3>
            PORTFOLIO
          </h3>
          <img src="/arrow-left-long-solid.svg" alt="arrow" width={50} height={50}/>
        </Link>
        <div className='dot'></div>
        <Link href="/services">
          <h3>
            USŁUGI
          </h3>
          <img src="/arrow-left-long-solid.svg" alt="arrow" width={50} height={50}/>
        </Link>
        <div className='dot'></div>
        <Link href="/blog">
          <h3>
            BLOG
          </h3>
          <img src="/arrow-left-long-solid.svg" alt="arrow" width={50} height={50}/>
        </Link>
        <div className='dot'></div>
        <Link href="/about">
          <h3>
            O MNIE
          </h3>
          <img src="/arrow-left-long-solid.svg" alt="arrow" width={50} height={50}/>
        </Link>
        <div className='dot'></div>
        <Link href="/contact">
          <h3>
            KONTAKT
          </h3>
          <img src="/arrow-left-long-solid.svg" alt="arrow" width={50} height={50}/>
        </Link>
      </div>
    </div>
  )
}
