import React from 'react'
import { Link } from 'react-router'

import { Banner } from '../common/banners'

import {
  Button
} from '../buttons'

import {
  FormRow
} from '../forms'

import {
  TextField,
  CheckboxField
} from '../fields'

export default () => (
  <div className='login'>
    <Banner>
      <h2>Log In</h2>
    </Banner>

    <form>
      <FormRow>
        <TextField id='email' label='Email Address' />
      </FormRow>

      <FormRow>
        <TextField id='password' type='password' label='Password' />
      </FormRow>

      <FormRow>
        <Button>Log in</Button>
        <CheckboxField id='remember' label='Remember me' />
      </FormRow>

      <p className='subtle'>Or, <Link to='signup'>create an account</Link>.</p>
    </form>
  </div>
)
