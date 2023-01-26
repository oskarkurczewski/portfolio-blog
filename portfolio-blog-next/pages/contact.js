import React from 'react'
import Head from "next/head";
import { useState } from 'react';

export default function Contact() {
  const [firstname, setFirstame] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState(0)

  async function addContactEntry(e) {
    e.preventDefault()
    setResponse(0)

    const contactEntryData = {
      name: firstname,
      surname: surname,
      email: email,
      message: message,
    }

    const add = await fetch("http://localhost:1337/api/contact-entries", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({data: contactEntryData})
    })

    setFirstame('')
    setSurname('')
    setEmail('')
    setMessage('')
    setResponse(add.status)
  }

  return (
    <>
      <Head>
        <title>Oskar Kurczewski - kontakt</title>
      </Head>
      <div className='contact-container'>
        <h2>Skontaktuj się za pomocą formularza:</h2>
        <div className='form-container'>
          <form onSubmit={(e) => addContactEntry(e)}>
            <div className='name-input'>
              <div className='row-input'>
                <label for="name">Imię:</label>
                <input required type="text" onChange={e => setFirstame(e.target.value)} value={firstname} id="name" name="name"></input>
              </div>
              <div className='row-input'>
                <label for="surname">Nazwisko:</label>
                <input required type="text" onChange={e => setSurname(e.target.value)} value={surname} id="surname" name="surname"></input>
              </div>
            </div>
            <div className='column-input'>
              <label for="email">Email:</label>
              <input required type="email" onChange={e => setEmail(e.target.value)} value={email} id="email" name="email"></input>
            </div>
            <div className='column-input'>
              <label for="message">Wiadomość:</label>
              <textarea required type="text" onChange={e => setMessage(e.target.value)} value={message} id="message" name="message"></textarea>
            </div>
            <div className='contact-row'>
              <div className='response-container'>
              {
                    response === 200 
                    ?
                    <p className='success'>Pomyślnie wysłano wiadomość!</p>
                    : (
                      response === 0 
                      ?
                      <></>
                      :
                      <p className='failure'>Coś poszło nie tak. Spróbuj ponownie później!</p>
                    )
                  }
              </div>
              <button>WYŚLIJ</button>
            </div>
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
