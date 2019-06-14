import { assign } from 'lodash';
import * as types from 'constants/actionTypes/Products';

const initialState = {
  isFetching: false,
  isError: false,
  items: []
};

export  default function(state = initialState, action) {
  switch(action.type) {
    case types.FETCH_PRODUCTS_REQUEST:
      return assign({}, initialState, { isFetching: true});
    case types.FETCH_PRODUCTS_ERROR:
      return assign({}, initialState, { isError: true});
    case types.FETCH_PRODUCTS_SUCCESS:
      let products = [];
      action.response.items.forEach( item => ( products.push(item.fields) ));

      return assign({}, initialState, { items: products });

    default:
      return state;
  }
}
