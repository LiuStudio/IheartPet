var express = require('express');
var router = express.Router();
//var users=require('users');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
    //db.users.find()
   // res.sendfile('user.html')
});

/*
// in course era can also use
router.route('/').get(function(req, res,next){

})
*/

/* GET users listing. */
router.get('/:userid', function(req, res, next) {
  res.send('respond with a resource' + req.params.userid);
    //db.users.find()
   // res.sendfile('user.html')
});

module.exports = router;
