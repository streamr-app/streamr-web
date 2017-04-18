import React from 'react'

import Tooltip from 'rc-tooltip'

export default ({
  onClick
}) => (
  <Tooltip placement='right' overlay='Clear the drawing canvas'>
    <div className='sidebar-button clear-button' {...{ onClick }} />
  </Tooltip>
)
