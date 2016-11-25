// @flow

import React from 'react'

type PropTypes = {
  errors: any[]
}

export default ({
  errors
}: PropTypes) => (
  <ul className='field-errors'>
    {errors.map((error, index) =>
      <li className='field-error' key={index}>{error}</li>
    )}
  </ul>
)
