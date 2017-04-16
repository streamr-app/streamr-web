import React from 'react'
import cx from 'classnames'

export default class ProfileImage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loaded: false
    }
  }

  componentDidMount () {
    this.loadImage(this.props.src)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.src !== this.props.src) {
      setTimeout(() => this.loadImage(nextProps.src))
    }
  }

  loadImage (imageSrc) {
    this.setState({ loaded: false })
    const image = new Image()

    image.onload = () => this.setState({ loaded: true })

    image.src = imageSrc
  }

  render () {
    const {
      src,
      className
    } = this.props

    return (
      <img className={cx('load-image', className, { loaded: this.state.loaded })} src={src} />
    )
  }
}

/* global Image */
