import request from 'superagent';
import * as types from '../constants/actionTypes/Product';
import { contentfulURL } from '../constants/API.js';

const requestProduct = (id) => ({
  type: types.FETCH_PRODUCT_REQUEST,
  id:   id
});

const receiveProduct = (product) => ({
  type:     types.FETCH_PRODUCT_SUCCESS,
  product:  product
});

const errorProduct = () => ({
  type: types.FETCH_PRODUCT_ERROR
});

export function fetchProduct(productId) {
  return (dispatch) => {
    dispatch(requestProduct(productId));

    return request
      .get(contentfulURL)
      .query({ 'fields.id': productId })
      .query({'content_type': 'product'})
      .then( ( { body : { items } } ) => dispatch(receiveProduct(items[0].fields)) )
      .catch( () => dispatch(errorProduct()) )
  }
}