import React from 'react'
import cartContext from '~/cartContext'

function AddToCartButton(props) {
  return (
    <cartContext.Consumer>
      {(context) => (
        <button onClick={() => context.addToCart(props.product_id) }>Add to Cart</button>
      )}
    </cartContext.Consumer>

  )
}

export default AddToCartButton;