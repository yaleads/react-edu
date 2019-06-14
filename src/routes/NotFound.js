import NotFound from 'components/NotFound';
import React from 'react';

export default {
  render: ({ staticContext }) => {
    if (staticContext) {
      staticContext.statusCode = 404;
    }

    return (<NotFound />);
  }
};