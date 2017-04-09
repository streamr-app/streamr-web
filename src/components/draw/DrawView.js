import React from 'react'
import cx from 'classnames'

import { Prompt } from 'react-router-dom'

import MouseDrawingHandler from '../draw/MouseDrawingHandler'
import StreamRenderer from '../stream-renderer/StreamRenderer'
import DrawingSidebar from './DrawingSidebar'

import AudioRecordingStream from './AudioRecordingStream'

export default ({
  streamId,
  onCursorMove,
  onLineStart,
  onLineEnd,
  onPointCreate,
  currentLine,
  currentColor,
  currentThickness,
  enabled
}) => (
  <div className={cx('draw-view', { disabled: !enabled })}>
    <Prompt
      when={enabled}
      message='Are you sure you want to leave? Your recording will be cancelled.' />

    <DrawingSidebar />

    <div className='draw-container'>
      <StreamRenderer {...{ currentLine, currentColor, currentThickness }} />
      <MouseDrawingHandler {...{ enabled, onCursorMove, onLineStart, onLineEnd, onPointCreate }} />
    </div>

    <AudioRecordingStream {...{ streamId }} />
  </div>
)
