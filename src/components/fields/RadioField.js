import React from 'react'
import cx from 'classnames'

export default ({
  id,
  label,
  value,
  description,
  className,
  children,
  checked,
  ...rest
}) => (
  <div className={cx('field horizontal-field radio-field', className, { checked })}>
    {children ||
      <input type='radio' id={id || value} value={value} checked={checked} {...rest} />
    }

    <label htmlFor={id || value}>
      <p>{label}</p>
      <p className='description'>{description}</p>
    </label>
  </div>
)
