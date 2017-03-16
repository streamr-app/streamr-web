import React from 'react'

import ColorPickerContainer from '../../containers/draw/ColorPickerContainer'
import BrushThicknessPickerContainer from '../../containers/draw/BrushThicknessPickerContainer'

export default () => (
  <div className='drawing-sidebar'>
    <ColorPickerContainer />
    <BrushThicknessPickerContainer />
  </div>
)
