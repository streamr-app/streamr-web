import React from 'react'

export default ({
  errors
}) => (
  <ul className='field-errors'>
    {errors.map((error, index) =>
      <li className='field-error' key={index}>{error}</li>
    )}
  </ul>
)
