import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

import { Banner } from '../common/banners'
import UserCardContainer from '../users/UserCardContainer'

import { Field } from 'redux-form'

import {
  Button
} from '../buttons'

import {
  FormError,
  FormRow
} from '../forms'

import {
  CreatePasswordField,
  reduxFormWrapper
} from '../fields'

const passwordField = reduxFormWrapper(<CreatePasswordField id='password' label='New Password' />)

export default ({
  user,
  error,
  handleSubmit,
  onSubmit,
  submitting,
  submitSucceeded,
  invalid,
  ...rest
}) => (
  <div className='login'>
    <Helmet title='Reset your Password' />

    <Banner>
      <h2>Reset your Password</h2>
    </Banner>

    <form onSubmit={handleSubmit(onSubmit)}>
      {user &&
        <UserCardContainer userId={user.id} />}

      {error &&
        <FormError>{error}</FormError>}

      {submitSucceeded &&
        <p className='success'>Success! Go ahead and <Link to='/login'>log in</Link>.</p>}

      <FormRow>
        <Field name='password' component={passwordField} />
      </FormRow>

      <FormRow>
        <Button disabled={submitting || submitSucceeded || invalid}>Reset my Password</Button>
      </FormRow>
    </form>
  </div>
)
