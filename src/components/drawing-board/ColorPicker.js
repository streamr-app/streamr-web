import React from 'react'
import cx from 'classnames'

export default ({
  colors,
  selectedColor,
  onSelectColor,
  visible
}) => (
  <div className={cx('color-picker', { visible })}>
    {colors.map(color => (
      <div
        className={cx('color-well', { selected: selectedColor === color.id })}
        style={{ backgroundColor: color.normal }}
        onClick={() => onSelectColor(color.id)} />
    ))}
  </div>
)
