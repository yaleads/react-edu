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

const AppRouter = ({ history, children, location, context }) => {
  if (__CLIENT__)
    return (<Router history={history}>{children}</Router>);

  if (__SERVER__)
    return (<StaticRouter location={location} context={context}>{children}</StaticRouter>);
};

const App = ({ history, store, location, context }) => (
  <Provider store={store}>
    <AppRouter history={history} location={location} context={context}>
      <Header />

      <Switch>
        { routes.map((route, key) => RouteWithSubroutes(route, key)) }
      </Switch>

      <Route path={productImagePath()} component={FullScreen} />

    </AppRouter>
  </Provider>
);

export default App;