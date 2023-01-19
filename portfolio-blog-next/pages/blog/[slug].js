import Image from 'next/image'
import React from 'react'

export default function PostPage() {

  return (
   <>
    <div className='post-header-container'>
      <Image className='header-image' src="/mag.jpg" fill></Image> 
      <div className='post-header'>
         <h2>Relacja z koncertu zespołu MAG</h2>
         <h3>14.05.2022 - Muzeum Książki Artystycznej, Łódź</h3>
      </div>
    </div>
    <div className='post-container'>
      <div className='date'>
         <p>dodano: 07.01.2023</p>
      </div>
      <div className='line'></div>
      <div className='post-content'>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         <div className='post-photo'>
            <img src="/alexandra.png"></img>
            <p className='image-description'>Alexandra Savior podczas występu na On Air Festivalu w 2022 roku.</p>
         </div>
         <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
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
            brak komentarzy
         </div>
      </div>
    </div>
   </>   
   )
}
