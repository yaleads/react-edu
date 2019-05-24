import React from 'react'
import cartContext from '~/cartContext'

const CartPage = () => (
  <div className='container'>
    <h1 className={'mt-3'}>Cart</h1>
    <hr />

    <cartContext.Consumer>
      { ({ cart }) => <div>{ cartItems(cart) }</div> }
    </cartContext.Consumer>

  </div>
);

const cartItems  = (cart) => {
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
  else {
    return (<p>No products in the Cart</p>)
  }
};

const counterPrefix = count => ( count > 1 ? `${count} x ` : '');

export default CartPage;
