// @flow

import React from 'react'

import { Link } from 'react-router'

export default () => (
  <nav role='main'>
    <ul>
      <li>
        <Link to='explore'>Explore</Link>
      </li>
      <li>
        <Link to='signup'>Sign up</Link>
      </li>
      <li className='record'>
        <Link to='record'>Record</Link>
      </li>
    </ul>
  </nav>
)
