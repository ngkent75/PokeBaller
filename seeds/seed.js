const sequelize = require('../config/connection');
const { User, PokemonUser } = require('../models');
const seedUser = require('./userData.js');
const seedPokemonUser = require('./pokemonUserData.js');
// const seedCollection = require('./collectionData.js')

// const seedPokemon = require('./pokemon.js');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPokemonUser();

  process.exit(0);
};

seedDatabase();


