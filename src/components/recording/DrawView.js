import React from 'react'
import cx from 'classnames'

import Helmet from 'react-helmet'
import { Prompt } from 'react-router-dom'

import DrawingSidebar from './sidebar/DrawingSidebar'
import StreamRendererContainer from './StreamRendererContainer'
import MouseDrawingHandlerContainer from './MouseDrawingHandlerContainer'
import RecordingErrorsContainer from './RecordingErrorsContainer'

export default ({
  recording
}) => (
  <div className={cx('draw-view', { disabled: !recording })}>
    <Helmet htmlAttributes={{ class: 'recording' }} />

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
