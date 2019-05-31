import React from 'react'

import ProductPage from '~/src/components/ProductPage/ProductPage'
import { productPath } from "~/src/helpers/routes";

export default {
  path: productPath(),
  render: ({ match, history }) => (
    <ProductPage id={match.params.id} history={history} />
  )
}