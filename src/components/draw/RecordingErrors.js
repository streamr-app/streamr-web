import React from 'react'
import cx from 'classnames'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default ({ error }) => {
  return (
    <div className={cx('recording-error', { visible: !!error })}>
      <ReactCSSTransitionGroup
        transitionName='error'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {error === 'AUDIO_UNAVAILABLE' &&
          <p className='error'>Your browser doesn't support audio recording. Please use Google Chrome or Firefox.</p>}

        {error === 'RECORDING_SERVICE_UNAVAILABLE' &&
          <p className='error'>Streamr's audio recording service is currently unavailable.</p>}
      </ReactCSSTransitionGroup>
    </div>
  )
}
