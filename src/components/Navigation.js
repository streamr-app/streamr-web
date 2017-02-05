import React from 'react'

import ProfilePreviewContainer from '../containers/auth/ProfilePreviewContainer'
import { Link } from 'react-router'

export default ({
  isSignedIn
}) => (
  <nav role='main'>
    <ul>
      <li>
        <Link to='explore' activeClassName='active'>Explore</Link>
      </li>

      <li className='record'>
        <Link to='record' activeClassName='active'>Record</Link>
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
        <Link to='signup' activeClassName='active'>Sign up</Link>
      </li>
    )
  }
}
