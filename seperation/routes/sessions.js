var express = require('express');
var router = express.Router();
var knex = require("../db/knex");

var Session = function(){
  return knex('sessions');
}

router.get("/", function(req,res){
   Session().select().then(function(payload){
     res.json(payload);
   });
});

router.get("/:id", function(req,res){
   Session().where({id: req.params.id}).then(function(payload){
     res.json(payload);
   });
});

router.post('/', function(req, res){
  Session().insert(req.body).then(function(){
    res.json({success:true})
  })
})

module.exports = router;
