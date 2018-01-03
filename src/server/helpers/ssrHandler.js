import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../../common/routes';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default (path, store, context) => {
    const content = renderToString(
        <MuiThemeProvider>
            <Provider store={store}>
                <StaticRouter location={path} context={context}>
                    <div>{renderRoutes(Routes)}</div>
                </StaticRouter>
            </Provider>
        </MuiThemeProvider>
    );

    const helmet = Helmet.renderStatic();

    return `
        <html>
            <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            <link rel="stylesheet" type="text/css" href="./main.css">

            </head>
                <body>
                    <div id="root">${content}</div>
                    <script>
                    window.INITIAL_STATE = ${serialize(store.getState())}
                  </script>
                    <script src="bundle.js"></script>
                </body>
            </html>
            `;
}