var db = require('../config/db')
module.exports = {
  getAllPokemon: () => {
    return db('pokemon')
  }
}