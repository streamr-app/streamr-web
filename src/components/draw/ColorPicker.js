import React from 'react'
import cx from 'classnames'

export default ({
  colors,
  selectedColor,
  onSelectColor,
  disabled
}) => (
  <div className={cx('color-picker', { disabled })}>
    {colors.map(color => (
      <div
        key={color.id}
        className={cx('color-well', { selected: selectedColor === color.id })}
        style={{ backgroundColor: color.normal }}
        onClick={() => onSelectColor(color.id)} />
    ))}
  </div>
)
