var express = require('express');
var router = express.Router();
var queries = require('../lib/queries')

router.get('/', (req, res, next) => {
  res.render('gym')
})

router.get('/:id/add', (req, res, next) => {
    queries.getPokemonById(req.params.id).then((resp) => {
      queries.updatePokemon({
        id: resp[0].id,
        in_gym: !resp[0].in_gym
      }).then((resp) => {
         // check if there are 2 pokemon in the gym
        queries.getAllPokemon().then((resp) => {
          var pokemonInGym = resp.filter((val) => {
            return val.in_gym == true
          })
          console.log(pokemonInGym)
          if(pokemonInGym.length >= 2){
            res.render('gym', {pokemonInGym: pokemonInGym})
          }else{
          res.redirect('/pokemon')
          }
        })
      })
    })

})
module.exports = router