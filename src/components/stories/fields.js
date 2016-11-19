import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import {
  TextField,
  CheckboxField,
  RadioField,
  RadioGroup
} from '../fields'

storiesOf('Fields', module)
  .add('TextField', () => (
    <TextField label='Label' placeholder='Placeholder' id='field' onChange={action('Changed')} />
  ))
  .add('TextField with Errors', () => (
    <TextField
      id='field'
      label='Label'
      placeholder='Placeholder'
      onChange={action('Changed')}
      errors={[ 'This field is required.', "You must be named 'Steven'." ]} />
  ))
  .add('CheckboxField', () => (
    <CheckboxField label='Label' id='field' onChange={action('Changed')} />
  ))
  .add('CheckboxField with description', () => (
    <CheckboxField label='Label' description='Description' id='field' onChange={action('Changed')} />
  ))
  .add('RadioField', () => (
    <RadioField label='Label' id='field' onChange={action('Changed')} />
  ))
  .add('RadioField with description', () => (
    <RadioField label='Label' description='Description' id='field' onChange={action('Changed')} />
  ))
  .add('RadioGroup', () => (
    <RadioGroup onChange={action('Radio group changed')}>
      <RadioField value='cats' label='I like cats' description='Meow.' />
      <RadioField value='dogs' label='I like dogs' description='Woof!' />
    </RadioGroup>
  ))
