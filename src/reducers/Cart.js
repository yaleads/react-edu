import { assign } from 'lodash';
import * as types from '~/src/constants/actionTypes/Cart';

const initialState = {
  items: []
};

const addNewProductToCart = (currentItems, product, count) => {
  const item = currentItems.find(item => item.product.id === product.id);

  if (item === undefined) {
    // значит такого товара в корзине еще нет
    return [...currentItems, {product, count}];
  }
  else
  {
    // такой товар в корзине уже есть
    return currentItems.map(item => (
      {
        product: item.product,
        count: item.count + (item.product.id === product.id ? count : 0)
      })
    );
  }
};


export default function(state = initialState, action) {
  switch (action.type) {
    case types.ADD_PRODUCT_TO_CART:
      return assign({}, initialState, { items: addNewProductToCart(state.items, action.product, action.count) });
    case types.LOAD_CART:
      return assign({}, initialState, { items: action.cart });
    case types.RESET_CART:
      return assign({}, initialState, { items: [] });
    default:
      return state;
  }
}