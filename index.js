import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import history from '~/history';

import routes from '~/src/routes'
import CartContainer from '~/src/components/CartContainer'
import Header from '~/src/components/Header'

const RouteWithSubroutes = (route, key) => (
  <Route key={key} {...route} />
);

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CartContainer>
        <Router history={history}>
          <Header />

          <Switch>
            { routes.map( (route, key) => RouteWithSubroutes(route, key) ) }
          </Switch>
        </Router>
      </CartContainer>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);