import React from 'react'

import ProductPage from '~/src/components/ProductPage'
import { productPath } from "~/src/helpers/routes";
import { fetchProduct } from "~/src/actions/Product";

export default {
  path: productPath(),
  render: ({ match, history }) => (
    <ProductPage id={match.params.id} history={history} />
  ),
  prepareData: (store, query, params) => {
    store.dispatch(fetchProduct(params.id))
  }
}