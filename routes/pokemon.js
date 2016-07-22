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
    // create route
  console.log(req.body)
  // res.sendStatus(200)
    queries.createPokemon(req.body).then((resp) => {
      res.render('/pokemon/index')
    })
  })
router.get('/:id/edit', (req, res, next) => {
  queries.getPokemonById(req.params.id).then((resp) => {
    res.render('pokemon/edit', {pokemon:resp[0]})
  })
})
router.route('/new')
  .get((req, res, next) => {
    res.render('pokemon/new')
  })

module.exports = router;
