import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';
import APIMiddleware from '~/src/middleware/API'
import CartLocalStorageMiddleware from '~/src/middleware/cartLocalStorage'

const store = createStore(
  reducers,
  compose(
    applyMiddleware(APIMiddleware, CartLocalStorageMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),
);

export default store;