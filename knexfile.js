module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/pokemon_development'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};