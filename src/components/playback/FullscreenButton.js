import React from 'react'

import screenfull from 'screenfull'

export default class FullscreenButton extends React.Component {
  toggleFullscreen () {
    if (screenfull.isFullscreen) {
      screenfull.exit()
    } else {
      screenfull.request(this.props.fullScreenElement)
    }
  }

  render () {
    if (!screenfull.enabled) return null

    return (
      <a href='#' onClick={(event) => { event.preventDefault(); this.toggleFullscreen() }}>
        {
          (screenfull.isFullscreen)
          ? <img src={require('../../images/minimize.svg')} />
          : <img src={require('../../images/fullscreen.svg')} />
        }
      </a>
    )
  }
}
