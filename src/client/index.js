import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '../common/routes';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import reducers from './reducers';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const axiosInstance = axios.create({
    baseURL: '/api'
});

const store = createStore(reducers, window.INITIAL_STATE,
    applyMiddleware(thunk.withExtraArgument(axiosInstance)));

ReactDOM.hydrate(
    <MuiThemeProvider>
    <Provider store={store}>
        <BrowserRouter>
            <div> {renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>
    </MuiThemeProvider>,
    document.querySelector('#root')
);
