const sequelize = require('../config/connection');
const seedUser = require('./userData.js');
const seedPokemonUser = require('./pokemonUserData.js');
const seedPokemon = require('./pokemonData.js');
// const seedCollection = require('./collectionData.js')

// const seedPokemon = require('./pokemon.js');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedPokemon();
  
  await seedUser();
  
  await seedPokemonUser();

  process.exit(0);
};

seedDatabase();


