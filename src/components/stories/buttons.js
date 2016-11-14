import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { Button } from '../buttons'

storiesOf('Buttons', module)
  .add('Standard button', () => (
    <Button>I'm a button!</Button>
  ))
