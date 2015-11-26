var app = angular.module('AngularScaffold', ['ui.router', 'AngularScaffold.Services', 'AngularScaffold.Controllers']);

angular.module('AngularScaffold.Controllers', []);
angular.module('AngularScaffold.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider,$scope) {
	$urlRouterProvider.otherwise('home');
	$stateProvider
        .state('home', {
            url: '/home',
            params:{content:undefined},
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
				.state('services', {
						url: '/services',
						templateUrl: 'views/services.html',
						params:{content:undefined},
						controller: 'HomeController',
				})
				.state('about', {
						url: '/about',
						params:{content:undefined},
						templateUrl: 'views/about.html',
						controller: 'HomeController'
				})
				.state('products', {
            url: '/AddProducts',
            params:{content:undefined},
            templateUrl: 'views/AddProduct.html',
            controller: 'CatalogController'
        })
        .state('details', {
            url: '/details/:id',
            templateUrl: 'views/detailProduct.html',
						controller: 'CatalogController'
        })
				.state('contact', {
						url: '/contact',
						params:{content:undefined},
						templateUrl: 'views/contact.html',
						controller: 'HomeController'
				});
}])
