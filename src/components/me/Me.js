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
  SinglePhotoDropzone,
  CreatePasswordField,
  reduxFormWrapper,
  RadioField,
  RadioGroup
} from '../fields'

const imageField = reduxFormWrapper(<SinglePhotoDropzone id='image' />)
const nameField = reduxFormWrapper(<TextField id='name' label='Name' />)
const emailField = reduxFormWrapper(<TextField id='email' label='Email Address' />)
const passwordField = reduxFormWrapper(<CreatePasswordField id='password' label='Password' />)
const colorPreferenceField = reduxFormWrapper(
  <RadioGroup>
    <RadioField value='normal' label='Normal' description='Use our default color set.' />
    <RadioField value='deuteranopia' label='Deuteranopia'
      description='Use colors adapted for users with deuteranopia.' />
    <RadioField value='protanopia' label='Protanopia'
      description='Use colors adapted for users with protanopia.' />
    <RadioField value='tritanopia' label='Tritanopia'
      description='Use colors adapted for users with tritanopia.' />
  </RadioGroup>
)

export default class Me extends React.Component {
  render () {
    const {
      error,
      handleSubmit,
      onSubmit,
      pristine,
      submitting,
      invalid
    } = this.props

    return (
      <div className='login me'>
        <Helmet title='My Account' />

        <Banner>
          <h2>My Account</h2>
        </Banner>

        <form onSubmit={handleSubmit(onSubmit)}>
          {error &&
            <FormError>{error}</FormError>}

          <h3>Profile Information</h3>

          <div className='form-block'>
            <Field name='image' component={imageField} />

            <div>
              <FormRow>
                <Field name='name' component={nameField} />
              </FormRow>

              <FormRow>
                <Field name='email' component={emailField} />
              </FormRow>
            </div>
          </div>

          <h3>Password</h3>

          <p>If you don't want to change your password, just leave this blank.</p>

          <FormRow>
            <Field name='password' component={passwordField} />
          </FormRow>

          <h3>Color Preferences</h3>

          <FormRow>
            <Field name='colorPreference' component={colorPreferenceField} />
          </FormRow>

          <FormRow>
            <Button disabled={pristine || submitting || invalid}>
              {submitting
                ? 'Saving...'
                : 'Update Profile'}
            </Button>
          </FormRow>
        </form>
      </div>
    )
  }
}
