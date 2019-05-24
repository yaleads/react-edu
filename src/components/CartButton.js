import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { cartPath } from '~/src/helpers/routes'
import pluralize from 'pluralize';
import cartContext from '~/cartContext';

class CartButton extends Component {

  catchDrop(e, addToCart){
    const draggableObject = JSON.parse(e.dataTransfer.getData("productDraggableObject"));
    const draggableCount = parseInt(e.dataTransfer.getData("productDraggableCount"));

    // проверяем, что перетаскивается именно Товар
    draggableObject && draggableCount && addToCart(draggableObject, draggableCount)
  }

  render () {
    return (
      <cartContext.Consumer>
        {
          ({ addToCart, cartItemCounter }) => {
            return (
              <div onDrop={(e) => this.catchDrop(e, addToCart)} onDragOver={(e) => e.preventDefault()}>
                <NavLink to={ cartPath() } className='btn btn-outline-success my-2 my-sm-0'>
                  Cart: {pluralize('item', cartItemCounter, true)}
                </NavLink>
              </div>
            )
          }
        }
      </cartContext.Consumer>
    )
  }
}

export default CartButton;