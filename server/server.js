var hapi = require('hapi');
var inert = require('inert');
var mongoose = require('mongoose');
var routes = require('./routes');
var auth = require('hapi-auth-cookie');

var server = new hapi.Server();
server.connection({
    host: '0.0.0.0',
    port: +process.env.PORT | 8000,
});

mongoose.connect(process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL || 'mongodb://localhost/user');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

server.register([inert, auth], function(err){

  server.auth.strategy('session', 'cookie', {
    password: 'secretpasswordforencryption',
    cookie: 'this-is-a-cookie-doooooh',
    ttl: 24 * 60 * 60 * 1000, // Set session to 1 day
    isSecure: false
  });

	server.route(routes.endpoints);

	server.start(function () {
	    console.log('Server running at:', server.info.uri);
	});
});
