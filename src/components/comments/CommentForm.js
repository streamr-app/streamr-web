import React from 'react'

import { Field } from 'redux-form'

import {
  Button
} from '../buttons'

import {
  FormError,
  FormRow
} from '../forms'

import {
  TextAreaField,
  reduxFormWrapper
} from '../fields'

const bodyField = reduxFormWrapper(<TextAreaField id='body' placeholder='Leave a comment...' />)

export default ({
  error,
  handleSubmit,
  onSubmit,
  submitting,
  valid
}) => (
  <div className='comment-form'>
    <form onSubmit={handleSubmit(onSubmit)}>
      {error &&
        <FormError>{error}</FormError>}

      <FormRow>
        <Field name='body' component={bodyField} />
      </FormRow>

      <FormRow>
        <Button disabled={submitting || !valid}>Post Comment</Button>
      </FormRow>
    </form>
  </div>
)
