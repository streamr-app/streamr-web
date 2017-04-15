import React from 'react'
import ReactDOM from 'react-dom'

import { Field } from 'redux-form'
import Mousetrap from '../Mousetrap'

import {
  TextField,
  reduxFormWrapper
} from '../fields'

const searchField = reduxFormWrapper(<TextField id='email' />)

export default class SearchField extends React.Component {
  focusSearch (e) {
    e.preventDefault()
    const node = ReactDOM.findDOMNode(this.search)
    node.querySelector('input').focus()
  }

  render () {
    const {
      handleSubmit,
      onSubmit
    } = this.props

    return (
      <div className='search'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field name='search' ref={(search) => { this.search = search }} placeholder='Search...' component={searchField} />
          <input type='submit' style={{ display: 'none' }} />
        </form>

        <Mousetrap
          bindings={{
            '/': (e) => this.focusSearch(e)
          }}
        />
      </div>
    )
  }
}
