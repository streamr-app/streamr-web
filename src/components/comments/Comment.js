import React from 'react'

import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

import { Link } from 'react-router-dom'

import ProfileImage from '../users/ProfileImage'
import VoteButtonContainer from './VoteButtonContainer'

export default class Comment extends React.Component {
  tick () {
    this.forceUpdate()
  }

  componentDidMount () {
    this.interval = setInterval(() => this.tick(), 10000)
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
          <VoteButtonContainer commentId={comment.id} />
        </div>

        <div>
          <p className='ago' title={comment.insertedAt}>
            {distanceInWordsToNow(new Date(), new Date(comment.insertedAt))} ago
          </p>
        </div>
      </div>
    )
  }
}
