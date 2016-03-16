var express = require('express');
var app = express();
var port = 3000;

var middleware = {
	requireAuthentication: function (request, response, next) {
		console.log('Private route hit!');
		next();
	},
	logger: function (request, response, next) {
		// 
		console.log('Request: ' + new Date().toString() + ' ' + request.method + ' ' + request.originalUrl);
		next();
	}
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (request, response) {
	response.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
	console.log('Express server started on port: ' + port + '!');
	console.log('Currently running...')
});

