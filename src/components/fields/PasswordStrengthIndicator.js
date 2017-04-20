import React from 'react'
import cx from 'classnames'

import waitForZxcvbn from 'bundle-loader!zxcvbn'

export default class PasswordStrengthIndicator extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      zxcvbn: () => ({ score: 0 })
    }
  }

  componentDidMount () {
    waitForZxcvbn((zxcvbn) => {
      this.setState({ zxcvbn })
    })
  }

  render () {
    const score = this.state.zxcvbn(this.props.password).score

    return (
      <div className={`password-strength-indicator score-${score}`}>
        <div className={cx('strength-bar', { filled: this.props.password })} />
        <div className={cx('strength-bar', { filled: score >= 1 })} />
        <div className={cx('strength-bar', { filled: score >= 2 })} />
        <div className={cx('strength-bar', { filled: score >= 3 })} />
        <div className={cx('strength-bar', { filled: score >= 4 })} />
      </div>
    )
  }
}
