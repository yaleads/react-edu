import React from 'react';

const CartItems = ({ cart }) => {
  if (cart.length > 0) {
    return (
      <div>
        Details:
        {cart.map(item => (
          <li key={item.product.id}>{counterPrefix(item.count)}{item.product.title}</li>
        ))}
      </div>
    );
  }
  else {
    return (<p>No products in the Cart</p>);
  }
};

const counterPrefix = count => (count > 1 ? `${count} x ` : '');

export default CartItems;