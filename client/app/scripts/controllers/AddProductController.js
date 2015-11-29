angular.module('AngularScaffold.Controllers')
 .controller('AddProductController', ['$scope', 'HomeService','$state', function ($scope, HomeService,$state) {
  $scope.products = [];
  $scope.producto = {};
  $scope.productoModif = {};

	$scope.show_login = true;
  $scope.show_logout = false;
  $scope.show_shopping_cart = false;
  $scope.show_admin = true;
  $scope.show_bill= false;

  $scope.show_modificar = function(product){
    $scope.productoModif.id = product._id;
    $scope.productoModif.image = product.image;
    $scope.productoModif.name = product.name;
    $scope.productoModif.description = product.description;
    $scope.productoModif.tags = product.tags;
    $scope.productoModif.price = product.price;
    $scope.productoModif.quantity = product.quantity;
    if (product.state == true) {
      $scope.productoModif.state = "true";
    }else{
      $scope.productoModif.state = "false";
    };

  };

  $scope.saveProductChanges = function(){
    HomeService.SaveChanges($scope.productoModif).then(function(response){
      $scope.products = response.data;

    }).catch(function(err){
    });
  };

  $scope.getFetch=function(){
    HomeService.fetchGet().then(function(response){
      $scope.products = response.data;
    }).catch(function(err){
      alert('Error fetching products')
    });
  };

  $scope.createProduct = function(){
    HomeService.AddProduct($scope.producto).then(function(response){
    $scope.products = response.data;
  }).catch(function(err){
      alert(err + "     " + "Error creating product");
    });
  }
}]);
