import React from 'react'

const MAX_WIDTH = 20

export default ({
  thickness,
  fill = 'black',
  stroke = 'none'
}) => (
  <svg
    width={MAX_WIDTH} height={MAX_WIDTH}
    viewBox={`${-MAX_WIDTH / 2} ${-MAX_WIDTH / 2} ${MAX_WIDTH} ${MAX_WIDTH}`}
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='0' cy='0' r={thickness} fill={fill} stroke={stroke} />
  </svg>
)
