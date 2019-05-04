import React from 'react'

function Counter(props){
  return (
    <input type='number' id={`add_product_${props.product.id}_to_cart_counter`} min={1} defaultValue={1} />
  )
}

export default Counter;