import React from 'react'
import cx from 'classnames'

import Mousetrap from '../Mousetrap'
import Tooltip from 'rc-tooltip'

export default ({
  onClick,
  disabled
}) => (
  <Tooltip placement='right' overlay='Undo (⌘-Z)'>
    <div className={cx('sidebar-button undo-button', { disabled })} {...{ onClick }}>
      <Mousetrap
        bindings={{
          'command+z': (e) => { onClick(); e.preventDefault() },
          'ctrl+z': (e) => { onClick(); e.preventDefault() }
        }}
      />
    </div>
  </Tooltip>
)
