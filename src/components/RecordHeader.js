import React from 'react'

import { Link } from 'react-router'

export default () => (
  <header role='main'>
    <h1>
      <Link to='/'>
        <img src={require('../images/header-logo.png')} alt='Streamr' />
      </Link>
    </h1>
  </header>
)
