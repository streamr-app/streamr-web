import React from 'react'

export default function (component) {
  return ({
    input,
    meta: { touched, error },
    ...rest
  }) => (
    React.cloneElement(
      component,
      {
        ...input,
        errors: touched && error ? [error] : [],
        ...rest
      }
    )
  )
}
