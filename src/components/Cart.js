import React from 'react'
import cartContext from '~/cartContext'
import Pluralizer from '~/src/modules/Pluralizer'

function Cart(){

  return (
    <cartContext.Consumer>
      {
        (context) => {
          return (
            <div
              onDrop={ (e) => {
                  const draggableId    = parseInt(e.dataTransfer.getData("productDraggableId"));
                  const draggableCount = parseInt(e.dataTransfer.getData("productDraggableCount"));

                  // проверяем, что перетаскивается именно Товар
                  draggableId && draggableCount && context.addToCart(draggableId, draggableCount)
              }}

              onDragOver={ (e) => e.preventDefault() }
            >

              <h4>Cart: { Pluralizer(context.cartItemCounter, 'item') }</h4>

              { context.cart.length > 0 &&
                  <div>
                    Details:
                    { context.cart.map(item => (
                        <li key={item.id}>{counterPrefix(item.count)}{getProduct(context.products, item.id).title}</li>
                      ))
                    }
                  </div>
              }

            </div>
          )
        }
      }
    </cartContext.Consumer>
  )
}

const counterPrefix = count           => ( count > 1 ? `${count} x ` : '');
const getProduct    = (products, id)  => ( products.find(p => p.id === id) );

export default Cart;