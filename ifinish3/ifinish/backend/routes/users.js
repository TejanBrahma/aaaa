var express = require('express');
var router = express.Router();

const usersModel = require ('../models/users');

var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/users', function(req, res, next) {

  let usersObj = new usersModel({
    email : 'a@a.com',
    password : 'a'
  });
  usersObj.save(function(err,usersObj){
    if (err){
      res.send('cant add user');
    }
    else {
      res.send({status:200,message:'user added', usersDetails:usersObj});
    }
  })
  
});

module.exports = router;
