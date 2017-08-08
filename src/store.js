import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import thunk from 'redux-thunk';

import reducers from './reducers';

export default function configureStore(initialState = { }) {
  const middlewares = [
    thunk
  ];

  let store = {};
  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  // DEVTOOL EXTENSION
  /* eslint-disable no-underscore-dangle, no-undef */
  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  /* eslint-enable */

  store = createStore(
    reducers,
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  return store;
}
