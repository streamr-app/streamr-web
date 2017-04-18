import React from 'react'

import UserCardContainer from '../users/UserCardContainer'
import VoteButtonContainer from './VoteButtonContainer'

export default ({
  stream = {},
  topic = {}
}) => (
  <div className='stream-details'>
    <div className='basic-info'>
      <h1>{stream.title}</h1> {(topic) ? <h4>{topic.name}</h4> : null}
      <p>{stream.description || noDescription()}</p>

      {stream.id &&
        <VoteButtonContainer streamId={stream.id} />}
    </div>

    <UserCardContainer userId={(stream.user || {}).id} />
  </div>
)

function noDescription () {
  return <span className='none'>No description provided.</span>
}
