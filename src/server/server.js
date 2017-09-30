import path from 'path';
import http from 'http';
import express from 'express';
import httpProxy from 'http-proxy';
import compression from 'compression';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();
const proxy = httpProxy.createProxyServer();
const server = new http.Server(app);

app.use(compression());
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../..', 'dist')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* istanbul ignore next */
if (__DEVELOPMENT__) { // eslint-disable-line no-undef
    app.all('/dist/*', (req, res) => {
        proxy.web(req, res, {
            target: 'http://localhost:8080',
        });
    });
}

const setRoutes = (routes) => {
    routes.forEach(route => {
        require(route).default(app);
    });
};

const routes = ['./routes/api/landing-page', './routes/server-side-rendering/ssrHandler'];

setRoutes(routes);

/* istanbul ignore next */
server.listen('3000', (err) => {
    if (err) {
        console.error(err); // eslint-disable-line no-console
    }
    console.info('==> 💻  Open http://%s:%s in a browser to view the app.', 'localhost', '3000'); // eslint-disable-line no-console
});

const io = require('socket.io')(server);


io.on('connection', (socket) => {
    console.log(`A user connected ! The total user count is ${Object.keys(io.sockets.sockets).length}`);
    socket.on('disconnect', () => {

    });
    //catching the emit to we can broadcast count to all users
    socket.broadcast.on('voteAdded', (response) => {
        socket.broadcast.emit('voteCountChanged', response);
    });
});

export default app;


