import React from 'react'
import cx from 'classnames'

import FieldErrors from './FieldErrors'

export default ({
  id,
  label,
  className,
  type = 'text',

  errors = [],

  children,
  ...rest
}) => (
  <div className={cx('field text-field', className, { errors: errors.length > 0 })}>
    <label htmlFor={id}>{label}</label>

    {children ||
      <input type={type} id={id} {...rest} />
    }

    <FieldErrors errors={errors} />
  </div>
)
