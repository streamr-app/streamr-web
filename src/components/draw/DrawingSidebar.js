import React from 'react'

import ColorPickerContainer from './ColorPickerContainer'
import BrushThicknessPickerContainer from './BrushThicknessPickerContainer'

export default () => (
  <div className='drawing-sidebar'>
    <ColorPickerContainer />
    <BrushThicknessPickerContainer />
  </div>
)
