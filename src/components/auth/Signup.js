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
  CreatePasswordField,
  reduxFormWrapper
} from '../fields'

const nameField = reduxFormWrapper(<TextField id='name' label='Name' />)
const emailField = reduxFormWrapper(<TextField id='email' label='Email Address' />)
const passwordField = reduxFormWrapper(<CreatePasswordField id='password' label='Password' />)

export default ({
  handleSubmit,
  onSubmit,
  submitting,
  valid
}) => (
  <div className='login'>
    <Banner>
      <h2>Sign Up</h2>
    </Banner>

    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Field name='name' component={nameField} />
      </FormRow>

      <FormRow>
        <Field name='email' component={emailField} />
      </FormRow>

      <FormRow>
        <Field name='password' component={passwordField} />
      </FormRow>

      <FormRow>
        <Button disabled={submitting || !valid}>Sign Up</Button>
      </FormRow>

      <p className='subtle'>Or, <Link to='login'>log in</Link>.</p>
    </form>
  </div>
)
