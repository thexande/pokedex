var db = require('../config/db')
module.exports = {
  createPokemon: (pokemon) => {
    return db('pokemon').insert(pokemon)
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
    return db.raw(`SELECT pokemon.name AS pokemon_name,
                          pokemon.id AS id, 
                          trainers.name AS trainer_name 
                            FROM pokemon 
                            LEFT JOIN trainers ON trainers.id = pokemon.trainer_id
                            WHERE trainers.id = ${id}
                  `)
  },
  updatePokemon: (pokemon) => {
    return db('pokemon').where('id', pokemon.id).update(pokemon)
  }
}