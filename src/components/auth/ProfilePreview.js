import React from 'react'

import preventDefault from '../../utils/preventDefault'

export default ({
  user,
  onLogOut
}) => (
  <li className='profile-preview'>
    <p>{user.name}</p>
    <a href='' onClick={preventDefault(onLogOut)}>logout</a>
  </li>
)
