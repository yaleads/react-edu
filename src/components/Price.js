import React from 'react'

function Price(props){
  return (
    <span style={{ textDecoration: 'underline' }}>${props.price}</span>
  )
}

export default Price;