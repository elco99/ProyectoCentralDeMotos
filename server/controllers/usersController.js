var user = require('../schemas/user');

exports.getUser = {
  handler: function(request, reply){
    var users = user.find({});
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
    return reply('ok');
  }
}

exports.updateUsers ={
  handler: function(request,reply){

    user.findById(request.payload.id,function(err,users){
      users.name = request.payload.name;
      users.username = request.payload.username;
      users.password = request.payload.password;
      users.email = request.payload.email;
      users.type = request.payload.type;
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

exports.getLogin = {
  handler: function(request, reply){
    //
    var users = user.find({username:request.payload.username, password:request.payload.password});
    console.log(users);
    return reply(users);
  }
}
