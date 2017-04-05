import React from 'react'

import ProfilePreviewContainer from '../containers/auth/ProfilePreviewContainer'
import { Link } from 'react-router-dom'

export default ({
  isSignedIn
}) => (
  <nav role='main'>
    <ul>
      <li>
        <Link to='/explore'>Explore</Link>
      </li>

      <li className='record'>
        <Link to='/record'>Record</Link>
      </li>

      {showUserOrSignUp(isSignedIn)}
    </ul>
  </nav>
)

function showUserOrSignUp (isSignedIn) {
  if (isSignedIn) {
    return <ProfilePreviewContainer />
  } else {
    return (
      <li>
        <Link to='/signup'>Sign up</Link>
      </li>
    )
  }
}
