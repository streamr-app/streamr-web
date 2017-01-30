import React from 'react'

export const ThumbButtons = ({
  className = '',
  likes,
  dislikes,
  onLike,
  onDislike,
  ...rest
}) => (
  <div className={`thumb-buttons-container ${className}`} {...rest}>
    <button className='thumb-container' onClick={onLike}>
      <i className='fa fa-thumbs-up' />
      <div className='count'>{likes}</div>
    </button>
    <button className='thumb-container' onClick={onDislike}>
      <i className='fa fa-thumbs-down' />
      <div className='count'>{dislikes}</div>
    </button>
  </div>
)
