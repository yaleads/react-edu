import React from 'react'
import PropTypes from 'prop-types';

function AddToCartCounter({ removeCount, addCount, productId, count }){
  return (
    <span>
      <button onClick={removeCount}>-</button>
      <input id={`add_product_${productId}_to_cart_counter`} value={count} readOnly style={{width: '40px', textAlign: 'center' }}/>
      <button onClick={addCount}>+</button>
    </span>
  )
}

AddToCartCounter.propTypes = {
  productId:    PropTypes.number.isRequired,
  count:        PropTypes.number.isRequired,
  removeCount:  PropTypes.func.isRequired,
  addCount:     PropTypes.func.isRequired
};


export default AddToCartCounter;