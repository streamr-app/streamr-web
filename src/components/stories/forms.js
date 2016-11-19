import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import {
  FormRow
} from '../forms'

import {
  TextField,
  RadioField,
  RadioGroup
} from '../fields'

storiesOf('Forms', module)
  .add('FormRows', () => (
    <div>
      <FormRow>
        <TextField label='Label' placeholder='Placeholder' id='field1' onChange={action('Changed')} />
      </FormRow>

      <FormRow>
        <TextField
          id='field2'
          label='Label'
          placeholder='Placeholder'
          onChange={action('Changed')}
          errors={[ 'This field is required.' ]} />
      </FormRow>

      <FormRow>
        <TextField label='Label' placeholder='Placeholder' id='field3' onChange={action('Changed')} />
      </FormRow>

      <FormRow>
        <RadioGroup>
          <RadioField value='cats' label='I like cats' description='Meow.' />
          <RadioField value='dogs' label='I like dogs' description='Woof!' />
        </RadioGroup>
      </FormRow>

      <FormRow>
        <RadioGroup>
          <RadioField value='twix' label='I like twix' />
          <RadioField value='kit-kats' label='I like kit-kats' />
        </RadioGroup>
      </FormRow>
    </div>
  ))
