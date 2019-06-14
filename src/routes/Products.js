import ProductsPage from 'components/ProductsPage';
import { productsPath } from 'helpers/routes';
import { fetchProducts } from 'actions/Products';
import { loadCart } from 'actions/Cart';

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