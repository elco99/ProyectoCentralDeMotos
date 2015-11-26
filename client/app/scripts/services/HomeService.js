angular.module('AngularScaffold.Services').factory('HomeService', ['$http',
	function($http){
		return {
			GetUsers: function(){
				return $http.get("v1/users");
			},
			PostUsers: function(payload){
				return $http.post("v1/user", payload);
			},

			GetLogin: function(payload){
				return $http.post('v1/user/login',payload);
			},
			GetAllProduct: function(){
				return $http.get('v1/product');
			},
			fetchGet: function(){
				return $http.get('v1/product/fetch');
			},
			SaveChanges: function(payload){
				return $http.put('v1/product/update',payload);
			},
			AddProduct: function(payload){
				return $http.post('v1/product/add',payload);
			}

	    };
}]);
