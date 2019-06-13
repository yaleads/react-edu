import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CartItems from './CartItems';
import CartFormContainer from './CartFormContainer';

const CartPage = ({ cart }) => (
  <div className='container'>
    <h1 className={'mt-3'}>Cart</h1>
    <hr />

    <CartItems cart={cart} />
    <hr />
    <CartFormContainer cart={cart} />
  </div>
);

CartPage.propTypes = {
  cart: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({ cart: state.cart.items });

export default connect(mapStateToProps)(CartPage);
