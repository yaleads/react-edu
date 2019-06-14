import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import history from './helpers/history';
import historyCallBack from './helpers/historyCallBack';
import routes from './routes';
import createStore from './helpers/store';

const store = createStore(window.INITIAL_STATE);

history.listen((location) => historyCallBack(store, routes, location));

ReactDOM.hydrate(
  <App history={history} store={store}  />,
  document.getElementById('root'),
  () => {
    delete window.INITIAL_STATE;
  }

);