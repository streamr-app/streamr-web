import React from 'react'
import cx from 'classnames'

import Mousetrap from '../Mousetrap'

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

    <Mousetrap
      bindings={{
        '1': () => onSelectColor('1'),
        '2': () => onSelectColor('2'),
        '3': () => onSelectColor('3'),
        '4': () => onSelectColor('4'),
        '5': () => onSelectColor('5'),
        '6': () => onSelectColor('6')
      }}
    />
  </div>
)
