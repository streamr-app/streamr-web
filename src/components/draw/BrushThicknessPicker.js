import React from 'react'
import cx from 'classnames'

import Brush from './Brush'

export default ({
  selectedThickness,
  onSelectThickness,
  currentColor
}) => (
  <div className='stroke-width-picker'>
    <div className='sidebar-button selected-width'>
      <Brush thickness={selectedThickness} fill={currentColor} />
    </div>

    <div className='width-buttons'>
      {[2, 3, 4, 6, 8].map(thickness => (
        <div className='width-button-container'>
          <div
            onClick={() => onSelectThickness(thickness)}
            key={thickness}
            className={cx('sidebar-button width-button', { selected: thickness === selectedThickness })}
          >
            <Brush thickness={thickness} />
          </div>
        </div>
      ))}
    </div>
  </div>
)
