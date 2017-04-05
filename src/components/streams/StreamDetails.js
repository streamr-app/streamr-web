import React from 'react'

import UserCardContainer from '../../containers/users/UserCardContainer'

export default ({
  stream = {}
}) => (
  <div className='stream-details'>
    <div className='basic-info'>
      <h1>{stream.title}</h1>
      <p>{stream.description || noDescription()}</p>
    </div>

    <UserCardContainer userId={(stream.user || {}).id} />
  </div>
)

function noDescription () {
  return <span className='none'>No description provided.</span>
}
