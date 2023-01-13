import { useRouter } from 'next/dist/client/router';
import React from 'react';


export default function Footer() {
  return (
<div className='footer-container'>
      <div className='line'/>
      <div className='footer'>
          <div className='contact'>
            <p>Skontaktuj się ze mną:</p>
            <a className='contact-way' href="mailto:oskarkuczewskifotografia@gmail.com">
              <img src="/square-envelope-solid.svg" alt="envelope" width={20} height={20}/>
              <p>oskarkurczewskifotografia@gmail.com</p>
            </a>
            <a className='contact-way' href="tel:604558300">
              <img src="/phone-square-alt-solid.svg" alt="telephone" width={20} height={20}/>
              <p>604 558 300</p>
            </a>
          </div>
          <div className='copyright'>
            <p>© 2023 | Oskar Kurczewski</p>
          </div>
          <div className='socials'>
            <p>Znajdź inne moje profile:</p>
            <div className='icons'>
              <a href="https://www.instagram.com/oskarkurczewski/" target="_blank">
                <img src="/square-instagram.svg" alt="instagram logo" width={22} height={22}/>
              </a>
              <a href="https://www.facebook.com/oskarkurczewskifotografia" target="_blank">
                <img src="/square-facebook.svg" alt="facebook logo" width={22} height={22}/>
              </a>
              <a href="https://github.com/oskarkurczewski" target="_blank">
                <img src="/square-github.svg" alt="github logo" width={22} height={22}/>
              </a>
            </div>
          </div>
      </div>
    </div>
  )
}  