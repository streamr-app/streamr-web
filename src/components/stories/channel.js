import React from 'react'
import { storiesOf } from '@kadira/storybook'

import channel from './data/channel'

import { ChannelBadge } from '../channel/ChannelBadge'
import { SubscribeButton } from '../channel/SubscribeButton'

storiesOf('Channel', module)
  .add('ChannelBadge', () => (
    <div style={{width: '335px'}}>
      <ChannelBadge channel={channel} />
    </div>
  ))
  .add('SubscribeButton', () => (
    <SubscribeButton channel={channel} />
  ))
  .add('SubscribeButton with Sub Count', () => (
    <SubscribeButton channel={channel} showSubscribers />
  ))
