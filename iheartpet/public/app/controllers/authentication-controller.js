
var User = require('../../../dataset/users')
var mongoose = require('mongoose')

module.exports.signup = function(req, res){
	//console.log(req.body);

	var user = new User(req.body);
	user.save();

	res.json(req.body);
}