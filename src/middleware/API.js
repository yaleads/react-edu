import request from 'superagent';

import { stringify  } from 'qs';
import { assign, pick } from 'lodash/object';

import { API_ROOT } from 'constants/API';

function APICall({ method, query}) {
  return new Promise((resolve, reject) => {
    let r = request[method.toLowerCase()](`${API_ROOT}`);

    if (query)
      r.query(stringify(query));

    r.end((error, data) => (
      error ?
        reject(error)
        : resolve(data.body)
    )
    );
  });
}

export const API_CALL = 'API_CALL';

const nextAction = (action, data) => (
  assign({}, action, data, { [API_CALL]: undefined })
);

export default store => next => action => {
  if (!action[API_CALL]) return next(action);

  const [requestType, successType, errorType] = action[API_CALL].types;

  next(nextAction(action, {type: requestType}));

  const promise = APICall(
    pick(action[API_CALL], ['method', 'query'])
  );

  promise.then(
    (response) => next(
      nextAction(action, {response, type: successType})
    ),
    (error) => next(
      nextAction(action, {error, type: errorType})
    )
  );

  return promise;
};