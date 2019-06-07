import { assign } from 'lodash';
import * as types from '~/src/constants/actionTypes/Product'

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
      return assign({}, initialState, { item: action.product });
    default:
      return state;
  }
}