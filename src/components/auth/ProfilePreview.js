import React from 'react'

import { Link } from 'react-router-dom'

import preventDefault from '../../utils/preventDefault'

export default ({
  user,
  onLogOut
}) => (
  <li className='profile-preview'>
    <Link to={`/profile/${user.id}`} className='profile-link'>{user.name}</Link>
    <Link to='/me'>account</Link>
    {' '}
    <a href='' onClick={preventDefault(onLogOut)}>logout</a>
  </li>
)
