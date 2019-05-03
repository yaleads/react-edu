import React, {Fragment} from 'react'
import cartContext from '~/cartContext'

function Cart(){

  return (
    <cartContext.Consumer>
      {
        (context) => {
          const count = context.cart.reduce((partial_sum, i) => partial_sum + i.count, 0);

          return (
            <Fragment>
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

            </Fragment>
          )
        }
      }
    </cartContext.Consumer>
  )
}

export default Cart;