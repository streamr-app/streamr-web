import React from 'react'

import {
  RadioField,
  RadioGroup
} from '../fields'

export default ({
  normalColors = [],
  deuteranopiaColors = [],
  protanopiaColors = [],
  tritanopiaColors = [],
  ...rest
}) => (
  <RadioGroup {...rest} className='color-palette-picker'>
    <RadioField value='normal' label='Normal'
      description={getPalette(normalColors)} />
    <RadioField value='deuteranopia' label='Deuteranopia'
      description={getPalette(deuteranopiaColors)} />
    <RadioField value='protanopia' label='Protanopia'
      description={getPalette(protanopiaColors)} />
    <RadioField value='tritanopia' label='Tritanopia'
      description={getPalette(tritanopiaColors)} />
  </RadioGroup>
)

function getPalette (colors) {
  const wells = colors.map((backgroundColor, i) =>
    <div className='color-well' style={{ backgroundColor }} key={i} />
  )

  return (
    <div className='color-wells'>{wells}</div>
  )
}
