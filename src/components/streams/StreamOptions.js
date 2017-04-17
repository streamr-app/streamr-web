import React from 'react'
import cx from 'classnames'

import { Button } from '../buttons'

import AudioRecordingStreamContainer from '../draw/AudioRecordingStreamContainer'

export default ({
  streamId,
  recording,
  onStopRecording,
  canStopRecording,
  submitting,
  pristine,
  valid,
  handleSubmit,
  streamEnding,
  onSubmit
}) => (
  <form className={cx('stream-options', { pristine })} onSubmit={handleSubmit(onSubmit)}>
    <AudioRecordingStreamContainer streamEnding={streamEnding} />

    {getRecordingControls({ recording, submitting, valid, streamEnding, onStopRecording, canStopRecording })}
  </form>
)

function getRecordingControls ({ recording, submitting, valid, streamEnding, onStopRecording, canStopRecording }) {
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
        <Button className='-record' disabled={submitting || !valid}>Start Recording</Button>
      </div>
    )
  }
}
