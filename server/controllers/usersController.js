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
      var newUser = new user({
        name: request.payload.name,
        username: request.payload.username,
        password: SHA3(request.payload.password),
        email: request.payload.email,
        scope: request.payload.scope,
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
