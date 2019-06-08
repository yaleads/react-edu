import * as types from '../constants/actionTypes/Cart';
import { addNewProductToCart } from '~/src/reducers/Cart'
import {assign} from "lodash/object";

export default store => next => action => {
  if (action.type === types.ADD_PRODUCT_TO_CART) {
    const new_cart = addNewProductToCart(store.getState().cart.items, action.product, action.count);

    try {
      const serializedCart = JSON.stringify(new_cart);
      localStorage.setItem('cart', serializedCart);
    } catch (e) {}

    return next(action);
  }


  if (action.type === types.LOAD_CART) {
    let loadedCart = [];

    try {
      const serializedCart = localStorage.getItem('cart');
      if (serializedCart)
        loadedCart = JSON.parse(serializedCart);
    } catch (e) {}

    return next(assign({}, action, {type: types.LOAD_CART, cart: loadedCart}));
  }

  return next(action);
};

