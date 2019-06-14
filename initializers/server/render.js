import React from 'react';
import { renderToString } from 'react-dom/server';

import App from 'App';

import routes from 'routes';
import createStore from 'store';
import { historyCallBack } from 'history';

export default (req, res) => {
  console.log('test1');
  const store = createStore();
  console.log('test2');

  return historyCallBack(store, routes, { pathname: req.url, query: req.query })
    .then(() => {
      const context = {};
      return {
        content: renderToString(<App store={store} location={req.url} context={context} />),
        initialState: store.getState()
      }
    });
};