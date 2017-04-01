import React from 'react'
import cx from 'classnames'

import Helmet from 'react-helmet'
import StreamPlayer from '../playback/StreamPlayer'

export default ({
  colors,
  stream = {},
  streamData,
  loading
}) => {
  return (
    <div className={cx('container', { loading })}>
      <Helmet title={stream.title} />

      <StreamPlayer {...{ stream, streamData, colors }} />

      <h1>{stream.title}</h1>
    </div>
  )
}
