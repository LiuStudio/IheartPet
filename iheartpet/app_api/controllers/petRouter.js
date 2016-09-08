var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/iheartpet');




/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express!!!' });
    res.sendFile('pet.html')

});

module.exports = router;
