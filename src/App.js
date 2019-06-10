import React from 'react';
import { Router, Route, Switch, matchPath } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import history from '~/history';
import routes from '~/src/routes';
import { productImagePath }  from '~/src/helpers/routes';
import { parse } from 'qs';

import { Provider } from 'react-redux';
import store from '~/src/store';

import Header from '~/src/components/Header';
import FullScreen from '~/src/components/Gallery/FullScreen';
import prepareData from '~/src/helpers/prepareData';

function historyCallBack(location) {
  const state = { params: {}, query: {}, routes: [] };

  routes.some((route) => {
    const match = matchPath(location.pathname, route);

    if (match) {
      state.routes.push(route);
      Object.assign(state.params, match.params);
      Object.assign(state.query, parse(location.search.substr(1)));
    }

    return match;
  });

  prepareData(store, state);
}

history.listen(historyCallBack);
historyCallBack(window.location);


const RouteWithSubroutes = (route, key) => (
  <Route key={key} {...route} />
);

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Header />

      <Switch>
        { routes.map((route, key) => RouteWithSubroutes(route, key)) }
      </Switch>

      <Route path={productImagePath()} component={FullScreen} />

    </Router>
  </Provider>
);

export default App;