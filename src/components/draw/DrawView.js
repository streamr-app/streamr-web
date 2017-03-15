import React from 'react'

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
  currentThickness
}) => (
  <div className='draw-view'>
    <StreamRenderer currentLine={currentLine} currentColor={currentColor} brushThickness={currentThickness} />
    <MouseDrawingHandler {...{ onCursorMove, onLineStart, onLineEnd, onPointCreate }} />

    <DrawingSidebar />
  </div>
)
