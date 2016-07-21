var express = require('express');
var router = express.Router();
var queries = require('../lib/queries')
/* GET users listing. */
router.get('/', function(req, res, next) {
  queries.getAllTrainers().then((resp) => {
  res.render('trainers/index', {trainers:resp});
  })
})
router.get('/:id/pokemon', (req, res, next) => {
  queries.getTrainerPokemonById(req.params.id).then((resp) => {
    res.render('trainers/pokemon', {pokemon:resp.rows})
  })
})

module.exports = router;
