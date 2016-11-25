import React from 'react'

export default function (component) {
  return ({
    input,
    meta,
    ...rest
  }) => (
    React.cloneElement(
      component,
      {
        ...input,
        errors: meta.error,
        ...rest
      }
    )
  )
}
