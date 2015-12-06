var user = require('../schemas/user');
var SHA3 = require("crypto-js/sha3");
var boom = require('Boom');



exports.getUser = {
  auth: {
    mode:'try',
    strategy:'session'
  },
  handler: function(request, reply){
    var users = user.find({});
    reply(users);
  }
}

exports.addToCart = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['cliente']
  },
  handler: function(request,reply){
      var userc = user.findOne({username : request.payload.current_user.username},function(err,users){
        users.name = users.name;
        users.username = users.username;
        users.password = users.password;
        users.email = users.email;
        users.scope = users.scope;
        if (!users.state) {
          users.state = false;
        }else{
          users.state = true;
        };
        var cart_array_code = users.shopping_cart_code;
        var cart_array_amount = users.shopping_cart_amount;
        cart_array_code.push(request.payload.item.code);
        cart_array_amount.push(request.payload.item.currentAmount);
        users.shopping_cart_code = cart_array_code;
        users.shopping_cart_amount = cart_array_amount;
        console.log(users+"\n");
        users.save(function(err){
          if(err) throw err;
        })
        return reply("El articulo se agrego exitosamente")
      });
    /*  user.find({username : request.payload.current_user.username},function(err,users){
        users.name = request.payload.name;
        users.username = request.payload.username;
        users.password = SHA3(request.payload.password);
        users.email = request.payload.email;
        users.scope = request.payload.scope;
        if (request.payload.state != "true") {
          users.state = false;
        }else{
          users.state = true;
        };

        users.save(function(err){
          if(err) throw err;
        })
      })*/
  }
}


exports.updateUsers ={
    auth: {
      mode:'try',
      strategy:'session',
      scope: ['admin']
    },
  handler: function(request,reply){
    user.findById(request.payload.id,function(err,users){
      users.name = request.payload.name;
      users.username = request.payload.username;
      users.password = SHA3(request.payload.password);
      users.email = request.payload.email;
      users.scope = request.payload.scope;
      if (request.payload.state != "true") {
        users.state = false;
      }else{
        users.state = true;
      };

      users.save(function(err){
        if(err) throw err;
      })
    })

  }
}


exports.createUser = {
    auth: {
      mode:'required',
      strategy:'session',
      scope: ['admin']
    },
    handler: function(request, reply) {
      var emptyArray = [];
      var newUser = new user({
        name: request.payload.name,
        username: request.payload.username,
        password: SHA3(request.payload.password),
        email: request.payload.email,
        scope: request.payload.scope,
        shopping_cart_code: emptyArray,
        shopping_cart_amount: emptyArray,
        state: true
      });
       newUser.save(function (err) {
         if(err){
          return reply(boom.notAcceptable('Username must be unique: ' + err));
         }else{
           return reply('ok');
         };
      });
    }
  };
