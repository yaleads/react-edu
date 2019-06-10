import ProductsPage from '~/src/components/ProductsPage';
import { productsPath } from '~/src/helpers/routes';
import { fetchProducts } from '~/src/actions/Products';
import { loadCart } from '~/src/actions/Cart';

export default {
  path: productsPath(),
  component: ProductsPage,
  exact: true,
  strict: true,
  prepareData: (store) => {
    const fetchProductsPromise = store.dispatch(fetchProducts());
    const loadCartPromise = store.dispatch(loadCart());

    return Promise.all([fetchProductsPromise, loadCartPromise]);
  }
};