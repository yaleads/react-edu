import React from 'react';
import { connect } from 'react-redux';
import CartItems from './CartItems'

const CartPage = ({ cart }) => (
  <div className='container'>
    <h1 className={'mt-3'}>Cart</h1>
    <hr />

    <CartItems cart={cart} />
  </div>
);

const mapStateToProps = state => ({ cart: state.cart.items });

export default connect(mapStateToProps)(CartPage);
