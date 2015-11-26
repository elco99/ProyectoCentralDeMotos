var homeController = require('./controllers/homeController');
var productsController = require('./controllers/productsController');
var usersController = require('./controllers/usersController');

exports.endpoints = [{method: 'GET', path: '/{param*}', config: homeController.home},
					{method: 'GET', path: '/v1/users', config: usersController.getUser},
					{method: 'POST', path: '/v1/user/login', config: usersController.getLogin},
          			{method: 'POST', path: '/v1/user', config: usersController.createUser},
          			{method: 'POST', path: '/v1/product/add', config: productsController.CreateProduct},
          			{method: 'GET', path: '/v1/product/get', config: productsController.getProduct},
          			{method: 'GET', path: '/v1/product', config: productsController.getAllProducts},
          			{method: 'PUT', path: '/v1/product/update', config: productsController.updateProduct},
          			{method: 'GET', path: '/v1/product/fetch', config: productsController.gettingFetch}];