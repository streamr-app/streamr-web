import React from 'react'

import LoadImage from '../common/LoadImage'

export default ({
  stream = {},
  className
}) => (
  <div className={`stream-thumbnail ${className}`}>
    <svg viewBox='0 0 1920 1080' />

    <LoadImage src={stream.imageUrl} />
  </div>
)
