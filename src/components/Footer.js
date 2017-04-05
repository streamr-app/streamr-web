import React from 'react'
import moment from 'moment'

export default () => (
  <footer role='main'>
    <div className='container'>
      <p>© {moment().format('YYYY')} Streamr</p>
      <p>Designed and built by Tyler Petresky, Steven Petryk, Greg White, and Maxcell Wilson.</p>
      <p>Streamr is free and <a target='_blank' href='https://github.com/streamr-app'>open source</a> to benefit teachers, students, and the world.</p>
    </div>
  </footer>
)
