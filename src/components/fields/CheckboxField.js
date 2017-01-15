import React from 'react'
import cx from 'classnames'

export default ({
  id,
  label,
  description,
  className,
  errors = [],
  children,
  ...rest
}) => (
  <div className={cx('field horizontal-field checkbox-field', className)}>
    {children ||
      <input type='checkbox' id={id} {...rest} />
    }

    <label htmlFor={id}>
      <p>{label}</p>
      <p className='description'>{description}</p>
    </label>
  </div>
)
