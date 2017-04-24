import React from 'react'

import Measure from 'react-measure'

import Helmet from 'react-helmet'
import { Prompt } from 'react-router-dom'

import DrawingSidebar from './sidebar/DrawingSidebar'
import StreamRendererContainer from './StreamRendererContainer'
import MouseDrawingHandlerContainer from './MouseDrawingHandlerContainer'

import PreambleMessageContainer from './PreambleMessageContainer'
import RecordingErrorsContainer from './RecordingErrorsContainer'

export default class DrawView extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      maxHeight: 0
    }
  }

  measureDrawView ({ height }) {
    this.setState({ maxHeight: height })
  }

  render () {
    const {
      recording
    } = this.props

    return (
      <Measure onMeasure={(e) => this.measureDrawView(e)} whitelist={['height']}>
        <div className='draw-view'>
          <Helmet htmlAttributes={{ class: 'recording' }} />

          <Prompt
            when={recording}
            message='Are you sure you want to leave? Your recording will be cancelled.' />

          <DrawingSidebar />

          <div className='draw-container' style={{
            maxHeight: `${this.state.maxHeight}px`
          }}>
            <div style={{ maxWidth: `${this.state.maxHeight * 1920 / 1080}px` }}>
              <StreamRendererContainer />
              <MouseDrawingHandlerContainer />

              <PreambleMessageContainer />
              <RecordingErrorsContainer />
            </div>
          </div>
        </div>
      </Measure>
    )
  }
}
