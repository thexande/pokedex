var express = require('express');
var router = express.Router();
var queries = require('../lib/queries')

router.get('/', (req, res, next) => {
  queries.getAllPokemon().then((resp) => {
     res.render('pokemon/index', {pokemon:resp});
  })
})

module.exports = router;
