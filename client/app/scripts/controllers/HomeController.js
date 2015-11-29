angular.module('AngularScaffold.Controllers')
 .controller('HomeController', ['$scope', 'HomeService','$state', function ($scope, HomeService,$state) {
	$scope.users = [];
	$scope.user = {};
	$scope.search_user = {};
  $scope.search_bar ={};
  $scope.products = [];
  $scope.producto = {};

  $scope.search=[];
  $scope.prueba = {};

	$scope.show_login = true;
  $scope.show_logout = false;
  $scope.show_shopping_cart = false;
  $scope.show_admin = true;
  $scope.show_bill= false;

  if($state.params.content){
    $scope.prueba = $state.params.content.searched_value;
    $scope.imageName = $state.params.content.image;
    $scope.name = $state.params.content.name;
    $scope.description = $state.params.content.description;
    $scope.price = $state.params.content.price;
  }

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

  $scope.goGestionUser = function(){
    $state.go('adminUsers');
  };

  $scope.Login = function(){
  	HomeService.GetLogin($scope.user).then(function(response){
  	$scope.users = response.data;
	}).catch(function(err){
	    alert(err + "     " + "Error login to users");
		});
	}

	/*$scope.getUsers = function(){
		HomeService.GetUsers().then(function(response){
		$scope.users = response.data;
	}).catch(function(err){
		alert('Error fetching users')
		});
	};*/

  $scope.loadSearched=function(){
    HomeService.searchByTag($scope.prueba).then(function(response){
      $scope.search = response.data;
    }).catch(function(err){
      alert('Error fetching product')
    });
  };

  $scope.goDetail = function(image, name, description, price){
    $state.go('details', {content:
      {image: image,
      name: name,
      description:description,
      price:price}
    });
  };

  $scope.searchByTags=function(searched_value){
      $state.go('service',{content:{searched_value:searched_value}},{ reload: true });
  };

	/*$scope.postUsers = function(){
		HomeService.PostUsers($scope.user).then(function(response){
	    alert("Posted to /users");
	}).catch(function(err){
	    alert("Error posting to users");
		});
	}*/
}]);
