var user = require('../schemas/user');

exports.getUser = {
  handler: function(request, reply){
    var users = user.find({});
    alert(users.data);
    reply(users);
  }
}

exports.createUser = {
  handler: function(request, reply){
    var newUser = new user({
      name: request.payload.name,
      username: request.payload.username,
      password: request.payload.password,
      email: request.payload.email,
      type: request.payload.type,
      state: true
    });
    newUser.save();
    console.log('usuario creado');
    return reply('ok');
  }
}

exports.getLogin = {
  handler: function(request, reply){
    //
    var users = user.find({username:request.payload.username, password:request.payload.password});
    console.log(users);
    return reply(users);
  }
}
