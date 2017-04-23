import React from 'react'
import cx from 'classnames'

import { Button } from '../buttons'

import AudioRecordingStreamContainer from '../draw/AudioRecordingStreamContainer'

export default (props) => (
  <form className={cx('stream-options', { pristine: props.pristine })} onSubmit={props.handleSubmit(props.onSubmit)}>
    <AudioRecordingStreamContainer streamEnding={props.streamEnding} />

    {getRecordingControls(props)}
  </form>
)

function getRecordingControls ({
  recording,
  submitting,
  valid,
  streamEnding,
  onStopRecording,
  canStopRecording,
  audioAPIsUnavailable
}) {
  if (recording) {
    return (
      <div className='record-control-buttons'>
        <a
          href='#'
          className={cx('button -record', { disabled: !canStopRecording || streamEnding })}
          onClick={(e) => canStopRecording && !streamEnding && onStopRecording(e)}>
          {
            streamEnding
            ? 'Finishing up...'
            : 'Finish Recording'
          }
        </a>
      </div>
    )
  } else {
    return (
      <div className='record-control-buttons'>
        <Button className='-record' disabled={audioAPIsUnavailable || submitting || !valid}>Start Recording</Button>
      </div>
    )
  }
}
