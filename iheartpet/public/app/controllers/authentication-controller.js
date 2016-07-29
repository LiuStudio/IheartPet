
var User = require('../../../dataset/users')
var mongoose = require('mongoose')

module.exports.signup = function(req, res){
	//console.log(req.body);

	mongoose.connect('mongodb://localhost:27017/iheartpet');
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));


	var user = new User(req.body);

	//method1:
	User.create(req.body, function(err, user){
		if (err) {console.log(err)};
		console.log("user saved to db");

		User.find({}, function (err, user){
			if (err) {console.log(err)};

			console.log(user);
			//db.collection('users').drop(function(){ db.close(); })
			db.close();
		})
		
	})

	//method2:
/*	user.save(function (err){
		if (err) throw err;
		console.log("user saved to db");
	});
*/
	res.json(req.body);
}