import React from 'react'

const Card = (props) => {
  return (
    <div className='flex gap-3 flex-col border-2'>
      <div className="card_title">{props.post.title}</div>
      <div className="card_desc">{props.post.body}</div>
    </div>
  )
}

export default Card
