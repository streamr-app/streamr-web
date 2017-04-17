import React from 'react'

import UserCardContainer from '../users/UserCardContainer'
import VoteButtonContainer from './VoteButtonContainer'

export default ({
  stream = {}
}) => (
  <div className='stream-details'>
    <div className='basic-info'>
      <h1>{stream.title}</h1>
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
