import React from 'react'
import cx from 'classnames'

import LoadImage from '../common/LoadImage'

export default ({
  image
}) => (
  <div className={cx('profile-image')}>
    <LoadImage src={image} />
  </div>
)
