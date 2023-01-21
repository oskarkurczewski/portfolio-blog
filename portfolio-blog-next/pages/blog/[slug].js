import Image from 'next/image'
import React from 'react'
import Comment from '../../components/comment/Comment';

export default function PostPage({data}) {
   const url = "http://localhost:1337";
   function formatDate(date, locale = 'pl-PL') {
      return new Date(date).toLocaleDateString(locale);
    }

    console.log(data.data.attributes.comments.data.length)

   //  data.data.attributes.comments.data.map(comment => (
   //    console.log(comment.attributes)
   //  ))

  return (
   <>
    <div className='post-header-container'>
      <Image className='header-image' src="/mag.jpg" fill></Image> 
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
         <form action="/add-comment" method="post">
            <textarea type="text" id="comment"/>
            <div className='submitter'>
               <label for="nickname">Imię:</label>
               <input type="text" id="nickname" name="nickname"/>
               <button type="button">WYŚLIJ</button>
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
   const res = await fetch(`http://127.0.0.1:1337/api/posts/${params.slug}`)
  
   if (res.status === 404) {
      return {
         notFound: true,
      }
   }

   const data = await res.json()
   return { props: { data } }
 }