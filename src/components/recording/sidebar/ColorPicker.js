import React from 'react'
import cx from 'classnames'

import Mousetrap from '../../Mousetrap'

export default ({
  colors,
  selectedColorId,
  onSelectColor,
  onSelectColorOrder,
  disabled
}) => (
  <div className={cx('color-picker', { disabled })}>
    {colors.map(color => (
      <div
        key={color.id}
        className={cx('color-well', { selected: selectedColorId === color.id })}
        style={{ backgroundColor: color.hex }}
        onClick={() => onSelectColor(color.id)}
      />
    ))}

    <Mousetrap
      bindings={{
        '1': () => onSelectColorOrder(1),
        '2': () => onSelectColorOrder(2),
        '3': () => onSelectColorOrder(3),
        '4': () => onSelectColorOrder(4),
        '5': () => onSelectColorOrder(5),
        '6': () => onSelectColorOrder(6)
      }}
    />
  </div>
)
