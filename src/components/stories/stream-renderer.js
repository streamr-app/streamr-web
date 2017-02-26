import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import StreamRenderer from '../stream-renderer/StreamRenderer'

storiesOf('Stream renderer', module)
  .add('StreamRenderer', () => (
    <StreamRenderer />
  ))
