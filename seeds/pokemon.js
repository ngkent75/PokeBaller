const { Pokemon } = require('../models');

const pokemonData = [
  {
    name: 'April 20, 2021 07:00:00',
    type: 'June 21, 2021 17:00:00',
    notes: 'June 21, 2021 17:00:00',
  },
  {
    name: 'Sommer',
    starting_date: 'June 22, 2021 09:00:00',
    ending_date: 'September 22, 2021 22:00:00',
  },
  {
    name: 'Herfst',
    starting_date: 'September 23, 2021 08:30:00',
    ending_date: 'December 21, 2021 20:30:00',
  },
  {
    name: 'Invierno',
    starting_date: 'December 22, 2020 11:00:00',
    ending_date: 'March 19, 2021 19:00:00',
  },
];

const seedPokemon = () => Pokemon.bulkCreate(pokemonData);

module.exports = seedPokemon;