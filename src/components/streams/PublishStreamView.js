import React from 'react'
import Helmet from 'react-helmet'

import { Banner } from '../common/banners'

import { Field } from 'redux-form'

import {
  Button
} from '../buttons'

import {
  FormError,
  FormRow
} from '../forms'

import {
  TextField,
  TextAreaField,
  reduxFormWrapper
} from '../fields'

const titleField = reduxFormWrapper(<TextField id='title' label='Title' />)
const descriptionField = reduxFormWrapper(<TextAreaField id='description' label='Description' />)

export default ({
  error,
  handleSubmit,
  onSubmit,
  submitting,
  valid
}) => (
  <div className='login'>
    <Helmet title='Publish' />

    <Banner>
      <h2>Publish</h2>
    </Banner>

    <form onSubmit={handleSubmit(onSubmit)}>
      {error &&
        <FormError>{error}</FormError>}

      <FormRow>
        <Field name='title' component={titleField} />
      </FormRow>

      <FormRow>
        <Field name='description' component={descriptionField} />
      </FormRow>

      <FormRow>
        <Button disabled={submitting || !valid}>Publish Stream</Button>
      </FormRow>
    </form>
  </div>
)
