var express = require('express');
var router = express.Router();
var queries = require('../lib/queries')

router.get('/', (req, res, next) => {
  queries.getAllPokemon().then((allPokemon) => {
    var pokemonInGym = allPokemon.filter((val) => {
          return val.in_gym == true        
    })
    if(pokemonInGym.length < 2){
      res.render('gym/add')
    }    
    res.render('gym', {
      pokemon: allPokemon,
      pokemonInGym: pokemonInGym
    })
  })
})

router.post('/updateGymPokemon', (req, res, next) => {
  // set old to false
// res.json(req.body)
  queries.updatePokemon({
    id: parseInt(req.body.oldPokeId),
    in_gym: false
  }).then((resp) => {
    // update new pokemon 1 to in gym
    console.log('old poke set to false');
    
    queries.updatePokemon({
      id: parseInt(req.body.newPokeId),
      in_gym: true
    }).then((resp) => {
      console.log('new poke set to true');
      // pokemon updated. send update pokemon 1 information
      queries.getPokemonById(req.body.newPokeId).then((resp) => {
        res.json(resp)
      })
    })
  })
  // set new to true
})

router.post('/', (req, res, next) => {
  if(parseInt(req.body.pokemon_1_cp) > parseInt(req.body.pokemon_2_cp)){
    // player 1 win
    var winner = req.body.pokemon_1_name
  }else if(parseInt(req.body.pokemon_1_cp) == parseInt(req.body.pokemon_2_cp)){
    // tie
    var winner = "tie"
  } else {
    // player 2 win
    var winner = req.body.pokemon_2_name
  }
  res.render('gym/results',  {winner: winner})
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
            res.redirect('/gym')
          }else{
          res.redirect('/pokemon')
          }
        })
      })
    })

})
module.exports = router