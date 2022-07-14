var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')

const apiModel = require('../models/api');

var mongoose = require('mongoose');

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if (token === 'null') {
    return res.status(401).send('Unauthorized request')
  }
  let payload = jwt.verify(token, 'secretKey')
  if (!payload) {
    return res.status(401).send('Unauthorized request')
  }
  req.userId = payload.subject
  next()
}
/* GET home page. */
router.get('/', (req, res) => {
  res.send('from API route')
});

/* Register page. */
router.post('/register', (req, res) => {
  let email = req.body.email;
  let password = req.body.password
  let apiObj = new apiModel({
    email: email,
    password: password
  });
  apiObj.save(function (err, apiObj) {
    if (err) {
      res.send('cant add user');
    }
    else {
      let payload = { subject: apiObj._id }
      let token = jwt.sign(payload, 'secretKey')
      res.send({ status: 200, message: 'user added', send: { token } });
    }
  })
});

router.post('/login', (req, res) => {
  let email = req.body.email;
  let password = req.body.password
  let apiObj = new apiModel({
    email: email,
    password: password
  });
  apiModel.findOne({ email: apiObj.email }, (error, user) => {
    if (error) {
      console.log(error)
    }
    else if (!user) {
      res.status(401).send('Invalid user')
    }
    else if (user.password !== apiObj.password) {
      res.status(401).send('Invalid password')
    }
    else {
      let payload = { subject: apiObj._id }
      let token = jwt.sign(payload, 'secretKey')
      res.send({ status: 200, message: 'user added', send: { token } });
      //res.status(200).send(user)
    }
  })
})

router.get('/events', (_req,res) => {
  let events = [
    {
      "_id": "1",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    }
  ]
  res.json(events)
})

router.get('/special',verifyToken, (_req, res) => {
  let specialEvents = [
    {
      "_id": "1",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    }
  ]
  res.json(specialEvents)
})

module.exports = router;