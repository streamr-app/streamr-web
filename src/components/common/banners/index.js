import React from 'react'

type PropTypes = {
  children: ?any
}

export const Banner = ({
  children
}: PropTypes) => (
  <div className='banner'>
    <div className='container'>
      {children}
    </div>
  </div>
)
