import * as types from '../constants/actionTypes/Cart';

export const addProductToCart = (product, count) => ({
  type:     types.ADD_PRODUCT_TO_CART,
  product:  product,
  count:    count
});