import React from 'react'
import cx from 'classnames'

import FieldErrors from './FieldErrors'

import Dropzone from 'react-dropzone'
import convertImageToBase64 from '../../utils/convertImageToBase64'

export default class SinglePhotoDropzone extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      preview: props.value
    }
  }

  onDrop ([ file ]) {
    this.setState({ preview: file.preview })

    convertImageToBase64(file)
      .then((encoded) => this.props.onChange(encoded))
  }

  render () {
    const {
      className,
      value,
      errors = []
    } = this.props

    return (
      <div
        className={cx('field single-dropzone', className, { empty: !value, errors: errors.length > 0 })}
      >
        <Dropzone
          onDrop={(files) => this.onDrop(files)}
          accept='image/*'
          className='dropzone'
          activeClassName='active'
          style={{
            backgroundImage: this.state.preview ? `url(${this.state.preview})` : null
          }}
        />

        <p>Drop to upload.</p>

        <FieldErrors errors={errors} />
      </div>
    )
  }
}
