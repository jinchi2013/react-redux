/**
 * Created by chi on 7/26/16.
 */
const webpack = require('webpack');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config');

const app = new(require('express'))();
const port = 3000;

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.listen(port, (error)=>{
    if(error){
        console.error(error);
    } else {
        console.info("==> Listening on port %s, Open Up http://localhost:%s/ in your browser. ", port, port)
    }
});

