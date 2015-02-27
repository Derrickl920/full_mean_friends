// this is our friends.js file located at /server/controllers/friends.js
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

// note the immediate function and the object that is returned
module.exports = (function() {
  return {
    show: function(req, res) {
  		Friend.find({}, function(err, results) {
		    if(err) {
		      console.log(err);
		    } else {
		      res.json(results);
		    }
  		})
  	},
  	newfriend: function(req, res){
  		console.log('kldsjflks', req.body);
  		var friend = new Friend(req.body);
  		friend.save(function(err){
  			if(err){
  				console.log(err);
  			}else{
  				res.json({result:'we did it'});
  			}
  		})
  	},
  	removeFriend: function(req, res) {
  		Friend.remove({_id: req.body._id}, function(err, result) {
    		if(!err) {
    			Friend.find({}, function(err, result) {
    				if(err) {
				      console.log(err);
				    } else {
				      res.json(result);
				    }
    			});
    		}
    	});
  	}
}
})();