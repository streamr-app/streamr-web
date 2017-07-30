import React from 'react'

import { Link } from 'react-router-dom'

import ProfileImage from '../users/ProfileImage'
import preventDefault from '../../utils/preventDefault'

export default ({
  user,
  onLogOut
}) => (
  <li className='profile-preview dropdown-trigger'>
    <Link to={`/profile/${user.id}`} className='profile-link'>{user.name}</Link>

    <div className='dropdown'>
      <div className='dropdown-inner'>
        <header>
          <ProfileImage image={user.imageUrl} />
          <div className='details'>
            <h1>Steven Petryk</h1>
            <p><Link to={`/profile/${user.id}`} className='profile-link'>View channel</Link></p>
          </div>
        </header>

        <ul>
          <li><Link to='/me'>Account</Link></li>
          <li><a href='' onClick={preventDefault(onLogOut)}>Logout</a></li>
        </ul>
      </div>
    </div>
  </li>
)
