import React from 'react'
import cx from 'classnames'

export default ({
  visible
}) => {
  return (
    <div className={cx('recording-notice long', { visible })}>
      <div className='notice'>
        <p>
          Before you start recording, anything you draw here will show up as the first frame
          of your Stream.
        </p>
        <p>
          We recommend using this time to set up problems or draw illustrations.
        </p>
      </div>
    </div>
  )
}
