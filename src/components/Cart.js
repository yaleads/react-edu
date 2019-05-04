import React from 'react'
import cartContext from '~/cartContext'

function Cart(){


  return (
    <cartContext.Consumer>
      {
        (context) => {
          const count = context.cart.reduce((partial_sum, i) => partial_sum + i.count, 0);

          return (
            <div
              onDrop={ (e) => context.addToCart(parseInt(e.dataTransfer.getData("draggable_id")), parseInt(e.dataTransfer.getData("draggable_count") )) }
              onDragOver={ (e) => e.preventDefault() }
            >

              <h4>Cart: {count} {count === 1 ? 'item' : 'items'}</h4>

              {
                context.cart.length > 0 &&
                  <div>
                    Details:

                    {
                      context.cart.map((item) => {
                        const product = context.products.find(p => p.id === item.id);
                        return (<li key={product.id}>{item.count > 1 ? `${item.count} x ` : ''}{product.title}</li>);
                      })
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

export default Cart;