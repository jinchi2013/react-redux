"use strict";
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
const moviesHttpRequest = require('./moviesHttpRequest');

const app = new (require('express'))();
const port = 8080;

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/movies', (req, res) => {
	let options = {
		"method": "GET",
	  	"hostname": "api.themoviedb.org",
	  	"port": null,
	  	"path": "/3/movie/top_rated?language=en-US&api_key=4bef8838c2fd078bd13d7127d8dedcd4&page=1",
	  	"headers": {}
	};
	let json = new moviesHttpRequest(options, res);
})

app.listen(port, (error) => {
    if(error) {
        console.log(error);
    } else {
        console.info(`===> Listening on port %s. Open up http://localhost:%s/ inyou browser`, port, port);
    }
});