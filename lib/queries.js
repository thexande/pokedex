var db = require('../config/db')
module.exports = {
  createPokemon: (pokemon) => {
    return db('pokemon').create(pokemon)
  },
  getAllPokemon: () => {
    return db('pokemon')
  },
  getAllTrainers: () => {
    return db('trainers')
  },
  getTrainerById: (id) => {
    return db('trainers').where('id', id)
  },
  getPokemonById: (id) => {
    return db('pokemon').where('id', id)
  },
  getTrainerPokemonById: (id) => {
    return db.raw(`select pokemon.name as pokemon_name, trainers.name as trainer_name 
                  FROM pokemon 
                  LEFT JOIN trainers ON trainers.id = pokemon.trainer_id
                  WHERE trainers.id = ${id}
                  `)
  }
}