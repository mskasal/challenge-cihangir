import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './store';
import App from './components/App';

const initialState = {};

// creating store
const store = configureStore(initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') // eslint-disable-line no-undef
);
