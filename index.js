import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';

import CatalogPage from "~/src/components/CatalogPage";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <h1 className={'mt-3'}>React App</h1>
        <hr />
        <CatalogPage />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);