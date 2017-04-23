import React from 'react'
import cx from 'classnames'

import { Prompt } from 'react-router-dom'

import MouseDrawingHandler from '../draw/MouseDrawingHandler'
import StreamRenderer from '../stream-renderer/StreamRenderer'
import DrawingSidebar from './DrawingSidebar'

export default ({
  streamId,
  onCursorMove,
  onLineStart,
  onLineEnd,
  onPointCreate,
  currentEvent,
  currentColor,
  currentThickness,
  undoneLines,
  audioAPIsUnavailable,
  enabled
}) => (
  <div className={cx('draw-view', { disabled: !enabled })}>
    <Prompt
      when={enabled}
      message='Are you sure you want to leave? Your recording will be cancelled.' />

    <DrawingSidebar />

    <div className='draw-container'>
      <StreamRenderer {...{ currentEvent, currentColor, currentThickness, undoneLines }} />
      <MouseDrawingHandler {...{ enabled, onCursorMove, onLineStart, onLineEnd, onPointCreate }} />

      {audioAPIsUnavailable &&
        <p className='recording-notice unable-to-record'>
          Your browser doesn't support audio recording. Please use Google Chrome or Firefox.
        </p>
      }
    </div>
  </div>
)
