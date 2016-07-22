var express = require('express');
var router = express.Router();
var queries = require('../lib/queries')

router.get('/', (req, res, next) => {
  res.render('gym')
})

router.get('/:id/add', (req, res, next) => {
    queries.updatePokemon({
    id: req.params.id,
    in_gym: true
  }).then((resp) =>{
    res.redirect('/pokemon')
  })
})
module.exports = router