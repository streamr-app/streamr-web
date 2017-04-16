import React from 'react'

import ProfilePreviewContainer from './auth/ProfilePreviewContainer'
import { NavLink } from 'react-router-dom'

export default ({
  isSignedIn
}) => (
  <nav role='main'>
    <ul>
      <li>
        <NavLink exact to='/'>Explore</NavLink>
      </li>

      {
        (isSignedIn) ? (
          <li className='record'>
            <NavLink to='/record'>Record</NavLink>
          </li>
        ) : null
      }

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
        <NavLink to='/signup'>Sign up</NavLink>
      </li>
    )
  }
}
