import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { cartPath } from '~/src/helpers/routes'
import pluralize from 'pluralize';
import { connect } from 'react-redux';
import { addProductToCart, loadCart } from '~/src/actions/Cart';

class CartButton extends Component {
  componentDidMount() {
    this.props.loadCart();
  }

  catchDrop(e){
    const draggableProduct = JSON.parse(e.dataTransfer.getData("productDraggableObject"));
    const draggableCount = parseInt(e.dataTransfer.getData("productDraggableCount"));

    // проверяем, что перетаскивается именно Товар
    draggableProduct && draggableCount && this.props.addProductToCart(draggableProduct, draggableCount);
  }

  render () {
    return (
      <div onDrop={(e) => this.catchDrop(e)} onDragOver={(e) => e.preventDefault()}>
        <NavLink to={ cartPath() } className='btn btn-outline-success my-2 my-sm-0'>
          Cart: {pluralize('item', this.props.cartItemsCounter, true)}
        </NavLink>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const cartItemsCounter = state.cart.items.reduce((partialSum, i) => partialSum + i.count, 0);

  return{ cartItemsCounter: cartItemsCounter }
};

export default connect(mapStateToProps, { addProductToCart, loadCart })(CartButton);
