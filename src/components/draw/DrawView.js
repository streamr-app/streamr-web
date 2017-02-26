import React from 'react'

import DrawingBoard from '../drawing-board/DrawingBoard'
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
    <DrawingBoard {...{ onCursorMove, onLineStart, onLineEnd, onPointCreate }}>
      <StreamRenderer currentLine={currentLine} currentColor={currentColor} />
    </DrawingBoard>
    <ColorPickerContainer />
  </div>
)
