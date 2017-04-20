import React from 'react'

import Bundle from '../Bundle'
import loadMoment from 'bundle-loader!moment'

import { Link } from 'react-router-dom'

import ProfileImage from '../users/ProfileImage'

export default class Comment extends React.Component {
  tick () {
    this.forceUpdate()
  }

  componentDidMount () {
    this.interval = setInterval(this.tick, 10000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    const {
      comment,
      user
    } = this.props

    return (
      <div className='comment'>
        <div>
          <ProfileImage image={user.imageUrl} />
        </div>

        <div className='content'>
          <Link to={`/profile/${user.id}`} className='profile-link'>{user.name}</Link>
          <p className='body'>{comment.body}</p>
        </div>

        <div>
          <p className='ago' title={comment.insertedAt}>
            <Bundle load={loadMoment}>
              {(moment) => moment(comment.insertedAt).fromNow(true)}
            </Bundle>
          </p>
        </div>
      </div>
    )
  }
}
