import React from 'react'
import moment from 'moment'

import ProfileImage from '../users/ProfileImage'

export default React.createClass({
  tick () {
    this.forceUpdate()
  },

  componentDidMount () {
    this.interval = setInterval(this.tick, 10000)
  },

  componentWillUnmount () {
    clearInterval(this.interval)
  },

  render () {
    const {
      comment,
      user
    } = this.props

    return (
      <div className='comment'>
        <div>
          <ProfileImage image={user.image} />
        </div>

        <div className='content'>
          <p className='author'>{user.name}</p>
          <p className='body'>{comment.body}</p>
        </div>

        <div>
          <p className='ago' title={comment.insertedAt}>
            {timeAgo(comment.insertedAt)}
          </p>
        </div>
      </div>
    )
  }
})

function timeAgo (dateTime) {
  return moment(dateTime).fromNow(true)
}
