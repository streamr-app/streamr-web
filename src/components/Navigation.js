import React from 'react'

import { Link } from 'react-router'

export default () => (
  <nav role='main'>
    <ul>
      <li>
        <Link to='explore'>Explore</Link>
      </li>
      <li>
        <Link to='sign-in'>Sign In</Link>
      </li>
      <li className='record'>
        <Link to='record'>Record</Link>
      </li>
    </ul>
  </nav>
)
