const sequelize = require('../config/connection');
const { User, PokemonUser } = require('../models');
const seedUser = require('./userData.js');
// const seedCollection = require('./collectionData.js')

// const seedPokemon = require('./pokemon.js');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });
  
  await seedUser();
  // await seedPokemon();

  process.exit(0);
};

seedDatabase();


