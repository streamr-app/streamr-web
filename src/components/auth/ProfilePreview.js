import React from 'react'

import { Link } from 'react-router-dom'

import preventDefault from '../../utils/preventDefault'

export default ({
  user,
  onLogOut
}) => (
  <li className='profile-preview'>
    <p>{user.name}</p>
    <Link to='/me'>account</Link>
    {' '}
    <a href='' onClick={preventDefault(onLogOut)}>logout</a>
  </li>
)
