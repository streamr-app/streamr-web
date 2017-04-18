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

const emailField = reduxFormWrapper(<TextField id='email' label='Email Address' />)

export default ({
  error,
  handleSubmit,
  onSubmit,
  submitting,
  submitSucceeded,
  invalid,
  ...rest
}) => (
  <div className='login'>
    <Helmet title='Forgot Password' />

    <Banner>
      <h2>Request a Password Reset</h2>
    </Banner>

    <form onSubmit={handleSubmit(onSubmit)}>
      {error &&
        <FormError>{error}</FormError>}

      {submitSucceeded &&
        <p className='success'>Great! We've sent you an email with instructions.</p>}

      <FormRow>
        <Field name='email' component={emailField} />
      </FormRow>

      <FormRow>
        <Button disabled={submitting || submitSucceeded || invalid}>Reset my Password</Button>
      </FormRow>

      <p className='subtle'>Suddenly remembered? <Link to='/login'>Login</Link>.</p>
    </form>
  </div>
)
