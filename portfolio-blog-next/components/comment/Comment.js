import React from 'react'
import pl from 'javascript-time-ago/locale/pl.json';
import ReactTimeAgo from 'react-time-ago';

export default function Comment({comment}) {

  TimeAgo.addDefaultLocale(pl)

  return (
    <div className='comment-container'>
      <div className='comment-info'>
        <p className='comment-author'>{comment.attributes.nickname}</p>
        <div className='dot'/>
        <p className='comment-date'><ReactTimeAgo date={comment.attributes.createdAt}/></p>
      </div>
      <div className='comment-content'>
        <p>{comment.attributes.content}</p>
      </div>
    </div>
  )
}
