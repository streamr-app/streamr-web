import React from 'react'
import cx from 'classnames'

export default class PasswordStrengthIndicator extends React.Component {
  constructor (props) {
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
