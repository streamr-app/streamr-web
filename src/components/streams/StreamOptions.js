import React from 'react'
import cx from 'classnames'

import { Button } from '../buttons'

import AudioRecordingStreamContainer from '../draw/AudioRecordingStreamContainer'

export default (props) => (
  <form className={cx('stream-options', { pristine: props.pristine })} onSubmit={props.handleSubmit(props.onSubmit)}>
    <AudioRecordingStreamContainer />

    {getRecordingControls(props)}
  </form>
)

function getRecordingControls ({
  recording,
  submitting,
  valid,
  recordingStopped,
  onStopRecording,
  canStopRecording,
  recordingError
}) {
  if (recording) {
    return (
      <div className='record-control-buttons'>
        <a
          href='#'
          className={cx('button -record', { disabled: !canStopRecording || recordingStopped })}
          onClick={(e) => canStopRecording && !recordingStopped && onStopRecording(e)}>
          {
            recordingStopped
            ? 'Finishing up...'
            : 'Finish Recording'
          }
        </a>
      </div>
    )
  } else {
    return (
      <div className='record-control-buttons'>
        <Button className='-record' disabled={recordingError || submitting || !valid}>Start Recording</Button>
      </div>
    )
  }
}
