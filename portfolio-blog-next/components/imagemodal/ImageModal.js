import React from 'react'

export default function ImageModal({imageUrl, open, onClose}) {
   if (!open) return null;
  
   return (
    <div className='modal-container' onClick={onClose}>
      <div className='picture-container'>
         <p>Zamknij</p>
         <img src={imageUrl}/>
      </div>
    </div>
  )
}
