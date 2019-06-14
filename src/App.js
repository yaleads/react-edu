/* globals __CLIENT__, __SERVER__*/
import React from 'react';
import { Router, Route, Switch, StaticRouter } from 'react-router-dom';

import { productImagePath }  from 'helpers/routes';
import { Provider } from 'react-redux';
import Header from 'components/Header';
import FullScreen from 'components/Gallery/FullScreen';
import routes from './routes';

const RouteWithSubroutes = (route, key) => (
  <Route key={key} {...route} />
);

const AppRouter = ({ history, children, location, staticContext }) => {
  if (__CLIENT__)
    return (<Router history={history}>{children}</Router>);

  if (__SERVER__)
    return (<StaticRouter location={location} context={staticContext}>{children}</StaticRouter>);
};

const App = ({ history, store, location, staticContext }) => (
  <Provider store={store}>
    <AppRouter history={history} location={location} staticContext={staticContext}>
      <Header />

      <Switch>
        { routes.map((route, key) => RouteWithSubroutes(route, key)) }
      </Switch>

      <Route path={productImagePath()} component={FullScreen} />

    </AppRouter>
  </Provider>
);

export default App;