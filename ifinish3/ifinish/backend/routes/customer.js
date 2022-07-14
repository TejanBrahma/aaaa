var express = require('express');
var router = express.Router();

const customerModel = require ('../models/customer');

var mongoose = require('mongoose');

/* GET users listing. */
router.get('/list', function(req, res, next) {
  const userID = req.query.userID
  customerModel.findById(userID,function(err,customerListResponse){
    if (err){
      res.send('cant find user');
    }
    else {
      const recordCount = customerListResponse.length;
      res.send({status:200,recordCount : recordCount, result:customerListResponse});
    }
  })
});

/* POST users listing. */
router.post('/add', function(req, res, next) {
  let email = req.body.email;
  let password = req.body.password
  let customerObj = new customerModel({
    email : email,
    password : password
  });
  customerObj.save(function(err,customerObj){
    if (err){
      res.send('cant add user');
    }
    else {
      res.send({status:200,message:'user added', customerDetails:customerObj});
    }
  })
  
});

/* UPDATE users listing. */
router.put('/update', function(req, res, next) {
  const userID = req.body.userID;
  let customerObj =({
    email : email,
    password : password
  });
  customerModel.findByIdAndUpdate(userID,customerObj,function(err,customerListResponse){
    if (err){
      res.send('cant find user');
    }
    else {
      const recordCount = customerListResponse.length;
      res.send({status:200,recordCount : recordCount, result:customerListResponse});
    }
  })
});

module.exports = router;
