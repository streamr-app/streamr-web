// @flow

import React, { PropTypes, cloneElement } from 'react'

var uuid: number = 0

export default class RadioGroup extends React.Component {
  state: Object

  componentWillMount () {
    this.setState({
      uuid: `radio-group-${uuid++}`
    })
  }

  render () {
    const {
      onChange = () => {},
      children
    } = this.props

    return (
      <div className='radio-group'>
        {children.map(child =>
          cloneElement(
            child,
            {
              name: this.state.uuid,
              id: `${this.state.uuid}-${child.props.value}`,
              onChange: (event) => onChange(child.props.value)
            }
          )
        )}
      </div>
    )
  }
}

RadioGroup.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.any
}
