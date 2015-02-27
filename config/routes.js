  // This is our routes.js file located in /config/routes.js
  // This is where we will define all of our routing rules!

var friends = require('./../server/controllers/friends.js');

  // We will have to require this in the server.js file (and pass it app!)
  module.exports = function(app) {
    app.get('/friends', function(req, res) {
		friends.show(req, res);
    });

    app.post('/addfriend', function(req, res){
    	console.log('ldjflksjd', req.body);
    	friends.newfriend(req, res);
    });

    app.post('/deleteFriend', function(req, res){
    	console.log(req.body);
    	friends.removeFriend(req, res);
    })



  }