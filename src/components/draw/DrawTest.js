import React from 'react'

import DrawingBoard from '../drawing-board/DrawingBoard'
import StreamRenderer from '../stream-renderer/StreamRenderer'

export default ({
  onCursorMove,
  onLineStart,
  onLineEnd,
  onPointCreate,
  currentLine
}) => (
  <DrawingBoard {...{ onCursorMove, onLineStart, onLineEnd, onPointCreate }}>
    <StreamRenderer currentLine={currentLine} />
  </DrawingBoard>
)
