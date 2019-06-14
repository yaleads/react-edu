/* globals __CLIENT__, __SERVER__  */
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from '../reducers';
import APIMiddleware from 'middleware/API';
import CartLocalStorageMiddleware from 'middleware/cartLocalStorage';

export default function (INITIAL_STATE = {}) {
  if (__CLIENT__)
    return createStore(
      reducers,
      INITIAL_STATE,
      compose(
        applyMiddleware(APIMiddleware, CartLocalStorageMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    );

  if (__SERVER__)
    return createStore(
      reducers,
      INITIAL_STATE,
      applyMiddleware(APIMiddleware, CartLocalStorageMiddleware)
    );
};