import React, { Component } from 'react'
import pluralize from 'pluralize'
import cartContext from '~/cartContext'

class Cart extends Component {

  catchDrop(e, addToCart){
    const draggableObject = JSON.parse(e.dataTransfer.getData("productDraggableObject"));
    const draggableCount = parseInt(e.dataTransfer.getData("productDraggableCount"));

    // проверяем, что перетаскивается именно Товар
    draggableObject && draggableCount && addToCart(draggableObject, draggableCount)
  }

  cartDetails(cart) {
    if (cart.length > 0) {
      return (
        <div>
          Details:
          {cart.map(item => (
            <li key={item.product.id}>{counterPrefix(item.count)}{item.product.title}</li>
          ))}
        </div>
      )
    }
  }

  render () {
    return (
      <cartContext.Consumer>
        {
          ({cart, addToCart, cartItemCounter}) => {
            return (
              <div onDrop={(e) => this.catchDrop(e, addToCart)} onDragOver={(e) => e.preventDefault()}>

                <h4>Cart: {pluralize('item', cartItemCounter, true)}</h4>

                { this.cartDetails(cart) }

              </div>
            )
          }
        }
      </cartContext.Consumer>
    )
  }
}

const counterPrefix = count => ( count > 1 ? `${count} x ` : '');

export default Cart;