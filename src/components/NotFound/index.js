import React from 'react';
import Helmet from "react-helmet";

const NotFound = () => (
  <div className='container'>
    <Helmet>
      <title>404</title>
      <meta name="description" content='Page not found' />
    </Helmet>

    <h1 className={'mt-3'}>404</h1>
    <hr />

    <p>Can't find such page</p>
  </div>
);

export default NotFound;