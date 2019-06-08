import ProductsPage from '~/src/components/ProductsPage'
import { productsPath } from "~/src/helpers/routes";
import { fetchProducts } from "~/src/actions/Products";

export default {
  path: productsPath(),
  component: ProductsPage,
  exact: true,
  strict: true,
  prepareData: (store) => {
    store.dispatch(fetchProducts())
  }
}