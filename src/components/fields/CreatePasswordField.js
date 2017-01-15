import React from 'react'
import cx from 'classnames'

import PasswordStrengthIndicator from './PasswordStrengthIndicator'
import CheckboxField from './CheckboxField'

export default class CreatePasswordField extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showPassword: false
    }
  }

  toggleShowPassword (event) {
    this.setState({
      showPassword: event.target.checked
    })
  }

  render () {
    const {
      id,
      label,
      className,
      value,

      errors = [],

      children,
      ...rest
    } = this.props

    return (
      <div className={cx('field text-field', className, { errors: errors.length > 0 })}>
        <label htmlFor={id}>{label}</label>

        {children ||
          <input type={this.state.showPassword ? 'text' : 'password'} id={id} value={value} {...rest} />
        }

        <PasswordStrengthIndicator password={value} />

        <CheckboxField
          id={`show-password-${id}`}
          value={this.state.showPassword}
          onChange={e => this.toggleShowPassword(e)}
          label='Show password' />
      </div>
    )
  }
}
