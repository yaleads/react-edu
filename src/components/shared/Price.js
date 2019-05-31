import React from 'react'

function Price({ price }){
  return (
    <span style={{ textDecoration: 'underline' }}>${price}</span>
  )
}

export default Price;