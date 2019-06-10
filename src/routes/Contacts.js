import Contacts from '~/src/components/Contacts';
import { contactsPath } from '~/src/helpers/routes';
import { loadCart } from '~/src/actions/Cart';

export default {
  path: contactsPath(),
  component: Contacts,
  prepareData: (store) => store.dispatch(loadCart())
};