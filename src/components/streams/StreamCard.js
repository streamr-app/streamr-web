import React from 'react'

export const StreamCard = ({
  children,
  className = '',
  stream,
  ...rest
}) => (
  <div className={`stream-card ${className}`} {...rest}>
    <div className='thumbnail-wrapper'>
      <img className='thumbnail' src='http://placehold.it/150x100' />
    </div>
    <div className='information-wrapper'>
      <div className='title'>{stream.title}</div>
      <div className='description'>{stream.description}</div>
    </div>
  </div>
)
