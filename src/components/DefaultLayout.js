import React from 'react'

import Header from './Header'

export default ({
  children
}) => (
  <div>
    <Header />

    <main>
      {children}
    </main>
  </div>
)
