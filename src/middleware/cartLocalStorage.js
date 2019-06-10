import * as types from '../constants/actionTypes/Cart';
import { assign } from 'lodash/object';

export default store => next => action => {
  switch(action.type) {
    case types.ADD_PRODUCT_TO_CART:
      next(action);

      try {
        const serializedCart = JSON.stringify(store.getState().cart.items);
        localStorage.setItem('cart', serializedCart);
      } catch (e) {}

      return null;

    case types.LOAD_CART:
      let loadedCart = [];

      try {
        const serializedCart = localStorage.getItem('cart');
        if (serializedCart)
          loadedCart = JSON.parse(serializedCart);
      } catch (e) {}

      return next(assign({}, action, {cart: loadedCart}));

    default:
      return next(action);
  }
};

