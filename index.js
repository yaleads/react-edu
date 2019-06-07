import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import history from '~/history';
import routes from '~/src/routes'
import { productImagePath }  from '~/src/helpers/routes';

import { Provider } from 'react-redux';
import store from '~/src/store';

//import DevTools from '~/src/containers/DevTools';

import CartContainer from '~/src/components/CartContainer'
import Header from '~/src/components/Header'
import FullScreen from "./src/components/Gallery/FullScreen";

const RouteWithSubroutes = (route, key) => (
  <Route key={key} {...route} />
);

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <CartContainer>
          <Router history={history}>
            <Header />

            <Switch>
              { routes.map( (route, key) => RouteWithSubroutes(route, key) ) }
            </Switch>

            <Route path={productImagePath()} component={FullScreen} />

          </Router>
        </CartContainer>
      </Provider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//ReactDOM.render(
//  <DevTools store={store} />,
//  document.getElementById('devtools')
//)