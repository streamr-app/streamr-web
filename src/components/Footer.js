import React from 'react'

export default () => (
  <footer role='main'>
    <div className='container'>
      <p>© {(new Date()).getYear() + 1900} Streamr</p>
      <p>Designed and built by Tyler Petresky, Steven Petryk, Greg White, and Maxcell Wilson.</p>
      <p>Streamr is free and <a target='_blank' href='https://github.com/streamr-app'>open source</a> to benefit teachers, students, and the world.</p>
    </div>
  </footer>
)
