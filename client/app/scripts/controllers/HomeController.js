angular.module('AngularScaffold.Controllers')
 .controller('HomeController', ['$scope', 'HomeService','$state', function ($scope, HomeService,$state) {
	$scope.users = [];
	$scope.user = {};
	$scope.search_user = {};

  $scope.products = [];
  $scope.producto = {};


	$scope.show_login = true;
  $scope.show_logout = false;
  $scope.show_shopping_cart = false;
  $scope.show_admin = true;
  $scope.show_bill= false;


  $scope.goHome = function(){
    $state.go('home');
  };

  $scope.goService = function(){
      $state.go('services');
  };

  $scope.goAbout = function(){
  	$state.go('about');
  };
  $scope.goContact = function(){
  	$state.go('contact');
  };
  $scope.goGestionProductos = function(){
    $state.go('products');
  };

  $scope.Login = function(){
  	HomeService.GetLogin($scope.user).then(function(response){
  	$scope.users = response.data;
    console.log($scope.users);
	}).catch(function(err){
	    alert(err + "     " + "Error login to users");
		});
	}

	$scope.getUsers = function(){
		HomeService.GetUsers().then(function(response){
		$scope.users = response.data;
	}).catch(function(err){
		alert('Error fetching users')
		});
	};

	$scope.postUsers = function(){
		HomeService.PostUsers($scope.user).then(function(response){
	    alert("Posted to /users");
	}).catch(function(err){
	    alert("Error posting to users");
		});
	}
}]);