import React from 'react'

import { Field } from 'redux-form'

import {
  TextField,
  reduxFormWrapper
} from '../fields'

const searchField = reduxFormWrapper(<TextField id='email' />)

export default ({
  handleSubmit,
  onSubmit,
  submitting,
  valid
}) => (
  <div className='search'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field name='search' component={searchField} />
      <input type='submit' style={{ display: 'none' }} />
    </form>
  </div>
)
