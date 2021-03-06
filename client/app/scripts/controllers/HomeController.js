angular.module('AngularScaffold.Controllers')
  .controller('HomeController', ['HomeService', '$scope', '$rootScope','$state', '$sessionStorage',  function (HomeService, $scope, $rootScope,$state, $sessionStorage) {
    $scope.SessionCurrentUser = {};
    $scope.$sessionStorage = $sessionStorage;
    $scope.users = [];
  	$scope.user = {};
  	$scope.search_user = {};
    $scope.search_bar ={};
    $scope.products = [];
    $scope.producto = {};

    $scope.search=[];
    $scope.prueba = {};
  	/*$scope.show_login = true;
    $scope.show_logout = false;
    $scope.show_shopping_cart = false;
    $scope.show_bill= false;*/

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

  $scope.goFactura = function(){
    $state.go('factura');
  }

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
    $scope.logout = function(){
      HomeService.Logout().then(function(response){
        alert('logged out correctly');
        $sessionStorage.$reset();
      }).catch(function(err){
        alert(err.data.error + " " + err.data.message);
      })
    }

    $scope.login = function(){
      HomeService.Login($scope.user).then(function(response){
        $sessionStorage.currentUser = response.data;
        $scope.SessionCurrentUser = {};
        console.log(  $scope.SessionCurrentUsers)
      }).catch(function(err){
        alert(err.data.error + " " + err.data.message);
      });
    }

    $scope.loadSearched=function(){
      HomeService.searchByTag($scope.prueba).then(function(response){
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
