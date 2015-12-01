angular.module('AngularScaffold.Services').factory('HomeService', ['$http',
	function($http){
		return {
			GetUsers: function(){
				return $http.get("v1/users");
			},
			PostUsers: function(payload){
				console.log(payload)
				return $http.post("v1/user", payload);
			},
			Logout: function(){
				return $http.get("v1/logout");
			},
			Login: function(payload){
				return $http.post("v1/login", payload);
			},
			GetAllProduct: function(){
				return $http.get('v1/product');
			},
			fetchGet: function(){
				return $http.get('v1/product/fetch');
			},
			AddItem: function(payload){
				return $http.post('v1/factura/add',payload);
			},
			SaveUserChanges: function(payload){
				return $http.put('v1/user/update',payload);
			},
			SaveChanges: function(payload){
				return $http.put('v1/product/update',payload);
			},
			AddProduct: function(payload){
				return $http.post('v1/product/add',payload);
			},
			Facturar: function(){
				return $http.get('v1/facturar',payload);
			},
			ChangeSoldProduct:function(payload){
				return $http.put('v1/facturar/update',payload);
			},
			searchByTag: function(payload){
				return $http.post('v1/product/search',payload);
			}

		};
}]);
