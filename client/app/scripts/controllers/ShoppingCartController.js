angular.module('AngularScaffold.Controllers')
  .controller('HomeController', ['HomeService', '$scope', '$rootScope','$state', '$sessionStorage',  function (HomeService, $scope, $rootScope,$state, $sessionStorage) {
    $scope.SessionCurrentUser = {};
    $scope.users = [];
  	$scope.user = {};
    $scope.products = [];
    $scope.producto = {};


    $scope.load_shopping_cart=function(){
      HomeService.searchByTag($scope.SessionCurrentUser).then(function(response){
        $scope.search = response.data;
      if ($scope.search.length === 0) {
        alert("No existe")
      };
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
    $scope.isAdmin = function(){
      console.log($sessionStorage.currentUser)
      return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('admin') > -1;
    }

    $scope.isVendedor = function(){
      return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('vendedor') > -1;
    }

    $scope.isCliente = function(){
      return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('cliente') > -1;
    }
    $scope.isLogged= function(){
      console.log($scope.$sessionStorage);
      return $scope.$sessionStorage.currentUser;
    }
  }]);
