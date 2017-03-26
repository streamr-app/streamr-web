import React from 'react'
import cx from 'classnames'

import MouseDrawingHandler from '../draw/MouseDrawingHandler'
import StreamRenderer from '../stream-renderer/StreamRenderer'
import DrawingSidebar from './DrawingSidebar'

export default ({
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
    <DrawingSidebar />

    <div className='draw-container'>
      <StreamRenderer {...{ currentLine, currentColor, currentThickness }} />
      <MouseDrawingHandler {...{ enabled, onCursorMove, onLineStart, onLineEnd, onPointCreate }} />
    </div>
  </div>
)
