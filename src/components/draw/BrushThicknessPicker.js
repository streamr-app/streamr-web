import React from 'react'
import cx from 'classnames'

import Brush from './Brush'

export default ({
  currentThickness,
  onSelectThickness,
  currentColor
}) => (
  <div className='brush-thickness-picker'>
    <div className='sidebar-button selected-width'>
      <Brush thickness={currentThickness} fill={currentColor} />
    </div>

    <div className='width-buttons'>
      {[2, 3, 4, 6, 8].map(thickness => (
        <div className='width-button-container' key={thickness}>
          <div
            onClick={() => onSelectThickness(thickness)}
            className={cx('sidebar-button width-button', { selected: thickness === currentThickness })}
          >
            <Brush thickness={thickness} />
          </div>
        </div>
      ))}
    </div>
  </div>
)
