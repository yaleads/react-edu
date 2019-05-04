import React from 'react'
import PropTypes from 'prop-types';

function Counter(props){
  return (
    <span>
      <button onClick={props.removeCount}>-</button>
      <input id={`add_product_${props.product.id}_to_cart_counter`} value={props.count} readOnly style={{width: '40px', textAlign: 'center' }}/>
      <button onClick={props.addCount}>+</button>
    </span>
  )
}

Counter.propTypes = {
  count:        PropTypes.number.isRequired,
  removeCount:  PropTypes.func.isRequired,
  addCount:     PropTypes.func.isRequired
};


export default Counter;