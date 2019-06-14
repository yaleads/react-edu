import * as types from '../constants/actionTypes/Product';
import { API_CALL } from 'middleware/API';

export function fetchProduct(id) {
  return {
    [API_CALL]: {
      method: 'GET',
      query: {'content_type': 'product', 'fields.id': id},
      types: [
        types.FETCH_PRODUCT_REQUEST,
        types.FETCH_PRODUCT_SUCCESS,
        types.FETCH_PRODUCT_ERROR
      ]
    }
  }
}