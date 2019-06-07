import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { cartPath } from '~/src/helpers/routes'
import pluralize from 'pluralize';
import { connect } from 'react-redux';
import { addProductToCart } from '~/src/actions/Cart';

class CartButton extends Component {

  catchDrop(e){
    const draggableProduct = JSON.parse(e.dataTransfer.getData("productDraggableObject"));
    const draggableCount = parseInt(e.dataTransfer.getData("productDraggableCount"));

    // проверяем, что перетаскивается именно Товар
    draggableProduct && draggableCount && this.props.addProductToCart(draggableProduct, draggableCount);
  }

  render () {
    const cartItemsCounter = this.props.cart.reduce((partialSum, i) => partialSum + i.count, 0);

    return (
      <div onDrop={(e) => this.catchDrop(e)} onDragOver={(e) => e.preventDefault()}>
        <NavLink to={ cartPath() } className='btn btn-outline-success my-2 my-sm-0'>
          Cart: {pluralize('item', cartItemsCounter, true)}
        </NavLink>
      </div>
    )
  }
}

const mapStateToProps = state => ({ cart: state.cart.items });

export default connect(mapStateToProps, { addProductToCart })(CartButton);
