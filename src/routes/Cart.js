import CartPage from 'components/CartPage';
import { cartPath } from 'helpers/routes';
import { loadCart } from 'actions/Cart';

export default {
  path: cartPath(),
  component: CartPage,
  prepareData: (store) => store.dispatch(loadCart())
};