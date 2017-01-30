import React from 'react'

export const CommentList = ({
  children,
  className = '',
  ...rest
}) => (
  <div className={`comment-list ${className}`} {...rest}>
    {children}
  </div>
)
