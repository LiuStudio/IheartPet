var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var authenticationController = require('../public/app/controllers/authentication-controller')

/*
mongoose.connect('mongodb://localhost:27017/iheartpet');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
*/

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express!!!' });
    res.sendFile('index.html')
});

router.post('/api/user/signup', authenticationController.signup);

module.exports = router;
