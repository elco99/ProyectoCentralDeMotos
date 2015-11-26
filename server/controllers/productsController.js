var product = require('../schemas/products');

exports.getProduct = {
  handler: function(request, reply){
    var products = product.find({});
    //alert(products.data);
    reply(products);
  }
}

exports.gettingFetch ={
  handler: function(request, reply){
    var products = product.find({});
    //console.log(products);
    reply(products);
  }
}

exports.getAllProducts = {
  handler: function(request, reply){
    var products = product.find({});
    //console.log(products);
    reply(products);
  }
}

exports.updateProduct ={
  handler: function(request,reply){
    //var products = product.update({_id: request.payload.id},{name: request.payload.name});
    product.findById(request.payload.id,function(err,products){

      products.image = request.payload.image;
      products.name = request.payload.name;
      products.description = request.payload.description;
      products.tags = request.payload.tags;
      products.price = request.payload.price;
      products.quantity = request.payload.quantity;
      if (request.payload.state != "true") {
        products.state = false;
      }else{
        products.state = true;
      };

      products.save(function(err){
        if(err) throw err;
        alert("YES")
      })
    })
    
  //var products = product.findOneAndUpdate({_id: request.payload._id})
  }
}

exports.CreateProduct = {
  handler: function(request, reply){
    var newProduct = new product({
      image: request .payload.image,
      name: request.payload.name,
      description: request.payload.description,
      tags: request.payload.tags,
      price: request.payload.price,
      quantity: request.payload.quantity,
      state: true
    });
    newProduct.save();
    console.log('producto creado');
    return reply('ok');
  }
}