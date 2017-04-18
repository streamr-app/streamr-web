import React from 'react'
import cx from 'classnames'

import Helmet from 'react-helmet'
import StreamPlayer from '../playback/StreamPlayer'
import StreamDetails from './StreamDetails'
import StreamCommentsContainer from '../comments/StreamCommentsContainer'

export default ({
  colors,
  stream = {},
  topic,
  streamData,
  initialPosition = 0,
  loading
}) => {
  return (
    <div className={cx('container', { loading })}>
      <Helmet title={stream.title} />
      <StreamPlayer {...{ stream, streamData, colors, initialPosition, loading }} />
      <StreamDetails {...{ stream, topic }} />

      {stream.id &&
        <StreamCommentsContainer streamId={stream.id} />}
    </div>
  )
}
