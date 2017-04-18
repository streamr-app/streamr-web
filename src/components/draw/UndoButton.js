import React from 'react'
import cx from 'classnames'

import Mousetrap from '../Mousetrap'

export default ({
  onClick,
  disabled
}) => (
  <div className={cx('sidebar-button undo-button', { disabled })} {...{ onClick }}>
    <Mousetrap
      bindings={{
        'command+z': (e) => { onClick(); e.preventDefault() },
        'ctrl+z': (e) => { onClick(); e.preventDefault() }
      }}
    />
  </div>
)
