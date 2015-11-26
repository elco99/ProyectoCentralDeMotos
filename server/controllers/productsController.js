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


exports.SearchByTags ={
  handler: function(request, reply){
    var products = product.find({tags : request.payload.tags });
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
      var index = products.tags.indexOf(products.name);
      if(index >= 0){
        request.payload.tags.splice(index,1);
      }
      products.name = request.payload.name;
      products.description = request.payload.description;
      request.payload.tags.push(request.payload.name);
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
      })
    })

  //var products = product.findOneAndUpdate({_id: request.payload._id})
  }
}

exports.CreateProduct = {
  handler: function(request, reply){
    var tagArray = request.payload.tags.split(",");
    tagArray.push(request.payload.name);
    var newProduct = new product({
      image: request .payload.image,
      name: request.payload.name,
      description: request.payload.description,
      tags: tagArray,
      price: request.payload.price,
      quantity: request.payload.quantity,
      state: true
    });
    newProduct.save();
    return reply('ok');
  }
}
