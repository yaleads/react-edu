import request from 'superagent';
import * as types from '../constants/actionTypes/Products';
import { contentfulURL } from '../constants/API.js';

const requestProducts = () => ({
  type: types.FETCH_PRODUCTS_REQUEST
});

const receiveProducts = (products) => ({
  type:     types.FETCH_PRODUCTS_SUCCESS,
  products: products
});

const errorProducts = () => ({
  type: types.FETCH_PRODUCTS_ERROR
});

export function fetchProducts() {
  return (dispatch) => {
    dispatch(requestProducts());

    return request
      .get(contentfulURL)
      .query({'content_type': 'product'})
      .then( ( { body: { items } }) => {
          let products = [];
          items.forEach( item => ( products.push(item.fields) ));

          return dispatch(receiveProducts(products));
        }
      )
      .catch( () => dispatch(errorProducts()) )
  }
}