import Contacts from 'components/Contacts';
import { contactsPath } from 'helpers/routes';
import { loadCart } from 'actions/Cart';

export default {
  path: contactsPath(),
  component: Contacts,
  prepareData: (store) => store.dispatch(loadCart())
};