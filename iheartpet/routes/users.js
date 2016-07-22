var express = require('express');
var router = express.Router();
//var users=require('users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
    //db.users.find()
   // res.sendfile('user.html')
});

module.exports = router;
