import React, { Component, Fragment } from 'react'

import AddToCartButton from '~/src/components/AddToCartButton'
import AddToCartCounter from '~/src/components/AddToCartCounter'

class AddToCart extends Component {
  constructor(props){
    super(props);

    this.state = {count: 1};
    this.addCount     = this.addCount.bind(this);
    this.removeCount  = this.removeCount.bind(this);
  }

  addCount()    { this.setState( (prevState) => ( {count: prevState.count + 1 })) }
  removeCount() { this.setState( (prevState) => ( {count: (prevState.count === 1 ? 1 : prevState.count - 1 ) })) }

  render () {
    const productId = this.props.productId;

    return (
      <Fragment>
        <p><AddToCartCounter  productId={productId}  count={this.state.count}  addCount={this.addCount} removeCount={this.removeCount}  /></p>
        <p><AddToCartButton   productId={productId}  count={this.state.count}  onDragStart={this.onDragStart} /></p>
      </Fragment>
    )
  }
}

export default AddToCart;
