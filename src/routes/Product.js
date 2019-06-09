import React from 'react';

import ProductPage from '~/src/components/ProductPage';
import { productPath } from '~/src/helpers/routes';
import { fetchProduct } from '~/src/actions/Product';
import { loadCart } from '~/src/actions/Cart';

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
