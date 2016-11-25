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
  CheckboxField,
  reduxFormWrapper
} from '../fields'

type PropTypes = {
  handleSubmit: Function,
  onSubmit: Function
}

const emailField = reduxFormWrapper(<TextField label='Email Address' />)
const passwordField = reduxFormWrapper(<TextField type='Password' label='Password' />)
const rememberField = reduxFormWrapper(<CheckboxField label='Remember me' id='remember' />)

export default ({
  handleSubmit,
  onSubmit
}: PropTypes) => (
  <div className='login'>
    <Banner>
      <h2>Log In</h2>
    </Banner>

    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Field name='email' component={emailField} />
      </FormRow>

      <FormRow>
        <Field name='password' component={passwordField} />
      </FormRow>

      <FormRow>
        <Button>Log in</Button>
        <Field name='remember' component={rememberField} />
      </FormRow>

      <p className='subtle'>Or, <Link to='signup'>create an account</Link>.</p>
    </form>
  </div>
)
