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
    queries.createPokemon(req.body).then((resp) => {
      res.redirect('pokemon')
    })
  })
router.get('/:id/edit', (req, res, next) => {
  queries.getPokemonById(req.params.id).then((resp) => {
    res.render('pokemon/edit', {pokemon:resp[0]})
  })
})
router.get('/:id/delete', (req, res, next) => {
  // delete
})
router.post('/edit', (req, res, next) => {
  queries.updatePokemon(req.body).then((resp) => {
    res.redirect('/pokemon')
  })
})
router.route('/new')
  .get((req, res, next) => {
    res.render('pokemon/new')
  })

module.exports = router;
