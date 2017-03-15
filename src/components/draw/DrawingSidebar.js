import React from 'react'

import ColorPickerContainer from '../../containers/draw/ColorPickerContainer'
import StrokeWidthPickerContainer from '../../containers/draw/StrokeWidthPickerContainer'

export default () => (
  <div className='drawing-sidebar'>
    <ColorPickerContainer />
    <StrokeWidthPickerContainer />
  </div>
)
