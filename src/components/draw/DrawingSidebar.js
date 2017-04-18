import React from 'react'

import ColorPickerContainer from './ColorPickerContainer'
import BrushThicknessPickerContainer from './BrushThicknessPickerContainer'
import UndoButtonContainer from './UndoButtonContainer'
import ClearButtonContainer from './ClearButtonContainer'

export default () => (
  <div className='drawing-sidebar'>
    <ColorPickerContainer />
    <BrushThicknessPickerContainer />
    <UndoButtonContainer />
    <ClearButtonContainer />
  </div>
)
