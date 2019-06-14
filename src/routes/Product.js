import React from 'react';

import ProductPage from 'components/ProductPage';
import { productPath } from 'helpers/routes';
import { fetchProduct } from 'actions/Product';
import { loadCart } from 'actions/Cart';

export default {
  path: productPath(),
  render: ({ match, history }) => (
    <ProductPage id={match.params.id} history={history} />
  ),
  prepareData: (store, query, params) => {
    const fetchProductPromise = store.dispatch(fetchProduct(params.id));
    const loadCartPromise = store.dispatch(loadCart());

    return Promise.all([fetchProductPromise, loadCartPromise]);
  }
};
