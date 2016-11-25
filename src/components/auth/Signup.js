import React from 'react'
import { Link } from 'react-router'

import { Banner } from '../common/banners'

import { Field } from 'redux-form'

import {
  Button
} from '../buttons'

import {
  FormRow
} from '../forms'

import {
  TextField,
  PasswordField,
  reduxFormWrapper
} from '../fields'

type PropTypes = {
  handleSubmit: Function,
  onSubmit: Function
}

const emailField = reduxFormWrapper(<TextField label='Email Address' />)
const passwordField = reduxFormWrapper(<PasswordField label='Password' />)

export default ({
  handleSubmit,
  onSubmit
}: PropTypes) => (
  <div className='login'>
    <Banner>
      <h2>Sign Up</h2>
    </Banner>

    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Field name='email' component={emailField} />
      </FormRow>

      <FormRow>
        <Field name='password' component={passwordField} />
      </FormRow>

      <FormRow>
        <Button>Sign Up</Button>
      </FormRow>

      <p className='subtle'>Or, <Link to='login'>log in</Link>.</p>
    </form>
  </div>
)
