import CartPage from '~/src/components/CartPage';
import { cartPath } from '~/src/helpers/routes';
import { loadCart } from '~/src/actions/Cart';

export default {
  path: cartPath(),
  component: CartPage,
  prepareData: (store) => store.dispatch(loadCart())
};