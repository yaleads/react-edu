import { assign } from 'lodash/object';
import * as types from 'constants/actionTypes/Product';

const initialState = {
  isFetching: false,
  isError: false,
  item: {}
};

export  default function(state = initialState, action) {
  switch(action.type) {
    case types.FETCH_PRODUCT_REQUEST:
      return assign({}, initialState, { isFetching: true});
    case types.FETCH_PRODUCT_ERROR:
      return assign({}, initialState, { isError: true});
    case types.FETCH_PRODUCT_SUCCESS:
      if (action.response.items.length > 0)
        return assign({}, initialState, { item: action.response.items[0].fields });
      else
        return assign({}, initialState, { isError: true});
    default:
      return state;
  }
}