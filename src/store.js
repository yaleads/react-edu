import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';
import APIMiddleware from '~/src/middleware/API'

const store = createStore(
  reducers,
  compose(
    applyMiddleware(APIMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),
);

export default store;