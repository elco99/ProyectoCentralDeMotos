angular.module('AngularScaffold.Controllers')
 .controller('FacturaController', ['$scope', 'HomeService','$state', function ($scope, HomeService,$state) {
  $scope.products = [];
  $scope.producto = {};
  $scope.item = {};

	$scope.show_login = true;
  $scope.show_logout = false;
  $scope.show_shopping_cart = false;
  $scope.show_admin = true;
  $scope.show_bill= false;

  $scope.deleteItem = function(product){
     $scope.products.splice($scope.products.indexOf(product),1);
  };

  $scope.addItem = function(){
    HomeService.AddItem($scope.item.ingreso).then(function(response){
      
      var cont = -1;
      for (var i = $scope.products.length-1; i>= 0; i--) {
        if (response.data[0].code === $scope.products[i].code) {
          cont = i;
          break;
        };
      };
      
      if (cont >= 0) {
        $scope.products[cont].currentAmount++;
      }else{
        $scope.products.push(response.data[0]);
      }

     
    }).catch(function(err){
      alert('Error fetching products')
    });
  };

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
