import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../../common/routes';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green100, green500, green700} from 'material-ui/styles/colors';

export default (req , store, context) => {

    const muiTheme = getMuiTheme({
        palette: {
          primary1Color: green500,
          primary2Color: green700,
          primary3Color: green100,
        },
      }, {
        avatar: {
          borderColor: null,
        },
        userAgent: req.headers['user-agent'] || 'all',
      });

    const content = renderToString(
        <MuiThemeProvider muiTheme={muiTheme}>
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
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