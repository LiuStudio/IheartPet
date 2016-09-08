var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var auth = function(req, res, next){
  console.log(req.headers);
  if (!req.signedCookies.user){
  var authHeader = req.headers.authorization;
  if (!authHeader){
    var err = new Error('Your are not autheticated!');
    err.status = 401;
    next(err);
    return;
  }
  var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');
  var user = auth[0];
  var pass = auth[1];

  if (user == 'admin' && pass=='password'){
  	res.cookie('user','admin', {signed:true});
    next();//authorized
  }else{
    var err = new Error('Your are not authenticated!');
    err.status = 401;
    next(err);
  }
 }
else{
	if(req.signedCookies.user === 'admin'){
		console.log(req.signedCookies);
		next();
	}
	else{
		var err = new Error('Your are not authenticated!');
		err.status = 401;
		next(err);

	}

}

}

module.exports = auth;