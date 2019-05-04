import React from 'react'
import PropTypes from 'prop-types';
import cartContext from '~/cartContext'

function AddToCartButton(props) {
  return (
    <cartContext.Consumer>
      { (context) => <button onClick={ () => context.addToCart(props.product_id, props.count) }>Add to Cart</button> }
    </cartContext.Consumer>
  )
}

AddToCartButton.propTypes = {
  count:        PropTypes.number.isRequired,
  product_id:   PropTypes.number.isRequired
};

export default AddToCartButton;