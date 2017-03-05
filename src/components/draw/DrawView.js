import React from 'react'

import MouseDrawingHandler from '../draw/MouseDrawingHandler'
import StreamRenderer from '../stream-renderer/StreamRenderer'
import ColorPickerContainer from '../../containers/draw/ColorPickerContainer'

export default ({
  onCursorMove,
  onLineStart,
  onLineEnd,
  onPointCreate,
  currentLine,
  currentColor
}) => (
  <div className='draw-view'>
    <StreamRenderer currentLine={currentLine} currentColor={currentColor} />
    <MouseDrawingHandler {...{ onCursorMove, onLineStart, onLineEnd, onPointCreate }} />
    <ColorPickerContainer />
  </div>
)
