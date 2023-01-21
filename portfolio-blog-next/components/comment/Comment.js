import React from 'react'

export default function Comment({comment}) {
  function formatDate(date, locale = 'pl-PL') {
    return new Date(date).toLocaleString(locale);
  }

  return (
    <div className='comment-container'>
      <div className='comment-info'>
        <p className='comment-author'>{comment.attributes.nickname}</p>
        <div className='dot'/>
        <p className='comment-date'>{formatDate(comment.attributes.createdAt)}</p>
      </div>
      <div className='comment-content'>
        <p>{comment.attributes.content}</p>
      </div>
    </div>
  )
}
