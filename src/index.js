import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import history, { historyCallBack } from './history';
import routes from './routes';
import store from './store';

history.listen((location) => historyCallBack(store, routes, location));
historyCallBack(store, routes, location);

ReactDOM.render(
  <App history={history} store={store}  />,
  document.getElementById('root')
);