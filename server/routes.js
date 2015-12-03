var homeController = require('./controllers/homeController');
var productsController = require('./controllers/productsController');
var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');

exports.endpoints = [
	{method: 'GET', path: '/{param*}', config: homeController.home},
	{method: 'GET', path: '/v1/users', config: usersController.getUser},
	{method: 'POST', path: '/v1/user', config: usersController.createUser},
	{method: 'POST', path: '/v1/product/add', config: productsController.CreateProduct},
	{method: 'GET', path: '/v1/product/get', config: productsController.getProduct},
	{method: 'GET', path: '/v1/product', config: productsController.getAllProducts},
	{method: 'PUT', path: '/v1/product/update', config: productsController.updateProduct},
	{method: 'PUT', path: '/v1/user/update', config: usersController.updateUsers},
	{method: 'POST', path: '/v1/product/search', config: productsController.SearchByTags},
	{method: 'GET', path: '/v1/product/fetch', config: productsController.gettingFetch},
                         {method: 'POST', path: '/v1/factura/add', config: productsController.SearchByCode},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout},
                         {method: 'GET', path: '/v1/facturar', config: productsController.facturacion},
                         {method: 'PUT', path: '/v1/facturar/update', config: productsController.UpdateSoldProducts},
                         {method: 'PUT', path: '/v1/facturar/updateState', config: productsController.UpdateStateProducts}
];
