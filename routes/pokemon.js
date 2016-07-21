var express = require('express');
var router = express.Router();
var queries = require('../lib/queries')

router.route('/') 
  .get((req, res, next) => {
  queries.getAllPokemon().then((resp) => {
     res.render('pokemon/index', {pokemon:resp});
  })
})
  .post((req, res, next) => {

  })

router.route('/new')
  .get((req, res, next) => {

  })

module.exports = router;
