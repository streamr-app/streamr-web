import React from 'react'
import cx from 'classnames'

import { Prompt } from 'react-router-dom'

import MouseDrawingHandlerContainer from './MouseDrawingHandlerContainer'
import StreamRendererContainer from './StreamRendererContainer'
import DrawingSidebar from './DrawingSidebar'
import RecordingErrorsContainer from './RecordingErrorsContainer'

export default ({
  recording
}) => (
  <div className={cx('draw-view', { disabled: !recording })}>
    <Prompt
      when={recording}
      message='Are you sure you want to leave? Your recording will be cancelled.' />

    <DrawingSidebar />

    <div className='draw-container'>
      <StreamRendererContainer />
      <MouseDrawingHandlerContainer />

      <RecordingErrorsContainer />
    </div>
  </div>
)
