import React from 'react'

import Helmet from 'react-helmet'

export default ({
  children
}) => (
  <div>
    <Helmet
      htmlAttributes={{ class: 'recording' }} />

    {children}
  </div>
)
