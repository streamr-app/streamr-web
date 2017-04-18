import React from 'react'
import cx from 'classnames'

import Brush from './Brush'

export default ({
  thicknesses,
  thicknessId,
  onSelectThickness,
  currentColor
}) => {
  const thickness = thicknesses[thicknessId]

  return (
    <div className='brush-thickness-picker'>
      <div className='sidebar-button selected-width'>
        <Brush thickness={thickness} fill={currentColor} />
      </div>

      <div className='width-buttons'>
        {thicknesses.map((thickness, id) => (
          <div className='width-button-container' key={id}>
            <div
              onClick={() => onSelectThickness(id)}
              className={cx('sidebar-button width-button', { selected: id === thicknessId })}
            >
              <Brush thickness={thickness} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
