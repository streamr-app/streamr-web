import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import DrawingBoard from '../drawing-board/DrawingBoard'

storiesOf('Drawing board', module)
  .add('DrawingBoard', () => (
    <DrawingBoard
      onLineStart={action('line start')}
      onLineEnd={action('line end')}
      onPointCreate={action('point create')}
      onCursorMove={action('cursor move')}>

      <img style={{ width: '100%' }} src={require('./drawing-board-test-point-map.png')} />
    </DrawingBoard>
  ))
