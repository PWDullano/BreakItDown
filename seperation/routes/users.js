var express = require('express');
var router = express.Router();
var knex = require("../db/knex");

var Users = function(){
  return knex('users')
}

router.get('/', function(req, res, next) {
  Users().select().then(function(payload){
    res.json(payload);
  })
});

module.exports = router;
