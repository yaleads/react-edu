import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProductToCart } from '~/src/actions/Cart';

class AddToCart extends React.Component {
  constructor(props){
    super(props);

    this.state = {count: 1};
  }

  addCount    = () => { this.setState( (prevState) => ( {count: prevState.count + 1 })) };
  removeCount = () => { this.setState( (prevState) => ( {count: (prevState.count === 1 ? 1 : prevState.count - 1 ) })) };

  render () {
    const product = this.props.product;
    const count = this.state.count;

    return (
      <>
        <p>
          <span>
            <button onClick={this.removeCount}>-</button>
            <input id={`add_product_${product.id}_to_cart_counter`} value={count} readOnly style={{width: '40px', textAlign: 'center' }}/>
            <button onClick={this.addCount}>+</button>
          </span>
        </p>

        <p>
          <button onClick={ () => this.props.addProductToCart(product, count) }>Add to Cart</button>
        </p>
      </>
    )
  }
}

AddToCart.propTypes = {
  product:    PropTypes.object.isRequired
};

export default connect(null, { addProductToCart })(AddToCart);
