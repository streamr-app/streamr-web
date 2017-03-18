import React from 'react'

export default ({
  loading,
  stream
}) => {
  if (loading) return <p>Loading...</p>

  return (
    <div className='container'>
      <h1>{stream.title}</h1>
    </div>
  )
}
