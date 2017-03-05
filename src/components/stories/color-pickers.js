import React from 'react'
import { storiesOf } from '@kadira/storybook'

import ColorPicker from '../draw/ColorPicker'

var colors = [
  { id: '1', normal: '#61afef' },
  { id: '2', normal: '#e06c75' },
  { id: '3', normal: '#98c379' },
  { id: '4', normal: '#c678dd' },
  { id: '5', normal: '#d19a66' },
  { id: '6', normal: '#abb2bf' }
]

storiesOf('Color picker', module)
  .add('None selected', () => (
    <div style={{ background: '#222', height: '100vh', padding: '20px' }}>
      <ColorPicker colors={colors} />
    </div>
  ))
  .add('Color selected', () => (
    <div style={{ background: '#222', height: '100vh', padding: '20px' }}>
      <ColorPicker colors={colors} selectedColor='2' />
    </div>
  ))
