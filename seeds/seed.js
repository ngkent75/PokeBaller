const sequelize = require('../config/connection');

const seedUser = require('./userData.js');
const seedPokemonUser = require('./pokemonUserData.js');
const seedPokemon = require('./pokemonData.js');
// const seedPokemonUserWish = require('./pokemonUserWishData.js');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedPokemon();
  
  await seedUser();
  
  await seedPokemonUser();

  // await seedPokemonUserWish();

  process.exit(0);
};

seedDatabase();


