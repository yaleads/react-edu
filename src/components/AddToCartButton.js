import React from 'react'
import cartContext from '~/cartContext'

function AddToCartButton(props) {
  return (
    <cartContext.Consumer>
      {(context) => (
        <button onClick={() =>
          context.addToCart(
            props.product_id,
            parseInt(document.getElementById(`add_product_${props.product_id}_to_cart_counter`).value)
          )
        }>Add to Cart</button>
      )}
    </cartContext.Consumer>

  )
}

export default AddToCartButton;