import * as types from '../constants/actionTypes/Products';
import { API_CALL } from '~/src/middleware/API';

export function fetchProducts() {
  return {
    [API_CALL]: {
      method: 'GET',
      query: {'content_type': 'product'},
      types: [
        types.FETCH_PRODUCTS_REQUEST,
        types.FETCH_PRODUCTS_SUCCESS,
        types.FETCH_PRODUCTS_ERROR
      ]
    }
  }
}