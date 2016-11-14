import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import { Button } from '../buttons'

storiesOf('Buttons', module)
  .add('Standard button', () => (
    <Button onClick={action('Clicked')}>I'm a button!</Button>
  ))
