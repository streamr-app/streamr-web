import React from 'react'

export default ({
  errors
}) => (
  <ul className='field-errors'>
    {errors.map(error =>
      <li className='field-error'>{error}</li>
    )}
  </ul>
)
