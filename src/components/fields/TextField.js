// @flow

import React from 'react'
import cx from 'classnames'

import FieldErrors from './FieldErrors'

type PropTypes = {
  id: number | string,
  label: string,
  className?: string,
  type?: string,

  errors?: any[],

  children?: any,
}

export default ({
  id,
  label,
  className,
  type = 'text',

  errors = [],

  children,
  ...rest
}: PropTypes) => (
  <div className={cx('field text-field', className, { errors: errors.length > 0 })}>
    <label htmlFor={id}>{label}</label>

    {children ||
      <input type={type} id={id} {...rest} />
    }

    <FieldErrors errors={errors} />
  </div>
)
