import { renderToString } from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import React from 'react';
import { routes } from '../../config/index';
import configureStore from '../../../store/configureStore';

const reduxState = {};

export default function (app) {
  app.get('*', (req, res) => {
    let context = {};
    const store = configureStore({});
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    );
    res.render('index', { html, reduxState });
  });
}

