var express = require('express');
var router = express.Router();
var knex = require("../db/knex");

var Moves = function(){
  return knex('moves')
}

/* GET home page. */
router.get('/', function(req, res, next) {
  Moves().select().then(function(payload){
    res.json(payload);
  })
});

module.exports = router;
