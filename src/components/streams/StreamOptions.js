import React from 'react'
import cx from 'classnames'

import { TextField, reduxFormWrapper } from '../fields'
import { Button } from '../buttons'
import AutosizeInput from 'react-input-autosize'

import { Field } from 'redux-form'

const titleField = reduxFormWrapper(
  <TextField id='title'>
    <AutosizeInput placeholder='Name this stream...' />
  </TextField>
)

export default ({
  recording,
  onStopRecording,
  canStopRecording,
  submitting,
  pristine,
  valid,
  handleSubmit,
  onSubmit
}) => (
  <form className={cx('stream-options', { pristine })} onSubmit={handleSubmit(onSubmit)}>
    {getRecordingControls({ recording, submitting, valid, onStopRecording, canStopRecording })}
  </form>
)

function getRecordingControls ({ recording, submitting, valid, onStopRecording, canStopRecording }) {
  if (recording) {
    return (
      <div className='record-control-buttons'>
        <a
          href='#'
          className={cx('button -record', { disabled: !canStopRecording })}
          onClick={(e) => canStopRecording && onStopRecording(e)}>
          Finish Recording
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
