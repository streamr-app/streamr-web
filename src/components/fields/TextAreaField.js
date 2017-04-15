import React from 'react'
import cx from 'classnames'

import FieldErrors from './FieldErrors'

export default ({
  id,
  label,
  className,

  errors = [],

  children,
  ...rest
}) => (
  <div className={cx('field text-area-field', className, { errors: errors.length > 0 })}>
    {label &&
      <label htmlFor={id}>{label}</label>}

    {
      (children && React.cloneElement(children, { id, ...rest })) ||
      <textarea id={id} {...rest} />
    }

    <FieldErrors errors={errors} />
  </div>
)
