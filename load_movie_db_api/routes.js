const moviesHttpRequest = require('./moviesHttpRequest');

module.exports.getMovies = function (req, res) {
	let options = {
		"method": "GET",
	  	"hostname": "api.themoviedb.org",
	  	"port": null,
	  	"path": "/3/movie/top_rated?language=en-US&api_key=4bef8838c2fd078bd13d7127d8dedcd4&page=1",
	  	"headers": {}
	};
	let json = new moviesHttpRequest(options, res);
}
