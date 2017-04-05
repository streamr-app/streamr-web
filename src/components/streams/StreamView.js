import React from 'react'
import cx from 'classnames'

import Helmet from 'react-helmet'
import StreamPlayer from '../playback/StreamPlayer'
import StreamDetails from './StreamDetails'

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
      <StreamDetails {...{ stream }} />
    </div>
  )
}
