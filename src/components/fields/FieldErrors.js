// @flow

import React from 'react'

type PropTypes = {
  errors: any[]
}

export default ({
  errors
}: PropTypes) => (
  <ul className='field-errors'>
    {errors.map(error =>
      <li className='field-error'>{error}</li>
    )}
  </ul>
)
