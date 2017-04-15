import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

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
  reduxFormWrapper
} from '../fields'

const nameField = reduxFormWrapper(<TextField id='name' label='Name' />)
const emailField = reduxFormWrapper(<TextField id='email' label='Email Address' />)

export default ({
  error,
  handleSubmit,
  onSubmit,
  pristine,
  submitting,
  valid
}) => (
  <div className='login'>
    <Helmet title='Log In' />

    <Banner>
      <h2>My Account</h2>
    </Banner>

    <form onSubmit={handleSubmit(onSubmit)}>
      {error &&
        <FormError>{error}</FormError>}

      <FormRow>
        <Field name='name' component={nameField} />
      </FormRow>

      <FormRow>
        <Field name='email' component={emailField} />
      </FormRow>

      <FormRow>
        <Button disabled={pristine || submitting || !valid}>Update Profile</Button>
      </FormRow>
    </form>
  </div>
)
