/* eslint no-undef : 0, no-underscore-dangle: 0*/

import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import createRoutes from './routes/index';
import { saveState } from './store/utils/localStorage';

let state = {};

if (window.__REDUX_STATE__) {
  try {
    state = JSON.parse(unescape(__REDUX_STATE__));
  } // eslint-disable-line brace-style
  catch (e) {
    console.log('error'); // eslint-disable-line no-console
  }
}

const store = configureStore(state);
store.subscribe(() => {
  saveState(store.getState());
});
ReactDOM.hydrate(( // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
      {createRoutes(browserHistory)}
  </Provider>), document.getElementById('main'));

