import ProductsPage from '~/src/components/ProductsPage'
import { productsPath } from "~/src/helpers/routes";

export default {
  path: productsPath(),
  component: ProductsPage,
  exact: true,
  strict: true
}