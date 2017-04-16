import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'

var uuid = 0

export default class RadioGroup extends React.Component {
  componentWillMount () {
    this.setState({
      uuid: `radio-group-${uuid++}`
    })
  }

  render () {
    const {
      onChange = () => {},
      className,
      children
    } = this.props

    return (
      <div className={`radio-group ${className}`}>
        {children.map(child =>
          cloneElement(
            child,
            {
              name: this.state.uuid,
              id: `${this.state.uuid}-${child.props.value}`,
              checked: this.props.value === child.props.value,
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
