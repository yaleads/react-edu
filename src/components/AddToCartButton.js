import React from 'react'
import PropTypes from 'prop-types';
import cartContext from '~/cartContext'

function AddToCartButton({productId, count}) {
  return (
    <cartContext.Consumer>
      { (context) => <button onClick={ () => context.addToCart(productId, count) }>Add to Cart</button> }
    </cartContext.Consumer>
  )
}

AddToCartButton.propTypes = {
  count:        PropTypes.number.isRequired,
  productId:    PropTypes.number.isRequired
};

export default AddToCartButton;