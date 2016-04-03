var express = require('express');
var router = express.Router();
var knex = require("../db/knex");

var Stripes = function(){
  return knex('stripes')
}

router.get('/', function(req, res, next) {
  Stripes().select().then(function(payload){
    res.json(payload);
  })
});

module.exports = router;
