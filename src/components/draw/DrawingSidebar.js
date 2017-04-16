import React from 'react'

import ColorPickerContainer from './ColorPickerContainer'
import BrushThicknessPickerContainer from './BrushThicknessPickerContainer'
import UndoButtonContainer from './UndoButtonContainer'

export default () => (
  <div className='drawing-sidebar'>
    <ColorPickerContainer />
    <BrushThicknessPickerContainer />
    <UndoButtonContainer />
  </div>
)
