import Image from 'next/image'
import React from 'react'
import Comment from '../../components/comment/Comment';
import { useState } from 'react';
import Router from 'next/router'

export default function PostPage({data}) {
   const url = "http://localhost:1337";
   function formatDate(date, locale = 'pl-PL') {
      return new Date(date).toLocaleDateString(locale);
    }
    const router = Router.useRouter();

    const [nickname, setNickname] = useState('')
    const [content, setContent] = useState('')
    const postId = data.data.id

    async function addComment(e) {
      e.preventDefault();

      const commentData = {
         nickname: nickname,
         content: content,
         post: {
            id: postId
         }
      }

      const add = await fetch(`${url}/api/comments`, {
         method: "POST",
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({data: commentData})
      })

      setNickname('')
      setContent('')
      router.reload(window.location.pathname)
   }

    
  return (
   <>
    <div className='post-header-container'>
      <Image className='header-image' src={url + data.data.attributes.background.data.attributes.url} fill></Image> 
      <div className='post-header'>
         <h2>{data.data.attributes.title}</h2>
         <h3>{data.data.attributes.description}</h3>
      </div>
    </div>
    <div className='post-container'>
      <div className='date'>
         <p>dodano: {formatDate(data.data.attributes.publishedAt)}</p>
      </div>
      <div className='line'></div>
      <div className='post-content'>
         {
               data.data.attributes.content.map(element => {
                  return element.__component === "post.paragraph" ?
                     <p>{element.content}</p> 
                  :
                     <div className='post-photo'>
                        <img src={url + element.picture.data.attributes.url}></img>
                        <p className='image-description'>{element.picture.data.attributes.caption}</p>
                     </div>
               }
            )
         }
      </div>
      <div className='line'></div>
      <div className='comments-container'>
         <h3>Komentarze</h3>
         <form onSubmit={(e) => addComment(e)}>
            <textarea required type="text" id="comment" onChange={e => setContent(e.target.value)}/>
            <div className='submitter'>
               <label for="nickname">Imię:</label>
               <input required type="text" onChange={e => setNickname(e.target.value)} id="nickname" name="nickname"/>
               <button>WYŚLIJ</button>
            </div>
         </form>
         <div className='comments'>
            {
               data.data.attributes.comments.data.length === 0 
               ?
               <p>brak komentarzy</p>
               :
               data.data.attributes.comments.data.map(comment => (
                  <Comment comment={comment}/>
               ))
            }
         </div>
      </div>
    </div>
   </>   
   )
}

export async function getServerSideProps({params}) {
   const res = await fetch(`${process.env.API_URL}/api/posts/${params.slug}`)
  
   if (res.status === 404) {
      return {
         notFound: true,
      }
   }

   const data = await res.json()
   return { props: { data } }
 }