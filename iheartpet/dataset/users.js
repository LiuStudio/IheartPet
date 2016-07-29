var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator')

var Schema = mongoose.Schema;


var userSchema = new Schema({
	username: {
		type: String,
		required: false,
		unique: true
	},		
	password: {
		type: String,
		required: true,
		unique: true,	
	},		
	email: {
		type: String,
		required: true,
		unique: true,
		index: true
	}
	
},{
	timestamps: true
});

userSchema.plugin(uniqueValidator);

var User = mongoose.model('User', userSchema);  // coursera says this should be Users
module.exports = User;