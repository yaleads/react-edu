import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { cartPath } from 'helpers/routes';
import pluralize from 'pluralize';
import { connect } from 'react-redux';
import { addProductToCart } from 'actions/Cart';

class CartButton extends Component {
  catchDrop(e) {
    const draggableProduct = JSON.parse(e.dataTransfer.getData('productDraggableObject'));
    const draggableCount = parseInt(e.dataTransfer.getData('productDraggableCount'));

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
    );
  }
}

CartButton.propTypes = {
  addProductToCart: PropTypes.func.isRequired,
  cartItemsCounter: PropTypes.number.isRequired
};

const mapStateToProps = state => {
  const cartItemsCounter = state.cart.items.reduce((partialSum, i) => partialSum + i.count, 0);

  return { cartItemsCounter };
};

export default connect(mapStateToProps, { addProductToCart })(CartButton);
