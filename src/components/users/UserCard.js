import React from 'react'
import { Link } from 'react-router-dom'

import ProfileImage from './ProfileImage'
import SubscribeButtonContainer from './SubscribeButtonContainer'

export default ({
  user = {}
}) => (
  <div className='user-card'>
    <ProfileImage image={user.imageUrl} />

    <div>
      <Link to={`/profile/${user.id}`} className='profile-link'>{user.name}</Link>
      <p className='bio'>Lorem ipsum dolor sit amet...</p>

      <SubscribeButtonContainer userId={user.id} />
    </div>
  </div>
)
