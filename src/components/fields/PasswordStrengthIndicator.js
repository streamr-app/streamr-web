// @flow

import times from 'lodash/times'

import React, { PropTypes } from 'react'

import cx from 'classnames'

export default class PasswordStrengthIndicator extends React.Component {
  state: Object

  constructor (props: Object) {
    super(props)

    this.state = {
      zxcvbn: () => ({ score: 0 })
    }
  }

  componentDidMount () {
    require.ensure(['zxcvbn'], () => {
      this.setState({ zxcvbn: require('zxcvbn') })
    })
  }

  render () {
    const score = this.state.zxcvbn(this.props.password).score

    score

    return (
      <div className={`password-strength-indicator score-${score}`}>
        <div className={cx('strength-bar', { filled: score >= 1 })} />
        <div className={cx('strength-bar', { filled: score >= 2 })} />
        <div className={cx('strength-bar', { filled: score >= 3 })} />
        <div className={cx('strength-bar', { filled: score >= 4 })} />
      </div>
    )
  }
}

PasswordStrengthIndicator.propTypes = {
  password: PropTypes.string.isRequired
}
