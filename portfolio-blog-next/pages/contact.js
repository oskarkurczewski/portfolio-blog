import React from 'react'
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Oskar Kurczewski - kontakt</title>
      </Head>
      <div className='contact-container'>
        <h2>Skontaktuj się za pomocą formularza:</h2>
        <div className='form-container'>
          <form action="/" method="post">
            <div className='name-input'>
              <div className='row-input'>
                <label for="name">Imię:</label>
                <input type="text" id="name" name="name"></input>
              </div>
              <div className='row-input'>
                <label for="surname">Nazwisko:</label>
                <input type="text" id="surname" name="surname"></input>
              </div>
            </div>
            <div className='column-input'>
              <label for="email">Email:</label>
              <input type="text" id="email" name="email"></input>
            </div>
            <div className='column-input'>
              <label for="message">Wiadomość:</label>
              <textarea type="text" id="message" name="message"></textarea>
            </div>
            <button type="submit">WYŚLIJ</button>
          </form>
        </div>
        <h2>...lub skorzystaj z innych sposobów:</h2>
        <div className='contact-links-container'>
          <a href="https://www.instagram.com/oskarkurczewski/" target="_blank">
            <img src="/square-instagram.svg" alt="instagram logo" width={50} height={50}/>
          </a>
          <a href="https://www.facebook.com/oskarkurczewskifotografia" target="_blank">
            <img src="/square-facebook.svg" alt="facebook logo" width={50} height={50}/>
          </a>
          <a className='contact-way' href="mailto:oskarkuczewskifotografia@gmail.com">
            <img src="/square-envelope-solid.svg" alt="envelope" width={50} height={50}/>
          </a>
          <a href="https://github.com/oskarkurczewski" target="_blank">
            <img src="/square-github.svg" alt="github logo" width={50} height={50}/>
          </a>
        </div>
      </div>
    </>
  )
}
