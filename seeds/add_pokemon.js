exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('pokemon').del(),

    // Inserts seed entries
    knex('pokemon').insert({id: 1, name: "Bulbasaur", CP: 15, in_gym: false }),
    knex('pokemon').insert({id: 2, name: "Ivysaur", CP: 60, in_gym: false}),
    knex('pokemon').insert({id: 3, name: "Venasaur", CP: 100, in_gym: false}),
    knex('pokemon').insert({id: 4, name: "Charmander", CP: 15, in_gym: false}),
    knex('pokemon').insert({id: 5, name: "Charmeleon", CP: 55, in_gym: false}),
    knex('pokemon').insert({id: 6, name: "Charizard", CP: 99, in_gym: false}),
    knex('pokemon').insert({id: 7, name: "Squirtle", CP: 19, in_gym: false}),
    knex('pokemon').insert({id: 8, name: "Wartortle", CP: 22, in_gym: false}),
    knex('pokemon').insert({id: 9, name: "Blastoise", CP: 111, in_gym: false}),
    knex('pokemon').insert({id: 10, name: "Caterpie", CP: 5, in_gym: false}),
    knex('pokemon').insert({id: 11, name: "Metapod", CP: 18, in_gym: false}),
    knex('pokemon').insert({id: 12, name: "Butterfree", CP: 104, in_gym: false})
  );
};
