import React from 'react'
import Helmet from 'react-helmet'

import { Banner } from '../common/banners'

import { Field } from 'redux-form'

import {
  Button
} from '../buttons'

import {
  FormError,
  FormRow
} from '../forms'

import {
  TextField,
  TextAreaField,
  reduxFormWrapper
} from '../fields'

const titleField = reduxFormWrapper(<TextField id='title' label='Title' />)
const descriptionField = reduxFormWrapper(<TextAreaField id='description' label='Description' />)

export default ({
  stream = {},
  error,
  handleSubmit,
  onSubmit,
  submitting,
  valid,
  topics = []
}) => (
  <div className='publish-stream-view'>
    <Helmet title='Publish' />

    <Banner>
      <h2>Publish this Stream</h2>
    </Banner>

    <form onSubmit={handleSubmit(onSubmit)} className='container'>
      {error &&
        <FormError>{error}</FormError>}

      <img className='preview' src={stream.imageUrl} />

      <div>
        <FormRow>
          <Field name='title' component={titleField} />
        </FormRow>

        <FormRow>
          <Field name='description' component={descriptionField} />
        </FormRow>

        <FormRow>
          <div className='field text-field'>
            <label htmlFor='topicId'>Topic</label>
            <Field name='topicId' component='select'>
              {topics.map((topic) => (
                <option key={topic.id} value={topic.id}>{topic.name}</option>
              ))}
            </Field>
          </div>
        </FormRow>

        <FormRow>
          <Button disabled={submitting || !valid}>Publish Stream</Button>
        </FormRow>
      </div>
    </form>
  </div>
)
