import React from 'react'
import cx from 'classnames'

import FieldErrors from './FieldErrors'

import Dropzone from 'react-dropzone'
import convertImageToBase64 from '../../utils/convertImageToBase64'

export default class SinglePhotoDropzone extends React.Component {
  onDrop ([ file ]) {
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
        style={{
          backgroundImage: value
            ? `url(${value})`
            : `url(${require('../../images/dropzone-icon.svg')})`
        }}
      >
        <Dropzone onDrop={(files) => this.onDrop(files)} className='dropzone' />

        <FieldErrors errors={errors} />
      </div>
    )
  }
}
